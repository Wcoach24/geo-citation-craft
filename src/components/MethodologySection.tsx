
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileText, Search, Users, Target, BarChart, Zap } from "lucide-react";

const MethodologySection = () => {
  const modules = [
    {
      id: "F1",
      title: "Fundamentos GEO",
      description: "Comprende los principios básicos de optimización para IA generativa",
      icon: <FileText className="h-6 w-6" />,
      color: "bg-blue-500",
      topics: ["Qué es GEO", "Diferencias con SEO", "Casos de uso"]
    },
    {
      id: "F2", 
      title: "Estructura semántica",
      description: "Aprende a organizar contenido para máxima comprensión por IA",
      icon: <Search className="h-6 w-6" />,
      color: "bg-green-500",
      topics: ["Jerarquía de contenido", "Datos estructurados", "Fragmentación"]
    },
    {
      id: "F3",
      title: "Redacción citeable", 
      description: "Técnicas de escritura que favorecen la citación por modelos de lenguaje",
      icon: <Users className="h-6 w-6" />,
      color: "bg-purple-500",
      topics: ["Snippets destacados", "Formato Q&A", "Estilo Wikipedia"]
    },
    {
      id: "F4",
      title: "Optimización técnica",
      description: "Implementación de elementos técnicos para máxima accesibilidad IA",
      icon: <Target className="h-6 w-6" />,
      color: "bg-orange-500", 
      topics: ["Schema markup", "Metadatos", "Estructura HTML"]
    },
    {
      id: "F5",
      title: "Medición y análisis",
      description: "Métricas específicas para evaluar el rendimiento GEO",
      icon: <BarChart className="h-6 w-6" />,
      color: "bg-red-500",
      topics: ["KPIs GEO", "Herramientas", "Monitoreo"]
    },
    {
      id: "F6",
      title: "Estrategia avanzada",
      description: "Tácticas avanzadas para dominar en ecosistemas de IA",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-indigo-500",
      topics: ["Link building GEO", "Contenido viral", "Escalabilidad"]
    }
  ];

  return (
    <section id="metodologia" className="section-anchor py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-accent border-accent">
              Framework F1-F6
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Metodología GEO
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seis módulos progresivos que te llevan desde los fundamentos hasta estrategias avanzadas de optimización para IA generativa
            </p>
          </div>

          {/* Module Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {modules.map((module, index) => (
              <Card key={module.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-3 rounded-lg ${module.color} text-white`}>
                      {module.icon}
                    </div>
                    <Badge variant="secondary" className="font-mono font-bold">
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
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-4">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-accent group-hover:text-primary group-hover:border-accent transition-all"
                  >
                    Explorar módulo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* SEO vs GEO Comparison */}
          <div className="geo-card">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Comparativa: SEO vs GEO
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-red-600">SEO Tradicional</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Objetivo:</strong> Ranking en buscadores</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Audiencia:</strong> Usuarios navegando</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Métrica clave:</strong> Posición en SERP</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Enfoque:</strong> Keywords y backlinks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Herramientas:</strong> Ahrefs, SEMrush, GSC</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-accent">GEO (Nuevo Paradigma)</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Objetivo:</strong> Ser citado por IA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Audiencia:</strong> Modelos de lenguaje</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Métrica clave:</strong> Frecuencia de citación</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Enfoque:</strong> Estructura y fragmentación</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Herramientas:</strong> Coach GEO, validadores IA</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
              <p className="text-sm">
                <strong>Insight clave:</strong> No se trata de reemplazar SEO, sino de complementarlo. 
                GEO es la evolución natural para el ecosistema de búsqueda impulsado por IA.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8">
              Comenzar con F1 - Fundamentos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
