/**
 * POST /api/stripe-webhook
 * Receives Stripe events. On `checkout.session.completed`:
 *   1. Reads the PDF(s) from /premium/<hash>/ (fuera de public/ — ver includeFiles en vercel.json)
 *   2. Sends the customer an email via Resend with the PDFs attached
 *   3. Notifies the owner (azmglg@gmail.com) of the new sale
 *   4. F3-2: inserta la compra en public.purchases (para el email de testimonio
 *      a +7 días vía /api/email-sequence) y marca el lead como converted en
 *      public.leads (deja de recibir la secuencia de venta E2-E5).
 *
 * Env vars required:
 *   - STRIPE_SECRET_KEY
 *   - STRIPE_WEBHOOK_SECRET   (whsec_..., set when creating the endpoint)
 *   - RESEND_API_KEY
 *   - OWNER_EMAIL (defaults to azmglg@gmail.com)
 *   - SUPABASE_URL (o VITE_SUPABASE_URL) + SUPABASE_SERVICE_ROLE_KEY (F3-2;
 *     si faltan, la compra se entrega igualmente y solo se pierde el registro)
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import manifest from "./_lib/manifest.json" with { type: "json" };

export const config = {
  api: { bodyParser: false }, // raw body required for Stripe signature verification
};

const SENDER = "Eric de esGEO <curso@esgeo.ai>";
const REPLY_TO = "hola@esgeo.ai";
const OWNER_NOTIFY_FROM = "esGEO sales <ventas@esgeo.ai>";

type ModuleInfo = { name: string; filename: string; hash: string };
const MODULES = manifest as Record<string, ModuleInfo>;

async function readRaw(req: VercelRequest): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (c) => chunks.push(Buffer.from(c)));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

function loadPdf(modId: string) {
  const info = MODULES[modId];
  if (!info) return null;
  // Los PDFs viven en /premium (raíz del repo), NO en /public: en public/ eran
  // descargables por cualquiera sin pagar. Vercel los empaqueta en esta función
  // vía `includeFiles` en vercel.json.
  const path = join(process.cwd(), "premium", info.hash, info.filename);
  try {
    const buf = readFileSync(path);
    return { filename: info.filename, content: buf.toString("base64"), name: info.name };
  } catch (e) {
    console.error(`[webhook] PDF not found: ${path}`, e);
    return null;
  }
}

function buildCustomerEmail(productType: string, attachments: { name: string }[]): { html: string; text: string } {
  const intro = productType === "curso-auditoria"
    ? "Acabas de comprar el Curso GEO Completo + Auditoría personalizada. Gracias."
    : productType === "complete"
      ? "Acabas de comprar el Curso GEO Completo. Gracias."
      : "Acabas de comprar uno de los módulos de esGEO. Gracias.";
  const fileList = attachments.map((a) => `• ${a.name}`).join("\n");

  // F2-5: la auditoría se entrega manualmente — se anuncia el siguiente paso al cliente.
  const auditNote = productType === "curso-auditoria"
    ? `

Sobre tu auditoría personalizada: te escribo en persona a este mismo
email para confirmar el dominio que quieres auditar. Recibirás la
auditoría HABLA comentada (vídeo/PDF) y un plan de acción priorizado.`
    : "";
  const auditNoteHtml = productType === "curso-auditoria"
    ? `<p><strong>Sobre tu auditoría personalizada:</strong> te escribo en persona a este mismo email para confirmar el dominio que quieres auditar. Recibirás la auditoría HABLA comentada (vídeo/PDF) y un plan de acción priorizado.</p>`
    : "";

  const text = `${intro}

Tienes los PDFs adjuntos a este email:

${fileList}${auditNote}

Guárdalos en tu equipo cuando puedas. Si algo falla o tienes alguna
duda, contestando a este email me llega directamente a mí.

Eric
hola@esgeo.ai`;

  const fileListHtml = attachments.map((a) => `<li>${a.name}</li>`).join("");
  const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#1f2937;line-height:1.55;font-size:15px;max-width:560px;margin:24px auto;padding:0 20px;">
<p>${intro}</p>
<p>Tienes los PDFs adjuntos a este email:</p>
<ul style="padding-left:20px;color:#374151;">${fileListHtml}</ul>
${auditNoteHtml}
<p>Guárdalos en tu equipo cuando puedas. Si algo falla o tienes alguna duda, contestando a este email me llega directamente a mí.</p>
<p>Eric<br><a href="mailto:hola@esgeo.ai" style="color:#2563eb;">hola@esgeo.ai</a></p>
</body></html>`;

  return { html, text };
}

function buildOwnerNotification(session: Stripe.Checkout.Session, productType: string, customerEmail: string, attachments: { name: string }[]): { subject: string; html: string; text: string } {
  const amount = (session.amount_total || 0) / 100;
  const currency = (session.currency || "eur").toUpperCase();
  const products = attachments.map(a => a.name).join(", ") || (productType === "complete" ? "Curso completo" : productType);
  const country = session.customer_details?.address?.country || "—";
  const sessionId = session.id;
  const when = new Date((session.created || Date.now() / 1000) * 1000).toISOString().replace("T", " ").slice(0, 19);

  // F2-5: el product type SIEMPRE visible en la notificación. Para curso-auditoria hay
  // trabajo manual pendiente (auditoría HABLA + plan de acción): el subject lo grita.
  const subject = productType === "curso-auditoria"
    ? `💰⚠️ Venta esGEO [curso-auditoria]: €${amount} — ENTREGA MANUAL: auditoría pendiente`
    : `💰 Venta esGEO [${productType}]: €${amount} — ${products}`;

  const manualDeliveryNote = productType === "curso-auditoria"
    ? `

⚠️ ACCIÓN REQUERIDA: este tier incluye auditoría HABLA comentada
(vídeo/PDF) + plan de acción priorizado. Escribe al cliente para
confirmar el dominio y entrégala manualmente.`
    : "";

  const text = `Nueva venta en esgeo.ai

Cliente:   ${customerEmail}
País:      ${country}
Tipo:      ${productType}
Producto:  ${products}
Monto:     ${amount} ${currency}
Hora UTC:  ${when}
Stripe:    ${sessionId}${manualDeliveryNote}

Dashboard: https://esgeo.ai/admin
Stripe:    https://dashboard.stripe.com/payments/${sessionId}`;

  const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#1f2937;line-height:1.55;font-size:15px;max-width:560px;margin:24px auto;padding:0 20px;">
<h2 style="margin:0 0 16px 0;color:#16a34a;">💰 Nueva venta — €${amount}</h2>
${productType === "curso-auditoria" ? `<p style="background:#fef3c7;border:1px solid #f59e0b;padding:10px 14px;border-radius:6px;"><strong>⚠️ ACCIÓN REQUERIDA:</strong> este tier incluye auditoría HABLA comentada (vídeo/PDF) + plan de acción priorizado. Escribe al cliente para confirmar el dominio y entrégala manualmente.</p>` : ""}
<table style="width:100%;border-collapse:collapse;font-size:14px;">
<tr><td style="padding:6px 0;color:#6b7280;width:90px;">Cliente</td><td style="padding:6px 0;"><strong>${customerEmail}</strong></td></tr>
<tr><td style="padding:6px 0;color:#6b7280;">País</td><td style="padding:6px 0;">${country}</td></tr>
<tr><td style="padding:6px 0;color:#6b7280;">Tipo</td><td style="padding:6px 0;"><strong>${productType}</strong></td></tr>
<tr><td style="padding:6px 0;color:#6b7280;">Producto</td><td style="padding:6px 0;">${products}</td></tr>
<tr><td style="padding:6px 0;color:#6b7280;">Monto</td><td style="padding:6px 0;"><strong>€${amount} ${currency}</strong></td></tr>
<tr><td style="padding:6px 0;color:#6b7280;">Hora UTC</td><td style="padding:6px 0;font-family:monospace;font-size:12px;">${when}</td></tr>
<tr><td style="padding:6px 0;color:#6b7280;">Session ID</td><td style="padding:6px 0;font-family:monospace;font-size:12px;">${sessionId}</td></tr>
</table>
<p style="margin-top:20px;">
<a href="https://esgeo.ai/admin" style="display:inline-block;padding:8px 16px;background:#1a1a1a;color:#fff;text-decoration:none;font-size:14px;margin-right:8px;">Abrir dashboard</a>
<a href="https://dashboard.stripe.com/payments/${sessionId}" style="display:inline-block;padding:8px 16px;background:#635bff;color:#fff;text-decoration:none;font-size:14px;">Ver en Stripe</a>
</p>
</body></html>`;

  return { subject, html, text };
}

/**
 * F3-2: registra la compra en public.purchases y marca el lead como converted.
 * Nunca lanza — la entrega de los PDFs (paso 1) no depende de esto.
 */
