import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { MODULES, COMPLETE_COURSE } from "@/data/modules";

interface ModuleCTAProps {
  moduleId: string;
  className?: string;
}

const ModuleCTA: React.FC<ModuleCTAProps> = ({ moduleId, className = "" }) => {
  const module = MODULES[moduleId];
  if (!module) return null;

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Full course promotion CTA */}
      <Card className="border-accent/30 bg-gradient-to-br from-accent/5 to-transparent overflow-hidden">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Accede al curso GEO completo
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Este módulo está incluido en el curso completo
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  5 módulos fundamentales (F1-F5)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  5 guías PDF profesionales (15-25 páginas cada una)
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

            <div className="flex flex-col items-center gap-4 flex-shrink-0">
              <div className="text-center">
                <span className="text-2xl text-muted-foreground line-through block mb-1">
                  €{COMPLETE_COURSE.originalPrice}
                </span>
                <span className="text-4xl font-bold text-accent">€{COMPLETE_COURSE.price}</span>
              </div>
              <Link to="/curso#comprar" className="btn-cta text-lg px-8 no-underline">
                Ver el curso GEO — €{COMPLETE_COURSE.price}
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ModuleCTA;