import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Zap, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PremiumContentGateProps {
  moduleNumber: string;
  moduleName: string;
  previewSections?: string[];
  fullContentSections?: number;
  className?: string;
}

const PremiumContentGate = ({ 
  moduleNumber, 
  moduleName, 
  previewSections = [], 
  fullContentSections = 8,
  className = "" 
}: PremiumContentGateProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Premium Content Gate Overlay */}
      <div className="bg-gradient-to-t from-background via-background/95 to-background/20 border border-primary/20 rounded-lg p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
            <Lock className="h-6 w-6 text-primary" />
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold text-primary mb-3">
          Contenido Premium Bloqueado
        </h3>
        
        <p className="text-muted-foreground mb-4 max-w-md mx-auto">
          Has visto {previewSections.length} de {fullContentSections} secciones del {moduleNumber}. 
          Desbloquea el contenido completo y aprende todo sobre <strong>{moduleName}</strong>.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-6 max-w-md mx-auto">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-4 text-center">
              <Zap className="h-5 w-5 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium text-primary">Acceso Inmediato</div>
              <div className="text-xs text-muted-foreground">Sin esperas</div>
            </CardContent>
          </Card>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-4 text-center">
              <ChevronRight className="h-5 w-5 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium text-primary">Contenido Completo</div>
              <div className="text-xs text-muted-foreground">Framework F1-F6</div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-3">
          <Button asChild size="lg" className="w-full max-w-xs">
            <Link to="/checkout">
              Desbloquear {moduleNumber} Completo
              <Lock className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          
          <Button variant="outline" size="sm" asChild className="w-full max-w-xs">
            <Link to="/#precios">
              Ver Todos los Planes
            </Link>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mt-4">
          ✓ Garantía de 30 días • ✓ Cancela cuando quieras
        </p>
      </div>

      {/* Hidden content for SEO - visible to crawlers but not to users */}
      <div className="sr-only" aria-hidden="true">
        <p>Contenido premium completo del {moduleNumber}: {moduleName}. Incluye implementación detallada, checklists avanzados, prompts especializados, casos de estudio, herramientas adicionales y técnicas avanzadas de GEO para optimización en motores generativos.</p>
      </div>
    </div>
  );
};

export default PremiumContentGate;