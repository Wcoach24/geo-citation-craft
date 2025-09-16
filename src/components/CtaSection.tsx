
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Users, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import LeadMagnetModal from "./LeadMagnetModal";

const CtaSection = () => {
  const urgencyElements = [
    {
      icon: Users,
      text: "1,247 profesionales ya están optimizando"
    },
    {
      icon: Clock,
      text: "Únete antes de que suba el precio"
    }
  ];

  const leadMagnetBenefits = [
    "15 puntos de verificación GEO",
    "Plantilla de auditoría técnica",
    "Ejemplos reales de optimización",
    "Checklist pre-implementación"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {urgencyElements.map((element, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                <element.icon className="mr-2 h-4 w-4" />
                {element.text}
              </Badge>
            ))}
          </div>

          {/* Main CTA */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Comienza tu Transformación GEO Hoy
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            No esperes a que tu competencia se adelante. Empieza a ser citado por IA desde hoy mismo.
          </p>

          {/* CTA Principal */}
          <div className="flex justify-center mb-8">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8" asChild>
              <Link to="/curso/f0">
                <ArrowRight className="mr-2 h-5 w-5" />
                Empezar con F0 Gratis
              </Link>
            </Button>
          </div>


          {/* Social Proof Mini */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-accent to-primary"></div>
                ))}
              </div>
              <span>+1,200 optimizadores activos</span>
            </div>
            <div>⭐⭐⭐⭐⭐ 4.9/5 (47 reseñas)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
