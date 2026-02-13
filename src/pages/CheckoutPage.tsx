import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, CreditCard, Loader2, ArrowLeft, Shield, Zap, Clock, FileText } from 'lucide-react';
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
        'Guía PDF especializada (15-25 páginas)',
        'Checklist de implementación',
        'Acceso permanente al contenido'
      ]
    }
  };

  const handleCheckout = async () => {
    if (!selectedPlan) {
      toast({ title: "Selecciona un plan", description: "Debes seleccionar un plan antes de continuar.", variant: "destructive" });
      return;
    }
    if (selectedPlan === 'individual' && !selectedModule) {
      toast({ title: "Selecciona un módulo", description: "Debes seleccionar un módulo específico.", variant: "destructive" });
      return;
    }

    if (user) {
      if (selectedPlan === 'complete' && userAccess.length === 5) {
        toast({ title: "Ya tienes acceso", description: "Ya tienes acceso completo a todos los módulos.", variant: "destructive" });
        return;
      }
      if (selectedPlan === 'individual' && selectedModule && userAccess.includes(selectedModule)) {
        toast({ title: "Ya tienes acceso", description: `Ya tienes acceso al ${modules[selectedModule as keyof typeof modules].name}.`, variant: "destructive" });
        return;
      }
    }

    setIsProcessing(true);
    try {
      const productKey = selectedPlan === 'complete' ? 'complete' : selectedModule;
      const stripeIds = getStripeIds(productKey);
      if (!stripeIds) throw new Error('Producto no encontrado');

      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { priceId: stripeIds.priceId, productType: selectedPlan, moduleId: selectedModule || undefined }
      });
      if (error) throw error;
      if (data?.url) { window.location.href = data.url; } 
      else { throw new Error('No se pudo crear la sesión de checkout'); }
    } catch (error) {
      console.error('Error en checkout:', error);
      toast({ title: "Error al procesar el pago", description: error instanceof Error ? error.message : "Ha ocurrido un error inesperado.", variant: "destructive" });
    } finally {
      setIsProcessing(false);
    }
  };

  const currentPlan = plans[selectedPlan as keyof typeof plans];
  const currentModule = selectedModule ? modules[selectedModule as keyof typeof modules] : null;
  const displayPrice = selectedPlan === 'complete' ? currentPlan?.price : (currentModule?.price || 10);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Checkout - Curso GEO | esGEO</title>
        <meta name="description" content="Completa tu compra del curso GEO y comienza a optimizar para IA." />
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/curso" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al curso
            </Link>
            <h1 className="text-3xl font-bold">Finalizar compra</h1>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Selección de plan - 3 cols */}
            <div className="md:col-span-3 space-y-4">
              {/* Curso Completo - Destacado */}
              <div
                className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedPlan === 'complete' 
                    ? 'border-accent bg-accent/5 shadow-md' 
                    : 'border-border hover:border-accent/50'
                }`}
                onClick={() => setSelectedPlan('complete')}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-lg">Curso GEO Completo</h3>
                      <Badge className="bg-accent text-primary text-xs">Mejor valor</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">5 módulos fundamentales (F1-F5) + guías PDF</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-sm text-muted-foreground line-through">€60</span>
                    <span className="font-bold text-2xl text-primary ml-2">€50</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {COMPLETE_COURSE.features.slice(0, 4).map((f, i) => (
                    <span key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-accent flex-shrink-0" />
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Módulo Individual */}
              <div
                className={`p-5 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedPlan === 'individual' 
                    ? 'border-accent bg-accent/5 shadow-md' 
                    : 'border-border hover:border-accent/50'
                }`}
                onClick={() => setSelectedPlan('individual')}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">Módulo Individual</h3>
                    <p className="text-sm text-muted-foreground">Elige un módulo específico</p>
                  </div>
                  <span className="font-bold text-2xl text-primary">€10</span>
                </div>
              </div>

              {/* Selector de módulos */}
              {selectedPlan === 'individual' && (
                <div className="space-y-2 pl-4 border-l-2 border-accent/30">
                  {Object.entries(modules).map(([key, module]) => {
                    const isComingSoon = module.comingSoon;
                    return (
                      <div 
                        key={key}
                        className={`p-3 rounded-lg border cursor-pointer transition-all text-sm ${
                          isComingSoon ? 'opacity-40 cursor-not-allowed' 
                          : selectedModule === key ? 'border-accent bg-accent/5' 
                          : 'border-border hover:border-accent/50'
                        }`}
                        onClick={() => !isComingSoon && setSelectedModule(key)}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{module.shortName}</span>
                          {isComingSoon && <Badge variant="secondary" className="text-xs">Próximamente</Badge>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Resumen - 2 cols */}
            <div className="md:col-span-2">
              <Card className="sticky top-24 shadow-lg border-accent/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Resumen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedPlan && currentPlan ? (
                    <>
                      <div>
                        <h3 className="font-semibold">
                          {selectedPlan === 'complete' ? currentPlan.name : currentModule?.shortName || 'Selecciona un módulo'}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          {selectedPlan === 'complete' ? currentPlan.description : currentModule?.description || ''}
                        </p>
                      </div>

                      <Separator />

                      <ul className="space-y-2">
                        {(selectedPlan === 'complete' ? currentPlan.features : plans.individual.features).map((feature, i) => (
                          <li key={i} className="flex items-start text-sm gap-2">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Separator />

                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">Total:</span>
                        <div className="text-right">
                          {selectedPlan === 'complete' && (
                            <span className="text-sm text-muted-foreground line-through mr-2">€60</span>
                          )}
                          <span className="font-bold text-2xl text-primary">€{displayPrice}</span>
                        </div>
                      </div>

                      <Button 
                        onClick={handleCheckout}
                        disabled={isProcessing || !selectedPlan || (selectedPlan === 'individual' && !selectedModule)}
                        className="w-full bg-accent hover:bg-accent/90 text-primary font-bold py-6 text-base"
                        size="lg"
                      >
                        {isProcessing ? (
                          <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Procesando...</>
                        ) : (
                          <><CreditCard className="mr-2 h-5 w-5" /> Pagar €{displayPrice}</>
                        )}
                      </Button>

                      {/* Trust signals */}
                      <div className="space-y-2 pt-2">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Shield className="h-3.5 w-3.5 flex-shrink-0" />
                          Pago seguro cifrado con Stripe
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3.5 w-3.5 flex-shrink-0" />
                          Acceso inmediato tras el pago
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <FileText className="h-3.5 w-3.5 flex-shrink-0" />
                          Descarga tu PDF al instante
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-6">
                      <FileText className="h-10 w-10 text-muted-foreground/30 mx-auto mb-3" />
                      <p className="text-muted-foreground text-sm">Selecciona un plan para ver el resumen</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* User access info */}
          {user && userAccess.length > 0 && (
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Tu cuenta:</strong> {user.email} · Ya tienes acceso a: {userAccess.map(id => modules[id as keyof typeof modules]?.shortName || id).join(', ')}
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
