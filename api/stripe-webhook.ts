/**
 * POST /api/stripe-webhook
 * Receives Stripe events. On `checkout.session.completed`:
 *   1. Reads the PDF(s) from /public/premium/<hash>/ (in the deployment filesystem)
 *   2. Sends the customer an email via Resend with the PDFs attached
 *
 * Replaces the old Supabase Edge Function `stripe-webhook`.
 *
 * Env vars required:
 *   - STRIPE_SECRET_KEY
 *   - STRIPE_WEBHOOK_SECRET   (whsec_..., set when creating the endpoint)
 *   - RESEND_API_KEY
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import Stripe from "stripe";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import manifest from "./_lib/manifest.json" with { type: "json" };

export const config = {
  api: { bodyParser: false }, // raw body required for Stripe signature verification
};

const SENDER = "Eric de esGEO <curso@esgeo.ai>";
const REPLY_TO = "hola@esgeo.ai";

type ModuleInfo = { name: string; filename: string; hash: string };
const MODULES = manifest as Record<string, ModuleInfo>;

// --- Body reader (Vercel + raw body for Stripe sig) ---
async function readRaw(req: VercelRequest): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (c) => chunks.push(Buffer.from(c)));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

// --- PDF loading from the deployed filesystem ---
function loadPdf(modId: string) {
  const info = MODULES[modId];
  if (!info) return null;
  const path = join(process.cwd(), "public", "premium", info.hash, info.filename);
  try {
    const buf = readFileSync(path);
    return { filename: info.filename, content: buf.toString("base64"), name: info.name };
  } catch (e) {
    console.error(`[webhook] PDF not found: ${path}`, e);
    return null;
  }
}

// --- Email HTML ---
function buildEmail(productType: string, attachments: { name: string }[]): { html: string; text: string } {
  const intro = productType === "complete"
    ? "Acabas de comprar el Curso GEO Completo. Gracias."
    : "Acabas de comprar uno de los módulos de esGEO. Gracias.";

  const fileList = attachments.map((a) => `• ${a.name}`).join("\n");

  // Plain-text version (boost Primary inbox classification)
  const text = `${intro}

Tienes los PDFs adjuntos a este email:

${fileList}

Guárdalos en tu equipo cuando puedas. Si algo falla o tienes alguna
duda, contestando a este email me llega directamente a mí.

Eric
hola@esgeo.ai`;

  // Minimal HTML, looks like a personal note (not a template/newsletter)
  const fileListHtml = attachments.map((a) => `<li>${a.name}</li>`).join("");
  const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#1f2937;line-height:1.55;font-size:15px;max-width:560px;margin:24px auto;padding:0 20px;">
<p>${intro}</p>
<p>Tienes los PDFs adjuntos a este email:</p>
<ul style="padding-left:20px;color:#374151;">${fileListHtml}</ul>
<p>Guárdalos en tu equipo cuando puedas. Si algo falla o tienes alguna duda, contestando a este email me llega directamente a mí.</p>
<p>Eric<br><a href="mailto:hola@esgeo.ai" style="color:#2563eb;">hola@esgeo.ai</a></p>
</body></html>`;

  return { html, text };
}

async function sendEmail(to: string, subject: string, html: string, attachments: any[], text?: string) {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY missing");
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      "User-Agent": "esgeo-webhook/1.0",
    },
    body: JSON.stringify({
      from: SENDER,
      to: [to],
      reply_to: REPLY_TO,
      subject,
      html,
      ...(text ? { text } : {}),
      attachments: attachments.map((a) => ({ filename: a.filename, content: a.content })),
    }),
  });
  if (!r.ok) {
    const t = await r.text();
    throw new Error(`Resend ${r.status}: ${t}`);
  }
  return r.json();
}

// --- Handler ---
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripeKey || !webhookSecret) {
    console.error("[webhook] missing env vars");
    return res.status(500).end();
  }

  const stripe = new Stripe(stripeKey, { apiVersion: "2024-12-18.acacia" });
  const sig = req.headers["stripe-signature"] as string;
  let event: Stripe.Event;
  try {
    const raw = await readRaw(req);
    event = stripe.webhooks.constructEvent(raw, sig, webhookSecret);
  } catch (err) {
    console.error("[webhook] signature verification failed:", (err as Error).message);
    return res.status(400).send(`Invalid signature`);
  }

  if (event.type !== "checkout.session.completed") {
    return res.status(200).json({ received: true, ignored: event.type });
  }

  try {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_email || session.customer_details?.email;
    const productType = session.metadata?.product_type || "module";
    const moduleId = session.metadata?.module_id;

    if (!email) {
      console.error("[webhook] no customer email");
      return res.status(200).json({ received: true, error: "no email" });
    }

    const moduleIds = productType === "complete"
      ? ["f1", "f2", "f3", "f4", "f5"]
      : moduleId ? [moduleId] : [];

    const attachments = moduleIds.map(loadPdf).filter(Boolean) as any[];
    if (attachments.length === 0) {
      console.error("[webhook] no PDFs resolved", { productType, moduleId });
      return res.status(200).json({ received: true, error: "no pdfs" });
    }

    const subject = productType === "complete"
      ? "Aquí tienes el Curso GEO completo"
      : `Aquí tienes ${attachments[0].name}`;

    const { html, text } = buildEmail(productType, attachments);
    const result = await sendEmail(email, subject, html, attachments, text);
    console.log(`[webhook] email sent to ${email}, id=${result.id}, attachments=${attachments.length}`);

    return res.status(200).json({ received: true, email_id: result.id });
  } catch (err) {
    console.error("[webhook] handler error:", err);
    // Return 200 anyway to prevent Stripe retries that would re-charge nothing
    return res.status(200).json({ received: true, error: (err as Error).message });
  }
}
