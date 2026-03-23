import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const RESEND_API_KEY = () => Deno.env.get("RESEND_API_KEY") ?? "";
const FROM_EMAIL = "Álvaro de esGEO <hola@esgeo.ai>";

// ── E1: Welcome email with GEO Checklist ──
function getWelcomeEmailHtml(email: string): string {
  const unsubUrl = `https://esgeo.ai/unsubscribe?email=${encodeURIComponent(email)}`;
  return `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f8fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;padding:24px;">

  <!-- Header -->
  <div style="background:linear-gradient(135deg,#0d9488,#059669);border-radius:16px 16px 0 0;padding:32px 24px;text-align:center;">
    <h1 style="color:#fff;font-size:24px;margin:0;">Tu Checklist GEO está aquí</h1>
    <p style="color:rgba(255,255,255,0.85);font-size:14px;margin:8px 0 0;">El primer paso para que la IA cite tu web</p>
  </div>

  <!-- Body -->
  <div style="background:#fff;padding:32px 24px;border-radius:0 0 16px 16px;border:1px solid #e2e8f0;border-top:none;">

    <p style="font-size:16px;color:#1a202c;line-height:1.6;margin:0 0 20px;">
      Hola 👋
    </p>
    <p style="font-size:16px;color:#1a202c;line-height:1.6;margin:0 0 20px;">
      Soy Álvaro, creador de esGEO. Gracias por descargar el checklist.
    </p>
    <p style="font-size:16px;color:#1a202c;line-height:1.6;margin:0 0 24px;">
      Aquí tienes tu <strong>Checklist GEO — 15 puntos</strong> para hacer tu web citable por ChatGPT, Perplexity, Gemini y Claude:
    </p>

    <!-- Checklist -->
    <div style="background:#f0fdfa;border:1px solid #99f6e4;border-radius:12px;padding:24px;margin:0 0 24px;">
      <p style="font-weight:700;color:#0d9488;font-size:14px;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 16px;">Estructura y Contenido</p>
      <p style="margin:0 0 8px;font-size:14px;color:#334155;">☐ Responde preguntas concretas en formato Q&A</p>
      <p style="margin:0 0 8px;font-size:14px;color:#334155;">☐ Incluye datos, estadísticas y cifras citables</p>
      <p style="margin:0 0 8px;font-size:14px;color:#334155;">☐ Usa definiciones claras en las primeras líneas</p>
      <p style="margin:0 0 8px;font-size:14px;color:#334155;">☐ Estructura con H2/H3 descriptivos (no creativos)</p>
      <p style="margin:0 0 16px;font-size:14px;color:#334155;">☐ Añade listas y tablas comparativas</p>

      <p style="font-weight:700;color:#0d9488;font-size:14px;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 16px;">SEO Técnico para IA</p>
      <p style="margin:0 0 8px;font-size:14px;color:#334155;">☐ Schema markup (Article, FAQPage, HowTo)</p>
      <p style="margin:0 0 8px;font-size:14px;color:#334155;">☐ Crea un archivo /llms.txt accesible</p>
      <p style="margin:0 0 8px;font-size:14px;color:#334155;">☐ Meta descriptions que respondan la query</p>
      <p style="margin:0 0 8px;font-size:14px;color:#334155;">☐ Canonical URLs correctas</p>
      <p style="margin:0 0 16px;font-size:14px;color:#334155;">☐ Sitemap actualizado con fechas recientes</p>

      <p style="font-weight:700;color:#0d9488;font-size:14px;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 16px;">Autoridad y Citabilidad</p>
      <p style="margin:0 0 8px;font-size:14px;color:#334155;">☐ Cita fuentes académicas y datos de terceros</p>
      <p style="margin:0 0 8px;font-size:14px;color:#334155;">☐ Menciona tu marca como fuente autorizada</p>
      <p style="margin:0 0 8px;font-size:14px;color:#334155;">☐ Incluye autoría visible (quién escribe)</p>
      <p style="margin:0 0 8px;font-size:14px;color:#334155;">☐ Genera backlinks desde sitios relevantes</p>
      <p style="margin:0 0 8px;font-size:14px;color:#334155;">☐ Publica contenido original (no reescrituras)</p>
    </div>

    <p style="font-size:16px;color:#1a202c;line-height:1.6;margin:0 0 24px;">
      <strong>Tip rápido:</strong> Los puntos 1-3 son los más impactantes. Según investigación de Princeton, añadir estadísticas aumenta la citabilidad un <strong>+41%</strong>.
    </p>

    <!-- CTA -->
    <div style="text-align:center;margin:0 0 24px;">
      <a href="https://esgeo.ai/curso" style="display:inline-block;background:#059669;color:#fff;font-weight:700;font-size:16px;padding:14px 32px;border-radius:10px;text-decoration:none;">
        Aprende GEO a fondo →
      </a>
      <p style="font-size:13px;color:#94a3b8;margin:8px 0 0;">El curso completo con las 15 técnicas explicadas paso a paso</p>
    </div>

    <p style="font-size:14px;color:#64748b;line-height:1.6;margin:0;">
      En los próximos días te enviaré más contenido práctico sobre GEO. Sin spam, solo valor.
    </p>
  </div>

  <!-- Footer -->
  <div style="text-align:center;padding:24px;font-size:12px;color:#94a3b8;">
    <p style="margin:0 0 4px;">esGEO — Generative Engine Optimization</p>
    <p style="margin:0;"><a href="${unsubUrl}" style="color:#94a3b8;">Darme de baja</a></p>
  </div>

</div>
</body>
</html>`;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, source = "inline", name } = await req.json();

    if (!email || !email.includes("@")) {
      return new Response(JSON.stringify({ error: "Email inválido" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Upsert lead (don't fail on duplicate)
    const { data: lead, error: dbError } = await supabase
      .from("leads")
      .upsert(
        { email: email.toLowerCase().trim(), source, name },
        { onConflict: "email", ignoreDuplicates: true }
      )
      .select()
      .single();

    if (dbError && dbError.code !== "23505") {
      console.error("DB error:", dbError);
      // Don't fail the request — still try to send email
    }

    // Send welcome email (E1) via Resend
    const apiKey = RESEND_API_KEY();
    if (apiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: email.toLowerCase().trim(),
          subject: "Tu Checklist GEO — 15 puntos para ser citado por IA",
          html: getWelcomeEmailHtml(email),
          tags: [{ name: "sequence", value: "welcome" }, { name: "email_number", value: "1" }],
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Resend error:", errText);
        // Still return success to frontend — email failure shouldn't block UX
      } else {
        console.log("Welcome email sent to:", email);
        // Update emails_sent counter
        if (lead?.id) {
          await supabase
            .from("leads")
            .update({ emails_sent: 1, last_email_sent_at: new Date().toISOString() })
            .eq("id", lead.id);
        }
      }
    } else {
      console.warn("[STUB] RESEND_API_KEY not set. Email not sent.");
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error in capture-lead:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : String(error) }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});
