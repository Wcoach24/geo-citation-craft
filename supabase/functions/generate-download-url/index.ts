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

serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      { global: { headers: { Authorization: authHeader } } }
    );

    const token = authHeader.replace("Bearer ", "");
    const { data: claimsData, error: claimsError } = await supabaseClient.auth.getClaims(token);
    if (claimsError || !claimsData?.claims) {
      return new Response(JSON.stringify({ error: "User not authenticated" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const userId = claimsData.claims.sub;

    const { filePath } = await req.json();
    if (!filePath) throw new Error("File path is required");

    // Extract module ID from file path (e.g., "f1/guide.pdf" -> "f1")
    const moduleId = filePath.split('/')[0];

    // Check if user has access to this module (RLS scoped by user)
    const { data: accessData, error: accessError } = await supabaseClient
      .from('user_access')
      .select('*')
      .eq('user_id', userId)
      .eq('module_id', moduleId)
      .single();

    if (accessError || !accessData) {
      throw new Error("User does not have access to this content");
    }

    // Generate signed URL using service role client (valid for 1 hour)
    const serviceClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const { data: signedUrlData, error: urlError } = await serviceClient.storage
      .from('premium-content')
      .createSignedUrl(filePath, 3600);

    if (urlError) throw new Error(`Failed to generate download URL: ${urlError.message}`);

    // Track the download
    await supabaseClient
      .from('content_downloads')
      .insert({
        user_id: userId,
        module_id: moduleId,
        file_name: filePath.split('/').pop(),
        file_path: filePath
      });

    return new Response(JSON.stringify({ 
      downloadUrl: signedUrlData.signedUrl,
      expiresIn: 3600
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    console.error("Download URL generation error:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to generate download URL";
    return new Response(JSON.stringify({ 
      error: errorMessage
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
