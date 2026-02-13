import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Shield, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="inicio" className="section-anchor lg:py-28 relative overflow-hidden py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 text-accent border-accent hover:bg-accent/10 transition-colors">
            <Sparkles className="mr-2 h-4 w-4" />
            Primera metodología GEO en español
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Haz que la IA{" "}
            <span className="text-accent">Recomiende</span>{" "}
            Tu Negocio
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Aprende a estructurar tu web para que ChatGPT, Perplexity y Claude 
            te citen como fuente autoritativa. Metodología práctica con resultados medibles.
          </p>

          {/* Value props rápidos */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-accent" />
              Framework F1-F6 completo
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-accent" />
              Guías PDF descargables
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-accent" />
              Implementación paso a paso
            </span>
          </div>
          
          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold px-10 py-6 text-lg shadow-lg shadow-accent/25" asChild>
              <Link to="/curso/f0">
                Empezar Gratis con F0
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-10 py-6 text-lg border-primary/20" asChild>
              <Link to="/checkout?plan=complete">
                <Zap className="mr-2 h-5 w-5" />
                Curso Completo — €50
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4" />
              Pago único, sin suscripción
            </span>
            <span>•</span>
            <span>Acceso inmediato</span>
            <span>•</span>
            <span>F0 100% gratuito</span>
          </div>
        </article>
      </div>
      
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
    </section>
  );
};

export default HeroSection;
