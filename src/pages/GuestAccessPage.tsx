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
import { MODULES, getModuleName, SUPPORT_EMAIL } from '@/data/modules';

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
      // Use security definer function instead of direct table access
      const { data, error } = await supabase.rpc('get_guest_access_by_token', {
        p_token: token!,
      });

      if (error || !data || data.length === 0) {
        toast.error('Token de acceso inválido o expirado');
        navigate('/');
        return;
      }

      // Function already filters expired tokens, use first record
      setAccessData(data[0]);
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
      const { data: urlData, error } = await supabase.functions.invoke('download-premium-content', {
        body: { moduleId, accessToken: token }
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
        <title>Acceso a Contenido Premium - esGEO</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
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
                      year: 'numeric', month: 'long', day: 'numeric'
                    })}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Guarda este enlace para acceder a tus descargas en cualquier momento.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Tus Guías PDF</h3>
              <div className="grid gap-4">
                {modules.map((moduleId: string) => (
                  <Card key={moduleId} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2">
                            {getModuleName(moduleId)}
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

            <Card className="bg-muted">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">¿Necesitas ayuda?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Si tienes problemas para acceder a tu contenido, contáctanos:
                </p>
                <a 
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-primary hover:underline text-sm font-medium"
                >
                  {SUPPORT_EMAIL}
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
