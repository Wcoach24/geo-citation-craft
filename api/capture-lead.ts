/**
 * POST /api/capture-lead
 * Adds an email to the Resend Audience "esGEO Leads" and sends a welcome email.
 * Also supports `unsubscribe: true` to mark a contact as unsubscribed.
 *
 * Replaces the Supabase Edge Function `capture-lead`.
 *
 * Body: { email: string, source?: string, unsubscribe?: boolean }
 * Returns: { ok: true } | { error: string }
 *
 * Env vars required: RESEND_API_KEY
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";

const AUDIENCE_ID = "6f09528e-620e-40b5-926b-4caffec4737c"; // "esGEO Leads"
const SENDER = "Eric · esGEO <curso@esgeo.ai>";
const REPLY_TO = "hola@esgeo.ai";

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

const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

async function resendFetch(path: string, init: RequestInit = {}) {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY missing");
  return fetch(`https://api.resend.com${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      "User-Agent": "esGEO-capture-lead/1.0",
      ...(init.headers || {}),
    },
  });
}

function welcomeEmail(): string {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">
  <div style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 100%);padding:32px;text-align:center;">
    <h1 style="color:#ffffff;margin:0;font-size:28px;letter-spacing:-0.5px;">esGEO</h1>
    <p style="color:#a0aec0;margin:8px 0 0;">Bienvenido al curso</p>
  </div>
  <div style="padding:32px;color:#1f2937;font-size:16px;line-height:1.6;">
    <p style="margin:0 0 16px;">Hola,</p>
    <p style="margin:0 0 16px;">Soy Eric, de esGEO.</p>
    <p style="margin:0 0 16px;">
      Bienvenido. Te he apuntado para recibir el contenido gratuito de
      <strong>Generative Engine Optimization</strong> — el método para que
      ChatGPT, Perplexity y Claude citen tu web como fuente.
    </p>
    <p style="margin:0 0 24px;">
      Empieza por el módulo gratuito <strong>F0</strong>:<br/>
      <a href="https://esgeo.ai/curso/f0" style="color:#2563eb;text-decoration:none;font-weight:600;">esgeo.ai/curso/f0 →</a>
    </p>
    <p style="margin:0 0 16px;">Si tienes cualquier duda, respóndeme directamente.</p>
    <p style="margin:24px 0 0;color:#374151;">Eric<br/>
      <a href="mailto:${REPLY_TO}" style="color:#2563eb;text-decoration:none;">${REPLY_TO}</a>
    </p>
  </div>
  <div style="background:#f8fafc;padding:20px;text-align:center;border-top:1px solid #e2e8f0;">
    <p style="color:#9ca3af;font-size:12px;margin:0 0 8px;">© esGEO — esgeo.ai</p>
    <p style="color:#9ca3af;font-size:11px;margin:0;">
      ¿No quieres recibir más emails? <a href="https://esgeo.ai/unsubscribe" style="color:#9ca3af;">Darse de baja</a>
    </p>
  </div>
</div>
</body></html>`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(req, res);
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { email, source, unsubscribe } = (req.body || {}) as {
      email?: string;
      source?: string;
      unsubscribe?: boolean;
    };

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ error: "Email inválido" });
    }
    const normalizedEmail = email.toLowerCase().trim();

    // 1. Add (or update) the contact in the Audience
    const contactRes = await resendFetch(`/audiences/${AUDIENCE_ID}/contacts`, {
      method: "POST",
      body: JSON.stringify({
        email: normalizedEmail,
        unsubscribed: !!unsubscribe,
      }),
    });

    // Resend returns 201 on create OR 200 with id on existing; both OK.
    // Some Resend deployments return 409 on duplicate — also OK for our use case.
    if (!contactRes.ok && contactRes.status !== 409) {
      const t = await contactRes.text();
      console.error(`[capture-lead] Resend audience error ${contactRes.status}: ${t}`);
    }

    // 2. If unsubscribe → don't send a welcome email
    if (unsubscribe) {
      console.log(`[capture-lead] unsubscribed: ${normalizedEmail}`);
      return res.status(200).json({ ok: true, unsubscribed: true });
    }

    // 3. Send welcome email
    const emailRes = await resendFetch("/emails", {
      method: "POST",
      body: JSON.stringify({
        from: SENDER,
        to: [normalizedEmail],
        reply_to: REPLY_TO,
        subject: "Bienvenido a esGEO — tu primer módulo te espera",
        html: welcomeEmail(),
        tags: [{ name: "kind", value: "welcome" }, { name: "source", value: source || "unknown" }],
      }),
    });

    if (!emailRes.ok) {
      const t = await emailRes.text();
      console.error(`[capture-lead] Resend email error ${emailRes.status}: ${t}`);
      // Lead is in audience, just couldn't email — partial success
      return res.status(200).json({ ok: true, email_sent: false });
    }

    const emailData = await emailRes.json();
    console.log(`[capture-lead] welcome sent to ${normalizedEmail}, id=${emailData.id}`);

    return res.status(200).json({ ok: true, email_sent: true, email_id: emailData.id });
  } catch (err) {
    console.error("[capture-lead] error:", err);
    return res.status(500).json({ error: (err as Error).message || "Internal error" });
  }
}
