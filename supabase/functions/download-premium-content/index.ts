import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const ALLOWED_ORIGINS = [
  "https://esgeo.ai",
  "https://www.esgeo.ai",
  "https://geo-citation-craft.lovable.app",
];

function getCorsHeaders(req: Request) {
  const origin = req.headers.get("Origin") || "";
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  };
}

const VALID_MODULES = ['f1', 'f2', 'f3', 'f4', 'f5'];

serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { moduleId, accessToken } = body;

    if (!moduleId || !accessToken) {
      throw new Error('Module ID y token de acceso son requeridos');
    }

    if (!VALID_MODULES.includes(moduleId)) {
      throw new Error('Módulo no válido');
    }

    // Use anon key client to call the security definer RPC
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    // Use the RPC function which validates token + expiry via security definer
    const { data: guestRows, error: rpcError } = await supabase
      .rpc('get_guest_access_by_token', { p_token: accessToken });

    if (rpcError) {
      console.error('[DOWNLOAD] RPC error:', rpcError.message);
      throw new Error('Error al verificar el acceso');
    }

    if (!guestRows || guestRows.length === 0) {
      throw new Error('Token de acceso inválido o expirado');
    }

    const guestData = guestRows[0];

    // Validate that the guest's product_type grants access to the requested module
    const hasAccess =
      guestData.product_type === 'complete' ||
      (guestData.product_type === 'module' && guestData.module_id === moduleId);

    if (!hasAccess) {
      throw new Error('No tienes acceso a este módulo');
    }

    // Use admin client ONLY for generating signed URL (storage requires it)
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const filePath = `${moduleId}/guia-completa-modulo-${moduleId}.pdf`;

    const { data: signedUrlData, error: signedUrlError } = await supabaseAdmin.storage
      .from('premium-content')
      .createSignedUrl(filePath, 60);

    if (signedUrlError || !signedUrlData?.signedUrl) {
      console.error('[DOWNLOAD] Signed URL error:', signedUrlError?.message);
      throw new Error('Error al generar el enlace de descarga');
    }

    return new Response(
      JSON.stringify({ url: signedUrlData.signedUrl }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Error desconocido';
    return new Response(
      JSON.stringify({ error: msg }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
