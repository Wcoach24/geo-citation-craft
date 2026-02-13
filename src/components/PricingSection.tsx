import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { MODULES, COMPLETE_COURSE } from "@/data/modules";

const PricingSection = () => {
  const plans = [
    {
      name: "F0 Diagnóstico",
      price: "0",
      description: "¿Necesitas GEO? Averígualo gratis.",
      icon: Users,
      features: [
        "Diagnóstico completo de tu sitio",
        "Identificación de problemas con IA",
        "Introducción al framework GEO",
        "Sin registro necesario",
      ],
      cta: "Empezar Gratis",
      variant: "outline" as const,
      link: "/curso/f0",
      highlight: false,
    },
    {
      name: "Curso Completo",
      price: String(COMPLETE_COURSE.price),
      originalPrice: String(COMPLETE_COURSE.originalPrice),
      description: "Todo el framework GEO en un pack.",
      icon: Crown,
      features: [
        ...COMPLETE_COURSE.features,
        `Ahorra €${(COMPLETE_COURSE.originalPrice ?? 0) - COMPLETE_COURSE.price} vs individual`,
      ],
      cta: "Comprar Curso Completo",
      variant: "default" as const,
      link: "/checkout?plan=complete",
      highlight: true,
    },
    {
      name: "Módulo Individual",
      price: String(MODULES.f1.price),
      description: "Elige un módulo F1-F5.",
      icon: Zap,
      features: [
        "Acceso a módulo específico",
        "Guía PDF (15-25 páginas)",
        "Checklist de implementación",
        "Pago único",
      ],
      cta: "Elegir Módulo",
      variant: "outline" as const,
      link: "/checkout?type=module",
      highlight: false,
    },
  ];

  return (
    <section id="precios" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge variant="outline" className="mb-4">
            <Star className="mr-2 h-4 w-4" />
            Precios transparentes
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Elige tu Plan GEO
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Empieza gratis. Sin suscripciones. Pago único.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl bg-background p-6 card-elevated transition-all ${
                plan.highlight
                  ? 'border-2 border-accent ring-1 ring-accent/20 scale-[1.03] z-10'
                  : 'border'
              }`}
            >
              {plan.highlight && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-primary font-bold px-4">
                  Más popular
                </Badge>
              )}

              <div className="text-center mb-6 pt-2">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${plan.highlight ? 'bg-accent/15' : 'bg-muted'}`}>
                  <plan.icon className={`h-6 w-6 ${plan.highlight ? 'text-accent' : 'text-muted-foreground'}`} />
                </div>
                <h3 className="text-xl font-bold text-primary">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                <div className="mt-4 flex items-baseline justify-center gap-2">
                  {plan.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">€{plan.originalPrice}</span>
                  )}
                  <span className="text-4xl font-bold text-primary">€{plan.price}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Pago único</p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.variant}
                className={`w-full rounded-xl py-5 font-semibold ${
                  plan.highlight ? 'btn-glow bg-accent hover:bg-accent/90 text-primary' : ''
                }`}
                size="lg"
                asChild
              >
                <Link to={plan.link}>{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Aprende paso a paso · Implementa a tu ritmo · Acceso inmediato
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
