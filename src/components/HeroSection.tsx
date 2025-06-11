
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Target, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="inicio" className="section-anchor py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge 
            variant="outline" 
            className="mb-6 text-accent border-accent hover:bg-accent/10 transition-colors animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Metodología GEO pionera en español
          </Badge>
          
          {/* Main Headline with typewriter effect */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            <span className="inline-block animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Optimiza tu Contenido para la{" "}
            </span>
            <span 
              className="text-accent inline-block animate-fade-in" 
              style={{ animationDelay: "0.6s" }}
            >
              Citabilidad de la IA
            </span>
          </h1>
          
          {/* Subheadline */}
          <p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.9s" }}
          >
            esGEO es la primera metodología en español para posicionar tu web como fuente autoritativa 
            en ChatGPT, Perplexity, Claude y los principales LLMs.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in"
            style={{ animationDelay: "1.2s" }}
          >
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 hover:scale-105 transition-all duration-200"
              asChild
            >
              <Link to="/curso/f1">
                Empieza con F1
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-background px-8 hover:scale-105 transition-all duration-200"
              asChild
            >
              <Link to="/casos">
                <Target className="mr-2 h-5 w-5" />
                Ver casos reales
              </Link>
            </Button>
          </div>
          
          {/* Stats or Social Proof */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center animate-fade-in"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="space-y-2 hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-accent">6</div>
              <div className="text-sm text-muted-foreground">Módulos progresivos</div>
            </div>
            <div className="space-y-2 hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-accent">F1-F6</div>
              <div className="text-sm text-muted-foreground">Framework validado</div>
            </div>
            <div className="space-y-2 hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-accent">IA</div>
              <div className="text-sm text-muted-foreground">Optimización generativa</div>
            </div>
          </div>
          
          {/* Related Content Links */}
          <div 
            className="mt-12 p-6 bg-muted/30 rounded-lg animate-fade-in"
            style={{ animationDelay: "1.8s" }}
          >
            <h3 className="font-semibold text-primary mb-4">Explora el ecosistema GEO</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button 
                variant="ghost" 
                size="sm"
                className="hover:scale-105 transition-all duration-200"
                asChild
              >
                <Link to="/#que-es-geo">
                  <Brain className="mr-2 h-4 w-4" />
                  ¿Qué es GEO?
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                className="hover:scale-105 transition-all duration-200"
                asChild
              >
                <Link to="/metodologia">
                  Metodología F1-F6
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                className="hover:scale-105 transition-all duration-200"
                asChild
              >
                <Link to="/coach">
                  Coach GEO
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
      
      {/* CSS for reduced motion accessibility */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
