import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empieza a Optimizar para IA Hoy
          </h2>
          
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Cada día que pasa, tu competencia avanza en posicionarse ante los modelos de IA. 
            Empieza con el diagnóstico gratuito F0 o accede al framework completo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold px-8 py-6 text-lg" asChild>
              <Link to="/checkout?plan=complete">
                <Zap className="mr-2 h-5 w-5" />
                Curso Completo — €50
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg" asChild>
              <Link to="/curso/f0">
                Empezar Gratis con F0
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/70">
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4" />
              Pago seguro con Stripe
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              Acceso inmediato
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-4 w-4" />
              Pago único, sin suscripción
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
