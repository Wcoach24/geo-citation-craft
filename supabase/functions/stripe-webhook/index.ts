import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, stripe-signature, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const BRAND_NAME = "esGEO";
const SUPPORT_EMAIL = "hola@esgeo.ai";

// PDF files in Supabase Storage bucket "premium-content"
const MODULE_FILES: Record<string, { name: string; file: string }> = {
  f1: { name: "F1 — Fundamentos de Accesibilidad Generativa", file: "F1-Fundamentos-Accesibilidad-Generativa-PREMIUM.pdf" },
  f2: { name: "F2 — Contexto Semántico", file: "F2-Contexto-Semantico-PREMIUM.pdf" },
  f3: { name: "F3 — Autoridad Generativa", file: "F3-Autoridad-Generativa-PREMIUM.pdf" },
  f4: { name: "F4 — Validación Conversacional", file: "F4-Validacion-Conversacional-PREMIUM.pdf" },
  f5: { name: "F5 — Mantenimiento Evolutivo", file: "F5-Mantenimiento-Evolutivo-PREMIUM.pdf" },
};

/**
 * Generate signed download URLs for the given modules.
 * URLs are valid for 7 days (604800 seconds).
 */
async function generateSignedUrls(
  supabase: any,
  moduleIds: string[]
): Promise<Record<string, { name: string; url: string }>> {
  const urls: Record<string, { name: string; url: string }> = {};

  for (const id of moduleIds) {
    const mod = MODULE_FILES[id];
    if (!mod) continue;

    const { data, error } = await supabase.storage
      .from("premium-content")
      .createSignedUrl(mod.file, 604800); // 7 days

    if (error) {
      console.error(`Error generating signed URL for ${id}:`, error);
      continue;
    }

    urls[id] = { name: mod.name, url: data.signedUrl };
  }

  return urls;
}

/**
 * Build branded HTML email with download links.
 */
function buildEmailHtml(
  downloadUrls: Record<string, { name: string; url: string }>,
  productType: string
): string {
  const moduleCards = Object.entries(downloadUrls)
    .map(([id, { name, url }]) => `
      <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 12px;">
        <table width="100%" cellpadding="0" cellspacing="0"><tr>
          <td style="vertical-align: middle;"><strong style="color: #1a1a2e;">${name}</strong></td>
          <td style="text-align: right; vertical-align: middle;">
            <a href="${url}" style="background: #2563eb; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 14px; display: inline-block;">Descargar PDF</a>
          </td>
        </tr></table>
      </div>`)
    .join("");

  const productLabel = productType === "complete"
    ? "el <strong>Curso GEO Completo</strong> (5 módulos)"
    : "tu módulo de <strong>esGEO</strong>";

  return `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f1f5f9;">
<div style="font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
  <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 32px; text-align: center;">
    <h1 style="color: #ffffff; margin: 0; font-size: 28px;">esGEO</h1>
    <p style="color: #a0aec0; margin: 8px 0 0;">Tu curso está listo</p>
  </div>
  <div style="padding: 32px;">
    <p style="font-size: 16px; color: #333; margin-top:0;">¡Gracias por tu compra de ${productLabel}!</p>
    <p style="font-size: 16px; color: #333;">Aquí tienes tus materiales listos para descargar:</p>
    <div style="margin: 24px 0;">
      ${moduleCards}
    </div>
    <div style="background: #fffbeb; border: 1px solid #fbbf24; border-radius: 8px; padding: 16px; margin: 24px 0;">
      <p style="font-size: 14px; color: #92400e; margin: 0;">
        <strong>Importante:</strong> Los enlaces de descarga son válidos durante <strong>7 días</strong>.
        Descarga tus PDFs y guárdalos en tu dispositivo.
      </p>
    </div>
    <p style="font-size: 14px; color: #666;">
      ¿Necesitas ayuda? Escríbenos a <a href="mailto:${SUPPORT_EMAIL}" style="color: #2563eb;">${SUPPORT_EMAIL}</a>
    </p>
  </div>
  <div style="background: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0;">
    <p style="color: #a0aec0; font-size: 12px; margin: 0;">&copy; 2025 esGEO — Optimización para IA Generativa</p>
  </div>
</div>
</body></html>`;
}

/**
 * Send email via Resend API.
 */
