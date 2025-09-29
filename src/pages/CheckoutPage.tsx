import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, CreditCard, Loader2, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Link } from 'react-router-dom';

// Mapeo de productos
const PRODUCT_MAPPING = {
  'f1': { priceId: 'price_1SCi2ELVUGCJuFgUgUSq6Wsc', productId: 'prod_T902VySczFrzLF' },
  'f2': { priceId: 'price_1SCi2ZLVUGCJuFgUkvbTtPGU', productId: 'prod_T9028jaGK3AZMt' },
  'f3': { priceId: 'price_1SCi37LVUGCJuFgUr9yb84gV', productId: 'prod_T903d9YhVnqhLZ' },
  'f4': { priceId: 'price_1SCi3JLVUGCJuFgUtrtOiSGR', productId: 'prod_T9032mbVGWxI0h' },
  'f5': { priceId: 'price_1SCi3VLVUGCJuFgU2jobGw1L', productId: 'prod_T903yAjoh8vLi2' },
  'f6': { priceId: 'price_1SCi3nLVUGCJuFgUAvV6GsUH', productId: 'prod_T9037l1XQzqr7h' },
  'complete': { priceId: 'price_1SCi40LVUGCJuFgUZNIG5XwU', productId: 'prod_T904JmjRPrkyGQ' }
};

