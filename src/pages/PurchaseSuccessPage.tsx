import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Mail, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SUPPORT_EMAIL } from '@/data/modules';

export default function PurchaseSuccessPage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

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
                  Si realizaste el pago correctamente, recibirás un email con los enlaces de descarga en los próximos minutos.
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
              {/* Primary message: check email */}
              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 text-center">
                <Mail className="h-10 w-10 text-blue-500 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Revisa tu email</h3>
                <p className="text-sm text-muted-foreground">
                  En los próximos minutos recibirás un correo con los <strong>enlaces de descarga directa</strong> de tus PDFs.
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Revisa también la carpeta de spam o correo no deseado.
                </p>
              </div>

              {/* What's next */}
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-medium text-sm mb-2">¿Qué incluye el email?</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Enlaces de descarga directa para cada módulo (PDF)</li>
                  <li>• Los enlaces son válidos durante 7 días</li>
                  <li>• Descarga y guarda los archivos en tu dispositivo</li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/curso">Explorar más módulos</Link>
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
