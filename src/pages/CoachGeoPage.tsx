import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Progress } from "@/components/ui/progress";
import { Home, ChevronRight, MessageCircle, FileDown, Play, CheckCircle, ArrowRight, ArrowLeft, BookOpen, Search, Users, Target, BarChart, Zap, HelpCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import GeoTerm from "@/components/GeoTerm";

const CoachGeoPage = () => {
  const navigate = useNavigate();

  // Estados para la funcionalidad del Coach
  const [coachingActive, setCoachingActive] = useState(false);
  const [currentModuleId, setCurrentModuleId] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState<{ [moduleId: string]: { [questionIndex: number]: string } }>({});
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [projectName, setProjectName] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  // Módulos F1-F6 con preguntas y prompts
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
      ],
      prompt: `Actúa como un consultor experto en GEO (Generative Engine Optimization).
Necesito implementar las bases técnicas para que mi sitio web sea accesible para modelos de IA generativa.
Mi sitio web es: [DESCRIBE TU SITIO, TEMÁTICA Y PLATAFORMA]
Por favor, ayúdame a:
1. Crear un archivo robots.txt optimizado para permitir el acceso a bots de IA relevantes
2. Generar el código JSON-LD de schema.org apropiado para mi tipo de contenido principal
3. Revisar y mejorar la estructura HTML semántica de mis páginas
4. Implementar correctamente los metadatos y la información de autor
Necesito código específico y pasos detallados que pueda implementar directamente.`,
      moduleLink: "/curso/f1"
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
      ],
      prompt: `Actúa como un experto en GEO (Generative Engine Optimization) especializado en optimizar el formato y contexto semántico de contenidos web para LLMs.
Tengo el siguiente contenido que quiero optimizar para que sea mejor comprendido y citado por modelos como ChatGPT, Claude o Perplexity:
[PEGA TU CONTENIDO ACTUAL]
Por favor:
1. Reformula los títulos y subtítulos como preguntas conversacionales naturales
2. Mejora la claridad semántica definiendo todos los conceptos técnicos
3. Reestructura el contenido en bloques semánticos bien definidos
4. Añade ejemplos concretos y comparaciones para cada concepto importante
5. Transforma el lenguaje a un tono más conversacional y explicativo
6. Sugiere elementos visuales (listas, tablas, casillas) para mejorar la extracción
Necesito que el contenido mantenga toda la información original pero optimizada para ser mejor comprendida por LLMs.`,
      moduleLink: "/curso/f2"
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
      ],
      prompt: `Actúa como un consultor experto en GEO (Generative Engine Optimization) especializado en construir Autoridad Generativa.
Mi sitio web/marca es [Describe tu sitio/marca, sector y audiencia]. Mis autores principales son [Nombres y roles si aplica].
Quiero mejorar la percepción de autoridad de mi contenido para que sea más probable que LLMs como ChatGPT, Claude o Perplexity lo citen como fuente fiable.
Basado en mi descripción, por favor:
1. Sugiere 3-5 estrategias específicas para aumentar las menciones externas y la visibilidad en mi ecosistema digital.
2. Proporciona un checklist detallado para auditar mi contenido actual según los principios de E-E-A-T + Aplicabilidad, con ejemplos adaptados a mi sector.
3. Dame ideas concretas para generar contenido original (datos, estudios, herramientas) relevante para mi audiencia.
4. Explica cómo puedo mejorar los perfiles de mis autores para destacar su experiencia y pericia de forma verificable.
5. Ofrece consejos sobre cómo estructurar mi interlinking para reforzar la autoridad temática.
Necesito acciones prácticas y ejemplos que pueda implementar.`,
      moduleLink: "/curso/f3"
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
      ],
      prompt: `Actúa como un consultor experto en GEO (Generative Engine Optimization) especializado en validación conversacional.
Mi sitio web/marca es [Describe tu sitio/marca y nicho]. Quiero verificar si mi contenido está siendo utilizado por LLMs como ChatGPT, Claude o Perplexity en sus respuestas.
Por favor, ayúdame a:
1. Crear 10 prompts de validación específicos para mi nicho que pueda usar para comprobar mi visibilidad en LLMs
2. Diseñar una plantilla de seguimiento para registrar y analizar los resultados de mis validaciones
3. Establecer un proceso sistemático de validación (frecuencia, herramientas, análisis)
4. Desarrollar criterios para evaluar diferentes tipos de menciones (explícitas, parafraseadas, etc.)
5. Crear un plan de acción para cada escenario posible (citado, parafraseado, ignorado)
Necesito un sistema práctico que pueda implementar inmediatamente y mantener a largo plazo.`,
      moduleLink: "/curso/f4"
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
      ],
      prompt: `Actúa como un consultor experto en GEO (Generative Engine Optimization) especializado en mantenimiento evolutivo de contenido para LLMs.
Mi sitio web/marca es [Describe tu sitio/marca y nicho]. Tengo aproximadamente [número] de páginas/artículos de contenido.
Quiero crear un sistema para mantener y mejorar mi visibilidad en LLMs como ChatGPT, Claude y Perplexity a lo largo del tiempo.
Por favor, ayúdame a:
1. Diseñar un calendario de auditoría y actualización adaptado a mi volumen de contenido y recursos.
2. Crear criterios específicos para clasificar mi contenido en niveles de prioridad (Activo/Latente/Inerte).
3. Desarrollar un sistema de seguimiento para monitorizar la evolución de mi visibilidad generativa.
4. Establecer procesos específicos para actualizar diferentes tipos de contenido.
5. Crear plantillas para documentar cambios y aprendizajes.
Necesito un sistema práctico y sostenible que pueda implementar con mis recursos actuales y mantener a largo plazo.`,
      moduleLink: "/curso/f5"
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
      ],
      prompt: `Actúa como un experto en GEO (Generative Engine Optimization) especializado en estándares técnicos y visibilidad semántica para LLMs.
Tengo una página web con [DESCRIBE TIPO DE CONTENIDO, EJ. ARTÍCULO INFORMATIVO SOBRE UN TEMA]. Quiero implementar datos estructurados y mejorar su estructura técnica para aumentar su comprensión y citabilidad por LLMs.
Por favor:
1. Sugiere el tipo de Schema.org más adecuado para mi contenido y proporciona un ejemplo de código JSON-LD.
2. Indica qué etiquetas HTML semánticas (<article>, <section>, etc.) y atributos ARIA (role, aria-label) debería usar y por qué.
3. Explica cómo puedo mejorar las relaciones semánticas internas (breadcrumbs, interlinking, anclas) para este contenido.
4. Proporciona un ejemplo de SpeakableSpecification para el contenido clave de la página.
5. Lista las herramientas de testeo que debo usar para verificar la implementación.
Necesito código específico, recomendaciones prácticas y pasos detallados para mejorar la visibilidad técnica de mi contenido en LLMs.`,
      moduleLink: "/curso/f6"
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

  // Funciones de control del Coach
  const startCoachingSession = (moduleId: string) => {
    setCoachingActive(true);
    setCurrentModuleId(moduleId);
    setCurrentQuestionIndex(0);
    setUserResponses(prev => ({ ...prev, [moduleId]: {} }));
    navigate(`/coach?module=${moduleId}`);
  };

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentModuleId) {
      startCoachingSession('F1');
    }
  };

  const handleNextQuestion = () => {
    if (currentModuleId && currentQuestionIndex < modules.find(m => m.id === currentModuleId)!.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Finalizar sesión - mostrar resultados
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleUserResponse = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (currentModuleId) {
      setUserResponses(prev => ({
        ...prev,
        [currentModuleId]: {
          ...prev[currentModuleId],
          [currentQuestionIndex]: e.target.value
        }
      }));
    }
  };

  const handleBackToIntro = () => {
    setCoachingActive(false);
    setCurrentModuleId(null);
    setCurrentQuestionIndex(0);
    navigate('/coach');
  };

  // Variables derivadas
  const activeModule = currentModuleId ? modules.find(m => m.id === currentModuleId) : null;
  const questionsForActiveModule = activeModule ? activeModule.questions : [];
  const currentQuestionText = questionsForActiveModule[currentQuestionIndex] || "";
  const isLastQuestion = currentQuestionIndex === questionsForActiveModule.length - 1;
  const isSessionComplete = currentQuestionIndex >= questionsForActiveModule.length;

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

        {/* Renderizado Condicional */}
        {!coachingActive ? (
          <>
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
                            currentStep > step.step ? 'bg-accent text-white' : 'bg-muted text-muted-foreground'
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
                  <form onSubmit={handleProjectSubmit} className="space-y-3">
                    <label htmlFor="project-name" className="text-sm font-medium">Nombre de tu proyecto (opcional)</label>
                    <Input 
                      id="project-name"
                      placeholder="Ej: Mi blog personal, Web corporativa..."
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                    />
                    <Button type="submit" size="lg" className="w-full" id="coach-general">
                      <Play className="mr-2 h-5 w-5" />
                      Lanzar Coach Completo (Módulo F1)
                    </Button>
                  </form>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {modules.slice(0, 6).map((module) => (
                      <Button 
                        key={module.id}
                        variant="outline" 
                        size="sm"
                        className="text-xs"
                        id={`coach-${module.id.toLowerCase()}`}
                        onClick={() => startCoachingSession(module.id)}
                      >
                        {module.id}: {module.title}
                      </Button>
                    ))}
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
                  <Button size="lg" variant="secondary" onClick={() => startCoachingSession('F1')}>
                    <Play className="mr-2 h-5 w-5" />
                    Comenzar coaching
                  </Button>
                </CardFooter>
              </Card>
            </section>
          </>
        ) : (
          // Interfaz de Sesión de Coaching
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-primary">
                Sesión de Coach GEO: Módulo {activeModule?.id} - {activeModule?.title}
              </h2>
              {!isSessionComplete && (
                <>
                  <Progress value={((currentQuestionIndex + 1) / questionsForActiveModule.length) * 100} className="w-full mb-4" />
                  <p className="text-muted-foreground">
                    Pregunta {currentQuestionIndex + 1} de {questionsForActiveModule.length}
                  </p>
                </>
              )}
            </div>

            {!isSessionComplete ? (
              // Interfaz de Preguntas
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl text-left">{currentQuestionText}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    placeholder="Escribe tu respuesta aquí..."
                    value={userResponses[currentModuleId!]?.[currentQuestionIndex] || ''}
                    onChange={handleUserResponse}
                    className="min-h-[120px]"
                  />
                </CardContent>
                <CardFooter className="flex justify-between pt-4">
                  <Button 
                    variant="outline" 
                    onClick={handlePreviousQuestion} 
                    disabled={currentQuestionIndex === 0}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Anterior
                  </Button>
                  <Button 
                    onClick={handleNextQuestion}
                    disabled={!userResponses[currentModuleId!]?.[currentQuestionIndex]}
                  >
                    {isLastQuestion ? 'Finalizar Sesión' : 'Siguiente'}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              // Pantalla de Resultados
              <Card className="p-6 bg-accent/10 border-accent">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent">¡Sesión Finalizada!</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Aquí tienes tus recomendaciones y el prompt personalizado para usar con tu LLM.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">Resumen de tus respuestas:</h3>
                    <div className="space-y-3 text-sm">
                      {questionsForActiveModule.map((q, idx) => (
                        <div key={idx} className="p-3 bg-background rounded border">
                          <p className="font-medium text-primary">Q{idx + 1}: {q}</p>
                          <p className="text-muted-foreground mt-1">
                            R: {userResponses[activeModule!.id]?.[idx] || 'Sin respuesta'}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">Tu Prompt Personalizado para LLMs:</h3>
                    <HighlightSnippet variant="stat" className="bg-gray-100 border border-gray-300 p-4 rounded-lg">
                      <code className="block whitespace-pre-wrap text-sm font-mono">
{activeModule!.prompt
  .replace("[DESCRIBE TU SITIO, TEMÁTICA Y PLATAFORMA]", `Mi proyecto se llama "${projectName || 'mi sitio web'}" y se dedica a [describe tu sitio basándote en tus respuestas].`)
  .replace("[PEGA TU CONTENIDO ACTUAL]", "[PEGA AQUÍ EL CONTENIDO DE TU WEB QUE QUIERES OPTIMIZAR]")
  .replace("[Describe tu sitio/marca, sector y audiencia]", `Mi sitio web/marca es "${projectName || 'mi sitio web'}" y se dedica a [describe tu sector basándote en tus respuestas].`)
  .replace("[Nombres y roles si aplica]", "[Nombres y roles de tus autores, si aplica]")
  .replace("[número]", questionsForActiveModule.length.toString())
  .replace("[Describe tu sitio/marca y nicho]", `Mi sitio web/marca es "${projectName || 'mi sitio web'}" y mi nicho es [describe tu nicho basándote en tus respuestas].`)
  .replace("[DESCRIBE TIPO DE CONTENIDO, EJ. ARTÍCULO INFORMATIVO SOBRE UN TEMA]", "[DESCRIBE EL TIPO DE CONTENIDO DE TU WEB]")}

CONTEXTO ADICIONAL BASADO EN MIS RESPUESTAS AL COACH GEO:
{questionsForActiveModule.map((q, idx) => `
• ${q}
  Mi respuesta: ${userResponses[activeModule!.id]?.[idx] || 'Sin respuesta'}`).join('')}

Por favor, ten en cuenta este contexto para personalizar tus recomendaciones según mi situación específica.
                      </code>
                    </HighlightSnippet>
                    <p className="text-muted-foreground text-sm mt-3">
                      <strong>Instrucciones:</strong> Copia este prompt y pégalo en tu <GeoTerm term="llm">LLM</GeoTerm> preferido 
                      (ChatGPT, Claude, Perplexity). Asegúrate de reemplazar los placeholders con tu información real.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">Siguientes pasos:</h3>
                    <div className="space-y-3">
                      <Button asChild className="w-full">
                        <Link to={activeModule!.moduleLink}>
                          <BookOpen className="mr-2 h-4 w-4" />
                          Profundizar en Módulo {activeModule!.id}: {activeModule!.title}
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full" disabled>
                        <FileDown className="mr-2 h-4 w-4" />
                        Descargar Informe (Próximamente)
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="justify-center space-x-4">
                  <Button variant="ghost" onClick={handleBackToIntro}>
                    Volver al inicio
                  </Button>
                  <Button variant="outline" onClick={() => startCoachingSession('F1')}>
                    Empezar otro módulo
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default CoachGeoPage;
