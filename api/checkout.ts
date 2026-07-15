/**
 * POST /api/checkout
 * Creates a Stripe Checkout Session.
 *
 * Body: { productType: 'complete', guestEmail?: string }
 * Returns: { url: string } | { error: string }
 *
 * F2-2: los módulos sueltos (f1..f5, 10 € cada uno) YA NO se venden: 5×10 € hacía
 * ridículo el bundle de 47 €. Cualquier petición con productType 'module' o un
 * moduleId f1..f5 se rechaza con 400. Solo se vende el curso completo.
 *
 * Replaces the old Supabase Edge Function `create-checkout`.
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import Stripe from "stripe";

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
      productType?: string;
      moduleId?: string;
      guestEmail?: string;
    };

    // F2-2: la venta por módulos está retirada. Rechazo explícito (400) de
    // productType 'module' y de cualquier moduleId f1..f5 que llegue de clientes viejos.
    if (productType === "module" || moduleId) {
      return res.status(400).json({
        error: "Los módulos sueltos ya no se venden. Compra el curso completo (productType: 'complete').",
      });
    }

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
    } else {
      return res.status(400).json({ error: "Invalid product type" });
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

    // F2-3: factura automática + NIF/CIF + más métodos de pago.
    // - invoice_creation solo aplica en mode:"payment" (correcto aquí).
    // - "paypal" requiere el método activado en la cuenta Stripe: si Stripe rechaza
    //   la creación de la sesión por PayPal, quitarlo del array (ver MASTERPLAN_LOG, H).
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card", "paypal", "link"],
      invoice_creation: { enabled: true },
      tax_id_collection: { enabled: true },
      // Requerido por Stripe: en mode "payment", tax_id_collection necesita un Customer.
      customer_creation: "always",
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
