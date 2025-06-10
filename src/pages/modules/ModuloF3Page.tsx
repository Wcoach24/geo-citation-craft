
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Home, ChevronRight, Users, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ModuloF3Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Módulo F3: Redacción Citeable y Autoridad | esGEO</title>
        <meta name="description" content="Técnicas de escritura que favorecen la citación por modelos de lenguaje: snippets destacados, formato Q&A y estilo enciclopédico." />
        <link rel="canonical" href="https://esgeo.es/curso/f3" />
        
        <meta name="citation_title" content="Módulo F3: Redacción Citeable y Autoridad" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2024" />
        <meta name="speakable-selector" content=".snippet-block, [data-speakable='true']" />
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          
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
                <BreadcrumbLink asChild>
                  <Link to="/curso">Curso</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Módulo F3</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Module Header */}
          <div className="text-center mb-16" id="modulo-f3">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="p-4 rounded-lg bg-purple-500 text-white">
                <Users className="h-8 w-8" />
              </div>
              <Badge variant="outline" className="text-accent border-accent text-lg px-4 py-2">
                F3
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Redacción Citeable y Autoridad
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Técnicas de escritura que favorecen la citación por modelos de lenguaje
            </p>
          </div>

          {/* Key Concept */}
          <HighlightSnippet id="concepto-redaccion-citeable" variant="definition" className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-primary">Redacción Citeable</h2>
              <ShareSectionButton sectionId="concepto-redaccion-citeable" title="redacción citeable" />
            </div>
            <p className="text-lg leading-relaxed" data-speakable="true">
              <strong>La redacción citeable crea contenido autocontenido, neutral y estructurado que los modelos de IA pueden extraer y referenciar como fuente de autoridad.</strong> 
              Se caracteriza por la claridad, precisión y formato que facilita la comprensión automática.
            </p>
          </HighlightSnippet>

          {/* Module Content */}
          <section id="contenido-modulo" className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-primary">Contenido del Módulo</h2>
              <ShareSectionButton sectionId="contenido-modulo" title="contenido completo" />
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="snippets-destacados" id="snippets-destacados" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary">1. Snippets destacados efectivos</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>
                    Los snippets destacados son fragmentos autocontenidos que responden preguntas específicas de manera concisa.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                      <h4 className="font-semibold text-green-800 mb-2">Ejemplo de snippet efectivo:</h4>
                      <p className="text-green-700">
                        <strong>¿Qué es GEO?</strong> Generative Engine Optimization (GEO) es la práctica de optimizar contenido 
                        para ser comprendido y citado por modelos de inteligencia artificial generativa como ChatGPT o Claude.
                      </p>
                    </div>
                    <ul className="space-y-2">
                      <li>• Responde una pregunta específica</li>
                      <li>• Es autocontenido (se entiende sin contexto adicional)</li>
                      <li>• Utiliza lenguaje claro y directo</li>
                      <li>• Incluye definiciones cuando es necesario</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="formato-qa" id="formato-qa" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary">2. Formato pregunta-respuesta</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>
                    El formato Q&A es especialmente valorado por los modelos de IA porque replica patrones de entrenamiento.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Estructura recomendada:</h4>
                      <ol className="list-decimal list-inside space-y-1">
                        <li>Pregunta clara y específica</li>
                        <li>Respuesta directa en 1-2 frases</li>
                        <li>Elaboración con detalles adicionales</li>
                        <li>Ejemplo práctico si es relevante</li>
                      </ol>
                    </div>
                    <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                      <h4 className="font-semibold text-blue-800 mb-2">Tipos de preguntas efectivas:</h4>
                      <ul className="text-blue-700 space-y-1">
                        <li>• ¿Qué es...?</li>
                        <li>• ¿Cómo funciona...?</li>
                        <li>• ¿Cuál es la diferencia entre...?</li>
                        <li>• ¿Por qué es importante...?</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="estilo-enciclopedico" id="estilo-enciclopedico" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-primary">3. Estilo enciclopédico (Wikipedia)</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 space-y-4">
                  <p>
                    Los modelos de IA fueron entrenados extensivamente con contenido de Wikipedia, por lo que priorizan este estilo.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Características clave:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Tono neutral y objetivo</li>
                        <li>• Tercera persona</li>
                        <li>• Afirmaciones verificables</li>
                        <li>• Estructura encabezado-párrafo-detalles</li>
                        <li>• Enlaces a conceptos relacionados</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Evitar:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Lenguaje promocional</li>
                        <li>• Primera persona</li>
                        <li>• Opiniones sin fundamento</li>
                        <li>• Jerga técnica sin explicar</li>
                        <li>• Bloques de texto muy largos</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link to="/curso/f2">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Módulo F2: Estructura Semántica
              </Link>
            </Button>
            <Button asChild>
              <Link to="/curso/f4">
                Módulo F4: Optimización Técnica
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Módulo F3: Redacción Citeable y Autoridad",
              "description": "Módulo de GEO que enseña técnicas de escritura para favorecer la citación por modelos de lenguaje",
              "provider": {
                "@type": "Organization",
                "name": "esGEO",
                "url": "https://esgeo.es"
              },
              "courseCode": "GEO-F3",
              "educationalLevel": "Intermediate",
              "inLanguage": "es-ES",
              "teaches": [
                "Snippets destacados",
                "Formato pregunta-respuesta",
                "Estilo enciclopédico",
                "Redacción citeable"
              ],
              "duration": "PT4H",
              "isPartOf": {
                "@type": "Course",
                "name": "Curso GEO Completo",
                "url": "https://esgeo.es/curso"
              }
            })}
          </script>
        </div>
      </main>
    </div>
  );
};

export default ModuloF3Page;
