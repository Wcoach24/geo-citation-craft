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
import { Home, ChevronRight, BookOpen, FileText, Search, Users, Target, BarChart, Zap, ArrowRight, Download, Bot, ExternalLink, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { MODULES, COMPLETE_COURSE } from "@/data/modules";

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

  // Módulos F1-F6 data - extended from centralized modules.ts
  const modules = [
    {
      id: "F1",
      title: MODULES.f1.name.replace('Módulo F1 - ', ''),
      description: MODULES.f1.description,
      icon: <FileText className="h-8 w-8" />,
      color: "bg-blue-500",
      topics: ["Qué es GEO", "Diferencias con SEO", "Principios fundamentales"],
      duration: "2h",
      difficulty: "Principiante",
    },
    {
      id: "F2",
      title: MODULES.f2.name.replace('Módulo F2 - ', ''),
      description: MODULES.f2.description,
      icon: <Search className="h-8 w-8" />,
      color: "bg-green-500",
      topics: ["Jerarquía de contenido", "Datos estructurados", "Fragmentación semántica"],
      duration: "3h",
      difficulty: "Principiante",
    },
    {
      id: "F3",
      title: MODULES.f3.name.replace('Módulo F3 - ', ''),
      description: MODULES.f3.description,
      icon: <Users className="h-8 w-8" />,
      color: "bg-purple-500",
      topics: ["Snippets destacados", "Formato pregunta-respuesta", "Estilo enciclopédico"],
      duration: "4h",
      difficulty: "Intermedio",
    },
    {
      id: "F4",
      title: MODULES.f4.name.replace('Módulo F4 - ', ''),
      description: MODULES.f4.description,
      icon: <Target className="h-8 w-8" />,
      color: "bg-orange-500",
      topics: ["Schema markup", "Metadatos citables", "Estructura HTML semántica"],
      duration: "3h",
      difficulty: "Intermedio",
    },
    {
      id: "F5",
      title: MODULES.f5.name.replace('Módulo F5 - ', ''),
      description: MODULES.f5.description,
      icon: <BarChart className="h-8 w-8" />,
      color: "bg-red-500",
      topics: ["KPIs de citabilidad", "Herramientas de monitoreo", "Análisis de rendimiento"],
      duration: "2h",
      difficulty: "Intermedio",
    },
    {
      id: "F6",
      title: MODULES.f6.name.replace('Módulo F6 - ', ''),
      description: MODULES.f6.description,
      icon: <Zap className="h-8 w-8" />,
      color: "bg-indigo-500",
      topics: ["Link building para IA", "Contenido viral citeable", "Escalabilidad técnica"],
      duration: "5h",
      difficulty: "Avanzado",
    }
  ];

  // Expanded FAQ data
  const faqs = [
    {
      id: "faq-prerrequisitos",
      question: "¿Puedo seguir los módulos sin conocimientos técnicos?",
      answer: "Sí, el curso está diseñado para ser accesible desde nivel principiante. Los primeros módulos F1 y F2 no requieren conocimientos técnicos previos, mientras que F4-F6 incluyen aspectos más técnicos que se explican paso a paso con ejemplos prácticos."
    },
    {
      id: "faq-orden",
      question: "¿Debo seguir los módulos en orden?",
      answer: "Recomendamos seguir el orden F1-F6 ya que cada módulo construye sobre los conceptos del anterior. Sin embargo, profesionales con experiencia pueden acceder directamente a módulos específicos según sus necesidades, especialmente F4 (técnico) y F6 (avanzado)."
    },
    {
      id: "faq-tiempo-completar",
      question: "¿Cuánto tiempo necesito para completar todo el curso?",
      answer: "El curso completo tiene una duración total de 19 horas distribuidas en 6 módulos. Puedes completarlo en 2-3 semanas dedicando 1-2 horas diarias, o a tu propio ritmo según tu disponibilidad."
    },
    {
      id: "faq-diferencia-seo",
      question: "¿En qué se diferencia este curso de un curso de SEO tradicional?",
      answer: "Mientras SEO se enfoca en posicionar en Google, nuestro curso GEO te enseña a ser citado por ChatGPT, Perplexity y Claude. Aprenderás fragmentación de contenido, datos estructurados para LLMs, y redacción citeable específicamente para IA generativa."
    },
    {
      id: "faq-actualizaciones",
      question: "¿Se actualiza el contenido del curso?",
      answer: "Sí, el curso se actualiza regularmente para reflejar los últimos avances en IA generativa y nuevas técnicas de optimización. Los usuarios tienen acceso a todas las actualizaciones sin costo adicional."
    },
    {
      id: "faq-certificacion",
      question: "¿Hay certificación al completar el curso?",
      answer: "Actualmente no ofrecemos certificación formal, pero cada módulo incluye ejercicios prácticos y el Coach GEO genera informes personalizados que validan tu progreso y aplicación de los conceptos."
    },
    {
      id: "faq-aplicacion-practica",
      question: "¿Puedo aplicar lo aprendido inmediatamente en mi web?",
      answer: "Absolutamente. Cada módulo incluye ejercicios prácticos y checklists que puedes implementar inmediatamente. Desde F1 aprenderás técnicas que puedes aplicar el mismo día en tu contenido."
    },
    {
      id: "faq-soporte",
      question: "¿Hay soporte o comunidad para resolver dudas?",
      answer: "Sí, ofrecemos soporte a través del Coach GEO (IA especializada) y email directo. También estamos desarrollando una comunidad de usuarios para compartir experiencias y mejores prácticas."
    }
  ];

  // Steps for HowTo Schema
  const courseSteps = [
    {
      name: "Comenzar con F1: Fundamentos",
      text: "Inicia con el módulo F1 para comprender los principios básicos de GEO y las diferencias con SEO tradicional."
    },
    {
      name: "Aprender estructura semántica en F2", 
      text: "Domina la organización de contenido y datos estructurados para máxima comprensión por IA."
    },
    {
      name: "Desarrollar redacción citeable en F3",
      text: "Aprende técnicas específicas de escritura que favorecen la citación por modelos de lenguaje."
    },
    {
      name: "Implementar optimización técnica en F4",
      text: "Aplica elementos técnicos avanzados como Schema markup y metadatos citables."
    },
    {
      name: "Medir y analizar en F5",
      text: "Utiliza métricas específicas para evaluar el rendimiento en citaciones por IA."
    },
    {
      name: "Dominar estrategias avanzadas en F6",
      text: "Implementa tácticas avanzadas para maximizar la visibilidad en ecosistemas de IA generativa."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Curso GEO | Aprende Generative Engine Optimization | esGEO</title>
        <meta name="description" content="Curso completo de GEO: aprende paso a paso a redactar para ser citado por IA. Módulos F1-F6 con contenido descargable y práctica guiada." />
        <link rel="canonical" href="https://esgeo.ai/curso" />
        
        {/* Citation meta tags */}
        <meta name="citation_title" content="Curso GEO: Generative Engine Optimization" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2024" />
        <meta name="citation_online_date" content="2024-12-15" />
        <meta name="citation_language" content="es" />
        <meta name="citation_keywords" content="curso GEO, Generative Engine Optimization, optimización IA, citabilidad LLMs, módulos F1-F6" />
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

          {/* How to Follow the Course */}
          <section id="como-seguir-curso" className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-primary">Cómo Seguir el Curso</h2>
              <ShareSectionButton sectionId="como-seguir-curso" title="guía del curso" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {courseSteps.slice(0, 3).map((step, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary font-bold text-lg">{index + 1}</span>
                    </div>
                    <CardTitle className="text-lg">{step.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{step.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {courseSteps.slice(3, 6).map((step, index) => (
                <Card key={index + 3} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary font-bold text-lg">{index + 4}</span>
                    </div>
                    <CardTitle className="text-lg">{step.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{step.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

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
                      <Link to={`/curso/${module.id.toLowerCase()}`}>
                        Explorar módulo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          {/* Expanded FAQ Section */}
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
                <Link to="/casos">
                  <Target className="h-4 w-4 mr-2" />
                  Ver casos reales
                </Link>
              </Button>
            </div>
          </section>

          {/* Consolidated Structured Data - single @graph */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Course",
                  "name": "Curso GEO - Generative Engine Optimization",
                  "description": "Curso completo para aprender a optimizar contenido web para ser citado por IA generativa. Metodología F1-F6 con 6 módulos progresivos.",
                  "url": "https://esgeo.ai/curso",
                  "provider": { "@id": "https://esgeo.ai#organization" },
                  "courseCode": "CURSO-GEO-F1-F6",
                  "educationalLevel": "Beginner to Advanced",
                  "inLanguage": "es-ES",
                  "totalTime": "PT19H",
                  "teaches": [
                    "Generative Engine Optimization",
                    "Optimización para IA generativa",
                    "Redacción citeable",
                    "Estructura semántica",
                    "Datos estructurados",
                    "Métricas GEO"
                  ],
                  "offers": {
                    "@type": "Offer",
                    "price": String(COMPLETE_COURSE.price),
                    "priceCurrency": "EUR",
                    "availability": "https://schema.org/InStock",
                    "url": "https://esgeo.ai/checkout"
                  },
                  "hasCourseInstance": {
                    "@type": "CourseInstance",
                    "courseMode": "online",
                    "location": { "@type": "VirtualLocation", "url": "https://esgeo.ai/curso" }
                  }
                },
                {
                  "@type": "HowTo",
                  "name": "Cómo completar el Curso GEO",
                  "description": "Guía paso a paso para completar el curso de Generative Engine Optimization",
                  "totalTime": "PT19H",
                  "step": courseSteps.map((step, index) => ({
                    "@type": "HowToStep",
                    "position": index + 1,
                    "name": step.name,
                    "text": step.text,
                    "url": `https://esgeo.ai/curso/f${index + 1}`
                  }))
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "@id": `https://esgeo.ai/curso#${faq.id}`,
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer
                    }
                  }))
                },
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://esgeo.ai" },
                    { "@type": "ListItem", "position": 2, "name": "Curso GEO", "item": "https://esgeo.ai/curso" }
                  ]
                }
              ]
            })}
          </script>
        </div>
      </main>
    </div>
  );
};

export default CursoGeoPage;
