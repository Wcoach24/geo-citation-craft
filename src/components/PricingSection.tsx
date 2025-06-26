
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown, Users } from "lucide-react";
import { Link } from "react-router-dom";

const PricingSection = () => {
  const plans = [
    {
      name: "Gratis",
      price: "0",
      period: "siempre",
      description: "Perfecto para empezar con GEO",
      icon: Users,
      features: [
        "Módulo F1 - Fundamentos completo",
        "Glosario GEO autorizado",
        "Coach GEO básico",
        "Acceso a la comunidad",
        "Recursos descargables"
      ],
      cta: "Empezar Gratis",
      ctaVariant: "outline" as const,
      popular: false
    },
    {
      name: "Starter",
      price: "29",
      period: "mes",
      description: "Para profesionales que quieren dominar GEO",
      icon: Zap,
      features: [
        "Módulos F1, F2 y F3 completos",
        "Coach GEO avanzado con IA",
        "Email support prioritario",
        "Plantillas y checklists premium",
        "Webinars mensuales exclusivos",
        "Certificado de progreso"
      ],
      cta: "Prueba 7 días gratis",
      ctaVariant: "default" as const,
      popular: true
    },
    {
      name: "Pro",
      price: "79",
      period: "mes",
      description: "Framework completo + implementación",
      icon: Crown,
      features: [
        "Framework F1-F6 completo",
        "Auditorías GEO automatizadas",
        "Sesiones 1-on-1 mensuales",
        "Implementación paso a paso",
        "Análisis de competencia",
        "Soporte técnico directo",
        "Certificación oficial GEO"
      ],
      cta: "Upgrade a Pro",
      ctaVariant: "default" as const,
      popular: false
    }
  ];

  return (
    <section id="precios" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Star className="mr-2 h-4 w-4" />
            Planes flexibles para cada necesidad
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Elige tu Plan GEO
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empieza gratis y escala según tus resultados. Sin compromisos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'border-accent shadow-lg scale-105' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-primary">
                  Más Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full ${plan.popular ? 'bg-accent' : 'bg-muted'}`}>
                    <plan.icon className={`h-6 w-6 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                </div>
                
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
                
                <div className="mt-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-primary">€{plan.price}</span>
                    <span className="text-muted-foreground ml-1">/{plan.period}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.ctaVariant} 
                  className="w-full" 
                  size="lg"
                  asChild
                >
                  <Link to={plan.name === "Gratis" ? "/curso/f1" : "/checkout"}>
                    {plan.cta}
                  </Link>
                </Button>

                {plan.name !== "Gratis" && (
                  <p className="text-xs text-center text-muted-foreground">
                    Cancela en cualquier momento • Garantía 30 días
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional CTA Section */}
        <div className="text-center mt-12 p-8 bg-muted/30 rounded-lg">
          <h3 className="text-2xl font-bold text-primary mb-4">
            ¿Necesitas algo más personalizado?
          </h3>
          <p className="text-muted-foreground mb-6">
            Ofrecemos implementación completa y consultoría estratégica para empresas
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contacto">
              Hablar con un Experto
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
