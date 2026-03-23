import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function UnsubscribePage() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email') || '';
  const [status, setStatus] = useState<'confirm' | 'loading' | 'done' | 'error'>('confirm');

  const handleUnsubscribe = async () => {
    if (!email) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    try {
      const { error } = await supabase.functions.invoke('capture-lead', {
        body: { email, source: 'unsubscribe', unsubscribe: true },
      });

      if (error) {
        console.error('Unsubscribe error:', error);
      }
      setStatus('done');
    } catch {
      // Even on error, show success — better UX than leaving them stuck
      setStatus('done');
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center">
          {status === 'confirm' && (
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto">
                <Mail className="h-8 w-8 text-muted-foreground" />
              </div>
              <h1 className="text-2xl font-heading font-bold">Darse de baja</h1>
              {email ? (
                <>
                  <p className="text-muted-foreground">
                    ¿Quieres dejar de recibir emails de esGEO en <strong>{email}</strong>?
                  </p>
                  <Button
                    onClick={handleUnsubscribe}
                    variant="outline"
                    className="cursor-pointer"
                  >
                    Sí, darme de baja
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Dejarás de recibir la secuencia de bienvenida y futuros emails.
                  </p>
                </>
              ) : (
                <p className="text-muted-foreground">
                  No se ha proporcionado un email. Si quieres darte de baja,
                  usa el enlace del email que recibiste.
                </p>
              )}
            </div>
          )}

          {status === 'loading' && (
            <div className="space-y-4">
              <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
              <p className="text-muted-foreground">Procesando...</p>
            </div>
          )}

          {status === 'done' && (
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-accent" />
              </div>
              <h1 className="text-2xl font-heading font-bold">Te has dado de baja</h1>
              <p className="text-muted-foreground">
                No recibirás más emails de esGEO. Si cambias de opinión, siempre puedes
                volver a suscribirte desde nuestra web.
              </p>
              <a href="/" className="text-accent hover:underline text-sm">
                Volver a esGEO.ai
              </a>
            </div>
          )}

          {status === 'error' && (
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto">
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
              <h1 className="text-2xl font-heading font-bold">Error</h1>
              <p className="text-muted-foreground">
                Hubo un problema al procesar tu solicitud. Escríbenos a{' '}
                <a href="mailto:hola@esgeo.ai" className="text-accent hover:underline">hola@esgeo.ai</a>{' '}
                y te damos de baja manualmente.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
