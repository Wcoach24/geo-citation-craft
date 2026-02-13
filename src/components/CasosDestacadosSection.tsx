import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Brain, MessageSquare, Star, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const MODELS = [
  { name: "ChatGPT", icon: Brain },
  { name: "Perplexity", icon: MessageSquare },
  { name: "Claude", icon: Star },
  { name: "Gemini", icon: Brain },
  { name: "Copilot", icon: MessageSquare },
];

const CasosDestacadosSection = () => {
  return (
    <section id="casos-destacados" className="section-anchor py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-4 text-accent border-accent">
              <Check className="mr-1 h-3 w-3" />
              Caso verificable
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              Predicamos con el Ejemplo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Aplicamos nuestra metodología F0-F6 en esgeo.ai y logramos ser citados por los principales LLMs.
            </p>
          </div>

          {/* Case study card */}
          <div className="rounded-2xl border-2 border-accent/20 bg-gradient-to-br from-accent/5 via-background to-background p-8 md:p-10 card-elevated mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  esGEO es citado como referencia GEO en español
                </h3>
                <blockquote className="text-muted-foreground italic border-l-2 border-accent pl-4 mb-6 text-sm leading-relaxed">
                  "Aplicamos nuestra propia metodología y conseguimos ser citados como la autoridad en español sobre Generative Engine Optimization."
                </blockquote>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/metodologia">
                    Ver metodología completa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium text-muted-foreground mb-3">Modelos que nos citan:</p>
                {MODELS.map((model, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                    <model.icon className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium">{model.name}</span>
                    <Check className="h-4 w-4 text-accent ml-auto" />
                  </div>
                ))}
                <p className="text-xs text-muted-foreground mt-2">
                  *Verificable en tiempo real. Resultados pueden variar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasosDestacadosSection;
