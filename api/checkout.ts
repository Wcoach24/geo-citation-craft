/**
 * POST /api/checkout
 * Creates a Stripe Checkout Session.
 *
 * Body: { productType: 'module' | 'complete', moduleId?: string, guestEmail?: string }
 * Returns: { url: string } | { error: string }
 *
 * Replaces the old Supabase Edge Function `create-checkout`.
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import Stripe from "stripe";

// --- Module → Stripe price mapping. Only modules with a PDF in /public/premium are listed.
// Add a new module by adding the priceId+productId here AND the manifest entry in api/_lib/manifest.json.
const PRODUCT_MAPPING: Record<string, { priceId: string; productId: string }> = {
  f1: { priceId: "price_1SIElCLYFGrlrWdkg6xDfNK4", productId: "prod_TEiBWaHzwUlXA5" },
  f2: { priceId: "price_1SIEr4LYFGrlrWdkKnenQc0o", productId: "prod_TEiHYoMQxn8CW4" },
  f3: { priceId: "price_1SIEvqLYFGrlrWdkKyiOQhsz", productId: "prod_TEiMYkaDdZNpHK" },
  f4: { priceId: "price_1SIEySLYFGrlrWdkPpmf0HrO", productId: "prod_TEiPPFHp6tqbVK" },
  f5: { priceId: "price_1SIF46LVUGCJuFgUOnlch4Dj", productId: "prod_TEiVtvLyYnRoPQ" },
  // 'f6' intentionally NOT listed — coming soon, no PDF yet.
};
const COMPLETE_PRICE_ID = "price_1SISmrLVUGCJuFgUOUi48HYz"; // Curso GEO Completo €47

const ALLOWED_ORIGINS = [
  "https://esgeo.ai",
  "https://www.esgeo.ai",
  "https://esgeoai.vercel.app",
  "http://localhost:5173",
  "http://localhost:8080",
];

function setCors(req: VercelRequest, res: VercelResponse) {
  const origin = (req.headers.origin as string) || "";
  if (ALLOWED_ORIGINS.includes(origin)) res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(req, res);
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { productType, moduleId, guestEmail } = (req.body || {}) as {
      productType?: "module" | "complete";
      moduleId?: string;
      guestEmail?: string;
    };

    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) return res.status(500).json({ error: "Server misconfigured" });
    const stripe = new Stripe(stripeKey, { apiVersion: "2024-12-18.acacia" });

    let lineItems: Stripe.Checkout.SessionCreateParams.LineItem[];
    let productMeta: Record<string, string>;

    if (productType === "complete") {
      lineItems = [{ price: COMPLETE_PRICE_ID, quantity: 1 }];
      productMeta = { product_type: "complete" };
    } else if (productType === "module" && moduleId && PRODUCT_MAPPING[moduleId]) {
      lineItems = [{ price: PRODUCT_MAPPING[moduleId].priceId, quantity: 1 }];
      productMeta = { product_type: "module", module_id: moduleId };
    } else {
      return res.status(400).json({ error: "Invalid product type or module ID" });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,
      customer_email: guestEmail || undefined,
      metadata: productMeta,
      success_url: "https://esgeo.ai/curso/gracias?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://esgeo.ai/curso",
      billing_address_collection: "auto",
      locale: "es",
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("[checkout] error:", err);
    return res.status(500).json({ error: (err as Error).message || "Internal error" });
  }
}
