import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SUPPORT_EMAIL = "hola@esgeo.ai";
const BRAND_NAME = "esGEO";

interface SendEmailRequest {
  email: string;
  accessToken: string;
  downloadUrls: Record<string, string>;
  productType: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Internal auth: only allow calls from other edge functions using service_role_key
  const authHeader = req.headers.get("Authorization");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
  if (!authHeader || authHeader !== `Bearer ${serviceRoleKey}`) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const { email, accessToken, downloadUrls, productType }: SendEmailRequest = await req.json();

    console.log(`Preparing purchase email for: ${email}`);

    const moduleLinks = Object.entries(downloadUrls)
      .map(([moduleId, url]) => `Módulo ${moduleId.toUpperCase()}: ${url}`)
      .join('\n');

    const emailContent = `
¡Gracias por tu compra!

Has adquirido ${productType === 'complete' ? 'el curso completo' : 'un módulo individual'} de ${BRAND_NAME}.

ENLACES DE ACCESO:
${moduleLinks}

Este enlace es válido por 90 días. Guárdalo para acceder a tus descargas en cualquier momento.

¿Necesitas ayuda? Contáctanos en ${SUPPORT_EMAIL}

Saludos,
Equipo ${BRAND_NAME}
    `;

    // NOTE: Email sending is not yet configured.
    // To enable real email delivery, add a RESEND_API_KEY secret and uncomment below.
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (RESEND_API_KEY) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: `${BRAND_NAME} <noreply@esgeo.ai>`,
          to: email,
          subject: `¡Tu acceso a ${BRAND_NAME} está listo!`,
          text: emailContent
        })
      });
      if (!res.ok) {
        console.error('Resend API error:', await res.text());
      } else {
        console.log('Email sent successfully via Resend');
      }
    } else {
      console.warn('[STUB] RESEND_API_KEY not configured. Email NOT sent. Content:', emailContent);
    }

    return new Response(JSON.stringify({ 
      success: true,
      message: RESEND_API_KEY ? 'Email sent' : 'Email logged (RESEND_API_KEY not configured)'
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    console.error("Error in send-purchase-email:", error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : String(error) 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
