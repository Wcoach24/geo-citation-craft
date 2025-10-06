import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const logStep = (step: string, details?: any) => {
  console.log(`[DOWNLOAD-CONTENT] ${step}`, details ? JSON.stringify(details) : '');
};

serve(async (req) => {
  logStep('FUNCTION INVOKED', { 
    method: req.method,
    url: req.url,
    hasAuthHeader: !!req.headers.get('Authorization')
  });

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    logStep('OPTIONS request - returning CORS headers');
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep('Parsing request body');
    const body = await req.json();
    const { moduleId, accessToken } = body;
    
    logStep('Request body parsed', {
      hasModuleId: !!moduleId,
      hasAccessToken: !!accessToken,
      moduleId,
      tokenPreview: accessToken ? accessToken.substring(0, 8) + '...' : 'none'
    });

    if (!moduleId || !accessToken) {
      logStep('Missing required fields', { moduleId, hasAccessToken: !!accessToken });
      throw new Error('Module ID y token de acceso son requeridos');
    }

    // Initialize Supabase admin client
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Verify guest access token
    logStep('Verifying guest access', { moduleId, tokenPreview: accessToken.substring(0, 8) + '...' });
    
    const { data: guestData, error: guestError } = await supabaseAdmin
      .from('guest_access')
      .select('*')
      .eq('access_token', accessToken)
      .eq('module_id', moduleId)
      .maybeSingle();

    if (guestError) {
      logStep('Database error during guest verification', { 
        error: guestError.message,
        code: guestError.code
      });
      throw new Error('Error al verificar el acceso');
    }

    if (!guestData) {
      logStep('Access token not found in database', { 
        tokenPreview: accessToken.substring(0, 8) + '...',
        moduleId 
      });
      throw new Error('Token de acceso inválido o expirado');
    }

    // Check expiration
    const expiresAt = new Date(guestData.expires_at);
    const now = new Date();
    
    if (expiresAt < now) {
      logStep('Access token expired', { expiresAt, now });
      throw new Error('El token de acceso ha expirado');
    }

    logStep('Access verified successfully', {
      email: guestData.email,
      moduleId: guestData.module_id,
      productType: guestData.product_type,
      expiresAt: guestData.expires_at
    });

    // Generate a signed URL for direct download from storage
    const filePath = `${moduleId}/guia-completa-modulo-${moduleId}.pdf`;
    logStep('Generating signed URL for file', { filePath });
    
    // Create a signed URL valid for 60 seconds
    const { data: signedUrlData, error: signedUrlError } = await supabaseAdmin.storage
      .from('premium-content')
      .createSignedUrl(filePath, 60);

    if (signedUrlError || !signedUrlData?.signedUrl) {
      logStep('Error generating signed URL', { 
        filePath, 
        error: signedUrlError?.message
      });
      throw new Error('Error al generar el enlace de descarga');
    }

    logStep('Signed URL generated successfully', { 
      filePath,
      expiresIn: '60 seconds'
    });

    // Return the signed URL
    return new Response(
      JSON.stringify({ url: signedUrlData.signedUrl }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    logStep('ERROR in download function', { error: errorMessage });
    
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
