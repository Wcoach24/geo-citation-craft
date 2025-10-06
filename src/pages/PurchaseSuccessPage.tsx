import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Download, Loader2, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const MODULE_NAMES: Record<string, string> = {
  f1: 'Módulo F1 - Fundamentos de Accesibilidad Generativa',
  f2: 'Módulo F2 - Contexto Semántico',
  f3: 'Módulo F3 - Autoridad Generativa',
  f4: 'Módulo F4 - Validación Conversacional',
  f5: 'Módulo F5 - Mantenimiento Evolutivo',
};

export default function PurchaseSuccessPage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const { toast } = useToast();

  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [moduleIds, setModuleIds] = useState<string[]>([]);
  const [productType, setProductType] = useState<string>('');
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    if (sessionId) {
      processPayment();
    } else {
      setError('No se encontró información de la sesión de pago');
      setIsProcessing(false);
    }
  }, [sessionId]);

  const processPayment = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('process-payment-success', {
        body: { sessionId }
      });

      if (error) throw error;

      console.log('[PURCHASE-SUCCESS] Response from process-payment:', data);
      
      if (data?.success) {
        setModuleIds(data.moduleIds || []);
        setProductType(data.productType || '');
        setAccessToken(data.accessToken || null);
        console.log('[PURCHASE-SUCCESS] Access token received:', data.accessToken);
      } else {
        throw new Error(data?.error || 'Error al procesar el pago');
      }
    } catch (err) {
      console.error('Error processing payment:', err);
      setError(err instanceof Error ? err.message : 'Error al verificar el pago');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = async (moduleId: string) => {
    if (!accessToken) {
      toast({
        title: "Error",
        description: "No se encontró el token de acceso. Por favor contacta con soporte.",
        variant: "destructive",
      });
      return;
    }

    try {
      console.log('[DOWNLOAD] Starting download for module:', moduleId);
      console.log('[DOWNLOAD] Using access token:', accessToken?.substring(0, 10) + '...');
      
      toast({
        title: "Descargando...",
        description: "Por favor espera mientras se descarga tu guía.",
      });

      // Call edge function to get the file
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/download-premium-content`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
          },
          body: JSON.stringify({ 
            moduleId,
            accessToken
          })
        }
      );

      console.log('[DOWNLOAD] Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('[DOWNLOAD] Error response:', errorText);
        throw new Error('Error al descargar el archivo');
      }

      // Get blob from response
      const blob = await response.blob();
      console.log('[DOWNLOAD] Blob size:', blob.size, 'bytes');
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `guia-completa-modulo-${moduleId}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast({
        title: "Descarga completada",
        description: `La guía del ${MODULE_NAMES[moduleId]} se ha descargado correctamente.`,
      });
    } catch (error) {
      console.error('[DOWNLOAD] Error:', error);
      toast({
        title: "Error al descargar",
        description: error instanceof Error ? error.message : "No se pudo descargar el archivo",
        variant: "destructive",
      });
    }
  };

  if (isProcessing) {
    return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Procesando pago - Curso GEO</title>
        </Helmet>
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <Loader2 className="h-16 w-16 animate-spin mx-auto text-primary mb-4" />
            <h1 className="text-2xl font-bold mb-2">Verificando tu pago...</h1>
            <p className="text-muted-foreground">Por favor espera un momento</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Error - Curso GEO</title>
        </Helmet>
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <Card className="border-destructive">
              <CardHeader>
                <div className="flex items-center gap-2 text-destructive">
                  <AlertCircle className="h-6 w-6" />
                  <CardTitle>Error al procesar el pago</CardTitle>
                </div>
                <CardDescription>{error}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  Si realizaste el pago correctamente, por favor contacta con soporte:
                </p>
                <p className="text-sm font-medium">
                  Email: soporte@cursogeo.com
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
        <meta name="description" content="Tu pago se ha procesado correctamente. Descarga tu contenido premium ahora." />
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
              {/* Download buttons for each module */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Descarga tu contenido:</h3>
                {moduleIds.map((moduleId) => (
                  <Button
                    key={moduleId}
                    onClick={() => handleDownload(moduleId)}
                    size="lg"
                    className="w-full"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Descargar {MODULE_NAMES[moduleId] || `Módulo ${moduleId.toUpperCase()}`}
                  </Button>
                ))}
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground text-center">
                  {productType === 'complete' 
                    ? '¡Tienes acceso completo a todos los módulos del Curso GEO!'
                    : '¡Gracias por tu compra! Disfruta del contenido premium.'}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/curso">Ver todos los módulos</Link>
                </Button>
                <Button asChild variant="ghost" className="w-full">
                  <Link to="/">Volver al inicio</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