async function recordPurchase(session: Stripe.Checkout.Session, productType: string, moduleId: string | undefined, customerEmail: string) {
  const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error("[webhook] Supabase env vars missing — purchase NOT stored in public.purchases");
    return;
  }
  try {
    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    // Idempotente frente a reintentos del webhook: ON CONFLICT (stripe_session_id) DO NOTHING.
    const { error: insertError } = await supabase.from("purchases").upsert(
      {
        stripe_session_id: session.id,
        stripe_payment_intent_id:
          typeof session.payment_intent === "string" ? session.payment_intent : session.payment_intent?.id ?? null,
        customer_email: customerEmail,
        product_type: productType,
        module_id: moduleId ?? null,
        amount: session.amount_total ?? 0,
        currency: session.currency || "eur",
        status: "completed",
      },
      { onConflict: "stripe_session_id", ignoreDuplicates: true }
    );
    if (insertError) {
      console.error(`[webhook] purchases insert error: ${insertError.message}`);
    }

    // El comprador sale de la secuencia de venta E2-E5.
    const { error: leadError } = await supabase.from("leads").update({ converted: true }).eq("email", customerEmail);
    if (leadError) {
      console.error(`[webhook] leads converted update error: ${leadError.message}`);
    }
  } catch (e) {
    console.error("[webhook] recordPurchase error:", (e as Error).message);
  }
}

