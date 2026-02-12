import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { MODULES, COMPLETE_COURSE } from "@/data/modules";

const PricingSection = () => {
  const modules = [
    {
      name: "F0 Diagnóstico",
      price: "0",
      description: "Evaluación gratuita - ¿Necesitas GEO?",
      icon: Users,
      features: [
        "Diagnóstico completo de tu sitio web",
        "Identificación de problemas con IA",
        "Introducción al framework GEO completo",
        "Evaluación de necesidades específicas"
      ],
      cta: "Empezar Diagnóstico Gratis",
      ctaVariant: "default" as const,
      popular: true,
      link: "/curso/f0"
    },
    {
      name: "Módulos Individuales",
      price: String(MODULES.f1.price),
      description: "Cada módulo F1-F6 por separado",
      icon: Zap,
      features: [
        "Acceso a módulo específico elegido",
        "Contenido completo y detallado",
        "Plantillas y checklists incluidos",
        "Implementación paso a paso",
        "Pago único, sin suscripciones"
      ],
      cta: "Elegir Módulo",
      ctaVariant: "outline" as const,
      popular: false,
      link: "/checkout?type=module"
    },
    {
      name: COMPLETE_COURSE.name,
      price: String(COMPLETE_COURSE.price),
      originalPrice: String(COMPLETE_COURSE.originalPrice),
      description: "Framework completo de optimización GEO",
      icon: Crown,
      features: COMPLETE_COURSE.features.concat([
        `Ahorro de €${COMPLETE_COURSE.originalPrice - COMPLETE_COURSE.price} vs módulos individuales`
      ]),
      cta: "Comprar Curso Completo",
      ctaVariant: "default" as const,
      popular: false,
      link: "/checkout?type=complete"
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

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                    {module.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through ml-2">€{module.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground text-center mt-1">Pago único</p>
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
                    Acceso inmediato • Producto digital
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Simplified call to action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Aprende paso a paso • Implementa a tu ritmo • Aprendizaje autónomo
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
