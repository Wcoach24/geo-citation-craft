
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

          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8" asChild>
              <Link to="/curso/f1">
                <ArrowRight className="mr-2 h-5 w-5" />
                Empezar Curso Gratis
              </Link>
            </Button>
            
            <LeadMagnetModal
              trigger={
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-background px-8">
                  <Gift className="mr-2 h-5 w-5" />
                  Descargar Checklist GEO
                </Button>
              }
              title="Checklist GEO Completo"
              description="La guía definitiva de 15 puntos para optimizar tu web y ser citado por IA"
              leadMagnet="Checklist GEO"
              benefits={leadMagnetBenefits}
            />
          </div>

          {/* Risk Reversal */}
          <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-accent/20">
            <h3 className="font-semibold text-primary mb-2">
              ✅ Sin riesgo • Garantía 30 días
            </h3>
            <p className="text-sm text-muted-foreground">
              Si no ves mejoras en tu citabilidad por IA en 30 días, te devolvemos tu dinero.
            </p>
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
            <div>⭐⭐⭐⭐⭐ 4.9/5 (127 reseñas)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