async function sendEmail(to: string, from: string, subject: string, html: string, attachments: any[], text?: string) {
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
      from,
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

    // F2-5: curso-auditoria incluye el curso completo (los mismos 5 PDFs); la parte de
    // auditoría es entrega manual y se avisa al owner en la notificación.
    const moduleIds = productType === "complete" || productType === "curso-auditoria"
      ? ["f1", "f2", "f3", "f4", "f5"]
      : moduleId ? [moduleId] : [];

    const attachments = moduleIds.map(loadPdf).filter(Boolean) as any[];
    if (attachments.length === 0) {
      console.error("[webhook] no PDFs resolved", { productType, moduleId });
      return res.status(200).json({ received: true, error: "no pdfs" });
    }

    // 1. Email al cliente con los PDFs adjuntos
    const subject = productType === "curso-auditoria"
      ? "Aquí tienes el Curso GEO completo (tu auditoría, en camino)"
      : productType === "complete"
        ? "Aquí tienes el Curso GEO completo"
        : `Aquí tienes ${attachments[0].name}`;
    const { html, text } = buildCustomerEmail(productType, attachments);
    const result = await sendEmail(email, SENDER, subject, html, attachments, text);
    console.log(`[webhook] customer email sent to ${email}, id=${result.id}`);

    // 2. F3-2: registrar la compra en public.purchases + lead converted (no bloquea)
    await recordPurchase(session, productType, moduleId, email);

    // 3. Notificación al owner (no bloquea el response si falla)
    try {
      const ownerEmail = process.env.OWNER_EMAIL || "azmglg@gmail.com";
      const notif = buildOwnerNotification(session, productType, email, attachments);
      const ownerResult = await sendEmail(ownerEmail, OWNER_NOTIFY_FROM, notif.subject, notif.html, [], notif.text);
      console.log(`[webhook] owner notified, id=${ownerResult.id}`);
    } catch (notifErr) {
      console.error("[webhook] owner notification failed:", (notifErr as Error).message);
    }

    return res.status(200).json({ received: true, email_id: result.id });
  } catch (err) {
    console.error("[webhook] handler error:", err);
    return res.status(200).json({ received: true, error: (err as Error).message });
  }
}
