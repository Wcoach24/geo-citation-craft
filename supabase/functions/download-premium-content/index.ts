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
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep('Function started');

    const { moduleId, accessToken } = await req.json();
    logStep('Request received', { moduleId, hasAccessToken: !!accessToken });

    if (!moduleId) {
      throw new Error('Module ID is required');
    }

    // Initialize Supabase clients
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    let userId: string | null = null;
    let isGuest = false;

    // Try to authenticate user with JWT
    const authHeader = req.headers.get('Authorization');
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '');
      const { data: { user }, error: authError } = await supabaseClient.auth.getUser(token);
      
      if (!authError && user) {
        userId = user.id;
        logStep('Authenticated user', { userId });
        
        // Verify user has access to this module
        const { data: accessData, error: accessError } = await supabaseClient
          .from('user_access')
          .select('*')
          .eq('user_id', userId)
          .eq('module_id', moduleId)
          .maybeSingle();

        if (accessError) {
          logStep('Error checking user access', { error: accessError });
          throw new Error('Error verifying access');
        }

        if (!accessData) {
          logStep('Access denied for user', { userId, moduleId });
          throw new Error('No tienes acceso a este módulo');
        }

        logStep('User access verified', { moduleId });
      }
    }

    // If not authenticated with JWT, check for guest access token
    if (!userId && accessToken) {
      isGuest = true;
      logStep('Verifying guest access token');

      const { data: guestData, error: guestError } = await supabaseAdmin
        .from('guest_access')
        .select('*')
        .eq('access_token', accessToken)
        .eq('module_id', moduleId)
        .maybeSingle();

      if (guestError) {
        logStep('Error checking guest access', { error: guestError });
        throw new Error('Error verifying guest access');
      }

      if (!guestData) {
        logStep('Invalid guest access token', { moduleId });
        throw new Error('Token de acceso inválido');
      }

      // Check if token has expired
      const expiresAt = new Date(guestData.expires_at);
      if (expiresAt < new Date()) {
        logStep('Guest access token expired', { expiresAt });
        throw new Error('El token de acceso ha expirado');
      }

      logStep('Guest access verified', { moduleId, expiresAt });
    }

    // If neither authenticated user nor valid guest token
    if (!userId && !isGuest) {
      logStep('No valid authentication method');
      throw new Error('Autenticación requerida');
    }

    // Download the file from storage using service role
    const filePath = `${moduleId}/guia-completa-modulo-${moduleId}.pdf`;
    const { data: fileData, error: downloadError } = await supabaseAdmin.storage
      .from('premium-content')
      .download(filePath);

    if (downloadError) {
      logStep('Error downloading file', { filePath, error: downloadError });
      throw new Error('Error al descargar el archivo');
    }

    logStep('File downloaded successfully', { filePath });

    // Track download (only for authenticated users)
    if (userId) {
      try {
        await supabaseClient.from('content_downloads').insert({
          user_id: userId,
          module_id: moduleId,
          file_path: filePath,
          file_name: `guia-completa-modulo-${moduleId}.pdf`
        });
        logStep('Download tracked for user', { userId });
      } catch (trackError) {
        // Non-critical error, just log it
        logStep('Error tracking download', { error: trackError });
      }
    } else {
      logStep('Download tracking skipped for guest');
    }

    // Return the file with proper headers
    return new Response(fileData, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="guia-completa-modulo-${moduleId}.pdf"`,
      },
    });

  } catch (error) {
    logStep('Error', { error: error.message });
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
