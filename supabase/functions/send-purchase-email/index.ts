import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

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

  try {
    const { email, accessToken, downloadUrls, productType }: SendEmailRequest = await req.json();

    console.log(`Sending purchase email to: ${email}`);

    // TODO: Integrate with Resend or your email service
    // For now, we'll just log the email content
    
    const moduleLinks = Object.entries(downloadUrls)
      .map(([moduleId, url]) => `Módulo ${moduleId.toUpperCase()}: ${url}`)
      .join('\n');

    const emailContent = `
¡Gracias por tu compra!

Has adquirido ${productType === 'complete' ? 'el curso completo' : 'un módulo individual'} de GEO Mastery.

ENLACES DE ACCESO:
${moduleLinks}

Este enlace es válido por 90 días. Guárdalo para acceder a tus descargas en cualquier momento.

¿Necesitas ayuda? Contáctanos en soporte@geomastery.es

Saludos,
Equipo GEO Mastery
    `;

    console.log('Email content prepared:', emailContent);

    // Here you would integrate with Resend:
    // const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    // if (RESEND_API_KEY) {
    //   await fetch('https://api.resend.com/emails', {
    //     method: 'POST',
    //     headers: {
    //       'Authorization': `Bearer ${RESEND_API_KEY}`,
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       from: 'GEO Mastery <noreply@geomastery.es>',
    //       to: email,
    //       subject: '¡Tu acceso a GEO Mastery está listo!',
    //       text: emailContent
    //     })
    //   });
    // }

    return new Response(JSON.stringify({ 
      success: true,
      message: 'Email queued for sending'
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