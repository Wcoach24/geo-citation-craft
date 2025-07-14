
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Star, ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const CasosDestacadosSection = () => {
  const casoDestacado = {
    titulo: "Consultora Legal +400% citaciones",
    empresa: "Jurídica Moderna",
    mejora: "+1200% citas ChatGPT",
    tiempo: "6 semanas",
    modulos: ["F1", "F2", "F3"],
    testimonio: "Implementamos GEO paso a paso y los resultados fueron inmediatos. ChatGPT ahora nos cita como autoridad en derecho digital."
  };

  return (
    <section id="casos-destacados" className="section-anchor py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="h-8 w-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Resultados Reales de Nuestros Clientes
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo empresas como la tuya están consiguiendo ser citadas por IA 
            y aumentando su visibilidad con nuestra metodología GEO
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="hover:shadow-lg transition-shadow relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Verificado
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-primary pr-20">
                {casoDestacado.titulo}
              </CardTitle>
              <p className="text-lg text-muted-foreground">{casoDestacado.empresa}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Quote className="h-5 w-5 text-accent" />
                    <span className="font-semibold text-accent text-lg">{casoDestacado.mejora}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tiempo de implementación:</span>
                    <span className="font-medium">{casoDestacado.tiempo}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-sm text-muted-foreground">Módulos utilizados:</span>
                    <div className="flex flex-wrap gap-2">
                      {casoDestacado.modulos.map((modulo, idx) => (
                        <Badge key={idx} variant="outline" className="text-sm">
                          {modulo}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <blockquote className="text-muted-foreground italic border-l-4 border-accent pl-4">
                    "{casoDestacado.testimonio}"
                  </blockquote>
                  
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">Resultado excelente</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
            <Link to="/casos">
              Ver todos los casos reales
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Más de 50 casos documentados con métricas verificadas
          </p>
        </div>
      </div>
    </section>
  );
};

export default CasosDestacadosSection;
