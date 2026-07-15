/**
 * GET /api/email-sequence — MASTERPLAN F3-1 / F3-2
 *
 * Cron diario (vercel.json → "crons": 09:00 UTC) que procesa:
 *   1. La secuencia de nurture E2-E5 sobre public.leads (día 3/7/12/18 tras el alta).
 *   2. La petición de testimonio a compradores (+7 días) sobre public.purchases.
 *
 * Port de la edge function legacy supabase/functions/process-email-sequence.
 * La lógica pura (calendario, selectores, HTML) vive en ./_lib/sequence-logic.mjs
 * y se testea con `node scripts/test-email-sequence.mjs`.
 *
 * Protección: patrón estándar de Vercel Cron — la petición debe llevar
 * `Authorization: Bearer ${CRON_SECRET}` (Vercel lo añade automáticamente a los
 * crons cuando la env var CRON_SECRET existe en el proyecto).
 *
 * Env vars requeridas:
 *   - CRON_SECRET
 *   - SUPABASE_URL (o VITE_SUPABASE_URL, ya presente para el build del front)
 *   - SUPABASE_SERVICE_ROLE_KEY
 *   - RESEND_API_KEY
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";
import {
  selectNextEmail,
  isTestimonialDue,
  buildTestimonialEmail,
  TESTIMONIAL_SUBJECT,
  TESTIMONIAL_MAX_DAYS,
  TESTIMONIAL_MIN_DAYS,
} from "./_lib/sequence-logic.mjs";

const SENDER = "Eric de esGEO <curso@esgeo.ai>";
const REPLY_TO = "hola@esgeo.ai";
const MS_PER_DAY = 24 * 60 * 60 * 1000;

async function sendResendEmail(
  apiKey: string,
  to: string,
  subject: string,
  html: string,
  tags: Array<{ name: string; value: string }>
): Promise<{ ok: boolean; error?: string }> {
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "esGEO-email-sequence/1.0",
    },
    body: JSON.stringify({ from: SENDER, to: [to], reply_to: REPLY_TO, subject, html, tags }),
  });
  if (!r.ok) return { ok: false, error: `Resend ${r.status}: ${await r.text()}` };
  return { ok: true };
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // ── Auth: solo el cron de Vercel (Authorization: Bearer CRON_SECRET) ──
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) {
    console.error("[email-sequence] CRON_SECRET not configured");
    return res.status(500).json({ error: "CRON_SECRET not configured" });
  }
  if (req.headers.authorization !== `Bearer ${cronSecret}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const resendKey = process.env.RESEND_API_KEY;
  if (!supabaseUrl || !serviceRoleKey || !resendKey) {
    console.error("[email-sequence] missing env vars", {
      supabaseUrl: !!supabaseUrl,
      serviceRoleKey: !!serviceRoleKey,
      resendKey: !!resendKey,
    });
    return res.status(500).json({ error: "Missing env vars (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY / RESEND_API_KEY)" });
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const now = new Date();

  try {
    // ── 1. Secuencia E2-E5 (leads con emails_sent 1-4 pendientes) ──
    const { data: leads, error: queryError } = await supabase
      .from("leads")
      .select("id, email, emails_sent, created_at, unsubscribed, converted")
      .eq("unsubscribed", false)
      .eq("converted", false)
      .gte("emails_sent", 1)
      .lt("emails_sent", 5)
      .order("created_at", { ascending: true })
      .limit(100);

    if (queryError) throw new Error(`leads query error: ${queryError.message}`);

    let sent = 0;
    let skipped = 0;
    const errors: string[] = [];

    for (const lead of leads || []) {
      const next = selectNextEmail(lead, now);
      if (!next) {
        skipped++;
        continue;
      }
      const result = await sendResendEmail(resendKey, lead.email, next.subject, next.html, [
        { name: "sequence", value: "welcome" },
        { name: "email_number", value: String(next.emailNumber) },
      ]);
      if (result.ok) {
        await supabase
          .from("leads")
          .update({ emails_sent: next.emailNumber, last_email_sent_at: now.toISOString() })
          .eq("id", lead.id);
        sent++;
      } else {
        errors.push(`${lead.email}: ${result.error}`);
      }
      await sleep(100); // rate limit Resend
    }

    // ── 2. Testimonio a compradores (+7 días, F3-2) ──
    let testimonialsSent = 0;
    const testimonialErrors: string[] = [];
    try {
      const minDate = new Date(now.getTime() - TESTIMONIAL_MAX_DAYS * MS_PER_DAY).toISOString();
      const maxDate = new Date(now.getTime() - TESTIMONIAL_MIN_DAYS * MS_PER_DAY).toISOString();
      const { data: purchases, error: purchasesError } = await supabase
        .from("purchases")
        .select("id, customer_email, status, testimonial_requested, created_at")
        .eq("status", "completed")
        .eq("testimonial_requested", false)
        .gte("created_at", minDate)
        .lte("created_at", maxDate)
        .limit(50);

      if (purchasesError) throw new Error(`purchases query error: ${purchasesError.message}`);

      for (const purchase of purchases || []) {
        if (!isTestimonialDue(purchase, now)) continue;
        const result = await sendResendEmail(
          resendKey,
          purchase.customer_email as string,
          TESTIMONIAL_SUBJECT,
          buildTestimonialEmail(purchase.customer_email as string),
          [{ name: "sequence", value: "testimonial" }]
        );
        if (result.ok) {
          await supabase.from("purchases").update({ testimonial_requested: true }).eq("id", purchase.id);
          testimonialsSent++;
        } else {
          testimonialErrors.push(`${purchase.customer_email}: ${result.error}`);
        }
        await sleep(100);
      }
    } catch (e) {
      // No crítico: la secuencia de leads ya se procesó.
      console.warn("[email-sequence] testimonial processing error:", (e as Error).message);
      testimonialErrors.push((e as Error).message);
    }

    console.log(
      `[email-sequence] leads: ${sent} sent, ${skipped} skipped, ${errors.length} errors · testimonials: ${testimonialsSent} sent`
    );

    return res.status(200).json({
      processed: (leads || []).length,
      sent,
      skipped,
      errors: errors.slice(0, 5),
      testimonials_sent: testimonialsSent,
      testimonial_errors: testimonialErrors.slice(0, 5),
    });
  } catch (err) {
    console.error("[email-sequence] error:", err);
    return res.status(500).json({ error: (err as Error).message || "Internal error" });
  }
}
