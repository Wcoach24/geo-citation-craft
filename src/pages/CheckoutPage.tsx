import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle, CreditCard, Loader2, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Link } from 'react-router-dom';
import { MODULES, COMPLETE_COURSE, getStripeIds } from '@/data/modules';

export default function CheckoutPage() {
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [selectedModule, setSelectedModule] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const { user, userAccess } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // No auth required - guests can checkout
    
    // Verificar parámetros de URL
    const moduleParam = searchParams.get('module');
    const planParam = searchParams.get('plan');
    
    if (planParam === 'complete') {
      setSelectedPlan('complete');
    } else if (moduleParam && ['f1', 'f2', 'f3', 'f4', 'f5'].includes(moduleParam)) {
      setSelectedPlan('individual');
      setSelectedModule(moduleParam);
    }
  }, [searchParams]);

  const modules = MODULES;

  const plans = {
    complete: {
      id: 'complete',
      name: COMPLETE_COURSE.name,
      description: COMPLETE_COURSE.description,
      price: COMPLETE_COURSE.price,
      originalPrice: COMPLETE_COURSE.originalPrice,
      features: COMPLETE_COURSE.features,
    },
    individual: {
      id: 'individual',
      name: 'Módulo Individual',
      description: 'Acceso a un módulo específico del curso.',
      price: 10,
      features: [
        'Guía PDF especializada del módulo',
        'Metodología práctica detallada',
        'Acceso permanente al contenido'
      ]
    }
  };

  const handleCheckout = async () => {
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

    // Verificar si ya tiene acceso (solo para usuarios registrados)
    if (user) {
      if (selectedPlan === 'complete' && userAccess.length === 5) {
        toast({
          title: "Ya tienes acceso",
          description: "Ya tienes acceso completo a todos los módulos disponibles.",
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
    }

    setIsProcessing(true);

    try {
      const productKey = selectedPlan === 'complete' ? 'complete' : selectedModule;
      const stripeIds = getStripeIds(productKey);

      if (!stripeIds) {
        throw new Error('Producto no encontrado');
      }

      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          priceId: stripeIds.priceId,
          productType: selectedPlan,
          moduleId: selectedModule || undefined
        }
      });

      if (error) throw error;

      if (data?.url) {
        // Redirect in same tab to avoid losing context
        window.location.href = data.url;
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
              Completa el pago y descarga tu contenido inmediatamente
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
                        <p className="text-sm text-muted-foreground">5 módulos fundamentales (F1-F5)</p>
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
                        {Object.entries(modules).map(([key, module]) => {
                          const isComingSoon = 'comingSoon' in module && module.comingSoon;
                          return (
                            <div 
                              key={key}
                              className={`p-3 rounded border transition-colors ${
                                isComingSoon 
                                  ? 'opacity-50 cursor-not-allowed border-border' 
                                  : selectedModule === key 
                                    ? 'border-primary bg-primary/5 cursor-pointer' 
                                    : 'border-border hover:border-primary/50 cursor-pointer'
                              }`}
                              onClick={() => !isComingSoon && setSelectedModule(key)}
                            >
                              <div className="flex items-center justify-between">
                                <div className="font-medium text-sm">{module.name}</div>
                                {isComingSoon && <Badge variant="secondary" className="text-xs">Próximamente</Badge>}
                              </div>
                              <div className="text-xs text-muted-foreground">{module.description}</div>
                            </div>
                          );
                        })}
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