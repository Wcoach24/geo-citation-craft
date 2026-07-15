import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Crown, Users, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPLETE_COURSE } from "@/data/modules";
import BuyButton from "@/components/BuyButton";
import GuaranteeNote from "@/components/GuaranteeNote";

type Plan = {
  name: string;
  price: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  cta: string;
  variant: "outline" | "default";
  link?: string;
  highlight: boolean;
  productType?: "curso-auditoria";
};

const PricingSection = () => {
  // F2-5: tercer tier ancla (197 €) — entrega manual de la auditoría.
  // H-9: pendiente de aprobación de Álvaro (aprobar o retirar).
  const plans: Plan[] = [
    {
      name: "F0 — Empieza gratis",
      price: "0",
      description: "Audita tu web y lee el primer módulo. Sin pagar.",
      icon: Users,
      features: [
        "Auditoría real de tu web (0-100)",
        "Las 2 cosas que arreglar primero",
        "Módulo F0 completo",
        "Sin registro, sin tarjeta",
      ],
      cta: "Leer F0 gratis",
      variant: "outline" as const,
      link: "/curso/f0",
      highlight: false,
    },
    {
      name: "Curso Completo",
      price: String(COMPLETE_COURSE.price),

      description: "Todo el framework GEO en un pack.",
      icon: Crown,
      features: COMPLETE_COURSE.features,
      cta: "Comprar el curso — 47 €",
      variant: "default" as const,
      highlight: true,
    },
    {
      name: "Curso + Auditoría personalizada",
      price: "197",
      description: "El curso completo más nuestra auditoría de tu dominio.",
      icon: Search,
      features: [
        "Todo lo del Curso Completo (F1-F5, 142 páginas)",
        "Auditoría HABLA de tu dominio, comentada en vídeo/PDF",
        "Plan de acción priorizado: qué arreglar y en qué orden",
        "Entrega personal por email, con seguimiento directo",
      ],
      cta: "Comprar curso + auditoría — 197 €",
      variant: "default" as const,
      highlight: false,
      productType: "curso-auditoria" as const,
    },
  ];

  return (
    <section id="precios" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge variant="outline" className="mb-4 cursor-default">
            <Star className="mr-2 h-4 w-4" />
            Precios transparentes
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Empieza gratis. Paga una vez si te convence.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Audita tu web y lee F0 sin pagar. Sin suscripciones: pago único.
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
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-primary font-bold px-4 cursor-default">
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
                  <span className="text-4xl font-bold text-primary">€{plan.price}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Pago único, sin suscripción</p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.highlight ? (
                <>
                  <BuyButton
                    source="pricing-home"
                    className="btn-glow w-full rounded-xl py-3.5 font-semibold bg-accent hover:bg-accent/90 text-primary"
                  >
                    {plan.cta}
                  </BuyButton>
                  <GuaranteeNote compact className="mt-3" />
                </>
              ) : plan.productType ? (
                <BuyButton
                  source="pricing-home-auditoria"
                  productType={plan.productType}
                  className="w-full rounded-xl py-3.5 font-semibold border border-accent/50 text-accent hover:bg-accent/10 bg-background"
                  showArrow={false}
                >
                  {plan.cta}
                </BuyButton>
              ) : (
                <Button
                  variant={plan.variant}
                  className="w-full rounded-xl py-5 font-semibold cursor-pointer transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
                  size="lg"
                  asChild
                >
                  <Link to={plan.link ?? "/curso"}>{plan.cta}</Link>
                </Button>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10 max-w-2xl mx-auto">
          Una auditoría GEO de agencia cuesta entre 800 y 2.000 €, y te entrega un PDF con lo que
          hay que arreglar. Esto cuesta 47 € y te enseña a arreglarlo tú, esta vez y las siguientes.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;