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

  // Internal auth: only allow calls from other edge functions using service_role_key
  const authHeader = req.headers.get("Authorization");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
  if (!authHeader || authHeader !== `Bearer ${serviceRoleKey}`) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { email, purchaseId, productType, moduleId }: GenerateAccessRequest = await req.json();

    if (!email || !purchaseId || !productType) {
      throw new Error("Missing required fields: email, purchaseId, productType");
    }

    console.log(`Generating guest access for: ${email}`);

    const accessToken = crypto.randomUUID();
    
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 90);

    const { error: accessError } = await supabaseClient
      .from('guest_access')
      .insert({
        email,
        access_token: accessToken,
        purchase_id: purchaseId,
        product_type: productType,
        module_id: moduleId || null,
        expires_at: expiresAt.toISOString()
      });

    if (accessError) {
      console.error("Error creating guest access:", accessError);
      throw accessError;
    }

    // Generate download URLs
    const modules = productType === 'complete' 
      ? ['f1', 'f2', 'f3', 'f4', 'f5']
      : [moduleId];

    const downloadUrls: Record<string, string> = {};
    
    for (const mod of modules) {
      if (mod) {
        downloadUrls[mod] = `https://esgeo.ai/guest-access?token=${accessToken}&module=${mod}`;
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
