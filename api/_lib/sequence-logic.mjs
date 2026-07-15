/**
 * api/_lib/sequence-logic.mjs — MASTERPLAN F3-1 / F3-2
 *
 * Lógica PURA de la secuencia de email (sin red, sin Deno, sin process.env):
 *   - SEQUENCE: calendario E2-E5 (día 3/7/12/18 tras el alta) + HTML de cada email.
 *   - selectNextEmail(lead, now): decide qué email toca enviar a un lead (o null).
 *   - isTestimonialDue(purchase, now): decide si toca pedir testimonio (+7 días).
 *
 * Portado de supabase/functions/process-email-sequence/index.ts (legacy Deno).
 * Es un .mjs plano (no .ts) a propósito: lo importan tanto la función Vercel
 * api/email-sequence.ts como el test scripts/test-email-sequence.mjs con
 * `node` a secas (sin transpilar), en cualquier versión de Node.
 */

// ── Sequence schedule: emails_sent → { daysAfter, subject, build } ──────────
// E1 (emails_sent=0→1) se envía al capturar el lead — lo hace api/capture-lead.ts.
export const SEQUENCE = {
  1: {
    daysAfter: 3,
    subject: "GEO vs SEO: por qué Google ya no es suficiente",
    build: buildE2,
  },
  2: {
    daysAfter: 7,
    subject: "Dato: las estadísticas aumentan la citabilidad un +41%",
    build: buildE3,
  },
  3: {
    daysAfter: 12,
    subject: "El error que comete el 90% al optimizar para IA",
    build: buildE4,
  },
  4: {
    daysAfter: 18,
    subject: "¿Listo para que la IA recomiende tu web?",
    build: buildE5,
  },
};

const MS_PER_DAY = 24 * 60 * 60 * 1000;

/**
 * Selector puro del siguiente email de la secuencia para un lead.
 * @param {{ email: string, emails_sent: number, created_at: string|Date, unsubscribed?: boolean, converted?: boolean }} lead
 * @param {Date} [now]
 * @returns {{ emailNumber: number, subject: string, html: string } | null}
 */
export function selectNextEmail(lead, now = new Date()) {
  if (!lead || lead.unsubscribed || lead.converted) return null;
  const step = SEQUENCE[lead.emails_sent];
  if (!step) return null; // secuencia completa (>=5) o E1 aún no enviado (0)
  const daysSinceSignup = (now.getTime() - new Date(lead.created_at).getTime()) / MS_PER_DAY;
  if (daysSinceSignup < step.daysAfter) return null;
  return {
    emailNumber: lead.emails_sent + 1,
    subject: step.subject,
    html: step.build(lead.email),
  };
}

// Ventana del email de testimonio: entre 7 y 8 días tras la compra (una pasada
// diaria del cron cae exactamente una vez dentro de la ventana de 24h).
export const TESTIMONIAL_MIN_DAYS = 7;
export const TESTIMONIAL_MAX_DAYS = 8;

/**
 * Selector puro de compradores a los que pedir testimonio (+7 días).
 * @param {{ customer_email?: string|null, status: string, testimonial_requested?: boolean, created_at: string|Date }} purchase
 * @param {Date} [now]
 * @returns {boolean}
 */
export function isTestimonialDue(purchase, now = new Date()) {
  if (!purchase) return false;
  if (purchase.status !== "completed") return false;
  if (purchase.testimonial_requested) return false;
  if (!purchase.customer_email) return false;
  const daysSincePurchase = (now.getTime() - new Date(purchase.created_at).getTime()) / MS_PER_DAY;
  return daysSincePurchase >= TESTIMONIAL_MIN_DAYS && daysSincePurchase <= TESTIMONIAL_MAX_DAYS;
}

// ── Email templates (host canónico www.esgeo.ai — F1-8) ─────────────────────

export function unsubLink(email) {
  return `https://www.esgeo.ai/unsubscribe?email=${encodeURIComponent(email)}`;
}

