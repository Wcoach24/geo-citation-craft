import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Download, Mail, CheckCircle2, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { toast } from 'sonner';

const GuestAccessPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [accessData, setAccessData] = useState<any>(null);
  const [downloading, setDownloading] = useState<string | null>(null);

  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      navigate('/');
      return;
    }

    verifyAccess();
  }, [token]);

  const verifyAccess = async () => {
    try {
      const { data, error } = await supabase
        .from('guest_access')
        .select('*')
        .eq('access_token', token)
        .single();

      if (error || !data) {
        toast.error('Token de acceso inválido o expirado');
        navigate('/');
        return;
      }

      // Check if expired
      if (new Date(data.expires_at) < new Date()) {
        toast.error('Este enlace de acceso ha expirado');
        navigate('/');
        return;
      }

      setAccessData(data);
    } catch (error) {
      console.error('Error verifying access:', error);
      toast.error('Error al verificar el acceso');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (moduleId: string) => {
    setDownloading(moduleId);
    
    try {
      const filePath = `premium-content/${moduleId}/guia-completa-modulo-${moduleId}.pdf`;
      
      const { data: urlData, error } = await supabase.functions.invoke('generate-download-url', {
        body: { filePath, skipAccessCheck: true }
      });

      if (error) throw error;

      if (urlData.url) {
        window.open(urlData.url, '_blank');
        toast.success('Descarga iniciada');
      }
    } catch (error) {
      console.error('Error downloading:', error);
      toast.error('Error al descargar el archivo');
    } finally {
      setDownloading(null);
    }
  };

  const modules = accessData?.product_type === 'complete'
    ? ['f1', 'f2', 'f3', 'f4', 'f5']
    : [accessData?.module_id];

  const moduleNames: Record<string, string> = {
    f1: 'F1 - Fundamentos de GEO',
    f2: 'F2 - Optimización de Contenido',
    f3: 'F3 - Estructura y Datos',
    f4: 'F4 - Autoridad y Enlaces',
    f5: 'F5 - Experiencia del Usuario'
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Verificando acceso...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Acceso a Contenido Premium - GEO Mastery</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Success Banner */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold text-green-900 mb-2">
                      ¡Acceso Confirmado!
                    </h2>
                    <p className="text-green-800">
                      Tienes acceso completo a tus guías PDF. Descárgalas cuando quieras.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Access Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Información de Acceso
                </CardTitle>
                <CardDescription>
                  Email: {accessData?.email}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>
                    Acceso válido hasta: {new Date(accessData?.expires_at).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Guarda este enlace para acceder a tus descargas en cualquier momento.
                </p>
              </CardContent>
            </Card>

            {/* Download Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Tus Guías PDF</h3>
              <div className="grid gap-4">
                {modules.map((moduleId: string) => (
                  <Card key={moduleId} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2">
                            {moduleNames[moduleId]}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Guía PDF completa • 15-25 páginas
                          </p>
                        </div>
                        <Button
                          onClick={() => handleDownload(moduleId)}
                          disabled={downloading === moduleId}
                          className="ml-4"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          {downloading === moduleId ? 'Descargando...' : 'Descargar'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Help Section */}
            <Card className="bg-muted">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">¿Necesitas ayuda?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Si tienes problemas para acceder a tu contenido, contáctanos:
                </p>
                <a 
                  href="mailto:soporte@geomastery.es"
                  className="text-primary hover:underline text-sm font-medium"
                >
                  soporte@geomastery.es
                </a>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GuestAccessPage;