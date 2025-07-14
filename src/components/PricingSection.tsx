
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown, Users } from "lucide-react";
import { Link } from "react-router-dom";

const PricingSection = () => {
  const modules = [
    {
      name: "F1 Gratis",
      price: "0",
      description: "Fundamentos de GEO - Completamente gratis",
      icon: Users,
      features: [
        "Comprende qué es GEO y por qué es crucial",
        "Aprende los principios básicos de citabilidad",
        "Estructura tu contenido para LLMs",
        "Primeras optimizaciones prácticas"
      ],
      cta: "Empezar F1 Gratis",
      ctaVariant: "default" as const,
      popular: true,
      link: "/curso/f1"
    },
    {
      name: "F2-F6",
      price: "39",
      period: "módulo",
      description: "Framework completo de optimización GEO",
      icon: Crown,
      features: [
        "F2: Estructura semántica avanzada",
        "F3: Contenido citable y autoritativo", 
        "F4: Datos estructurados y metadatos",
        "F5: Optimización técnica para LLMs",
        "F6: Medición y análisis de citabilidad"
      ],
      cta: "Ver Módulos Avanzados",
      ctaVariant: "outline" as const,
      popular: false,
      link: "/curso"
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {modules.map((module, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-xl transition-all duration-300 ${
                module.popular ? 'border-accent shadow-lg scale-105' : ''
              }`}
            >
              {module.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-primary">
                  Empieza Aquí
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full ${module.popular ? 'bg-accent' : 'bg-muted'}`}>
                    <module.icon className={`h-6 w-6 ${module.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                </div>
                
                <CardTitle className="text-2xl font-bold">{module.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{module.description}</p>
                
                <div className="mt-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-primary">€{module.price}</span>
                    {module.period && <span className="text-muted-foreground ml-1">/{module.period}</span>}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={module.ctaVariant} 
                  className="w-full" 
                  size="lg"
                  asChild
                >
                  <Link to={module.link}>
                    {module.cta}
                  </Link>
                </Button>

                {module.name !== "F1 Gratis" && (
                  <p className="text-xs text-center text-muted-foreground">
                    Acceso inmediato • Garantía 30 días
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Simplified call to action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Aprende paso a paso • Implementa a tu ritmo • Resultados garantizados
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
