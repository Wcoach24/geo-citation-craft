import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, FileText, Shield, Zap } from "lucide-react";
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
      {/* Individual module CTA */}
      <Card className="border-accent/30 bg-gradient-to-br from-accent/5 to-transparent overflow-hidden">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <Badge className="bg-accent text-primary mb-3">Contenido Premium</Badge>
              <h3 className="text-xl font-bold text-primary mb-2">
                Accede al {module.shortName} completo
              </h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  Guía PDF profesional (15-25 páginas)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  Checklist de implementación paso a paso
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  Plantillas y prompts listos para usar
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  Acceso permanente + actualizaciones
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col items-center gap-3 flex-shrink-0">
              <div className="text-center">
                <span className="text-4xl font-bold text-primary">€{module.price}</span>
                <p className="text-xs text-muted-foreground">Pago único</p>
              </div>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold w-full md:w-auto px-8" asChild>
                <Link to={`/checkout?module=${moduleId}`}>
                  <FileText className="mr-2 h-5 w-5" />
                  Comprar {moduleId.toUpperCase()}
                </Link>
              </Button>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Shield className="h-3 w-3" /> Pago seguro · Acceso inmediato
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upsell to complete course */}
      <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border">
        <div>
          <p className="text-sm font-medium text-primary">
            <Zap className="inline h-4 w-4 text-accent mr-1" />
            Ahorra con el Curso Completo
          </p>
          <p className="text-xs text-muted-foreground">
            5 módulos (F1-F5) por <span className="line-through">€{COMPLETE_COURSE.originalPrice}</span>{" "}
            <span className="font-bold text-primary">€{COMPLETE_COURSE.price}</span>
          </p>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link to="/checkout?plan=complete">
            Ver pack completo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ModuleCTA;
