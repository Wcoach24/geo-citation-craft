import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Target, Brain } from "lucide-react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return <section id="inicio" className="section-anchor lg:py-32 relative overflow-hidden py-[35px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="outline" className="mb-6 text-accent border-accent hover:bg-accent/10 transition-colors">
            <Sparkles className="mr-2 h-4 w-4" />
            Metodología GEO pionera en español
          </Badge>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Optimiza tu Contenido para la <span className="text-accent">Citabilidad de la IA</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            esGEO es la primera metodología en español para posicionar tu web como fuente autoritativa en ChatGPT, Perplexity, Claude y los principales LLMs.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8" asChild>
              <Link to="/curso/f1">
                Empieza con F1
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-background px-8" asChild>
              <Link to="/casos">
                <Target className="mr-2 h-5 w-5" />
                Ver casos reales
              </Link>
            </Button>
          </div>
          
          {/* Stats or Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">6</div>
              <div className="text-sm text-muted-foreground">Módulos progresivos</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">F1-F6</div>
              <div className="text-sm text-muted-foreground">Framework validado</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">IA</div>
              <div className="text-sm text-muted-foreground">Optimización generativa</div>
            </div>
          </div>
          
          {/* Related Content Links */}
          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <h3 className="font-semibold text-primary mb-4">Explora el ecosistema GEO</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/#que-es-geo">
                  <Brain className="mr-2 h-4 w-4" />
                  ¿Qué es GEO?
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/metodologia">
                  Metodología F1-F6
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
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
    </section>;
};
export default HeroSection;