function emailWrapper(email, content) {
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

export function buildE2(email) {
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
      <a href="https://www.esgeo.ai/radar-ia/que-es-geo-guia-completa" style="display:inline-block;background:#059669;color:#fff;font-weight:700;font-size:15px;padding:12px 28px;border-radius:10px;text-decoration:none;">
        Lee la guía completa de GEO →
      </a>
    </div>
  `);
}

export function buildE3(email) {
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
      <p style="margin:0;font-size:14px;color:#7f1d1d;font-style:italic;">&quot;El marketing de contenidos es muy importante hoy en día...&quot;</p>
    </div>
    <p style="font-size:14px;color:#64748b;margin:0 0 12px;">Escribe:</p>
    <div style="background:#f0fdf4;border-left:4px solid #22c55e;padding:12px 16px;border-radius:0 8px 8px 0;margin:0 0 20px;">
      <p style="margin:0;font-size:14px;color:#14532d;font-style:italic;">&quot;Según el Content Marketing Institute (2025), el 73% de las empresas B2B que implementan marketing de contenidos reportan un ROI positivo en 12 meses...&quot;</p>
    </div>
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0 0 24px;">
      La segunda versión tiene 3x más probabilidades de ser citada por una IA. ¿La diferencia? Datos, fuente, y especificidad.
    </p>
    <div style="text-align:center;margin:0 0 16px;">
      <a href="https://www.esgeo.ai/geo-score" style="display:inline-block;background:#059669;color:#fff;font-weight:700;font-size:15px;padding:12px 28px;border-radius:10px;text-decoration:none;">
        Analiza tu web con el GEO Score →
      </a>
    </div>
  `);
}

export function buildE4(email) {
  return emailWrapper(email, `
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0 0 16px;">
      Hay un error que veo constantemente en webs que intentan optimizar para IA:
    </p>
    <div style="background:#fef2f2;border-radius:12px;padding:20px;margin:0 0 20px;text-align:center;">
      <p style="font-size:18px;font-weight:700;color:#dc2626;margin:0;">&quot;Usar IA para escribir contenido genérico<br/>y esperar que la IA lo cite&quot;</p>
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
      <a href="https://www.esgeo.ai/curso" style="display:inline-block;background:#059669;color:#fff;font-weight:700;font-size:15px;padding:12px 28px;border-radius:10px;text-decoration:none;">
        Ver el programa del curso →
      </a>
    </div>
  `);
}

export function buildE5(email) {
  return emailWrapper(email, `
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0 0 16px;">
      Durante estas semanas te he compartido lo esencial de GEO:
    </p>
    <div style="background:#f8fafc;border-radius:12px;padding:20px;margin:0 0 20px;">
      <p style="margin:0 0 8px;font-size:15px;color:#334155;">🧭 El módulo F0 para diagnosticar tu web en 15 minutos</p>
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
      <p style="color:#fff;font-size:40px;font-weight:800;margin:0 0 8px;">€47</p>
      <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:0 0 20px;">Pago único — 5 módulos, 142 páginas, al instante en tu email</p>
      <a href="https://www.esgeo.ai/curso#comprar" style="display:inline-block;background:#fff;color:#059669;font-weight:700;font-size:16px;padding:14px 36px;border-radius:10px;text-decoration:none;">
        Quiero el curso completo →
      </a>
    </div>

    <p style="font-size:14px;color:#64748b;line-height:1.6;margin:0 0 16px;">
      Garantía medible: aplica F1 y F2 sobre tu web. Si tu nota en el auditor no sube al menos
      20 puntos, escríbenos con el antes y el después y te devolvemos los 47 €.
    </p>
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0 0 16px;">
      Si tienes dudas, responde a este email. Leo todos los mensajes.
    </p>
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0;">
      — Eric
    </p>
  `);
}

// ── Testimonial request email (7 días después de la compra) ─────────────────
export function buildTestimonialEmail(email) {
  return emailWrapper(email, `
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0 0 16px;">
      Hola de nuevo 👋
    </p>
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0 0 16px;">
      Hace una semana que tienes el curso esGEO. ¿Cómo te está yendo?
    </p>
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0 0 16px;">
      Me encantaría saber si te ha resultado útil. Si puedes dedicar 30 segundos a responder este email con:
    </p>
    <div style="background:#f0fdfa;border-radius:12px;padding:20px;margin:0 0 20px;">
      <p style="margin:0 0 8px;font-size:15px;color:#334155;">1. ¿Qué es lo que más te ha servido del curso?</p>
      <p style="margin:0;font-size:15px;color:#334155;">2. ¿Se lo recomendarías a alguien? ¿Por qué?</p>
    </div>
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0 0 16px;">
      Tu feedback nos ayuda a mejorar y a que otros profesionales descubran GEO.
    </p>
    <p style="font-size:16px;color:#1a202c;line-height:1.7;margin:0;">
      — Eric
    </p>
  `);
}

export const TESTIMONIAL_SUBJECT = "¿Qué tal el curso GEO? Tu opinión importa";
