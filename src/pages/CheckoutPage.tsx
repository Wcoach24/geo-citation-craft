import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, CreditCard, Loader2, ArrowLeft, Shield, Clock, FileText, Zap, Lock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
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
    if (planParam === 'complete') setSelectedPlan('complete');
    else if (moduleParam && ['f1','f2','f3','f4','f5'].includes(moduleParam)) {
      setSelectedPlan('individual');
      setSelectedModule(moduleParam);
    }
  }, [searchParams]);

  const handleCheckout = async () => {
    if (!selectedPlan) { toast({ title: "Selecciona un plan", variant: "destructive" }); return; }
    if (selectedPlan === 'individual' && !selectedModule) { toast({ title: "Selecciona un módulo", variant: "destructive" }); return; }
    if (user) {
      if (selectedPlan === 'complete' && userAccess.length === 5) { toast({ title: "Ya tienes acceso completo", variant: "destructive" }); return; }
      if (selectedPlan === 'individual' && selectedModule && userAccess.includes(selectedModule)) { toast({ title: "Ya tienes acceso a este módulo", variant: "destructive" }); return; }
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
      if (data?.url) window.location.href = data.url;
      else throw new Error('No se pudo crear la sesión de checkout');
    } catch (error) {
      console.error('Error en checkout:', error);
      toast({ title: "Error al procesar", description: error instanceof Error ? error.message : "Error inesperado", variant: "destructive" });
    } finally {
      setIsProcessing(false);
    }
  };

  const currentModule = selectedModule ? MODULES[selectedModule as keyof typeof MODULES] : null;
  const displayPrice = selectedPlan === 'complete' ? COMPLETE_COURSE.price : (currentModule?.price || 10);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Checkout - Curso GEO | esGEO</title>
        <meta name="description" content="Completa tu compra del curso GEO y comienza a optimizar para IA." />
      </Helmet>
      <Header />

      <main className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <Link to="/curso" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al curso
          </Link>
          <h1 className="text-3xl font-bold mb-2">Finalizar compra</h1>
          <p className="text-muted-foreground mb-8">Selecciona tu plan y completa el pago de forma segura.</p>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Plan selection */}
            <div className="md:col-span-3 space-y-4">
              {/* Complete */}
              <div
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                  selectedPlan === 'complete' ? 'border-accent bg-accent/5 shadow-lg' : 'border-border hover:border-accent/40'
                }`}
                onClick={() => setSelectedPlan('complete')}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-lg">Curso GEO Completo</h3>
                      <Badge className="bg-accent text-primary text-xs font-bold">Mejor valor</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">5 módulos F1-F5 + guías PDF descargables</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-sm text-muted-foreground line-through">€60</span>
                    <span className="font-bold text-3xl text-primary ml-2">€50</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {COMPLETE_COURSE.features.slice(0, 4).map((f, i) => (
                    <span key={i} className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <CheckCircle className="h-3 w-3 text-accent flex-shrink-0" />
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Individual */}
              <div
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                  selectedPlan === 'individual' ? 'border-accent bg-accent/5 shadow-lg' : 'border-border hover:border-accent/40'
                }`}
                onClick={() => setSelectedPlan('individual')}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">Módulo Individual</h3>
                    <p className="text-sm text-muted-foreground">Elige un módulo específico</p>
                  </div>
                  <span className="font-bold text-3xl text-primary">€10</span>
                </div>
              </div>

              {/* Module selector */}
              {selectedPlan === 'individual' && (
                <div className="space-y-2 pl-4 border-l-2 border-accent/30">
                  {Object.entries(MODULES).map(([key, module]) => (
                    <div
                      key={key}
                      className={`p-3 rounded-xl border cursor-pointer transition-all text-sm ${
                        module.comingSoon ? 'opacity-40 cursor-not-allowed'
                        : selectedModule === key ? 'border-accent bg-accent/5'
                        : 'border-border hover:border-accent/40'
                      }`}
                      onClick={() => !module.comingSoon && setSelectedModule(key)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{module.shortName}</span>
                        {module.comingSoon && <Badge variant="secondary" className="text-xs"><Lock className="h-3 w-3 mr-1" />Próximamente</Badge>}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Summary */}
            <div className="md:col-span-2">
              <div className="sticky top-24 rounded-2xl border shadow-lg bg-background p-6 space-y-4">
                <h2 className="font-bold text-lg">Resumen</h2>

                {selectedPlan ? (
                  <>
                    <div>
                      <h3 className="font-semibold">
                        {selectedPlan === 'complete' ? 'Curso GEO Completo' : currentModule?.shortName || 'Selecciona un módulo'}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {selectedPlan === 'complete' ? COMPLETE_COURSE.description : currentModule?.description || ''}
                      </p>
                    </div>

                    <Separator />

                    <ul className="space-y-2">
                      {(selectedPlan === 'complete' ? COMPLETE_COURSE.features : [
                        'Guía PDF especializada (15-25 pág.)',
                        'Checklist de implementación',
                        'Acceso permanente',
                      ]).map((f, i) => (
                        <li key={i} className="flex items-start text-sm gap-2">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Separator />

                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">Total:</span>
                      <div className="text-right">
                        {selectedPlan === 'complete' && <span className="text-sm text-muted-foreground line-through mr-2">€60</span>}
                        <span className="font-bold text-3xl text-primary">€{displayPrice}</span>
                      </div>
                    </div>

                    <Button
                      onClick={handleCheckout}
                      disabled={isProcessing || !selectedPlan || (selectedPlan === 'individual' && !selectedModule)}
                      className="w-full btn-glow bg-accent hover:bg-accent/90 text-primary font-bold py-6 text-base rounded-xl"
                      size="lg"
                    >
                      {isProcessing ? (
                        <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Procesando...</>
                      ) : (
                        <><CreditCard className="mr-2 h-5 w-5" /> Pagar €{displayPrice}</>
                      )}
                    </Button>

                    <div className="space-y-2 pt-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Shield className="h-3.5 w-3.5 flex-shrink-0 text-accent" />
                        Pago seguro cifrado con Stripe
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5 flex-shrink-0 text-accent" />
                        Acceso inmediato tras el pago
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <FileText className="h-3.5 w-3.5 flex-shrink-0 text-accent" />
                        Descarga tu PDF al instante
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <Zap className="h-10 w-10 text-muted-foreground/20 mx-auto mb-3" />
                    <p className="text-muted-foreground text-sm">Selecciona un plan para ver el resumen</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {user && userAccess.length > 0 && (
            <div className="mt-6 p-4 bg-muted/50 rounded-xl text-sm text-muted-foreground">
              <strong>Tu cuenta:</strong> {user.email} · Ya tienes acceso a: {userAccess.map(id => MODULES[id as keyof typeof MODULES]?.shortName || id).join(', ')}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
