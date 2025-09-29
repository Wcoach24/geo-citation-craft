import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("No authorization header");

    const token = authHeader.replace("Bearer ", "");
    const { data: userData, error: userError } = await supabaseClient.auth.getUser(token);
    if (userError || !userData.user) throw new Error("User not authenticated");

    const { filePath } = await req.json();
    if (!filePath) throw new Error("File path is required");

    // Extract module ID from file path (e.g., "f1/guide.pdf" -> "f1")
    const moduleId = filePath.split('/')[0];

    // Check if user has access to this module
    const { data: accessData, error: accessError } = await supabaseClient
      .from('user_access')
      .select('*')
      .eq('user_id', userData.user.id)
      .eq('module_id', moduleId)
      .single();

    if (accessError || !accessData) {
      throw new Error("User does not have access to this content");
    }

    // Generate signed URL (valid for 1 hour)
    const { data: signedUrlData, error: urlError } = await supabaseClient.storage
      .from('premium-content')
      .createSignedUrl(filePath, 3600);

    if (urlError) throw new Error(`Failed to generate download URL: ${urlError.message}`);

    // Track the download
    await supabaseClient
      .from('content_downloads')
      .insert({
        user_id: userData.user.id,
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