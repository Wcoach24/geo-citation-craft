import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface GenerateAccessRequest {
  email: string;
  purchaseId: string;
  productType: string;
  moduleId?: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { email, purchaseId, productType, moduleId }: GenerateAccessRequest = await req.json();

    console.log(`Generating guest access for: ${email}`);

    // Generate unique access token
    const accessToken = crypto.randomUUID();
    
    // Set expiration to 90 days from now
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 90);

    // Store guest access
    const { data: accessData, error: accessError } = await supabaseClient
      .from('guest_access')
      .insert({
        email,
        access_token: accessToken,
        purchase_id: purchaseId,
        product_type: productType,
        module_id: moduleId || null,
        expires_at: expiresAt.toISOString()
      })
      .select()
      .single();

    if (accessError) {
      console.error("Error creating guest access:", accessError);
      throw accessError;
    }

    console.log(`Guest access created with token: ${accessToken}`);

    // Generate download URLs for modules
    const modules = productType === 'complete' 
      ? ['f1', 'f2', 'f3', 'f4', 'f5']
      : [moduleId];

    const downloadUrls: Record<string, string> = {};
    
    for (const mod of modules) {
      if (mod) {
        const accessUrl = `${req.headers.get("origin")}/guest-access?token=${accessToken}&module=${mod}`;
        downloadUrls[mod] = accessUrl;
      }
    }

    return new Response(JSON.stringify({ 
      accessToken,
      downloadUrls,
      expiresAt: expiresAt.toISOString()
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    console.error("Error in generate-guest-access:", error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : String(error) 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});