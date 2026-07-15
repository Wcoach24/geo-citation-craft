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
  f5: { priceId: "price_1TYM7zLYFGrlrWdkJcKfCvga", productId: "prod_UXQz7DLgfdqKbN" },
  // 'f6' intentionally NOT listed — coming soon, no PDF yet.
};
const COMPLETE_PRICE_ID = "price_1TYM80LYFGrlrWdkKUIPIa7U"; // Curso GEO Completo €47

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
    let priceId: string;
    let product: string;

    if (productType === "complete") {
      priceId = COMPLETE_PRICE_ID;
      product = "complete";
      lineItems = [{ price: priceId, quantity: 1 }];
      productMeta = { product_type: "complete" };
    } else if (productType === "module" && moduleId && PRODUCT_MAPPING[moduleId]) {
      priceId = PRODUCT_MAPPING[moduleId].priceId;
      product = `module_${moduleId}`;
      lineItems = [{ price: priceId, quantity: 1 }];
      productMeta = { product_type: "module", module_id: moduleId };
    } else {
      return res.status(400).json({ error: "Invalid product type or module ID" });
    }

    // Importe real desde Stripe (no hardcodeado): lo lee /success para el tracking
    // de purchase_complete. Si Stripe no lo devuelve, se omite (mejor sin dato que inventado).
    let amount = "";
    try {
      const price = await stripe.prices.retrieve(priceId);
      if (price.unit_amount != null) amount = String(price.unit_amount / 100);
    } catch (e) {
      console.error("[checkout] no se pudo leer el precio para el tracking:", e);
    }

    // OJO: {CHECKOUT_SESSION_ID} debe quedar literal (lo sustituye Stripe).
    const successUrl =
      `https://esgeo.ai/success?session_id={CHECKOUT_SESSION_ID}` +
      `&product=${encodeURIComponent(product)}` +
      (amount ? `&amount=${encodeURIComponent(amount)}` : "");

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,
      customer_email: guestEmail || undefined,
      metadata: productMeta,
      success_url: successUrl,
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
