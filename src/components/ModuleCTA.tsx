import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { MODULES, COMPLETE_COURSE } from "@/data/modules";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ModuleCTAProps {
  moduleId: string;
  className?: string;
}

const ModuleCTA: React.FC<ModuleCTAProps> = ({ moduleId, className = "" }) => {
  const module = MODULES[moduleId];
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  if (!module) return null;

  const handleBuyModule = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { productType: 'module', moduleId },
      });
      if (error) throw error;
      if (data?.url) window.location.href = data.url;
    } catch (err) {
      console.error('Checkout error:', err);
      toast({
        title: "Error",
        description: "No se pudo iniciar el pago. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const savings = (MODULES[moduleId].price * 5) - COMPLETE_COURSE.price;

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Individual module purchase */}
      <Card className="border-border bg-card">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg text-primary">Solo este módulo</h3>
              <p className="text-sm text-muted-foreground">{module.shortName} — PDF profesional, acceso inmediato</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-primary">€{module.price}</span>
              <button
                onClick={handleBuyModule}
                disabled={isLoading}
                className="btn-cta text-sm px-6 py-2 cursor-pointer whitespace-nowrap"
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Comprar módulo'}
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Full course promotion */}
      <Card className="border-accent/30 bg-gradient-to-br from-accent/5 to-transparent overflow-hidden">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <div className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-3">
                AHORRA €{savings}
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                O llévate el curso completo
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
                <span className="text-lg text-muted-foreground line-through block">
                  €{COMPLETE_COURSE.originalPrice}
                </span>
                <span className="text-3xl font-bold text-accent">€{COMPLETE_COURSE.price}</span>
              </div>
              <Link to="/curso#comprar" className="btn-cta text-sm px-6 no-underline">
                Curso completo — €{COMPLETE_COURSE.price}
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ModuleCTA;