async function sendEmail(
  to: string,
  subject: string,
  html: string
): Promise<boolean> {
  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
  if (!RESEND_API_KEY) {
    console.warn("[STUB] RESEND_API_KEY not configured. Email NOT sent to:", to);
    return false;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${BRAND_NAME} <noreply@esgeo.ai>`,
        to,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend API error:", res.status, errText);
      return false;
    }

    console.log("Email sent successfully to:", to);
    return true;
  } catch (err) {
    console.error("Email send error:", err);
    return false;
  }
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "");

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // 1. Verify Stripe signature
    const signature = req.headers.get("stripe-signature");
    if (!signature) {
      console.error("Missing stripe-signature header");
      return new Response("Missing signature", { status: 400 });
    }

    const body = await req.text();
    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        Deno.env.get("STRIPE_WEBHOOK_SECRET") || ""
      );
    } catch (err) {
      console.error("Webhook signature verification failed:", err);
      return new Response("Invalid signature", { status: 400 });
    }

    console.log(`Processing webhook event: ${event.type}`);

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log(`Checkout completed: ${session.id}`);

        // 2. Extract info from session
        const {
          product_type,
          module_id,
          user_id,
          guest_email,
          stripe_product_id,
          stripe_price_id,
        } = session.metadata || {};

        // Get email: prefer customer_details (always filled by Stripe), fallback to metadata
        const customerEmail =
          session.customer_details?.email ||
          guest_email ||
          session.customer_email ||
          "";

        if (!customerEmail) {
          console.error("No customer email found in session");
          return new Response("No email", { status: 400 });
        }

        if (!product_type) {
          console.error("Missing product_type in metadata");
          return new Response("Missing metadata", { status: 400 });
        }

        console.log(`Customer: ${customerEmail}, Product: ${product_type}, Module: ${module_id || "all"}`);

        // 3. Record purchase in database
        const purchaseData: any = {
          stripe_payment_intent_id: session.payment_intent,
          stripe_product_id: stripe_product_id || `inline_${product_type}`,
          stripe_price_id: stripe_price_id || "price_inline",
          product_type,
          module_id: module_id || null,
          amount: session.amount_total || 0,
          currency: session.currency || "eur",
          status: "completed",
          user_id: user_id || null,
        };

        const { data: purchase, error: purchaseError } = await supabaseClient
          .from("purchases")
          .insert(purchaseData)
          .select()
          .single();

        if (purchaseError) {
          console.error("Error recording purchase:", purchaseError);
          // Don't fail the webhook — Stripe would retry. Log and continue.
        } else {
          console.log(`Purchase recorded: ${purchase.id}`);
        }

        // 4. Grant access in user_access table (if user is registered)
        if (user_id) {
          const moduleIds = product_type === "complete"
            ? ["f1", "f2", "f3", "f4", "f5"]
            : module_id ? [module_id] : [];

          const accessRecords = moduleIds.map((mid) => ({
            user_id,
            module_id: mid,
            access_type: product_type === "complete" ? "complete" : "individual",
            purchase_id: purchase?.id || null,
          }));

          if (accessRecords.length > 0) {
            const { error: accessError } = await supabaseClient
              .from("user_access")
              .upsert(accessRecords, {
                onConflict: "user_id,module_id",
                ignoreDuplicates: false,
              });

            if (accessError) {
              console.error("Error granting access:", accessError);
            } else {
              console.log(`Access granted for ${moduleIds.join(", ")}`);
            }
          }
        }

        // 5. Generate signed download URLs
        const moduleIds = product_type === "complete"
          ? ["f1", "f2", "f3", "f4", "f5"]
          : module_id ? [module_id] : [];

        const downloadUrls = await generateSignedUrls(supabaseClient, moduleIds);
        console.log(`Generated ${Object.keys(downloadUrls).length} signed URLs`);

        // 6. Send email with download links
        const emailHtml = buildEmailHtml(downloadUrls, product_type);
        const subject = product_type === "complete"
          ? `📚 Tu Curso GEO Completo está listo para descargar`
          : `📄 Tu módulo ${MODULE_FILES[module_id]?.name || module_id} está listo`;

        const emailSent = await sendEmail(customerEmail, subject, emailHtml);
        console.log(`Email ${emailSent ? "sent" : "NOT sent"} to ${customerEmail}`);

        // 7. Also record in guest_access for tracking (regardless of user type)
        try {
          await supabaseClient.from("guest_access").insert({
            email: customerEmail,
            access_token: crypto.randomUUID(),
            purchase_id: purchase?.id || null,
            product_type,
            module_id: module_id || null,
            expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          });
        } catch (e) {
          // Non-critical — just tracking
          console.warn("guest_access insert failed (non-critical):", e);
        }

        break;
      }

      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log(`Payment failed: ${paymentIntent.id}`);

        const { error } = await supabaseClient
          .from("purchases")
          .update({ status: "failed" })
          .eq("stripe_payment_intent_id", paymentIntent.id);

        if (error) {
          console.error("Error updating failed payment:", error);
        }
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error in webhook handler:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : String(error),
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
