import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const RESEND_API_KEY = () => Deno.env.get("RESEND_API_KEY") ?? "";
const FROM_EMAIL = "Eric de esGEO <hola@esgeo.ai>";

// ── Sequence schedule: emails_sent → { days_after_signup, subject, builder } ──
const SEQUENCE: Record<number, { daysAfter: number; subject: string; html: (email: string) => string }> = {
  // E1 (emails_sent=0) is sent immediately on capture — handled by capture-lead
  1: {
    daysAfter: 3,
    subject: "GEO vs SEO: por qué Google ya no es suficiente",
    html: buildE2,
  },
  2: {
    daysAfter: 7,
    subject: "Dato: las estadísticas aumentan la citabilidad un +41%",
    html: buildE3,
  },
  3: {
    daysAfter: 12,
    subject: "El error que comete el 90% al optimizar para IA",
    html: buildE4,
  },
  4: {
    daysAfter: 18,
    subject: "¿Listo para que la IA recomiende tu web?",
    html: buildE5,
  },
};

// ── Email templates ──

function unsubLink(email: string): string {
  return `https://esgeo.ai/unsubscribe?email=${encodeURIComponent(email)}`;
}

function emailWrapper(email: string, content: string): string {
  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f8fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;padding:24px;">
  <div style="background:#fff;padding:32px 24px;border-radius:16px;border:1px solid #e2e8f0;">
    ${content}
  </div>
  <div style="text-align:center;padding:24px;font-size:12px;color:#94a3b8;">
    <p style="margin:0 0 4px;">esGEO — Generative Engine Optimization</p>
    <p style="margin:0;"><a href="${unsubLink(email)}" style="color:#94a3b8;">Darme de baja</a></p>
  </div>
</div>
</body>
</html>`;
}

function buildE2(email: string): string {
  return emailWrapper(email, `
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0 0 16px;">
      ¿Sabías que el <strong>40% de los usuarios</strong> de la Gen Z ya usan IA como buscador principal?
    </p>
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0 0 16px;">
      Mientras el SEO tradicional se enfoca en rankings de Google, <strong>GEO (Generative Engine Optimization)</strong>
      se enfoca en algo diferente: que ChatGPT, Perplexity, Gemini y Claude <em>citen tu web</em> como fuente.
    </p>
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0 0 16px;">
      La diferencia clave:
    </p>
    <div style="background:#f0fdfa;border-left:4px solid #0d9488;padding:16px 20px;border-radius:0 8px 8px 0;margin:0 0 16px;">
      <p style="margin:0 0 8px;font-size:15px;color:#334155;"><strong>SEO:</strong> Compites por posición 1-10 en una lista de links</p>
      <p style="margin:0;font-size:15px;color:#334155;"><strong>GEO:</strong> Compites por ser LA fuente que la IA cita en su respuesta</p>
    </div>
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0 0 24px;">
      Investigadores de <strong>Georgia Tech y Princeton</strong> han demostrado que técnicas específicas de GEO
      pueden aumentar tu visibilidad en respuestas de IA hasta un <strong>115%</strong>.
    </p>
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0 0 24px;">
      El SEO no muere. Pero si solo haces SEO, estás ignorando la mitad del tráfico futuro.
    </p>
    <div style="text-align:center;margin:0 0 16px;">
      <a href="https://esgeo.ai/radar-ia/que-es-geo-guia-completa" style="display:inline-block;background:#059669;color:#fff;font-weight:700;font-size:15px;padding:12px 28px;border-radius:10px;text-decoration:none;">
        Lee la guía completa de GEO →
      </a>
    </div>
  `);
}

function buildE3(email: string): string {
  return emailWrapper(email, `
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0 0 16px;">
      El estudio más citado sobre GEO viene de Princeton y Georgia Tech. Sus hallazgos clave:
    </p>
    <div style="background:#f0fdfa;border-radius:12px;padding:20px;margin:0 0 20px;">
      <p style="margin:0 0 12px;font-size:15px;color:#334155;">📊 <strong>+41% visibilidad</strong> al incluir estadísticas y datos concretos</p>
      <p style="margin:0 0 12px;font-size:15px;color:#334155;">📚 <strong>+31.4% citabilidad</strong> al añadir citas de fuentes académicas</p>
      <p style="margin:0 0 12px;font-size:15px;color:#334155;">💬 <strong>+28% relevancia</strong> al usar lenguaje técnico fluido</p>
      <p style="margin:0;font-size:15px;color:#334155;">🏆 <strong>3.4x más citas</strong> con contenido que responde preguntas directamente</p>
    </div>
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0 0 16px;">
      La conclusión: <strong>no se trata de escribir más, sino de escribir diferente.</strong>
    </p>
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0 0 16px;">
      Ejemplo práctico. En vez de:
    </p>
    <div style="background:#fef2f2;border-left:4px solid #ef4444;padding:12px 16px;border-radius:0 8px 8px 0;margin:0 0 12px;">
      <p style="margin:0;font-size:14px;color:#7f1d1d;font-style:italic;">\"El marketing de contenidos es muy importante hoy en día...\"</p>
    </div>
    <p style="font-size:14px;color:#64748b;margin:0 0 12px;">Escribe:</p>
    <div style="background:#f0fdf4;border-left:4px solid #22c55e;padding:12px 16px;border-radius:0 8px 8px 0;margin:0 0 20px;">
      <p style="margin:0;font-size:14px;color:#14532d;font-style:italic;">\"Según el Content Marketing Institute (2025), el 73% de las empresas B2B que implementan marketing de contenidos reportan un ROI positivo en 12 meses...\"</p>
    </div>
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0 0 24px;">
      La segunda versión tiene 3x más probabilidades de ser citada por una IA. ¿La diferencia? Datos, fuente, y especificidad.
    </p>
    <div style="text-align:center;margin:0 0 16px;">
      <a href="https://esgeo.ai/geo-score" style="display:inline-block;background:#059669;color:#fff;font-weight:700;font-size:15px;padding:12px 28px;border-radius:10px;text-decoration:none;">
        Analiza tu web con el GEO Score →
      </a>
    </div>
  `);
}

function buildE4(email: string): string {
  return emailWrapper(email, `
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0 0 16px;">
      Hay un error que veo constantemente en webs que intentan optimizar para IA:
    </p>
    <div style="background:#fef2f2;border-radius:12px;padding:20px;margin:0 0 20px;text-align:center;">
      <p style="font-size:18px;font-weight:700;color:#dc2626;margin:0;">\"Usar IA para escribir contenido genérico<br/>y esperar que la IA lo cite\"</p>
    </div>
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0 0 16px;">
      La ironía: los modelos de IA están entrenados para detectar contenido genérico.
      Si tu contenido suena igual que los otros 10.000 artículos sobre el mismo tema,
      <strong>la IA no tiene razón para citarte a ti</strong>.
    </p>
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0 0 16px;">
      Lo que funciona es exactamente lo contrario:
    </p>
    <div style="background:#f0fdfa;border-radius:12px;padding:20px;margin:0 0 20px;">
      <p style="margin:0 0 12px;font-size:15px;color:#334155;">✅ <strong>Datos propios</strong> — Encuestas, análisis, métricas reales de tu industria</p>
      <p style="margin:0 0 12px;font-size:15px;color:#334155;">✅ <strong>Frameworks originales</strong> — Metodologías con nombre propio que solo tú ofreces</p>
      <p style="margin:0 0 12px;font-size:15px;color:#334155;">✅ <strong>Opinión experta</strong> — Posiciones claras respaldadas con evidencia</p>
      <p style="margin:0;font-size:15px;color:#334155;">✅ <strong>Contenido de nicho</strong> — Respuestas específicas que nadie más da</p>
    </div>
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0 0 24px;">
      En el curso de esGEO, el Módulo F3 está dedicado exclusivamente a esto:
      cómo crear contenido que la IA <em>quiera</em> citar porque aporta algo que no existe en ningún otro sitio.
    </p>
    <div style="text-align:center;margin:0 0 16px;">
      <a href="https://esgeo.ai/curso" style="display:inline-block;background:#059669;color:#fff;font-weight:700;font-size:15px;padding:12px 28px;border-radius:10px;text-decoration:none;">
        Ver el programa del curso →
      </a>
    </div>
  `);
}

function buildE5(email: string): string {
  return emailWrapper(email, `
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0 0 16px;">
      Durante esta semana te he compartido lo esencial de GEO:
    </p>
    <div style="background:#f8fafc;border-radius:12px;padding:20px;margin:0 0 20px;">
      <p style="margin:0 0 8px;font-size:15px;color:#334155;">📋 El checklist de 15 puntos para ser citable</p>
      <p style="margin:0 0 8px;font-size:15px;color:#334155;">🔄 La diferencia real entre SEO y GEO</p>
      <p style="margin:0 0 8px;font-size:15px;color:#334155;">📊 Los datos de Princeton sobre qué funciona</p>
      <p style="margin:0;font-size:15px;color:#334155;">⚠️ El error #1 que debes evitar</p>
    </div>
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0 0 16px;">
      Pero esto es solo la superficie. El <strong>Curso esGEO</strong> tiene 5 módulos con 142 páginas
      de contenido premium que cubren todo: desde los fundamentos hasta la implementación técnica avanzada.
    </p>

    <!-- Pricing box -->
    <div style="background:linear-gradient(135deg,#0d9488,#059669);border-radius:16px;padding:32px 24px;text-align:center;margin:0 0 24px;">
      <p style="color:rgba(255,255,255,0.8);font-size:14px;margin:0 0 4px;text-decoration:line-through;">€97</p>
      <p style="color:#fff;font-size:40px;font-weight:800;margin:0 0 8px;">€47</p>
      <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:0 0 20px;">Precio de lanzamiento — 5 módulos, 142 páginas, acceso inmediato</p>
      <a href="https://esgeo.ai/curso#comprar" style="display:inline-block;background:#fff;color:#059669;font-weight:700;font-size:16px;padding:14px 36px;border-radius:10px;text-decoration:none;">
        Quiero el curso completo →
      </a>
    </div>

    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0 0 16px;">
      Si tienes dudas, responde a este email. Leo todos los mensajes.
    </p>
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0;">
      — Eric
    </p>
  `);
}

// ── Main handler ──
serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Auth: only internal calls (service role) or cron
  const authHeader = req.headers.get("Authorization");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
  if (!authHeader || authHeader !== `Bearer ${serviceRoleKey}`) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const apiKey = RESEND_API_KEY();
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "RESEND_API_KEY not configured" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
  );

  try {
    // Get leads that need emails (emails_sent 1-4, meaning E2-E5 pending)
    const { data: leads, error: queryError } = await supabase
      .from("leads")
      .select("id, email, emails_sent, created_at")
      .eq("unsubscribed", false)
      .eq("converted", false)
      .gte("emails_sent", 1)
      .lt("emails_sent", 5)
      .order("created_at", { ascending: true })
      .limit(100);

    if (queryError) {
      throw new Error(`Query error: ${queryError.message}`);
    }

    if (!leads || leads.length === 0) {
      return new Response(JSON.stringify({ processed: 0, message: "No leads to process" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const now = new Date();
    let sent = 0;
    let skipped = 0;
    const errors: string[] = [];

    for (const lead of leads) {
      const nextEmail = SEQUENCE[lead.emails_sent];
      if (!nextEmail) {
        skipped++;
        continue;
      }

      // Check if enough days have passed
      const signupDate = new Date(lead.created_at);
      const daysSinceSignup = (now.getTime() - signupDate.getTime()) / (1000 * 60 * 60 * 24);

      if (daysSinceSignup < nextEmail.daysAfter) {
        skipped++;
        continue;
      }

      // Send email
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: FROM_EMAIL,
            to: lead.email,
            subject: nextEmail.subject,
            html: nextEmail.html(lead.email),
            tags: [
              { name: "sequence", value: "welcome" },
              { name: "email_number", value: String(lead.emails_sent + 1) },
            ],
          }),
        });

        if (res.ok) {
          await supabase
            .from("leads")
            .update({
              emails_sent: lead.emails_sent + 1,
              last_email_sent_at: now.toISOString(),
            })
            .eq("id", lead.id);
          sent++;
        } else {
          const errText = await res.text();
          errors.push(`${lead.email}: ${errText}`);
        }
      } catch (e) {
        errors.push(`${lead.email}: ${e instanceof Error ? e.message : String(e)}`);
      }

      // Rate limit: 100ms between sends
      await new Promise((r) => setTimeout(r, 100));
    }

    console.log(`Sequence processed: ${sent} sent, ${skipped} skipped, ${errors.length} errors`);

    return new Response(
      JSON.stringify({ processed: leads.length, sent, skipped, errors: errors.slice(0, 5) }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in process-email-sequence:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : String(error) }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});
