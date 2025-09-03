
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const CheckoutPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("complete");
  const [selectedModule, setSelectedModule] = useState("f1");
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const modules = {
    f1: {
      name: "F1: Accesibilidad Generativa",
      description: "Base técnica fundamental para LLMs"
    },
    f2: {
      name: "F2: Contexto Semántico",
      description: "Estructura semántica y formato óptimo"
    },
    f3: {
      name: "F3: Autoridad Generativa",
      description: "Contenido citable y autoritativo"
    },
    f4: {
      name: "F4: Validación Conversacional", 
      description: "Validación directa con modelos de IA"
    },
    f5: {
      name: "F5: Mantenimiento Generativo",
      description: "Sistemas automáticos de mantenimiento GEO"
    },
    f6: {
      name: "F6: Optimización Técnica",
      description: "Configuraciones avanzadas para LLMs"
    }
  };

  const plans = {
    module: {
      name: "Módulo Individual",
      price: 10,
      originalPrice: undefined,
      features: [
        `Acceso completo al ${modules[selectedModule as keyof typeof modules].name}`,
        "Contenido detallado y explicaciones paso a paso",
        "Plantillas y checklists específicos del módulo",
        "Implementación práctica autoguiada",
        "Recursos descargables incluidos"
      ]
    },
    complete: {
      name: "Curso Completo F1-F6",
      price: 50,
      originalPrice: 60,
      features: [
        "F1: Accesibilidad generativa básica",
        "F2: Estructura semántica avanzada",
        "F3: Contenido citable y autoritativo",
        "F4: Validación conversacional directa",
        "F5: Mantenimiento generativo automático",
        "F6: Optimización técnica avanzada",
        "Plantillas y checklists completos",
        "Implementación paso a paso autoguiada"
      ]
    }
  };

  const currentPlan = plans[selectedPlan as keyof typeof plans];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "¡Pago procesado exitosamente!",
        description: "Te hemos enviado el acceso a tu email. Bienvenido a GEO.",
      });
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>Checkout - Curso GEO</title>
        <meta name="description" content="Completa tu compra del curso GEO y comienza a optimizar para IA hoy mismo." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="mb-8">
              <Link to="/#precios" className="inline-flex items-center text-muted-foreground hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a planes
              </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Order Summary */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Resumen del Pedido</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Plan Selection */}
                    <div className="space-y-3">
                      {Object.entries(plans).map(([key, plan]) => (
                        <div key={key} className="space-y-3">
                          <div
                            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                              selectedPlan === key ? 'border-accent bg-accent/5' : 'border-muted'
                            }`}
                            onClick={() => setSelectedPlan(key)}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold">{plan.name}</h3>
                                <div className="flex items-center gap-2 mt-1">
                                  <span className="text-2xl font-bold">€{plan.price}</span>
                                  {plan.originalPrice && (
                                    <>
                                      <span className="text-muted-foreground line-through">€{plan.originalPrice}</span>
                                      <Badge variant="secondary">-€{plan.originalPrice - plan.price}</Badge>
                                    </>
                                  )}
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">Pago único</p>
                              </div>
                              <div className={`w-4 h-4 rounded-full border-2 ${
                                selectedPlan === key ? 'bg-accent border-accent' : 'border-muted'
                              }`} />
                            </div>
                          </div>
                          
                          {/* Module Selection for Individual Module */}
                          {selectedPlan === 'module' && key === 'module' && (
                            <div className="ml-4 space-y-2">
                              <h4 className="text-sm font-medium text-muted-foreground">Selecciona el módulo:</h4>
                              {Object.entries(modules).map(([moduleKey, moduleInfo]) => (
                                <div
                                  key={moduleKey}
                                  className={`p-3 border rounded cursor-pointer transition-colors ${
                                    selectedModule === moduleKey ? 'border-accent bg-accent/5' : 'border-muted'
                                  }`}
                                  onClick={() => setSelectedModule(moduleKey)}
                                >
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <h5 className="font-medium text-sm">{moduleInfo.name}</h5>
                                      <p className="text-xs text-muted-foreground">{moduleInfo.description}</p>
                                    </div>
                                    <div className={`w-3 h-3 rounded-full border ${
                                      selectedModule === moduleKey ? 'bg-accent border-accent' : 'border-muted'
                                    }`} />
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3">Incluye:</h4>
                      <ul className="space-y-2">
                        {currentPlan.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing Summary */}
                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>€{currentPlan.originalPrice || currentPlan.price}</span>
                      </div>
                      {currentPlan.originalPrice && (
                        <div className="flex justify-between text-green-600">
                          <span>Descuento:</span>
                          <span>-€{currentPlan.originalPrice - currentPlan.price}</span>
                        </div>
                      )}
                      <div className="flex justify-between font-bold text-lg border-t pt-2">
                        <span>Total:</span>
                        <span>€{currentPlan.price}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Pago único • Producto digital</p>
                    </div>

                    {/* Product Info */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-blue-800">
                        <Shield className="h-4 w-4" />
                        <span className="font-semibold">Producto Digital</span>
                      </div>
                      <p className="text-sm text-blue-700 mt-1">
                        Acceso inmediato tras el pago. Contenido para aprendizaje autónomo.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Payment Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Información de Pago
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">Nombre</Label>
                          <Input id="firstName" required />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Apellido</Label>
                          <Input id="lastName" required />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required />
                      </div>

                      <div>
                        <Label htmlFor="cardNumber">Número de Tarjeta</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Vencimiento</Label>
                          <Input id="expiry" placeholder="MM/YY" required />
                        </div>
                        <div>
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" required />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="country">País</Label>
                        <Input id="country" defaultValue="España" required />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full" 
                        size="lg"
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          "Procesando..."
                        ) : (
                          `Pagar €${currentPlan.price}`
                        )}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Al proceder, aceptas nuestros términos y condiciones. 
                        Producto digital de pago único.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CheckoutPage;
