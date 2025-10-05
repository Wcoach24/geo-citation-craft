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

    const { moduleId } = await req.json();
    logStep('Module ID received', { moduleId });

    if (!moduleId) {
      throw new Error('Module ID is required');
    }

    // Initialize Supabase client with service role key for admin access
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Initialize Supabase client with anon key for user authentication
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    // Verify user authentication
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      throw new Error('No authorization header');
    }

    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabaseClient.auth.getUser(token);

    if (authError || !user) {
      logStep('Authentication failed', { error: authError?.message });
      throw new Error('User not authenticated');
    }

    logStep('User authenticated', { userId: user.id });

    // Verify user has access to this module
    const { data: accessData, error: accessError } = await supabaseClient
      .from('user_access')
      .select('*')
      .eq('user_id', user.id)
      .eq('module_id', moduleId)
      .maybeSingle();

    if (accessError) {
      logStep('Error checking access', { error: accessError });
      throw new Error('Error verifying access');
    }

    if (!accessData) {
      logStep('Access denied', { userId: user.id, moduleId });
      throw new Error('No tienes acceso a este módulo');
    }

    logStep('Access verified', { moduleId });

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

    // Track download
    try {
      await supabaseClient.from('content_downloads').insert({
        user_id: user.id,
        module_id: moduleId,
        file_path: filePath,
        file_name: `guia-completa-modulo-${moduleId}.pdf`
      });
      logStep('Download tracked');
    } catch (trackError) {
      // Non-critical error, just log it
      logStep('Error tracking download', { error: trackError });
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
