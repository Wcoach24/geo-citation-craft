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
    const customerEmail = session.customer_details?.email || session.customer_email;

    logStep("Payment verified", { productType, moduleId, email: customerEmail });

    // Determine which modules to grant access to
    const modulesToGrant = productType === 'complete' 
      ? ['f1', 'f2', 'f3', 'f4', 'f5'] 
      : [moduleId];

    // Initialize Supabase admin client
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    let accessToken: string | null = null;

    // Check if this is a guest purchase (no customer ID or authenticated user)
    const isGuest = !session.customer;
    
    if (isGuest && customerEmail) {
      // Generate access token for guest
      accessToken = crypto.randomUUID();
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 90); // 90 days expiry

      logStep("Creating guest access", { email: customerEmail, modulesCount: modulesToGrant.length });

      // Create guest access records for each module
      for (const mod of modulesToGrant) {
        try {
          await supabaseAdmin.from('guest_access').insert({
            email: customerEmail,
            access_token: accessToken,
            product_type: productType,
            module_id: mod,
            expires_at: expiresAt.toISOString()
          });
          logStep("Guest access created", { module: mod });
        } catch (error) {
          logStep("Error creating guest access", { module: mod, error });
        }
      }
    }

    return new Response(JSON.stringify({
      success: true,
      moduleIds: modulesToGrant,
      productType,
      accessToken: accessToken // Include token for guest purchases
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
