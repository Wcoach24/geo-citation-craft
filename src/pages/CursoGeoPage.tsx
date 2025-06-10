import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Home, ChevronRight, BookOpen, FileText, Search, Users, Target, BarChart, Zap, ArrowRight, Download, Bot, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const CursoGeoPage = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Set up anchor navigation with smooth scrolling
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          // Update URL without reloading page
          history.pushState(null, '', targetId);
        }
      });
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', function(e) {});
      });
    };
  }, []);

  // Módulos F1-F6 data
  const modules = [
    {
      id: "F1",
      title: "Fundamentos de accesibilidad generativa",
      description: "Comprende los principios básicos para que tu contenido sea entendido por IA generativa",
      icon: <FileText className="h-8 w-8" />,
      color: "bg-blue-500",
      topics: ["Qué es GEO", "Diferencias con SEO", "Principios fundamentales"],
      duration: "2h",
      difficulty: "Principiante",
      downloadUrl: "/downloads/modulo-f1.pdf"
    },
    {
      id: "F2", 
      title: "Estructura semántica para LLMs",
      description: "Aprende a organizar y estructurar contenido para máxima comprensión por IA",
      icon: <Search className="h-8 w-8" />,
      color: "bg-green-500",
      topics: ["Jerarquía de contenido", "Datos estructurados", "Fragmentación semántica"],
      duration: "3h",
      difficulty: "Principiante",
      downloadUrl: "/downloads/modulo-f2.pdf"
    },
    {
      id: "F3",
      title: "Redacción citeable y autoridad",
      description: "Técnicas de escritura que favorecen la citación por modelos de lenguaje",
      icon: <Users className="h-8 w-8" />,
      color: "bg-purple-500",
      topics: ["Snippets destacados", "Formato pregunta-respuesta", "Estilo enciclopédico"],
      duration: "4h",
      difficulty: "Intermedio",
      downloadUrl: "/downloads/modulo-f3.pdf"
    },
    {
      id: "F4",
      title: "Optimización técnica avanzada",
      description: "Implementación de elementos técnicos para máxima accesibilidad por IA",
      icon: <Target className="h-8 w-8" />,
      color: "bg-orange-500", 
      topics: ["Schema markup", "Metadatos citables", "Estructura HTML semántica"],
      duration: "3h",
      difficulty: "Intermedio",
      downloadUrl: "/downloads/modulo-f4.pdf"
    },
    {
      id: "F5",
      title: "Medición y análisis GEO",
      description: "Métricas específicas para evaluar el rendimiento en citaciones por IA",
      icon: <BarChart className="h-8 w-8" />,
      color: "bg-red-500",
      topics: ["KPIs de citabilidad", "Herramientas de monitoreo", "Análisis de rendimiento"],
      duration: "2h",
      difficulty: "Intermedio",
      downloadUrl: "/downloads/modulo-f5.pdf"
    },
    {
      id: "F6",
      title: "Estrategia avanzada y escalabilidad",
      description: "Tácticas avanzadas para dominar en ecosistemas de IA generativa",
      icon: <Zap className="h-8 w-8" />,
      color: "bg-indigo-500",
      topics: ["Link building para IA", "Contenido viral citeable", "Escalabilidad técnica"],
      duration: "5h",
      difficulty: "Avanzado",
      downloadUrl: "/downloads/modulo-f6.pdf"
    }
  ];

  // FAQ data
  const faqs = [
    {
      id: "faq-prerrequisitos",
      question: "¿Puedo seguir los módulos sin conocimientos técnicos?",
      answer: "Sí, el curso está diseñado para ser accesible desde nivel principiante. Los primeros módulos F1 y F2 no requieren conocimientos técnicos previos, mientras que F4-F6 incluyen aspectos más técnicos que se explican paso a paso."
    },
    {
      id: "faq-orden",
      question: "¿Debo seguir los módulos en orden?",
      answer: "Recomendamos seguir el orden F1-F6 ya que cada módulo construye sobre los conceptos del anterior. Sin embargo, profesionales con experiencia pueden acceder directamente a módulos específicos según sus necesidades."
    },
    {
      id: "faq-actualizaciones",
      question: "¿Se actualiza el contenido del curso?",
      answer: "Sí, el curso se actualiza regularmente para reflejar los últimos avances en IA generativa y nuevas técnicas de optimización. Los usuarios tienen acceso a todas las actualizaciones."
    },
    {
      id: "faq-certificacion",
      question: "¿Hay certificación al completar el curso?",
      answer: "Actualmente no ofrecemos certificación formal, pero cada módulo incluye ejercicios prácticos y el Coach GEO genera informes personalizados que validan tu progreso y aplicación de los conceptos."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Curso GEO | Aprende Generative Engine Optimization | esGEO</title>
        <meta name="description" content="Curso completo de GEO: aprende paso a paso a redactar para ser citado por IA. Módulos F1-F6 con contenido descargable y práctica guiada." />
        <link rel="canonical" href="https://esgeo.es/curso" />
        
        {/* Citation meta tags */}
        <meta name="citation_title" content="Curso GEO: Generative Engine Optimization" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2024" />
        <meta name="speakable-selector" content=".snippet-block, [data-speakable='true']" />
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Inicio
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Curso GEO</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Page Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-accent border-accent">
              <BookOpen className="h-4 w-4 mr-2" />
              Curso Completo
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Curso GEO
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Aprende paso a paso a redactar para ser citado por la IA.
            </p>
          </div>

          {/* Introduction */}
          <HighlightSnippet id="introduccion-curso" variant="definition" className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-primary">¿Qué es el Curso GEO?</h2>
              <ShareSectionButton sectionId="introduccion-curso" title="introducción al curso" />
            </div>
            <p className="text-lg leading-relaxed" data-speakable="true">
              <strong>El curso GEO te enseña a aplicar cada principio para lograr que tu web sea comprensible, útil y citada por modelos generativos.</strong> 
              A través de seis módulos progresivos (F1-F6), aprenderás desde los fundamentos hasta técnicas avanzadas de Generative Engine Optimization, 
              con ejercicios prácticos y herramientas de validación incluidas.
            </p>
          </HighlightSnippet>

          {/* Course Modules */}
          <section id="modulos-curso" className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-primary">Módulos del Curso</h2>
              <ShareSectionButton sectionId="modulos-curso" title="módulos completos" />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module, index) => (
                <Card key={module.id} id={`modulo-${module.id.toLowerCase()}`} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-4 rounded-lg ${module.color} text-white`}>
                        {module.icon}
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="font-mono font-bold text-lg">
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
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                          {topic}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span>Nivel: {module.difficulty}</span>
                      <span>Duración: {module.duration}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-accent group-hover:text-primary group-hover:border-accent transition-all"
                      asChild
                    >
                      <Link to={`/metodologia/${module.id.toLowerCase()}`}>
                        Explorar módulo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section id="preguntas-frecuentes" className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-primary">Preguntas Frecuentes</h2>
              <ShareSectionButton sectionId="preguntas-frecuentes" title="preguntas frecuentes" />
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} id={faq.id} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-primary">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Related Content */}
          <section className="bg-muted/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Continúa tu aprendizaje</h3>
            <p className="text-muted-foreground mb-6">
              Explora más recursos para dominar la optimización para IA generativa
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link to="/metodologia">
                  <FileText className="h-4 w-4 mr-2" />
                  Metodología completa
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/coach">
                  <Bot className="h-4 w-4 mr-2" />
                  Coach personalizado
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/casos">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Casos reales
                </Link>
              </Button>
            </div>
          </section>

          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Curso GEO - Generative Engine Optimization",
              "description": "Curso completo para aprender a optimizar contenido web para ser citado por IA generativa",
              "provider": {
                "@type": "Organization",
                "name": "esGEO",
                "url": window.location.origin
              },
              "courseCode": "CURSO-GEO-F1-F6",
              "educationalLevel": "Beginner to Advanced",
              "inLanguage": "es-ES",
              "teaches": [
                "Generative Engine Optimization",
                "Optimización para IA generativa",
                "Redacción citeable",
                "Estructura semántica",
                "Datos estructurados",
                "Métricas GEO"
              ],
              "totalTime": "PT19H",
              "hasCourseInstance": modules.map((module, index) => ({
                "@type": "CourseInstance",
                "name": `${module.id} - ${module.title}`,
                "description": module.description,
                "courseMode": "online",
                "duration": `PT${module.duration.replace('h', 'H')}`,
                "educationalLevel": module.difficulty,
                "position": index + 1
              }))
            })}
          </script>

          {/* FAQ Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })}
          </script>

          {/* Breadcrumb Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Inicio",
                  "item": window.location.origin
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Curso GEO",
                  "item": `${window.location.origin}/curso`
                }
              ]
            })}
          </script>

          {/* SpeakableSpecification */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": [".snippet-block", "[data-speakable='true']"]
              }
            })}
          </script>
        </div>
      </main>
    </div>
  );
};

export default CursoGeoPage;
