import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface CheckoutRequest {
  priceId: string;
  productType: 'module' | 'complete';
  moduleId?: string;
}

// Mapeo de productos y precios
const PRODUCT_MAPPING = {
  'f1': { priceId: 'price_1SCi2ELVUGCJuFgUgUSq6Wsc', productId: 'prod_T902VySczFrzLF' },
  'f2': { priceId: 'price_1SCi2ZLVUGCJuFgUkvbTtPGU', productId: 'prod_T9028jaGK3AZMt' },
  'f3': { priceId: 'price_1SCi37LVUGCJuFgUr9yb84gV', productId: 'prod_T903d9YhVnqhLZ' },
  'f4': { priceId: 'price_1SCi3JLVUGCJuFgUtrtOiSGR', productId: 'prod_T9032mbVGWxI0h' },
  'f5': { priceId: 'price_1SCi3VLVUGCJuFgU2jobGw1L', productId: 'prod_T903yAjoh8vLi2' },
  'f6': { priceId: 'price_1SCi3nLVUGCJuFgUAvV6GsUH', productId: 'prod_T9037l1XQzqr7h' },
  'complete': { priceId: 'price_1SCi40LVUGCJuFgUZNIG5XwU', productId: 'prod_T904JmjRPrkyGQ' }
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    // Verificar autenticación
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      throw new Error("No authorization header provided");
    }

    const token = authHeader.replace("Bearer ", "");
    const { data: userData, error: userError } = await supabaseClient.auth.getUser(token);
    if (userError) throw new Error(`Authentication error: ${userError.message}`);
    
    const user = userData.user;
    if (!user?.email) {
      throw new Error("User not authenticated or email not available");
    }

    console.log(`Creating checkout for user: ${user.email}`);

    const { priceId, productType, moduleId }: CheckoutRequest = await req.json();

    if (!priceId) {
      throw new Error("Price ID is required");
    }

    // Verificar que el producto existe en nuestro mapeo
    const productKey = productType === 'complete' ? 'complete' : moduleId;
    const productInfo = PRODUCT_MAPPING[productKey as keyof typeof PRODUCT_MAPPING];
    
    if (!productInfo || productInfo.priceId !== priceId) {
      throw new Error("Invalid product or price ID");
    }

    console.log(`Product info: ${JSON.stringify(productInfo)}`);

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    // Buscar o crear cliente en Stripe
    const customers = await stripe.customers.list({ email: user.email, limit: 1 });
    let customerId;
    
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
      console.log(`Existing customer found: ${customerId}`);
    } else {
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: { supabase_user_id: user.id }
      });
      customerId = customer.id;
      console.log(`New customer created: ${customerId}`);
    }

    // Crear sesión de checkout
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/checkout`,
      metadata: {
        user_id: user.id,
        product_type: productType,
        module_id: moduleId || '',
        stripe_product_id: productInfo.productId,
        stripe_price_id: priceId
      }
    });

    console.log(`Checkout session created: ${session.id}`);

    return new Response(JSON.stringify({ 
      url: session.url,
      sessionId: session.id 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    console.error("Error in create-checkout:", error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : String(error) 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});