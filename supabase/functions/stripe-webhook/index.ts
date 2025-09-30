import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
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
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const signature = req.headers.get("stripe-signature");
    if (!signature) {
      console.error("Missing stripe-signature header");
      return new Response("Missing signature", { status: 400 });
    }

    const body = await req.text();
    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        Deno.env.get("STRIPE_WEBHOOK_SECRET") || ""
      );
    } catch (err) {
      console.error("Webhook signature verification failed:", err);
      return new Response("Invalid signature", { status: 400 });
    }

    console.log(`Processing webhook event: ${event.type}`);

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log(`Processing completed checkout session: ${session.id}`);

        const {
          user_id,
          product_type,
          module_id,
          stripe_product_id,
          stripe_price_id
        } = session.metadata || {};

        if (!user_id || !product_type || !stripe_product_id || !stripe_price_id) {
          console.error("Missing required metadata in checkout session");
          return new Response("Missing metadata", { status: 400 });
        }

        // Registrar la compra
        const { data: purchase, error: purchaseError } = await supabaseClient
          .from("purchases")
          .insert({
            user_id,
            stripe_payment_intent_id: session.payment_intent,
            stripe_product_id,
            stripe_price_id,
            product_type,
            module_id: module_id || null,
            amount: session.amount_total || 0,
            currency: session.currency || 'eur',
            status: 'completed'
          })
          .select()
          .single();

        if (purchaseError) {
          console.error("Error creating purchase record:", purchaseError);
          return new Response("Database error", { status: 500 });
        }

        console.log(`Purchase recorded: ${purchase.id}`);

        // Otorgar acceso
        if (product_type === 'complete') {
          // Acceso a todos los módulos disponibles (F1-F5)
          const modules = ['f1', 'f2', 'f3', 'f4', 'f5'];
          const accessRecords = modules.map(moduleId => ({
            user_id,
            module_id: moduleId,
            access_type: 'complete' as const,
            purchase_id: purchase.id
          }));

          const { error: accessError } = await supabaseClient
            .from("user_access")
            .upsert(accessRecords, { 
              onConflict: 'user_id,module_id',
              ignoreDuplicates: false 
            });

          if (accessError) {
            console.error("Error granting complete access:", accessError);
          } else {
            console.log("Complete course access granted");
          }
        } else if (product_type === 'module' && module_id) {
          // Acceso a módulo individual
          const { error: accessError } = await supabaseClient
            .from("user_access")
            .upsert({
              user_id,
              module_id,
              access_type: 'individual',
              purchase_id: purchase.id
            }, { 
              onConflict: 'user_id,module_id',
              ignoreDuplicates: false 
            });

          if (accessError) {
            console.error("Error granting module access:", accessError);
          } else {
            console.log(`Module ${module_id} access granted`);
          }
        }

        break;
      }

      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log(`Payment failed: ${paymentIntent.id}`);

        // Actualizar estado de compra a fallida
        const { error } = await supabaseClient
          .from("purchases")
          .update({ status: 'failed' })
          .eq('stripe_payment_intent_id', paymentIntent.id);

        if (error) {
          console.error("Error updating failed payment:", error);
        }

        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    console.error("Error in webhook handler:", error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : String(error) 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});