import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SUPPORT_EMAIL } from '@/data/modules';

export default function PurchaseSuccessPage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  // This page is now READ-ONLY. Payment processing is handled exclusively by the Stripe webhook.
  // The user lands here after Stripe redirects them back.

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
                  Si realizaste el pago correctamente, recibirás un email con el acceso a tu contenido.
                  Contacta con soporte si necesitas ayuda: <strong>{SUPPORT_EMAIL}</strong>
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
          <Card className="border-green-500">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-green-500/10 p-3">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
              </div>
              <CardTitle className="text-3xl">¡Pago completado!</CardTitle>
              <CardDescription className="text-lg">
                Tu compra se ha procesado correctamente
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Recibirás un email con el enlace de acceso a tu contenido premium.
                </p>
                <p className="text-sm text-muted-foreground">
                  Si ya tienes cuenta, tu contenido estará disponible en el Dashboard.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <Button asChild className="w-full">
                  <Link to="/dashboard">Ir al Dashboard</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/curso">Ver todos los módulos</Link>
                </Button>
                <Button asChild variant="ghost" className="w-full">
                  <Link to="/">Volver al inicio</Link>
                </Button>
              </div>

              <p className="text-xs text-center text-muted-foreground">
                ¿Problemas? Contacta con <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary underline">{SUPPORT_EMAIL}</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
