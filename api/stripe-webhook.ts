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

const SENDER = "Eric · esGEO <curso@esgeo.ai>";
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
function buildEmail(productType: string, attachments: { name: string }[]) {
  const list = attachments
    .map(
      (a) => `
    <tr><td style="padding:12px 0;border-bottom:1px solid #eaeaea;">
      <strong style="color:#1a1a2e;font-size:15px;">${a.name}</strong>
      <div style="color:#6b7280;font-size:13px;margin-top:2px;">adjunto en este email</div>
    </td></tr>`,
    )
    .join("");
  const intro =
    productType === "complete"
      ? "¡Gracias por tu compra del <strong>Curso GEO Completo</strong>!"
      : "¡Gracias por tu compra!";
  return `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">
  <div style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 100%);padding:32px;text-align:center;">
    <h1 style="color:#ffffff;margin:0;font-size:28px;letter-spacing:-0.5px;">esGEO</h1>
    <p style="color:#a0aec0;margin:8px 0 0;">Tu curso está listo</p>
  </div>
  <div style="padding:32px;color:#1f2937;font-size:16px;line-height:1.6;">
    <p style="margin:0 0 16px;">${intro}</p>
    <p style="margin:0 0 16px;">Aquí tienes tus materiales:</p>
    <div style="background:#f9fafb;border-left:3px solid #2563eb;padding:16px 20px;border-radius:4px;margin:0 0 24px;">
      <table width="100%" cellpadding="0" cellspacing="0">${list}</table>
    </div>
    <p style="margin:0 0 16px;">Los PDFs vienen <strong>adjuntos</strong> a este email — guárdalos en tu equipo.</p>
    <p style="margin:0 0 16px;">¿Cualquier duda? Respóndeme directamente y te contesto yo.</p>
    <p style="margin:24px 0 0;color:#374151;">Eric<br/>
      <a href="mailto:${REPLY_TO}" style="color:#2563eb;text-decoration:none;">${REPLY_TO}</a>
    </p>
  </div>
  <div style="background:#f8fafc;padding:20px;text-align:center;border-top:1px solid #e2e8f0;">
    <p style="color:#9ca3af;font-size:12px;margin:0;">© esGEO — esgeo.ai</p>
  </div>
</div>
</body></html>`;
}

async function sendEmail(to: string, subject: string, html: string, attachments: any[]) {
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
      ? "📚 Tu Curso GEO Completo está listo para descargar"
      : `📄 Tu módulo ${attachments[0].name} está listo`;

    const html = buildEmail(productType, attachments);
    const result = await sendEmail(email, subject, html, attachments);
    console.log(`[webhook] email sent to ${email}, id=${result.id}, attachments=${attachments.length}`);

    return res.status(200).json({ received: true, email_id: result.id });
  } catch (err) {
    console.error("[webhook] handler error:", err);
    // Return 200 anyway to prevent Stripe retries that would re-charge nothing
    return res.status(200).json({ received: true, error: (err as Error).message });
  }
}
