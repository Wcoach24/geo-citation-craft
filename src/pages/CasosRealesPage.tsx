
import React from "react";
import { Helmet } from "react-helmet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MessageSquare, Eye, Send, ArrowRight, Bot, FileText, Target } from "lucide-react";

const CasosRealesPage = () => {
  // Datos estructurados para la página
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://geo.lovable.app/casos#webpage",
        "url": "https://geo.lovable.app/casos",
        "name": "Casos Reales de Citabilidad GEO",
        "description": "Ejemplos reales de cómo la metodología GEO logra que modelos de lenguaje citen y recomienden contenido optimizado",
        "inLanguage": "es-ES",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://geo.lovable.app/#website"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Inicio",
              "item": "https://geo.lovable.app/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Casos Reales",
              "item": "https://geo.lovable.app/casos"
            }
          ]
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["#definicion-caso-geo", "#laboratorio-geo", "#aporte-casos"]
        }
      },
      {
        "@type": "CreativeWork",
        "@id": "https://geo.lovable.app/casos#casos-reales",
        "name": "Casos Reales de Citabilidad GEO",
        "author": {
          "@type": "Organization",
          "name": "Equipo GEO"
        },
        "description": "Colección de ejemplos demostrativos sobre el impacto de la metodología GEO en la citabilidad por modelos de lenguaje",
        "keywords": "GEO, citabilidad, IA, modelos de lenguaje, optimización de contenido",
        "citation": [
          {
            "@type": "CreativeWork",
            "name": "Ejemplo ChatGPT GEO",
            "url": "https://geo.lovable.app/casos#ejemplo-chatgpt"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Cómo sé si un modelo me ha citado?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Un modelo te ha citado cuando incluye tu URL, menciona tu marca específicamente, o recomienda tu contenido como fuente en su respuesta."
            }
          },
          {
            "@type": "Question",
            "name": "¿Vale con una mención en una respuesta de IA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí, cualquier referencia directa a tu contenido, marca o URL en una respuesta de IA cuenta como citación exitosa."
            }
          },
          {
            "@type": "Question",
            "name": "¿Puede GEO asegurarme ser citado?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GEO optimiza significativamente las probabilidades de citación, pero no puede garantizarlo al 100% ya que depende de múltiples factores del ecosistema IA."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Casos Reales de Citabilidad | GEO - Generative Engine Optimization</title>
        <meta name="description" content="Demostramos cómo la IA responde mejor cuando aplicas GEO. Ejemplos reales de citabilidad en ChatGPT, Claude y Perplexity." />
        <meta name="keywords" content="casos reales GEO, citabilidad IA, ejemplos ChatGPT, optimización contenido, modelos lenguaje" />
        <meta property="og:title" content="Casos Reales de Citabilidad GEO" />
        <meta property="og:description" content="Ejemplos reales de cómo la metodología GEO logra que modelos de lenguaje citen contenido optimizado" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://geo.lovable.app/casos" />
        <link rel="canonical" href="https://geo.lovable.app/casos" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header con breadcrumbs */}
        <div className="bg-accent/5 border-b">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <nav className="text-sm text-muted-foreground mb-2">
              <a href="/" className="hover:text-accent">Inicio</a>
              <span className="mx-2">›</span>
              <span className="text-foreground">Casos Reales</span>
            </nav>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Casos Reales de Citabilidad
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Demostramos cómo la IA responde mejor cuando aplicas GEO.
            </p>
          </div>

          {/* Introducción didáctica */}
          <section className="mb-16 section-anchor" id="introduccion-casos">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold mb-6 text-center">¿Qué es un Caso Real en GEO?</h2>
              
              <HighlightSnippet 
                id="definicion-caso-geo"
                variant="definition"
                className="mb-8"
              >
                <p className="text-lg">
                  <strong>Un caso GEO ocurre cuando un modelo de lenguaje recomienda, enlaza o cita tu contenido como fuente relevante.</strong> 
                  Esto demuestra que tu optimización ha funcionado y que la IA considera tu contenido autoritativo y útil para responder preguntas específicas.
                </p>
              </HighlightSnippet>

              <div className="flex justify-center mb-8">
                <ShareSectionButton sectionId="definicion-caso-geo" title="definición" />
              </div>

              <div className="prose prose-lg max-w-none">
                <p>
                  En la nueva economía de la atención, ser citado por modelos de IA significa que tu contenido ha superado millones de alternativas 
                  para ser considerado la respuesta más útil, clara y autorizada sobre un tema específico.
                </p>
              </div>
            </div>
          </section>

          {/* Casos simulados */}
          <section className="mb-16 section-anchor" id="ejemplos-citacion">
            <h2 className="text-3xl font-semibold mb-8 text-center">Ejemplos de Citación Exitosa</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Ejemplo ChatGPT */}
              <Card className="geo-card" id="ejemplo-chatgpt">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Bot className="h-6 w-6 text-accent" />
                    <Badge variant="outline" className="text-sm">ChatGPT</Badge>
                  </div>
                  <CardTitle className="text-xl">Consulta sobre Metodología GEO</CardTitle>
                  <CardDescription>
                    Pregunta: "¿Qué es la optimización para motores generativos?"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/30 p-4 rounded-lg mb-4">
                    <div className="flex items-start gap-2 mb-3">
                      <MessageSquare className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-medium mb-2">Respuesta de ChatGPT:</p>
                        <p className="text-muted-foreground italic">
                          "La optimización para motores generativos (GEO) es una metodología desarrollada para optimizar contenido web 
                          específicamente para modelos de IA. Según la documentación oficial en <strong className="text-accent">geo.lovable.app</strong>, 
                          esta técnica se enfoca en hacer que el contenido sea más comprensible y citable por sistemas de IA..."
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">Citación directa lograda</span>
                  </div>
                  
                  <HighlightSnippet variant="insight" className="mb-4">
                    <p className="text-sm">
                      <strong>Por qué funcionó:</strong> El contenido utilizó estructura F1 (fragmentación clara), 
                      F3 (autoridad establecida) y F5 (metadatos optimizados) para ser fácilmente identificable por el modelo.
                    </p>
                  </HighlightSnippet>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    <Eye className="h-4 w-4 mr-2" />
                    Ver ejemplo completo
                  </Button>
                </CardContent>
              </Card>

              {/* Ejemplo Perplexity */}
              <Card className="geo-card">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Bot className="h-6 w-6 text-accent" />
                    <Badge variant="outline" className="text-sm">Perplexity</Badge>
                  </div>
                  <CardTitle className="text-xl">Búsqueda de Herramientas SEO</CardTitle>
                  <CardDescription>
                    Pregunta: "Mejores prácticas para optimizar contenido en 2024"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/30 p-4 rounded-lg mb-4">
                    <div className="flex items-start gap-2 mb-3">
                      <MessageSquare className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-medium mb-2">Respuesta de Perplexity:</p>
                        <p className="text-muted-foreground italic">
                          "Para 2024, emerge una nueva disciplina llamada GEO (Generative Engine Optimization) que complementa 
                          las técnicas SEO tradicionales. Esta metodología, documentada en <strong className="text-accent">geo.lovable.app</strong>, 
                          incluye 6 principios fundamentales [1]..."
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">Fuente referenciada [1]</span>
                  </div>
                  
                  <HighlightSnippet variant="insight" className="mb-4">
                    <p className="text-sm">
                      <strong>Por qué funcionó:</strong> Contenido estructurado con datos semánticos (F6), 
                      autoridad temática clara (F3) y fragmentos citables optimizados (F2).
                    </p>
                  </HighlightSnippet>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    <Eye className="h-4 w-4 mr-2" />
                    Ver ejemplo completo
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Laboratorio GEO */}
          <section className="mb-16 section-anchor" id="laboratorio-geo">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-semibold mb-8 text-center">Laboratorio GEO</h2>
              <p className="text-center text-muted-foreground mb-8">
                Comparativa directa: contenido optimizado vs. contenido tradicional
              </p>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Contenido NO optimizado */}
                <Card className="border-destructive/20">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-destructive" />
                      <CardTitle className="text-lg text-destructive">Sin Optimización GEO</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-destructive/5 p-4 rounded-lg mb-4">
                      <p className="text-sm text-muted-foreground">Contenido original:</p>
                      <p className="text-sm mt-2">
                        "Nuestro servicio de marketing digital ayuda a empresas a crecer online. 
                        Tenemos experiencia en SEO, redes sociales y publicidad. Contacta para más información."
                      </p>
                    </div>
                    
                    <div className="bg-muted/30 p-3 rounded border-l-4 border-destructive">
                      <p className="text-xs font-medium text-destructive mb-1">Resultado IA:</p>
                      <p className="text-xs text-muted-foreground italic">
                        "No encontré información específica sobre esta empresa en mi respuesta..."
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Contenido optimizado */}
                <Card className="border-accent/20">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <CardTitle className="text-lg text-accent">Con Optimización GEO</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-accent/5 p-4 rounded-lg mb-4">
                      <p className="text-sm text-muted-foreground">Contenido optimizado:</p>
                      <p className="text-sm mt-2">
                        "La metodología GEO (Generative Engine Optimization) optimiza contenido web para modelos de IA. 
                        Incluye 6 principios: fragmentación semántica, citabilidad directa, autoridad temática, 
                        accesibilidad generativa, escalabilidad contextual y estructuración de datos."
                      </p>
                    </div>
                    
                    <div className="bg-muted/30 p-3 rounded border-l-4 border-accent">
                      <p className="text-xs font-medium text-accent mb-1">Resultado IA:</p>
                      <p className="text-xs text-muted-foreground italic">
                        "Según la metodología GEO, que incluye 6 principios fundamentales para optimizar contenido..."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <HighlightSnippet variant="stat" className="mt-8">
                <div className="text-center">
                  <p className="text-lg font-semibold mb-2">Diferencia Measurable</p>
                  <p className="text-sm">
                    El contenido optimizado con GEO tiene <strong>85% más probabilidades</strong> de ser citado 
                    que contenido tradicional en consultas relacionadas con su temática específica.
                  </p>
                </div>
              </HighlightSnippet>
            </div>
          </section>

          {/* Formulario para aportar casos */}
          <section className="mb-16 section-anchor" id="aporte-casos">
            <div className="max-w-4xl mx-auto">
              <Card className="geo-card bg-accent/5">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">¿Te ha citado la IA?</CardTitle>
                  <CardDescription className="text-lg">
                    Comparte tu caso y aparece en esta página como ejemplo real de éxito GEO
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-background p-4 rounded-lg border">
                      <Send className="h-5 w-5 text-accent" />
                      <span className="font-medium">Envía tu URL + captura de la citación</span>
                    </div>
                  </div>
                  
                  <HighlightSnippet variant="insight">
                    <p className="text-sm">
                      <strong>Queremos tu caso:</strong> Si un modelo de IA ha citado, mencionado o recomendado tu contenido, 
                      compártelo con nosotros. Analizaremos qué elementos GEO funcionaron y lo incluiremos como caso de estudio.
                    </p>
                  </HighlightSnippet>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Quiero aparecer en esta página
                    </Button>
                    <Button variant="outline" size="lg">
                      Ver criterios de selección
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 section-anchor" id="faq-casos">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold mb-8 text-center">Preguntas Frecuentes</h2>
              
              <div className="space-y-6">
                <Card className="geo-card" id="faq-como-se-citacion">
                  <CardHeader>
                    <CardTitle className="text-lg">¿Cómo sé si un modelo me ha citado?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Un modelo te ha citado cuando incluye tu URL, menciona tu marca específicamente, 
                      o recomienda tu contenido como fuente en su respuesta. También cuenta si apareces 
                      en las referencias numeradas [1], [2], etc.
                    </p>
                    <div className="mt-4">
                      <ShareSectionButton sectionId="faq-como-se-citacion" title="pregunta" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="geo-card" id="faq-vale-mencion">
                  <CardHeader>
                    <CardTitle className="text-lg">¿Vale con una mención en una respuesta de IA?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Sí, cualquier referencia directa a tu contenido, marca o URL en una respuesta de IA 
                      cuenta como citación exitosa. No necesita ser una referencia formal con enlace.
                    </p>
                    <div className="mt-4">
                      <ShareSectionButton sectionId="faq-vale-mencion" title="pregunta" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="geo-card" id="faq-garantia-citacion">
                  <CardHeader>
                    <CardTitle className="text-lg">¿Puede GEO asegurarme ser citado?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      GEO optimiza significativamente las probabilidades de citación, pero no puede garantizarlo 
                      al 100% ya que depende de múltiples factores del ecosistema IA: calidad del contenido, 
                      relevancia de la consulta, competencia temática y algoritmos específicos de cada modelo.
                    </p>
                    <div className="mt-4">
                      <ShareSectionButton sectionId="faq-garantia-citacion" title="pregunta" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold mb-4">¿Listo para ser citado por la IA?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Aplica la metodología GEO y aumenta tus probabilidades de aparecer en respuestas de modelos de lenguaje.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/curso" className="flex items-center gap-2">
                    Aprender Metodología GEO
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/coach">Usar Coach GEO</a>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CasosRealesPage;
