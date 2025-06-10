
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Sparkles size={16} />
            Primera metodología GEO en español
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 animate-fade-in">
            Optimiza para ser citado por la IA
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            esGEO es la primera plataforma en español centrada en enseñar cómo estructurar y redactar webs para que los modelos de lenguaje como <strong>ChatGPT</strong>, <strong>Perplexity</strong> o <strong>Claude</strong> las comprendan, recomienden y citen.
          </p>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 h-auto text-lg group"
            >
              Empieza con el módulo F1
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 h-auto text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Ver casos reales
            </Button>
          </div>

          {/* Key Value Proposition */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Enfoque en citabilidad IA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">6</div>
              <div className="text-sm text-muted-foreground">Módulos prácticos F1-F6</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">Coach</div>
              <div className="text-sm text-muted-foreground">Asistente interactivo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
