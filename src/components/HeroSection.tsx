import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Target, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return <section id="inicio" className="section-anchor lg:py-32 relative overflow-hidden py-[60px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto text-center">
          {/* Badge con urgencia */}
          <Badge variant="outline" className="mb-6 text-accent border-accent hover:bg-accent/10 transition-colors">
            <Sparkles className="mr-2 h-4 w-4" />
            Metodología GEO pionera en español
          </Badge>
          
          {/* Main Headline - Más directo y comercial */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Haz que <span className="text-accent">ChatGPT Recomiende</span> Tu Negocio
          </h1>
          
          {/* Subheadline con beneficio específico */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
            esGEO es la primera metodología en español para posicionar tu web como fuente autoritativa en ChatGPT, Perplexity, Claude y los principales LLMs.
          </p>

          {/* Social proof más realista */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-sm">
              <Users className="mr-2 h-4 w-4" />
              Primera metodología GEO en español
            </Badge>
          </div>
          
          {/* CTA Section - Un CTA principal más prominente */}
          <section className="mb-12">
            <h2 className="sr-only">Acciones principales</h2>
            <div className="flex flex-col gap-4 justify-center items-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold px-12 py-4 text-lg" asChild>
                <Link to="/curso/f0">
                  <ArrowRight className="mr-2 h-6 w-6" />
                  Empezar con F0 Gratis
                </Link>
              </Button>
              
            </div>
            
            {/* Guarantee más visible */}
            <p className="text-center text-primary font-medium mt-6 px-4 py-2 bg-accent/10 rounded-lg max-w-md mx-auto">
              ✅ 100% Gratuito • Sin tarjeta de crédito
            </p>
          </section>
          
          {/* Stats Section con prueba social */}
          <section className="mb-12">
            <h2 className="sr-only">Estadísticas del framework</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">F0-F6</div>
                <div className="text-sm text-muted-foreground">Framework completo</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">5</div>
                <div className="text-sm text-muted-foreground">LLMs principales</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Contenido gratuito</div>
              </div>
            </div>
          </section>
          
          {/* Navegación simplificada */}
          <section className="p-6 bg-muted/30 rounded-lg">
            <h2 className="font-semibold text-primary mb-4">Contenido relacionado</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/curso/f0">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Empezar con F0
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/metodologia">
                  <Target className="mr-2 h-4 w-4" />
                  Ver Metodología
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/casos-reales">
                  <Users className="mr-2 h-4 w-4" />
                  Ejemplos reales
                </Link>
              </Button>
            </div>
          </section>
        </article>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
    </section>;
};
export default HeroSection;