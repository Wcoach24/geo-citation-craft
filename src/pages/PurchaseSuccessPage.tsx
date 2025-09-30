import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Download, FileText, Star, ArrowRight } from 'lucide-react';

const PurchaseSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const { user, userAccess, refreshUserAccess } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (user && sessionId) {
      // Refresh user access after successful payment
      const refreshAccess = async () => {
        await refreshUserAccess();
        setIsLoading(false);
      };
      
      // Add a small delay to ensure Stripe webhook has processed
      setTimeout(refreshAccess, 2000);
    } else {
      setIsLoading(false);
    }
  }, [user, sessionId, refreshUserAccess]);

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