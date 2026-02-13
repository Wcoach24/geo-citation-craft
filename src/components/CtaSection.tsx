import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="hero-gradient py-24 text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Tu competencia ya se está optimizando para IA.
            <span className="block text-accent mt-2">¿Y tú?</span>
          </h2>
          
          <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto">
            Cada día que pasa sin optimizar tu web para LLMs es un día en que otros ocupan tu lugar en las respuestas de IA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="btn-glow cta-pulse bg-accent hover:bg-accent/90 text-primary font-bold px-10 py-7 text-lg rounded-xl" asChild>
              <Link to="/checkout?plan=complete">
                <Zap className="mr-2 h-5 w-5" />
                Curso Completo — €50
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-10 py-7 text-lg rounded-xl" asChild>
              <Link to="/curso/f0">
                Probar Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/50">
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4" />
              Pago seguro con Stripe
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              Acceso inmediato
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4" />
              Pago único
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
