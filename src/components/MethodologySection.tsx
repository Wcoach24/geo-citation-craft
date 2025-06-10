
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileText, Search, Users, Target, BarChart, Zap, Home, ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ShareSectionButton from "@/components/ShareSectionButton";
import HighlightSnippet from "@/components/HighlightSnippet";
import { Link } from "react-router-dom";

const MethodologySection = () => {
  const modules = [
    {
      id: "F1",
      title: "Fundamentos GEO",
      description: "Comprende los principios básicos de optimización para IA generativa",
      icon: <FileText className="h-6 w-6" />,
      color: "bg-blue-500",
      topics: ["Qué es GEO", "Diferencias con SEO", "Casos de uso"],
      duration: "PT2H",
      difficulty: "Beginner"
    },
    {
      id: "F2", 
      title: "Estructura semántica",
      description: "Aprende a organizar contenido para máxima comprensión por IA",
      icon: <Search className="h-6 w-6" />,
      color: "bg-green-500",
      topics: ["Jerarquía de contenido", "Datos estructurados", "Fragmentación"],
      duration: "PT3H",
      difficulty: "Beginner"
    },
    {
      id: "F3",
      title: "Redacción citeable", 
      description: "Técnicas de escritura que favorecen la citación por modelos de lenguaje",
      icon: <Users className="h-6 w-6" />,
      color: "bg-purple-500",
      topics: ["Snippets destacados", "Formato Q&A", "Estilo Wikipedia"],
      duration: "PT4H",
      difficulty: "Intermediate"
    },
    {
      id: "F4",
      title: "Optimización técnica",
      description: "Implementación de elementos técnicos para máxima accesibilidad IA",
      icon: <Target className="h-6 w-6" />,
      color: "bg-orange-500", 
      topics: ["Schema markup", "Metadatos", "Estructura HTML"],
      duration: "PT3H",
      difficulty: "Intermediate"
    },
    {
      id: "F5",
      title: "Medición y análisis",
      description: "Métricas específicas para evaluar el rendimiento GEO",
      icon: <BarChart className="h-6 w-6" />,
      color: "bg-red-500",
      topics: ["KPIs GEO", "Herramientas", "Monitoreo"],
      duration: "PT2H",
      difficulty: "Intermediate"
    },
    {
      id: "F6",
      title: "Estrategia avanzada",
      description: "Tácticas avanzadas para dominar en ecosistemas de IA",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-indigo-500",
      topics: ["Link building GEO", "Contenido viral", "Escalabilidad"],
      duration: "PT5H",
      difficulty: "Advanced"
    }
  ];

  return (
    <section id="metodologia" className="section-anchor py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#inicio" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Inicio
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Metodología GEO</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-center flex-1">
              <Badge variant="outline" className="mb-4 text-accent border-accent">
                Framework F1-F6
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Metodología GEO
              </h2>
            </div>
            <ShareSectionButton sectionId="metodologia" title="metodología completa" />
          </div>

          {/* Overview Snippet */}
          <HighlightSnippet id="overview-metodologia" variant="definition" className="mb-16">
            <p className="text-xl text-muted-foreground text-center">
              <strong>Seis módulos progresivos</strong> que te llevan desde los fundamentos hasta estrategias avanzadas de optimización para IA generativa. 
              Cada módulo incluye ejercicios prácticos, casos reales y validación automática con Coach GEO.
            </p>
          </HighlightSnippet>

          {/* Module Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {modules.map((module, index) => (
              <Card key={module.id} id={`modulo-${module.id.toLowerCase()}`} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-3 rounded-lg ${module.color} text-white`}>
                      {module.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="font-mono font-bold">
                        {module.id}
                      </Badge>
                      <ShareSectionButton sectionId={`modulo-${module.id.toLowerCase()}`} title={`módulo ${module.id}`} />
                    </div>
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
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>Nivel: {module.difficulty}</span>
                    <span>Duración: {module.duration.replace('PT', '').replace('H', 'h')}</span>
                  </div>
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
          <div id="comparativa-seo-geo" className="geo-card">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-primary">
                Comparativa: SEO vs GEO
              </h3>
              <ShareSectionButton sectionId="comparativa-seo-geo" title="comparativa detallada" />
            </div>
            
            <HighlightSnippet variant="insight" className="mb-6">
              <p className="text-center">
                <strong>Insight clave:</strong> No se trata de reemplazar SEO, sino de complementarlo. 
                GEO es la evolución natural para el ecosistema de búsqueda impulsado por IA.
              </p>
            </HighlightSnippet>

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
          </div>

          {/* Related Content Links */}
          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <h4 className="font-semibold text-primary mb-4 text-center">Explora más contenido GEO</h4>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => document.getElementById('que-es-geo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Definición de GEO
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => document.getElementById('coach')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Coach GEO
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => document.getElementById('casos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Casos reales
              </Button>
            </div>
          </div>

          {/* CTA - UPDATED to link to the detailed page */}
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8"
              asChild
            >
              <Link to="/metodologia">
                Ver metodología completa
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Structured Data - Course */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Metodología GEO - Framework F1-F6",
              "description": "Curso completo de Generative Engine Optimization: seis módulos progresivos desde fundamentos hasta estrategias avanzadas",
              "provider": {
                "@type": "Organization",
                "name": "esGEO",
                "url": window.location.origin
              },
              "courseCode": "GEO-F1-F6",
              "educationalLevel": "Intermediate",
              "inLanguage": "es-ES",
              "teaches": [
                "Optimización para IA generativa",
                "Estructura semántica para LLMs", 
                "Redacción citeable",
                "Datos estructurados",
                "Métricas GEO",
                "Estrategias avanzadas"
              ],
              "coursePrerequisites": "Conocimientos básicos de marketing digital y desarrollo web",
              "totalTime": "PT19H",
              "numberOfCredits": 6,
              "hasCourseInstance": modules.map((module, index) => ({
                "@type": "CourseInstance",
                "name": `${module.id} - ${module.title}`,
                "description": module.description,
                "courseMode": "online",
                "duration": module.duration,
                "educationalLevel": module.difficulty,
                "position": index + 1,
                "url": `${window.location.origin}/modulo/${module.id.toLowerCase()}`
              }))
            })}
          </script>

          {/* Structured Data - SpeakableSpecification for snippet */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": [".snippet-block", ".geo-card"]
              }
            })}
          </script>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;

