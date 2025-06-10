import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import ShareSectionButton from "@/components/ShareSectionButton";
import HighlightSnippet from "@/components/HighlightSnippet";
const HeroSection = () => {
  return <section id="inicio" className="section-anchor lg:py-32 bg-gradient-to-br from-background to-muted/30 py-[80px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header with Share Button */}
          

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Sparkles size={16} />
            Primera metodología GEO en español
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 animate-fade-in">
            Optimiza para ser citado por la IA
          </h1>

          {/* Elevator Pitch Snippet */}
          <HighlightSnippet id="elevator-pitch" variant="definition" className="mb-8 animate-fade-in">
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              <strong>esGEO</strong> es la primera plataforma en español centrada en enseñar cómo estructurar y redactar webs para que los modelos de lenguaje como <strong>ChatGPT</strong>, <strong>Perplexity</strong> o <strong>Claude</strong> las comprendan, recomienden y citen.
            </p>
          </HighlightSnippet>

          {/* Value Proposition Snippet */}
          <HighlightSnippet id="value-proposition" variant="insight" className="mb-8 animate-fade-in">
            <p className="text-lg">
              <strong>El 85% de las búsquedas informacionales ya se resuelven en interfaces conversacionales.</strong> 
              Si tu contenido no está optimizado para IA, estás perdiendo la oportunidad de ser la fuente citada cuando millones de usuarios preguntan sobre tu expertise.
            </p>
          </HighlightSnippet>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in mb-16">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 h-auto text-lg group" onClick={() => document.getElementById('metodologia')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Empieza con el módulo F1
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 h-auto text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => document.getElementById('casos')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Ver casos reales
            </Button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <HighlightSnippet variant="stat">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Enfoque en citabilidad IA</div>
              </div>
            </HighlightSnippet>
            <HighlightSnippet variant="stat">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">6</div>
                <div className="text-sm text-muted-foreground">Módulos prácticos F1-F6</div>
              </div>
            </HighlightSnippet>
            <HighlightSnippet variant="stat">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">Coach</div>
                <div className="text-sm text-muted-foreground">Asistente interactivo</div>
              </div>
            </HighlightSnippet>
          </div>

          {/* Related Content Links */}
          <div className="mt-16 p-6 bg-muted/30 rounded-lg">
            <h3 className="text-lg font-semibold text-primary mb-4">Contenido relacionado</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="ghost" size="sm" onClick={() => document.getElementById('que-es-geo')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                ¿Qué es GEO?
              </Button>
              <Button variant="ghost" size="sm" onClick={() => document.getElementById('metodologia')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Metodología F1-F6
              </Button>
              <Button variant="ghost" size="sm" onClick={() => document.getElementById('coach')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Coach GEO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;