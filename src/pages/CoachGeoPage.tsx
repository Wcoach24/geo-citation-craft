
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Progress } from "@/components/ui/progress";
import { Home, ChevronRight, MessageCircle, FileDown, Play, CheckCircle, ArrowRight, BookOpen, Search, Users, Target, BarChart, Zap, HelpCircle } from "lucide-react";

const CoachGeoPage = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [projectName, setProjectName] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  // Módulos F1-F6 con preguntas ejemplo
  const modules = [
    {
      id: "F1",
      title: "Fundamentos GEO",
      icon: <BookOpen className="h-6 w-6" />,
      color: "bg-blue-500",
      questions: [
        "¿Tienes clara la diferencia entre SEO y GEO?",
        "¿Has identificado qué modelos de IA son relevantes para tu sector?",
        "¿Tu contenido actual está optimizado para ser citado?"
      ]
    },
    {
      id: "F2", 
      title: "Estructura semántica",
      icon: <Search className="h-6 w-6" />,
      color: "bg-green-500",
      questions: [
        "¿Utilizas jerarquías H1-H6 correctamente?",
        "¿Tienes datos estructurados implementados?",
        "¿Tu contenido está fragmentado para fácil citación?"
      ]
    },
    {
      id: "F3",
      title: "Redacción citeable", 
      icon: <Users className="h-6 w-6" />,
      color: "bg-purple-500",
      questions: [
        "¿Escribes snippets destacados en tus artículos?",
        "¿Usas formato pregunta-respuesta?",
        "¿Tu estilo se parece al de Wikipedia?"
      ]
    },
    {
      id: "F4",
      title: "Optimización técnica",
      icon: <Target className="h-6 w-6" />,
      color: "bg-orange-500", 
      questions: [
        "¿Tienes schema markup implementado?",
        "¿Tus metadatos están optimizados para IA?",
        "¿Tu HTML es semánticamente correcto?"
      ]
    },
    {
      id: "F5",
      title: "Medición y análisis",
      icon: <BarChart className="h-6 w-6" />,
      color: "bg-red-500",
      questions: [
        "¿Monitorizas menciones en respuestas de IA?",
        "¿Mides el tráfico desde IAs generativas?",
        "¿Tienes KPIs específicos para GEO?"
      ]
    },
    {
      id: "F6",
      title: "Estrategia avanzada",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-indigo-500",
      questions: [
        "¿Tienes una estrategia de link building GEO?",
        "¿Creas contenido viral para IAs?",
        "¿Tu estrategia es escalable?"
      ]
    }
  ];

  const coachSteps = [
    {
      step: 1,
      title: "Escoge un módulo",
      description: "Selecciona el área GEO que quieres optimizar"
    },
    {
      step: 2, 
      title: "Responde preguntas",
      description: "El coach te hará preguntas específicas sobre tu web"
    },
    {
      step: 3,
      title: "Recibe recomendaciones", 
      description: "Obtén consejos personalizados para tu caso"
    },
    {
      step: 4,
      title: "Ajusta tu contenido",
      description: "Implementa las mejoras sugeridas"
    },
    {
      step: 5,
      title: "Descarga tu informe",
      description: "Recibe un reporte detallado de optimización"
    }
  ];

  const faqs = [
    {
      question: "¿Cómo funciona el Coach GEO?",
      answer: "El Coach GEO es un asistente interactivo que te guía paso a paso para optimizar tu contenido según la metodología GEO. Te hace preguntas específicas sobre tu web y te proporciona recomendaciones personalizadas."
    },
    {
      question: "¿Cuánto tiempo toma completar una sesión?",
      answer: "Cada módulo toma entre 15-30 minutos dependiendo de la complejidad de tu proyecto. Puedes pausar y retomar cuando quieras."
    },
    {
      question: "¿El informe es gratuito?",
      answer: "Sí, el informe básico es completamente gratuito. Incluye recomendaciones específicas para tu caso y una lista de acciones prioritarias."
    },
    {
      question: "¿Puedo usar el coach para múltiples proyectos?",
      answer: "Absolutamente. Puedes crear informes separados para cada proyecto o web que gestiones."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://esgeo.es/coach",
        "url": "https://esgeo.es/coach",
        "name": "Coach GEO - Guía paso a paso para optimización GEO",
        "description": "Tu guía interactiva para aplicar la metodología GEO y optimizar tu web para ser citado por modelos de lenguaje como ChatGPT, Claude y Perplexity.",
        "isPartOf": {
          "@type": "WebSite",
          "name": "esGEO",
          "url": "https://esgeo.es"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Inicio",
              "item": "https://esgeo.es"
            },
            {
              "@type": "ListItem", 
              "position": 2,
              "name": "Coach GEO",
              "item": "https://esgeo.es/coach"
            }
          ]
        }
      },
      {
        "@type": "HowTo",
        "name": "Cómo usar el Coach GEO",
        "description": "Proceso paso a paso para optimizar tu web con el Coach GEO",
        "step": coachSteps.map((step, index) => ({
          "@type": "HowToStep",
          "position": index + 1,
          "name": step.title,
          "text": step.description
        }))
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "CreativeWork",
        "name": "Informe GEO personalizado",
        "description": "Reporte detallado con recomendaciones específicas para optimizar tu web según la metodología GEO",
        "creator": {
          "@type": "Organization",
          "name": "esGEO"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Coach GEO - Guía paso a paso | esGEO</title>
        <meta name="description" content="Tu guía interactiva para aplicar la metodología GEO. Optimiza tu web para ser citado por ChatGPT, Claude, Perplexity y otros modelos de IA." />
        <link rel="canonical" href="https://esgeo.es/coach" />
        <meta name="citation_title" content="Coach GEO: Asistente para optimización GEO" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2024" />
        <meta name="speakable-selector" content=".snippet-block, [data-speakable='true']" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Breadcrumbs */}
        <Breadcrumb className="section-anchor" id="breadcrumbs">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="flex items-center gap-1">
                <Home className="h-4 w-4" />
                Inicio
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Coach GEO</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header Section */}
        <section className="text-center space-y-6 section-anchor" id="header">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Coach GEO
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tu guía paso a paso para optimizar tu web y ser citado por modelos de lenguaje.
            </p>
          </div>
        </section>

        {/* Presentación del Coach */}
        <section className="space-y-6 section-anchor" id="presentacion">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">¿Qué es el Coach GEO?</h2>
            <div className="flex justify-center">
              <ShareSectionButton sectionId="presentacion" title="presentación" />
            </div>
          </div>
          
          <HighlightSnippet id="coach-definicion" variant="definition">
            <p className="text-lg leading-relaxed" data-speakable="true">
              <strong>Coach GEO te acompaña paso a paso para que tu contenido sea comprendido y citado por la IA.</strong> 
              Es un asistente conversacional que analiza tu web actual, identifica oportunidades de mejora y te proporciona 
              recomendaciones específicas basadas en la metodología GEO. A través de preguntas dirigidas y análisis técnico, 
              el coach personaliza las estrategias según tu sector, audiencia y objetivos.
            </p>
          </HighlightSnippet>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-accent mx-auto" />
                <CardTitle className="text-center">Interactivo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Conversación guiada con preguntas específicas para tu caso
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-accent mx-auto" />
                <CardTitle className="text-center">Personalizado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Recomendaciones adaptadas a tu sector y objetivos
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileDown className="h-8 w-8 text-accent mx-auto" />
                <CardTitle className="text-center">Accionable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Informe descargable con pasos concretos a implementar
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cómo usar el Coach */}
        <section className="space-y-8 section-anchor" id="como-usar">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Cómo usar el Coach</h2>
            <div className="flex justify-center">
              <ShareSectionButton sectionId="como-usar" title="instrucciones" />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Progress value={(currentStep / coachSteps.length) * 100} className="w-full" />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Paso {currentStep} de {coachSteps.length}
              </p>
            </div>

            <div className="space-y-6">
              {coachSteps.map((step, index) => (
                <Card key={step.step} className={`transition-all ${currentStep >= step.step ? 'border-accent bg-accent/5' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        currentStep >= step.step ? 'bg-accent text-white' : 'bg-muted text-muted-foreground'
                      }`}>
                        {currentStep > step.step ? <CheckCircle className="h-5 w-5" /> : step.step}
                      </div>
                      <div>
                        <CardTitle>{step.title}</CardTitle>
                        <CardDescription>{step.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Lanzador del Coach */}
        <section className="space-y-8 section-anchor" id="lanzador">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Lanza tu sesión de coaching</h2>
            <div className="flex justify-center">
              <ShareSectionButton sectionId="lanzador" title="lanzador" />
            </div>
          </div>

          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-accent/10 to-primary/10 border-accent">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">¡Empieza ahora!</CardTitle>
              <CardDescription>
                Elige cómo quieres comenzar tu optimización GEO
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-medium">Nombre de tu proyecto (opcional)</label>
                <Input 
                  placeholder="Ej: Mi blog personal, Web corporativa..."
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>

              <div className="grid gap-3">
                <Button size="lg" className="w-full" id="coach-general">
                  <Play className="mr-2 h-5 w-5" />
                  Lanzar Coach Completo
                </Button>
                
                <div className="grid grid-cols-2 gap-2">
                  {modules.slice(0, 6).map((module) => (
                    <Button 
                      key={module.id}
                      variant="outline" 
                      size="sm"
                      className="text-xs"
                      id={`coach-${module.id.toLowerCase()}`}
                    >
                      {module.id}: {module.title}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Vista previa del proceso */}
        <section className="space-y-8 section-anchor" id="vista-previa">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Vista previa del proceso</h2>
            <div className="flex justify-center">
              <ShareSectionButton sectionId="vista-previa" title="vista previa" />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Así es como el coach te guiará en cada módulo. Haz clic en las tarjetas para ver ejemplos de preguntas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <Card 
                key={module.id} 
                className="cursor-pointer transition-all hover:shadow-lg hover:scale-105"
                onClick={() => setSelectedModule(selectedModule === module.id ? null : module.id)}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg ${module.color} text-white`}>
                      {module.icon}
                    </div>
                    <div>
                      <Badge variant="secondary">{module.id}</Badge>
                      <CardTitle className="text-lg mt-1">{module.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                {selectedModule === module.id && (
                  <CardContent className="space-y-3 border-t pt-4">
                    <p className="text-sm font-medium text-muted-foreground">Preguntas ejemplo:</p>
                    {module.questions.map((question, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <HelpCircle className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                        <p className="text-sm">{question}</p>
                      </div>
                    ))}
                  </CardContent>
                )}
                
                <CardFooter>
                  <Button variant="ghost" className="w-full" size="sm">
                    {selectedModule === module.id ? 'Ocultar preguntas' : 'Ver preguntas ejemplo'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-8 section-anchor" id="faqs">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Preguntas frecuentes</h2>
            <div className="flex justify-center">
              <ShareSectionButton sectionId="faqs" title="FAQs" />
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline" id={`faq-${index + 1}`}>
                    <span className="font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <HighlightSnippet variant="insight">
                      <p data-speakable="true">{faq.answer}</p>
                    </HighlightSnippet>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center space-y-6 section-anchor" id="cta-final">
          <Card className="max-w-xl mx-auto bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl">¿Listo para optimizar tu web?</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Empieza tu journey GEO ahora y haz que tu contenido sea citado por IA
              </CardDescription>
            </CardHeader>
            <CardFooter className="justify-center">
              <Button size="lg" variant="secondary">
                <Play className="mr-2 h-5 w-5" />
                Comenzar coaching
              </Button>
            </CardFooter>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default CoachGeoPage;
