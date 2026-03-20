import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
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

interface CheckoutRequest {
  priceId?: string;
  productType: 'module' | 'complete';
  moduleId?: string;
  guestEmail?: string;
}

// Mapeo de productos con precios que funcionan en Stripe
const PRODUCT_MAPPING: Record<string, { priceId: string; productId: string }> = {
  'f1': { priceId: 'price_1SIElCLYFGrlrWdkg6xDfNK4', productId: 'prod_TEiBWaHzwUlXA5' },
  'f2': { priceId: 'price_1SIEr4LYFGrlrWdkKnenQc0o', productId: 'prod_TEiHYoMQxn8CW4' },
  'f3': { priceId: 'price_1SIEvqLYFGrlrWdkKyiOQhsz', productId: 'prod_TEiMYkaDdZNpHK' },
  'f4': { priceId: 'price_1SIEySLYFGrlrWdkPpmf0HrO', productId: 'prod_TEiPPFHp6tqbVK' },
  'f6': { priceId: 'price_1SIF4xLYFGrlrWdkDBACLaKe', productId: 'prod_TEiV7zVpP97KSz' },
};

serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);
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

    console.log(`Creating checkout for ${user ? 'authenticated user' : 'guest'}${email ? ': ' + email : ''}, type: ${productType}`);

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "");

    // Determine product info based on type
    let productInfo: { priceId?: string; productId?: string } | null = null;

    if (productType === 'complete') {
      // Curso completo: use inline price_data (no pre-existing price needed)
      productInfo = { productId: 'complete' };
    } else if (moduleId && PRODUCT_MAPPING[moduleId]) {
      productInfo = PRODUCT_MAPPING[moduleId];
    }

    if (!productInfo) {
      throw new Error("Invalid product type or module ID");
    }

    console.log(`Product: ${productType}, module: ${moduleId || 'n/a'}`);

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

    // Build line items based on product type
    let lineItems: any[];

    if (productType === 'complete') {
      // Curso completo: inline price (no pre-existing Stripe price needed)
      lineItems = [{
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Curso GEO Completo',
            description: '5 módulos fundamentales (F1-F5) + guías PDF profesionales (15-25 páginas cada una)',
          },
          unit_amount: 4700, // €47.00 in cents
        },
        quantity: 1,
      }];
    } else {
      // Módulo individual: use existing Stripe price
      lineItems = [{
        price: productInfo.priceId,
        quantity: 1,
      }];
    }

    // Crear sesión de checkout
    const sessionConfig: any = {
      line_items: lineItems,
      mode: "payment",
      success_url: `${req.headers.get("origin")}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/curso`,
      metadata: {
        user_id: user?.id || '',
        guest_email: user ? '' : (email || ''),
        product_type: productType,
        module_id: moduleId || '',
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