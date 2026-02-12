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
  guestEmail?: string;
}

// Mapeo de productos y precios
const PRODUCT_MAPPING = {
  'f1': { priceId: 'price_1SIElCLYFGrlrWdkg6xDfNK4', productId: 'prod_TEiBWaHzwUlXA5' },
  'f2': { priceId: 'price_1SIEr4LYFGrlrWdkKnenQc0o', productId: 'prod_TEiHYoMQxn8CW4' },
  'f3': { priceId: 'price_1SIEvqLYFGrlrWdkKyiOQhsz', productId: 'prod_TEiMYkaDdZNpHK' },
  'f4': { priceId: 'price_1SIEySLYFGrlrWdkPpmf0HrO', productId: 'prod_TEiPPFHp6tqbVK' },
  'f5': { priceId: 'price_1SIF46LVUGCJuFgUOnlch4Dj', productId: 'prod_TEiVtvLyYnRoPQ' },
  'f6': { priceId: 'price_1SIF4xLYFGrlrWdkDBACLaKe', productId: 'prod_TEiV7zVpP97KSz' },
  'complete': { priceId: 'price_1SISmrLVUGCJuFgUOUi48HYz', productId: 'prod_TEwgtqUMZscsp8' }
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

    const { priceId, productType, moduleId, guestEmail }: CheckoutRequest = await req.json();

    // Get user info (optional for guest checkout)
    let user = null;
    let email = guestEmail;

    const authHeader = req.headers.get("Authorization");
    if (authHeader) {
      const token = authHeader.replace("Bearer ", "");
      const { data: userData } = await supabaseClient.auth.getUser(token);
      if (userData?.user) {
        user = userData.user;
        email = user.email;
      }
    }

    console.log(`Creating checkout for ${user ? 'authenticated user' : 'guest'}${email ? ': ' + email : ''}`);

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

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "");

    // Buscar o crear cliente en Stripe (solo si tenemos email)
    let customerId;
    
    if (email) {
      const customers = await stripe.customers.list({ email, limit: 1 });
      
      if (customers.data.length > 0) {
        customerId = customers.data[0].id;
        console.log(`Existing customer found: ${customerId}`);
      } else {
        const customerData: any = { email };
        if (user) {
          customerData.metadata = { supabase_user_id: user.id };
        }
        const customer = await stripe.customers.create(customerData);
        customerId = customer.id;
        console.log(`New customer created: ${customerId}`);
      }
    }

    // Crear sesión de checkout
    const sessionConfig: any = {
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/checkout`,
      metadata: {
        user_id: user?.id || '',
        guest_email: user ? '' : (email || ''),
        product_type: productType,
        module_id: moduleId || '',
        stripe_product_id: productInfo.productId,
        stripe_price_id: priceId
      }
    };

    // Solo agregar customer/customer_email si tenemos email
    if (customerId) {
      sessionConfig.customer = customerId;
    } else if (email) {
      sessionConfig.customer_email = email;
    }
    // Si no hay email, Stripe pedirá el email en su checkout page

    const session = await stripe.checkout.sessions.create(sessionConfig);

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