export default function CheckoutPage() {
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [selectedModule, setSelectedModule] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const { user, userAccess } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (!user) {
      navigate('/auth', { state: { from: { pathname: '/checkout' } } });
    }
    
    // Verificar parámetros de URL
    const moduleParam = searchParams.get('module');
    const planParam = searchParams.get('plan');
    
    if (planParam === 'complete') {
      setSelectedPlan('complete');
    } else if (moduleParam && ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'].includes(moduleParam)) {
      setSelectedPlan('individual');
      setSelectedModule(moduleParam);
    }
  }, [user, navigate, searchParams]);

  const modules = {
    f1: {
      id: 'f1',
      name: 'Módulo F1 - Fundamentos de Accesibilidad Generativa',
      description: 'Aprende los fundamentos técnicos para hacer tu contenido accesible y comprensible para modelos de lenguaje AI.',
      price: 10,
      image: '/images/modulo-f1.png'
    },
    f2: {
      id: 'f2',
      name: 'Módulo F2 - Contexto Semántico',
      description: 'Domina la estructura semántica y el contexto optimal para modelos generativos.',
      price: 10,
      image: '/images/modulo-f2.png'
    },
    f3: {
      id: 'f3',
      name: 'Módulo F3 - Autoridad Generativa',
      description: 'Construye autoridad y credibilidad para ser citado por modelos de AI.',
      price: 10,
      image: '/images/modulo-f3.png'
    },
    f4: {
      id: 'f4',
      name: 'Módulo F4 - Validación Conversacional',
      description: 'Aprende validación conversacional y optimización de interacciones.',
      price: 10,
      image: '/images/modulo-f4.png'
    },
    f5: {
      id: 'f5',
      name: 'Módulo F5 - Mantenimiento Evolutivo',
      description: 'Diseña sistemas de mantenimiento evolutivo para la era de la AI.',
      price: 10,
      image: '/images/modulo-f5.png'
    },
    f6: {
      id: 'f6',
      name: 'Módulo F6 - Métricas y Análisis',
      description: 'Métricas y análisis avanzado para medir el impacto del GEO.',
      price: 10,
      image: '/images/modulo-f6.png'
    }
  };

  const plans = {
    complete: {
      id: 'complete',
      name: 'Curso GEO Completo',
      description: 'Acceso completo a todos los módulos del curso GEO con metodología integral.',
      price: 50,
      originalPrice: 60,
      features: [
        'Todos los 6 módulos incluidos',
        'Contenido premium completo',
        'Soporte prioritario',
        'Actualizaciones gratuitas',
        'Certificado de finalización'
      ]
    },
    individual: {
      id: 'individual',
      name: 'Módulo Individual',
      description: 'Acceso a un módulo específico del curso.',
      price: 10,
      features: [
        'Acceso a módulo seleccionado',
        'Contenido premium del módulo',
        'Soporte estándar'
      ]
    }
  };

  const handleCheckout = async () => {
    if (!user) {
      navigate('/auth', { state: { from: { pathname: '/checkout' } } });
      return;
    }

    if (!selectedPlan) {
      toast({
        title: "Selecciona un plan",
        description: "Debes seleccionar un plan antes de continuar.",
        variant: "destructive",
      });
      return;
    }

    if (selectedPlan === 'individual' && !selectedModule) {
      toast({
        title: "Selecciona un módulo",
        description: "Debes seleccionar un módulo específico.",
        variant: "destructive",
      });
      return;
    }

    // Verificar si ya tiene acceso
    if (selectedPlan === 'complete' && userAccess.length === 6) {
      toast({
        title: "Ya tienes acceso",
        description: "Ya tienes acceso completo a todos los módulos.",
        variant: "destructive",
      });
      return;
    }

    if (selectedPlan === 'individual' && selectedModule && userAccess.includes(selectedModule)) {
      toast({
        title: "Ya tienes acceso",
        description: `Ya tienes acceso al ${modules[selectedModule as keyof typeof modules].name}.`,
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    try {
      const productKey = selectedPlan === 'complete' ? 'complete' : selectedModule;
      const productInfo = PRODUCT_MAPPING[productKey as keyof typeof PRODUCT_MAPPING];

      if (!productInfo) {
        throw new Error('Producto no encontrado');
      }

      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          priceId: productInfo.priceId,
          productType: selectedPlan,
          moduleId: selectedModule || undefined
        }
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, '_blank');
      } else {
        throw new Error('No se pudo crear la sesión de checkout');
      }
    } catch (error) {
      console.error('Error en checkout:', error);
      toast({
        title: "Error al procesar el pago",
        description: error instanceof Error ? error.message : "Ha ocurrido un error inesperado.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const currentPlan = plans[selectedPlan as keyof typeof plans];
  const currentModule = selectedModule ? modules[selectedModule as keyof typeof modules] : null;

  if (!user) {
    return null; // Se redirige automáticamente
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Checkout - Curso GEO</title>
        <meta name="description" content="Completa tu compra del curso GEO y comienza a optimizar para IA hoy mismo." />
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link to="/curso" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al curso
            </Link>
            <h1 className="text-3xl font-bold">Finalizar compra</h1>
            <p className="text-muted-foreground mt-2">
              Completa tu compra para acceder al contenido premium del curso GEO
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Selección de plan */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Selecciona tu plan</CardTitle>
                  <CardDescription>
                    Elige entre el curso completo o módulos individuales
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Curso completo */}
                  <div 
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                      selectedPlan === 'complete' 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedPlan('complete')}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Curso GEO Completo</h3>
                        <p className="text-sm text-muted-foreground">Todos los módulos F1-F6</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground line-through">€60</span>
                          <span className="font-bold text-lg">€50</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">Ahorra €10</Badge>
                      </div>
                    </div>
                  </div>

                  {/* Módulo individual */}
                  <div 
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                      selectedPlan === 'individual' 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedPlan('individual')}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Módulo Individual</h3>
                        <p className="text-sm text-muted-foreground">Acceso a un módulo específico</p>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-lg">€10</span>
                      </div>
                    </div>
                  </div>

                  {/* Selector de módulo */}
                  {selectedPlan === 'individual' && (
                    <div className="mt-4">
                      <label className="text-sm font-medium mb-2 block">Selecciona el módulo:</label>
                      <div className="space-y-2">
                        {Object.entries(modules).map(([key, module]) => (
                          <div 
                            key={key}
                            className={`p-3 rounded border cursor-pointer transition-colors ${
                              selectedModule === key 
                                ? 'border-primary bg-primary/5' 
                                : 'border-border hover:border-primary/50'
                            }`}
                            onClick={() => setSelectedModule(key)}
                          >
                            <div className="font-medium text-sm">{module.name}</div>
                            <div className="text-xs text-muted-foreground">{module.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Resumen de compra */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Resumen de compra</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedPlan && currentPlan && (
                    <>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">
                            {selectedPlan === 'complete' 
                              ? currentPlan.name 
                              : currentModule?.name || 'Selecciona un módulo'
                            }
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {selectedPlan === 'complete' 
                              ? currentPlan.description 
                              : currentModule?.description || ''
                            }
                          </p>
                        </div>
                        <div className="text-right">
                          {selectedPlan === 'complete' && 'originalPrice' in currentPlan && currentPlan.originalPrice && (
                            <div className="text-sm text-muted-foreground line-through">
                              €{currentPlan.originalPrice}
                            </div>
                          )}
                          <div className="font-bold">
                            €{selectedPlan === 'complete' ? currentPlan.price : (currentModule?.price || 10)}
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Incluye:</h4>
                        <ul className="space-y-1">
                          {(selectedPlan === 'complete' ? currentPlan.features : ['Acceso completo al módulo', 'Contenido premium', 'Soporte estándar']).map((feature, index) => (
                            <li key={index} className="flex items-center text-sm">
                              <CheckCircle className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Separator />

                      <div className="flex justify-between items-center font-bold">
                        <span>Total:</span>
                        <span>€{selectedPlan === 'complete' ? currentPlan.price : (currentModule?.price || 10)}</span>
                      </div>

                      <Button 
                        onClick={handleCheckout}
                        disabled={isProcessing || !selectedPlan || (selectedPlan === 'individual' && !selectedModule)}
                        className="w-full"
                        size="lg"
                      >
                        {isProcessing ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Procesando...
                          </>
                        ) : (
                          <>
                            <CreditCard className="mr-2 h-4 w-4" />
                            Proceder al pago
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        Pago seguro procesado por Stripe. Acceso inmediato tras la compra.
                      </p>
                    </>
                  )}

                  {!selectedPlan && (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">Selecciona un plan para continuar</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Información de usuario */}
              {user && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Tu cuenta</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      <strong>Email:</strong> {user.email}
                    </p>
                    {userAccess.length > 0 && (
                      <div className="mt-2">
                        <p className="text-sm font-medium">Acceso actual:</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {userAccess.map(moduleId => (
                            <Badge key={moduleId} variant="secondary" className="text-xs">
                              {modules[moduleId as keyof typeof modules]?.name || moduleId}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}