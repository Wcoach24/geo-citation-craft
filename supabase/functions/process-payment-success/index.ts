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

    // Get payment intent details
    const paymentIntent = await stripe.paymentIntents.retrieve(session.payment_intent as string);
    logStep("Payment intent retrieved", { id: paymentIntent.id });

    // Initialize Supabase with service role key for admin operations
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const metadata = session.metadata || {};
    const userId = metadata.user_id || null;
    const guestEmail = metadata.guest_email || session.customer_details?.email;
    const productType = metadata.product_type;
    const moduleId = metadata.module_id || null;
    const stripeProductId = metadata.stripe_product_id;
    const stripePriceId = metadata.stripe_price_id;

    logStep("Metadata extracted", { userId, guestEmail, productType, moduleId });

    // Check if purchase already processed
    const { data: existingPurchase } = await supabaseAdmin
      .from('purchases')
      .select('id')
      .eq('stripe_payment_intent_id', paymentIntent.id)
      .maybeSingle();

    if (existingPurchase) {
      logStep("Purchase already processed", { purchaseId: existingPurchase.id });
      
      // Still return access info
      if (userId) {
        const { data: userAccessData } = await supabaseAdmin
          .from('user_access')
          .select('module_id')
          .eq('user_id', userId);
        
        return new Response(JSON.stringify({
          success: true,
          alreadyProcessed: true,
          isGuest: false,
          moduleIds: userAccessData?.map(a => a.module_id) || []
        }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        });
      } else {
        const { data: guestAccessData } = await supabaseAdmin
          .from('guest_access')
          .select('access_token, module_id')
          .eq('email', guestEmail)
          .order('created_at', { ascending: false })
          .limit(1)
          .maybeSingle();

        return new Response(JSON.stringify({
          success: true,
          alreadyProcessed: true,
          isGuest: true,
          accessToken: guestAccessData?.access_token,
          moduleId: guestAccessData?.module_id
        }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        });
      }
    }

    // Create purchase record
    const { data: purchase, error: purchaseError } = await supabaseAdmin
      .from('purchases')
      .insert({
        user_id: userId,
        stripe_payment_intent_id: paymentIntent.id,
        stripe_product_id: stripeProductId,
        stripe_price_id: stripePriceId,
        product_type: productType,
        module_id: moduleId,
        amount: session.amount_total,
        currency: session.currency || 'eur',
        status: 'completed'
      })
      .select()
      .single();

    if (purchaseError) throw purchaseError;
    logStep("Purchase record created", { purchaseId: purchase.id });

    // Grant access based on product type
    const modulesToGrant = productType === 'complete' 
      ? ['f1', 'f2', 'f3', 'f4', 'f5'] 
      : [moduleId];

    logStep("Modules to grant", { modulesToGrant });

    if (userId) {
      // Grant access for registered user
      for (const mod of modulesToGrant) {
        const { error: accessError } = await supabaseAdmin
          .from('user_access')
          .insert({
            user_id: userId,
            module_id: mod,
            access_type: productType === 'complete' ? 'complete' : 'module',
            purchase_id: purchase.id
          });

        if (accessError) {
          logStep("Error granting access", { module: mod, error: accessError });
        } else {
          logStep("Access granted", { module: mod });
        }
      }

      return new Response(JSON.stringify({
        success: true,
        isGuest: false,
        moduleIds: modulesToGrant,
        purchaseId: purchase.id
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });

    } else {
      // Grant access for guest user
      const accessToken = crypto.randomUUID();
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 90); // 90 days access

      for (const mod of modulesToGrant) {
        const { error: guestAccessError } = await supabaseAdmin
          .from('guest_access')
          .insert({
            email: guestEmail,
            access_token: accessToken,
            module_id: mod,
            product_type: productType === 'complete' ? 'complete' : 'module',
            purchase_id: purchase.id,
            expires_at: expiresAt.toISOString()
          });

        if (guestAccessError) {
          logStep("Error granting guest access", { module: mod, error: guestAccessError });
        } else {
          logStep("Guest access granted", { module: mod });
        }
      }

      // Send email with access link
      try {
        await supabaseAdmin.functions.invoke('send-purchase-email', {
          body: {
            email: guestEmail,
            accessToken,
            productType,
            moduleIds: modulesToGrant
          }
        });
        logStep("Email sent to guest", { email: guestEmail });
      } catch (emailError) {
        logStep("Error sending email", { error: emailError });
        // Don't fail the whole process if email fails
      }

      return new Response(JSON.stringify({
        success: true,
        isGuest: true,
        accessToken,
        moduleIds: modulesToGrant,
        purchaseId: purchase.id,
        email: guestEmail
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

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
