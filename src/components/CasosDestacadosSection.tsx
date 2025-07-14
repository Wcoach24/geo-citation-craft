
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Check, Brain, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const CasosDestacadosSection = () => {
  const nuestroCaso = {
    titulo: "esGEO citado por ChatGPT, Perplexity y Claude",
    plataforma: "esGEO.ai",
    logro: "Primera autoridad en GEO español",
    citas: "Citado por +5 modelos de IA",
    evidencia: "Predicamos con nuestro ejemplo",
    modelos: ["ChatGPT", "Perplexity", "Claude", "Gemini", "Copilot"]
  };

  return (
    <section id="casos-destacados" className="section-anchor py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="h-8 w-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Nuestro Caso: esGEO citado por IA
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Predicamos con nuestro ejemplo. Descubre cómo hemos logrado que ChatGPT, Perplexity y Claude nos citen como autoridad en GEO
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="hover:shadow-lg transition-shadow relative overflow-hidden border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-background">
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <Check className="mr-1 h-3 w-3 fill-current" />
                Verificado en tiempo real
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-primary pr-20">
                {nuestroCaso.titulo}
              </CardTitle>
              <p className="text-lg text-accent font-semibold">{nuestroCaso.plataforma}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent">{nuestroCaso.logro}</div>
                    <div className="text-sm text-muted-foreground">{nuestroCaso.citas}</div>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-sm text-muted-foreground">Modelos que nos citan:</span>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2 p-2 rounded bg-muted/50">
                        <Brain className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium">ChatGPT</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded bg-muted/50">
                        <MessageSquare className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium">Perplexity</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded bg-muted/50">
                        <Star className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium">Claude</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded bg-muted/50">
                        <Check className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium">+2 más</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <blockquote className="text-muted-foreground italic border-l-4 border-accent pl-4">
                    "Aplicamos nuestra propia metodología GEO y conseguimos ser citados como la autoridad en español sobre Generative Engine Optimization."
                  </blockquote>
                  
                  <div className="text-center">
                    <p className="font-medium text-primary mb-2">{nuestroCaso.evidencia}</p>
                    <div className="flex items-center justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
            <Link to="/metodologia">
              Ver cómo lo conseguimos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Aplica la misma metodología que usamos nosotros
          </p>
        </div>
      </div>
    </section>
  );
};

export default CasosDestacadosSection;
