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
 * F3-1: además del Audience de Resend, el lead se upserta en public.leads
 * (Supabase, service role) para que el cron /api/email-sequence envíe E2-E5.
 * Env vars: SUPABASE_URL (o VITE_SUPABASE_URL) + SUPABASE_SERVICE_ROLE_KEY.
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";

const AUDIENCE_ID = "6f09528e-620e-40b5-926b-4caffec4737c"; // "esGEO Leads"
const SENDER = "Eric de esGEO <curso@esgeo.ai>";
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

/**
 * F3-1: registra el lead en public.leads para la secuencia E2-E5.
 * - Alta: upsert por email con ON CONFLICT DO NOTHING (un lead existente
 *   conserva su progreso emails_sent/created_at). emails_sent=1 porque E1
 *   (welcome) lo envía esta misma función.
 * - Baja: marca unsubscribed=true (el cron deja de enviarle).
 * Nunca lanza: si Supabase falla, la captura en Resend sigue valiendo.
 */
async function storeLeadInSupabase(email: string, source: string | undefined, unsubscribe: boolean) {
  const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error("[capture-lead] Supabase env vars missing — lead NOT stored in public.leads");
    return;
  }
  try {
    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    if (unsubscribe) {
      const { error } = await supabase.from("leads").update({ unsubscribed: true }).eq("email", email);
      if (error) console.error(`[capture-lead] leads unsubscribe error: ${error.message}`);
    } else {
      const { error } = await supabase
        .from("leads")
        .upsert(
          { email, source: source || "unknown", emails_sent: 1, last_email_sent_at: new Date().toISOString() },
          { onConflict: "email", ignoreDuplicates: true }
        );
      if (error) console.error(`[capture-lead] leads upsert error: ${error.message}`);
    }
  } catch (e) {
    console.error("[capture-lead] supabase error:", (e as Error).message);
  }
}

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

function welcomeEmail(): { html: string; text: string } {
  // Plain-text version (critical for Gmail Primary inbox classification)
  const text = `Hola,

Soy Eric. Has dejado tu email en esgeo.ai — gracias.

Te paso el primer módulo gratuito (F0): un diagnóstico rápido para ver si
tu sitio web puede ser citado por ChatGPT, Perplexity o Claude:

https://esgeo.ai/curso/f0

Es lectura de 10 minutos. Si te queda alguna duda, contestando a este
email me llega directamente a mí.

Eric
hola@esgeo.ai

—
Si prefieres no recibir más emails: https://esgeo.ai/unsubscribe`;

  // Minimal HTML: looks like a real person wrote it, not a template.
  // No gradient header, no card design, no big buttons.
  const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#1f2937;line-height:1.55;font-size:15px;max-width:560px;margin:24px auto;padding:0 20px;">
<p>Hola,</p>
<p>Soy Eric. Has dejado tu email en <a href="https://esgeo.ai" style="color:#2563eb;text-decoration:underline;">esgeo.ai</a> — gracias.</p>
<p>Te paso el primer módulo gratuito (F0): un diagnóstico rápido para ver si tu sitio web puede ser citado por ChatGPT, Perplexity o Claude:</p>
<p><a href="https://esgeo.ai/curso/f0" style="color:#2563eb;">https://esgeo.ai/curso/f0</a></p>
<p>Es lectura de 10 minutos. Si te queda alguna duda, contestando a este email me llega directamente a mí.</p>
<p>Eric<br><a href="mailto:hola@esgeo.ai" style="color:#2563eb;">hola@esgeo.ai</a></p>
<p style="color:#9ca3af;font-size:12px;margin-top:32px;border-top:1px solid #e5e7eb;padding-top:16px;">Si prefieres no recibir más emails, <a href="https://esgeo.ai/unsubscribe" style="color:#9ca3af;">date de baja aquí</a>.</p>
</body></html>`;

  return { html, text };
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

    // 1b. F3-1: registrar también en public.leads (fuente del cron E2-E5)
    await storeLeadInSupabase(normalizedEmail, source, !!unsubscribe);

    // 2. If unsubscribe → don't send a welcome email
    if (unsubscribe) {
      console.log(`[capture-lead] unsubscribed: ${normalizedEmail}`);
      return res.status(200).json({ ok: true, unsubscribed: true });
    }

    // 3. Send welcome email — conversational, minimal HTML, plain-text alt to land in Primary inbox
    const { html, text } = welcomeEmail();
    const emailRes = await resendFetch("/emails", {
      method: "POST",
      body: JSON.stringify({
        from: SENDER,
        to: [normalizedEmail],
        reply_to: REPLY_TO,
        subject: "Aquí tienes el F0 gratis",
        html,
        text,
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
