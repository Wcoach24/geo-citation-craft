import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Mail, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SUPPORT_EMAIL } from '@/data/modules';
import { trackEvent } from '@/lib/analytics';

export default function PurchaseSuccessPage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  // product/amount reales, puestos por api/checkout.ts en la success_url
  const product = searchParams.get('product');
  const amountParam = searchParams.get('amount');

  useEffect(() => {
    if (!sessionId) return;
    // Dedupe: un solo purchase_complete por sesión de Stripe, aunque recarguen la página.
    // localStorage solo dentro del useEffect (no corre en SSR); try/catch por modo privado.
    const dedupeKey = `purchase_tracked_${sessionId}`;
    try {
      if (localStorage.getItem(dedupeKey)) return;
      localStorage.setItem(dedupeKey, new Date().toISOString());
    } catch {
      // localStorage no disponible: trackea igualmente (peor duplicar que perder el evento)
    }
    const amount = Number(amountParam);
    trackEvent.purchaseComplete(
      product || 'unknown',
      Number.isFinite(amount) && amountParam !== null ? amount : 0
    );
  }, [sessionId, product, amountParam]);

  if (!sessionId) {
    return (
      <div className="min-h-screen bg-background">
        <Helmet><title>Error - Curso GEO</title></Helmet>
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <Card className="border-destructive">
              <CardHeader>
                <div className="flex items-center gap-2 text-destructive">
                  <AlertCircle className="h-6 w-6" />
                  <CardTitle>Sesión no encontrada</CardTitle>
                </div>
                <CardDescription>No se encontró información de la sesión de pago.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  Si realizaste el pago correctamente, recibirás un email con los PDFs adjuntos en los próximos minutos.
                  Revisa también tu carpeta de spam. Si no lo recibes, contacta con <strong>{SUPPORT_EMAIL}</strong>
                </p>
                <Button asChild className="w-full">
                  <Link to="/">Volver al inicio</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>¡Pago completado! - Curso GEO</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="border-success">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-success/10 p-3">
                  <CheckCircle className="h-16 w-16 text-success" />
                </div>
              </div>
              <CardTitle className="text-3xl">¡Pago completado!</CardTitle>
              <CardDescription className="text-lg">
                Tu compra se ha procesado correctamente
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Primary message: check email (honesto: los PDFs van ADJUNTOS, no hay enlaces que caduquen) */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
                <Mail className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Revisa tu email</h3>
                <p className="text-sm text-muted-foreground">
                  Los <strong>5 PDFs van adjuntos al email</strong> que acabas de recibir.
                  Son tuyos para siempre: guárdalos en tu equipo cuando puedas.
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Revisa también la carpeta de spam o correo no deseado.
                </p>
              </div>

              {/* Onboarding: por dónde empezar y primer hito medible */}
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-medium text-sm mb-2">Por dónde empezar</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Empieza por <strong>F1, capítulo 1</strong> (30 min).</li>
                  <li>
                    • Tu primer hito: vuelve a auditar tu web tras aplicar F1-F2 y compara tu
                    nota.
                  </li>
                  <li>• Cualquier duda, responde al email de compra y llega directamente.</li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <Button asChild className="w-full">
                  <Link to="/geo-score">Auditar mi web ahora (nota de partida)</Link>
                </Button>
                <Button asChild variant="ghost" className="w-full">
                  <Link to="/">Volver al inicio</Link>
                </Button>
              </div>

              <p className="text-xs text-center text-muted-foreground">
                ¿No has recibido el email? Contacta con <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary underline">{SUPPORT_EMAIL}</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
