
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Search, Users, Target, BarChart, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const MethodologySection = () => {
  const modules = [
    {
      id: "F1",
      title: "Fundamentos de accesibilidad generativa",
      description: "Comprende los principios básicos para que tu contenido sea entendido por IA generativa",
      icon: <FileText className="h-8 w-8" />,
      color: "bg-blue-500"
    },
    {
      id: "F2", 
      title: "Estructura semántica para LLMs",
      description: "Aprende a organizar y estructurar contenido para máxima comprensión por IA",
      icon: <Search className="h-8 w-8" />,
      color: "bg-green-500"
    },
    {
      id: "F3",
      title: "Redacción citeable y autoridad",
      description: "Técnicas de escritura que favorecen la citación por modelos de lenguaje",
      icon: <Users className="h-8 w-8" />,
      color: "bg-purple-500"
    },
    {
      id: "F4",
      title: "Optimización técnica avanzada",
      description: "Implementación de elementos técnicos para máxima accesibilidad por IA",
      icon: <Target className="h-8 w-8" />,
      color: "bg-orange-500"
    },
    {
      id: "F5",
      title: "Medición y análisis GEO",
      description: "Métricas específicas para evaluar el rendimiento en citaciones por IA",
      icon: <BarChart className="h-8 w-8" />,
      color: "bg-red-500"
    },
    {
      id: "F6",
      title: "Estrategia avanzada y escalabilidad",
      description: "Tácticas avanzadas para dominar en ecosistemas de IA generativa",
      icon: <Zap className="h-8 w-8" />,
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="metodologia" className="section-anchor py-20 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-accent border-accent">
              Framework F1-F6
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Metodología GEO
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un framework progresivo de 6 módulos para dominar la optimización para IA generativa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {modules.map((module, index) => (
              <Card key={module.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-4 rounded-lg ${module.color} text-white`}>
                      {module.icon}
                    </div>
                    <Badge variant="secondary" className="font-mono font-bold text-lg">
                      {module.id}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                    {module.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-accent group-hover:text-primary group-hover:border-accent transition-all"
                    asChild
                  >
                    <Link to={`/curso/${module.id.toLowerCase()}`}>
                      Explorar módulo
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              ¿Listo para empezar tu viaje hacia la optimización para IA generativa?
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary" asChild>
              <Link to="/curso">
                Ver curso completo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <h3 className="font-semibold text-primary mb-4 text-center">Contenido relacionado</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/curso/f1">Empezar con F1</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/casos">Ver casos reales</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/casos">Casos de éxito</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
