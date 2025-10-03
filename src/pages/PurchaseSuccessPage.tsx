import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Download, FileText, Star, ArrowRight, Mail, Loader2, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PurchaseSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const { user, userAccess, refreshUserAccess } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [processingStatus, setProcessingStatus] = useState<'processing' | 'success' | 'error'>('processing');
  const [guestAccessToken, setGuestAccessToken] = useState<string | null>(null);
  const [guestEmail, setGuestEmail] = useState<string | null>(null);
  const [moduleIds, setModuleIds] = useState<string[]>([]);
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (sessionId) {
      processPayment();
    } else {
      setIsLoading(false);
      setProcessingStatus('error');
    }
  }, [sessionId]);

  const processPayment = async () => {
    try {
      setProcessingStatus('processing');
      
      const { data, error } = await supabase.functions.invoke('process-payment-success', {
        body: { sessionId }
      });

      if (error) throw error;

      if (data.success) {
        setProcessingStatus('success');
        setModuleIds(data.moduleIds || []);
        
        if (data.isGuest) {
          setGuestAccessToken(data.accessToken);
          setGuestEmail(data.email);
        } else {
          // Refresh user access for registered users
          await refreshUserAccess();
        }
      } else {
        throw new Error(data.error || 'Error processing payment');
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      setProcessingStatus('error');
      toast({
        title: "Error",
        description: "Hubo un problema al procesar tu compra. Por favor contacta a soporte.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyAccessLink = () => {
    if (guestAccessToken) {
      const accessLink = `${window.location.origin}/guest-access?token=${guestAccessToken}`;
      navigator.clipboard.writeText(accessLink);
      toast({
        title: "¡Copiado!",
        description: "El enlace de acceso se ha copiado al portapapeles"
      });
    }
  };

  const getWelcomeMessage = () => {
    const accessCount = userAccess.length;
    if (accessCount === 5) {
      return {
        title: "¡Felicidades! Tienes acceso completo",
        description: "Ahora puedes acceder a todos los 5 módulos del Curso GEO y todo el contenido premium.",
        badge: "Acceso Completo"
      };
    } else if (accessCount > 0) {
      return {
        title: "¡Perfecto! Tu compra se ha procesado",
        description: `Ahora tienes acceso a ${accessCount} módulo${accessCount > 1 ? 's' : ''} premium del Curso GEO.`,
        badge: `${accessCount} Módulo${accessCount > 1 ? 's' : ''}`
      };
    } else {
      return {
        title: "Compra procesada",
        description: "Tu compra se está procesando. El acceso estará disponible en unos minutos.",
        badge: "Procesando"
      };
    }
  };

  // Loading state
  if (isLoading && processingStatus === 'processing') {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
          <Card className="max-w-md w-full">
            <CardContent className="pt-6 text-center space-y-4">
              <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
              <h2 className="text-xl font-semibold">Procesando tu compra...</h2>
              <p className="text-muted-foreground">Estamos verificando el pago y otorgando acceso. Esto tomará solo unos segundos.</p>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  // Error state
  if (processingStatus === 'error') {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-12">
          <Card className="max-w-2xl mx-auto border-destructive">
            <CardHeader className="text-center">
              <CardTitle className="text-destructive">Hubo un problema</CardTitle>
              <CardDescription>
                No pudimos procesar tu compra automáticamente, pero no te preocupes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-center">
                Tu pago puede haberse procesado correctamente. Por favor:
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Revisa tu email para el enlace de acceso</li>
                <li>• Verifica tu dashboard si tienes cuenta</li>
                <li>• Contacta a soporte si necesitas ayuda</li>
              </ul>
              <div className="flex gap-4 justify-center pt-4">
                <Link to="/dashboard">
                  <Button>Ir al Dashboard</Button>
                </Link>
                <Link to="/ayuda-compra">
                  <Button variant="outline">Obtener Ayuda</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  // Guest checkout success message
  if (!user && guestAccessToken) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto space-y-8">
            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white">
              <CardHeader className="text-center space-y-4 pb-8">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-3xl mb-2">¡Compra Completada!</CardTitle>
                  <CardDescription className="text-lg">
                    Revisa tu email para acceder a tus guías PDF
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border-2 border-primary/20">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Tu enlace de acceso directo
                  </h3>
                  <div className="bg-white rounded p-4 mb-4 border">
                    <code className="text-sm break-all text-muted-foreground">
                      {window.location.origin}/guest-access?token={guestAccessToken}
                    </code>
                  </div>
                  <Button onClick={copyAccessLink} variant="outline" className="w-full">
                    <Copy className="h-4 w-4 mr-2" />
                    Copiar enlace de acceso
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    💡 Guarda este enlace. Te permitirá descargar tus PDFs en cualquier momento durante los próximos 90 días.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    También recibirás un email
                  </h3>
                  <ol className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="font-semibold text-primary">1.</span>
                      <span>Hemos enviado un email a <strong>{guestEmail}</strong></span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-semibold text-primary">2.</span>
                      <span>El email contiene el mismo enlace de acceso</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-semibold text-primary">3.</span>
                      <span>Si no lo recibes, revisa tu carpeta de spam</span>
                    </li>
                  </ol>
                </div>

                <div className="bg-white rounded-lg p-6 border">
                  <h3 className="font-semibold text-lg mb-4">📚 Módulos adquiridos</h3>
                  <div className="flex flex-wrap gap-2">
                    {moduleIds.map(moduleId => (
                      <Badge key={moduleId} variant="default" className="text-sm">
                        Módulo {moduleId.toUpperCase()}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">💡 ¿Quieres más control?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Crea una cuenta gratuita para gestionar todos tus contenidos en un solo lugar
                    </p>
                    <Link to="/auth">
                      <Button variant="outline" size="sm">Crear Cuenta</Button>
                    </Link>
                  </CardContent>
                </Card>

                <div className="text-center space-y-4">
                  <Link to={`/guest-access?token=${guestAccessToken}`}>
                    <Button className="w-full" size="lg">
                      <Download className="h-5 w-5 mr-2" />
                      Acceder a mis descargas ahora
                    </Button>
                  </Link>
                  
                  <p className="text-sm text-muted-foreground">
                    ¿Problemas? <Link to="/ayuda-compra" className="text-primary underline">Centro de ayuda</Link> o{' '}
                    <a href="mailto:soporte@esgeo.ai" className="text-primary underline">contactar soporte</a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  // Registered user success message
  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Iniciar sesión requerido</CardTitle>
            <CardDescription>
              Por favor, inicia sesión para ver tu compra.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/auth">
              <Button className="w-full">Iniciar sesión</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const welcomeMessage = getWelcomeMessage();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-2">{welcomeMessage.title}</h1>
            <p className="text-muted-foreground mb-4">{welcomeMessage.description}</p>
            <Badge variant="default" className="text-lg px-4 py-1">
              {welcomeMessage.badge}
            </Badge>
          </div>

          {/* Quick Access Card */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                ¿Qué puedes hacer ahora?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3 p-4 border rounded-lg">
                  <Download className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Accede a tu Dashboard</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Descarga las guías PDF especializadas de tus módulos.
                    </p>
                    <Link to="/dashboard">
                      <Button size="sm">
                        Ir al Dashboard
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 border rounded-lg">
                  <FileText className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Explora los Módulos</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Lee el contenido completo de tus módulos desbloqueados.
                    </p>
                    <Link to="/curso">
                      <Button size="sm" variant="outline">
                        Ver Curso
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What You Get */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Lo que incluye tu acceso premium</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  "📋 Guías PDF profesionales (15-25 páginas por módulo)",
                  "📚 Metodología práctica paso a paso",
                  "🎯 Casos de estudio reales documentados",
                  "💡 Estrategias de implementación probadas",
                  "🔄 Actualizaciones de contenido incluidas",
                  "⚡ Acceso permanente a todo el material"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card>
            <CardHeader>
              <CardTitle>Próximos pasos recomendados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</div>
                  <div>
                    <h4 className="font-medium">Descarga tus guías PDF</h4>
                    <p className="text-sm text-muted-foreground">Accede a todas las guías profesionales desde tu dashboard.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</div>
                  <div>
                    <h4 className="font-medium">Aplica la metodología</h4>
                    <p className="text-sm text-muted-foreground">Implementa paso a paso las estrategias en tu proyecto.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">3</div>
                  <div>
                    <h4 className="font-medium">Estudia los casos reales</h4>
                    <p className="text-sm text-muted-foreground">Aprende de implementaciones exitosas documentadas en cada guía.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <Link to="/dashboard">
                  <Button className="w-full">
                    Empezar ahora en tu Dashboard Premium
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Support */}
          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p>¿Tienes alguna pregunta? Contacta con nosotros en soporte@esgeo.ai</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSuccessPage;