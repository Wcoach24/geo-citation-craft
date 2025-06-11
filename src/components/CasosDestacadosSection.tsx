
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Star, ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const CasosDestacadosSection = () => {
  const casosDestacados = [
    {
      titulo: "Consultora Legal +400% citaciones",
      empresa: "Jurídica Moderna",
      mejora: "+1200% citas ChatGPT",
      tiempo: "6 semanas",
      modulos: ["F1", "F2", "F3"]
    },
    {
      titulo: "E-commerce +45% recomendaciones IA",
      empresa: "TechGear Store", 
      mejora: "+300% conversión IA",
      tiempo: "8 semanas",
      modulos: ["F3", "F4", "F5"]
    },
    {
      titulo: "Startup Fintech autoridad cripto",
      empresa: "CryptoSafe Pro",
      mejora: "+540% leads calificados", 
      tiempo: "12 semanas",
      modulos: ["F2", "F3", "F4", "F5", "F6"]
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {casosDestacados.map((caso, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Verificado
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-primary pr-20">
                  {caso.titulo}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{caso.empresa}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Quote className="h-4 w-4 text-accent" />
                  <span className="font-semibold text-accent">{caso.mejora}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tiempo:</span>
                  <span className="font-medium">{caso.tiempo}</span>
                </div>
                
                <div className="space-y-2">
                  <span className="text-sm text-muted-foreground">Módulos utilizados:</span>
                  <div className="flex flex-wrap gap-1">
                    {caso.modulos.map((modulo, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {modulo}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-1 pt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">Resultado excelente</span>
                </div>
              </CardContent>
            </Card>
          ))}
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
