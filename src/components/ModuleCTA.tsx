import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import BuyButton from "@/components/BuyButton";
import GuaranteeNote from "@/components/GuaranteeNote";
import { MODULES, COMPLETE_COURSE } from "@/data/modules";

interface ModuleCTAProps {
  moduleId: string;
  className?: string;
}

/**
 * F2-2: los módulos ya no se venden sueltos (5×10 € hacía ridículo el bundle de 47 €
 * y el backend ya no acepta f1..f5). Este CTA promociona SOLO el curso completo.
 */
const ModuleCTA: React.FC<ModuleCTAProps> = ({ moduleId, className = "" }) => {
  const module = MODULES[moduleId];

  if (!module) return null;

  // Block purchase UI for coming-soon modules — render a placeholder card instead
  if (module.comingSoon) {
    return (
      <div className={`space-y-4 ${className}`}>
        <Card className="border-border bg-card opacity-90">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="font-bold text-lg text-primary">{module.shortName}</h3>
                <p className="text-sm text-muted-foreground">
                  Este módulo estará disponible próximamente. Suscríbete al boletín para enterarte cuando salga.
                </p>
              </div>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200 whitespace-nowrap">
                Próximamente
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Full course — única forma de compra */}
      <Card className="border-accent/30 bg-gradient-to-br from-accent/5 to-transparent overflow-hidden">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-primary mb-2">
                Desbloquea {module.shortName} con el curso completo
              </h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  5 módulos (F1-F5) — 142 páginas
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  Metodología práctica paso a paso
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  Actualizaciones de contenido gratuitas
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center gap-3 flex-shrink-0">
              <div className="text-center">
                <span className="text-3xl font-bold text-accent">€{COMPLETE_COURSE.price}</span>
                <span className="block text-xs text-muted-foreground">pago único</span>
              </div>
              <BuyButton source="module-cta" className="btn-cta text-sm px-6">
                Comprar el curso — €{COMPLETE_COURSE.price}
              </BuyButton>
            </div>
          </div>
          <GuaranteeNote compact className="mt-5" />
        </CardContent>
      </Card>
    </div>
  );
};

export default ModuleCTA;
