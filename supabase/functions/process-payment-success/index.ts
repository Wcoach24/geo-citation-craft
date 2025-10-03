import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[PROCESS-PAYMENT] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const { sessionId } = await req.json();
    
    if (!sessionId) {
      throw new Error("Session ID is required");
    }

    logStep("Session ID received", { sessionId });

    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    // Get session details from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    logStep("Session retrieved from Stripe", { 
      status: session.payment_status,
      customer: session.customer 
    });

    if (session.payment_status !== "paid") {
      throw new Error("Payment not completed");
    }

    // Extract module info from metadata
    const metadata = session.metadata || {};
    const productType = metadata.product_type;
    const moduleId = metadata.module_id;

    logStep("Payment verified", { productType, moduleId });

    // Determine which modules to grant access to
    const modulesToGrant = productType === 'complete' 
      ? ['f1', 'f2', 'f3', 'f4', 'f5'] 
      : [moduleId];

    // Initialize Supabase client for generating signed URLs
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Generate signed URLs for each module
    const downloadUrls: Record<string, string> = {};
    
    for (const mod of modulesToGrant) {
      const filePath = `${mod}/guia-completa-modulo-${mod}.pdf`;
      
      try {
        const { data: signedUrlData, error: urlError } = await supabaseClient
          .storage
          .from('premium-content')
          .createSignedUrl(filePath, 3600); // 1 hour expiry

        if (urlError) {
          logStep("Error generating signed URL", { module: mod, error: urlError });
        } else if (signedUrlData?.signedUrl) {
          downloadUrls[mod] = signedUrlData.signedUrl;
          logStep("Signed URL generated", { module: mod });
        }
      } catch (error) {
        logStep("Exception generating signed URL", { module: mod, error });
      }
    }

    return new Response(JSON.stringify({
      success: true,
      moduleIds: modulesToGrant,
      productType,
      downloadUrls
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR", { message: errorMessage });
    return new Response(JSON.stringify({ 
      error: errorMessage,
      success: false 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
