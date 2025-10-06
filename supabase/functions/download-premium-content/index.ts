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
    url: req.url
  });

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { moduleId, accessToken } = body;
    
    logStep('Request received', { 
      moduleId, 
      hasAccessToken: !!accessToken,
      accessTokenPreview: accessToken?.substring(0, 8) + '...'
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
    logStep('Verifying guest access', { moduleId });
    
    const { data: guestData, error: guestError } = await supabaseAdmin
      .from('guest_access')
      .select('*')
      .eq('access_token', accessToken)
      .eq('module_id', moduleId)
      .maybeSingle();

    if (guestError) {
      logStep('Database error', { 
        error: guestError.message,
        code: guestError.code
      });
      throw new Error('Error al verificar el acceso');
    }

    if (!guestData) {
      logStep('Access token not found', { 
        tokenPreview: accessToken.substring(0, 8) + '...',
        moduleId 
      });
      throw new Error('Token de acceso inválido o expirado');
    }

    // Check expiration
    const expiresAt = new Date(guestData.expires_at);
    const now = new Date();
    
    if (expiresAt < now) {
      logStep('Access expired', { expiresAt, now });
      throw new Error('El token de acceso ha expirado');
    }

    logStep('Access verified', {
      email: guestData.email,
      moduleId: guestData.module_id,
      expiresAt: guestData.expires_at
    });

    // Download the file from storage
    const filePath = `${moduleId}/guia-completa-modulo-${moduleId}.pdf`;
    logStep('Downloading file', { filePath });
    
    const { data: fileData, error: downloadError } = await supabaseAdmin.storage
      .from('premium-content')
      .download(filePath);

    if (downloadError) {
      logStep('Storage error', { 
        filePath, 
        error: downloadError.message,
        code: downloadError.name
      });
      throw new Error('Error al obtener el archivo');
    }

    logStep('File retrieved successfully', { 
      filePath,
      fileSize: fileData.size 
    });

    // Return the PDF file
    return new Response(fileData, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="guia-completa-modulo-${moduleId}.pdf"`,
      },
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    logStep('ERROR', { error: errorMessage });
    
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
