
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import GeoTerm from "@/components/GeoTerm";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, ChevronRight, Target, ArrowRight, ArrowLeft, Bot, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const ModuloF4Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Módulo F4: Validación Conversacional | Curso GEO - esGEO</title>
        <meta name="description" content="Aprende a verificar si los motores de generación de contenido (LLMs) están utilizando, citando o parafraseando tu contenido en sus respuestas y cómo actuar en consecuencia." />
        <link rel="canonical" href="https://esgeo.es/curso/f4" />
        
        <meta name="citation_title" content="Módulo F4: Validación Conversacional" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2024" />
        <meta name="speakable-selector" content="#f4-objetivo, #f4-tecnicas-validacion, #f4-acciones-post-validacion, #f4-checklist, .snippet-block, [data-speakable='true']" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Course", "WebPage", "Article"],
            "name": "Módulo F4: Validación Conversacional",
            "headline": "Módulo F4: Validación Conversacional",
            "description": "Verifica si los motores de generación de contenido (ChatGPT, Perplexity, Claude, Bard...) están utilizando, citando o parafraseando tu contenido en sus respuestas. Si no apareces en los resultados, este módulo te ayudará a detectar por qué y a implementar acciones correctivas específicas.",
            "url": "https://esgeo.es/curso/f4",
            "datePublished": "2025-06-12",
            "author": {
              "@type": "Organization",
              "name": "esGEO"
            },
            "publisher": {
              "@type": "Organization",
              "name": "esGEO",
              "url": "https://esgeo.es"
            },
            "image": "https://esgeo.es/images/modulo-f4.png",
            "teaches": [
              "Técnicas de validación con LLMs con navegación (Perplexity.ai, ChatGPT, Claude)",
              "Estructura de prompts de validación (temáticos, de marca, específicos, comparativos)",
              "Análisis de respuestas de LLMs (citas explícitas, parafraseo, estilo)",
              "Validación indirecta (reconocimiento de autoría, enfoque)",
              "Implementación de un sistema de seguimiento de validaciones",
              "Acciones de iteración post-validación (refuerzo, mejora de autoridad, revisión de fundamentos, cambio de enfoque)"
            ],
            "timeRequired": "PT3H",
            "educationalLevel": "Intermediate",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "55"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://esgeo.es/curso/f4"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Inicio",
                  "item": "https://esgeo.es/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Curso GEO",
                  "item": "https://esgeo.es/curso"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Módulo F4: Validación Conversacional",
                  "item": "https://esgeo.es/curso/f4"
                }
              ]
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": "#f4-objetivo, #f4-tecnicas-validacion, #f4-acciones-post-validacion, #f4-checklist"
            },
            "courseCode": "GEO-F4",
            "inLanguage": "es-ES",
            "duration": "PT3H",
            "isPartOf": {
              "@type": "Course",
              "name": "Curso GEO Completo",
              "url": "https://esgeo.es/curso"
            }
          })}
        </script>
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
                  <Link to="/curso">Curso GEO</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Módulo F4</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header del Módulo */}
          <header className="mb-12 text-center" id="f4-header">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-700 border border-orange-500/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Target className="h-4 w-4" />
              MÓDULO F4
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Validación Conversacional
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground italic mb-6">
              "GEO no es un SEO técnico, es un diálogo. El test final es: ¿te cita la IA cuando alguien pregunta?"
            </p>
            <ShareSectionButton sectionId="f4-header" title="Módulo F4" className="mx-auto" />
          </header>

          {/* Objetivo del Módulo */}
          <section id="f4-objetivo" className="mb-12 section-anchor">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Objetivo del Módulo</h2>
              <ShareSectionButton sectionId="f4-objetivo" title="objetivo del módulo" />
            </div>
            <HighlightSnippet variant="definition" className="mb-6">
              <p className="text-lg leading-relaxed" data-speakable="true">
                Verificar si los <GeoTerm term="motores-generativos">motores de generación de contenido</GeoTerm> (<GeoTerm term="chatgpt">ChatGPT</GeoTerm>, <GeoTerm term="perplexity">Perplexity</GeoTerm>, <GeoTerm term="claude">Claude</GeoTerm>, Bard...) están utilizando, citando o parafraseando tu contenido en sus respuestas. Si no apareces en los resultados, este módulo te ayudará a detectar por qué y a implementar acciones correctivas específicas.
              </p>
            </HighlightSnippet>
            <p className="text-muted-foreground leading-relaxed">
              El posicionamiento en <GeoTerm term="motores-generativos">motores generativos</GeoTerm> es fundamentalmente diferente al <GeoTerm term="seo">SEO</GeoTerm> tradicional. En SEO tradicional, el éxito se mide por tu posición en una lista de resultados visible. En <GeoTerm term="geo">GEO</GeoTerm>, el éxito se mide por tu inclusión (explícita o implícita) en una síntesis de fuentes seleccionadas y reformuladas. La única forma de saber si estás "posicionado" en GEO es preguntándole directamente a los modelos.
            </p>
          </section>

          {/* Técnicas de Validación */}
          <section id="f4-tecnicas-validacion" className="mb-12 section-anchor">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Técnicas de Validación</h2>
              <ShareSectionButton sectionId="f4-tecnicas-validacion" title="técnicas de validación" />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Este módulo te proporciona un sistema estructurado para validar si tu contenido está siendo utilizado, entender cómo aparece, e implementar mejoras basadas en resultados reales.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-xl">Validación con LLMs con navegación o RAG</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="mb-2">Los sistemas de <GeoTerm term="ia">IA</GeoTerm> que pueden navegar por la web o que utilizan <GeoTerm term="rag">RAG</GeoTerm> son los más valiosos, ya que acceden a tu contenido en tiempo real.</p>
                  <p className="font-semibold">Motores ideales:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><GeoTerm term="perplexity">Perplexity.ai</GeoTerm>: Cita fuentes explícitamente con enlaces.</li>
                    <li><GeoTerm term="chatgpt">ChatGPT</GeoTerm> con navegación: Puede buscar información actualizada.</li>
                    <li><GeoTerm term="claude">Claude</GeoTerm> (con acceso a internet): Puede navegar y citar fuentes.</li>
                    <li>Bing Chat (modo Preciso): Integrado con motor de búsqueda.</li>
                    <li>Bard / <GeoTerm term="gemini">Gemini</GeoTerm>: Acceso a información actualizada.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-xl">Guía de Prompts y Elementos a Analizar</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="mb-2">Estructura tus prompts (preguntas generales, de marca, específicas, comparativas) para obtener resultados completos.</p>
                  <p className="font-semibold">Elementos clave a analizar en las respuestas:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>¿Tu nombre, marca o dominio aparece explícitamente?</li>
                    <li>¿Se cita tu contenido literalmente?</li>
                    <li>¿El lenguaje usado recuerda a tu redacción?</li>
                    <li>¿Aparecen conceptos o enfoques únicos tuyos?</li>
                    <li>¿Qué competidores aparecen junto a ti o en tu lugar?</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-xl">Validación Indirecta</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="mb-2">Incluso sin acceso a modelos con navegación, puedes validar indirectamente.</p>
                  <p className="font-semibold">Técnicas:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Validación de contenido específico: Pregunta al LLM si reconoce la autoría de un párrafo distintivo.</li>
                    <li>Validación de enfoque o metodología: Pregunta si conoce fuentes que hablen de tu enfoque.</li>
                    <li>Validación en plataformas de terceros: Busca menciones en Quora, Reddit, You.com, foros especializados.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-xl">Hoja de Validación y Seguimiento</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="mb-2">Registra sistemáticamente tus validaciones para detectar patrones y medir tu progreso.</p>
                  <p className="font-semibold">Claves:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Elige una herramienta (Notion, Google Sheets, Airtable, Excel).</li>
                    <li>Estructura tu seguimiento con campos relevantes (fecha, prompt, LLM, resultados, acciones).</li>
                    <li>Establece una cadencia de validación (semanal, mensual, trimestral).</li>
                    <li>Analiza tendencias (tipos de preguntas, LLMs que te citan más, cambios en visibilidad).</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Acciones de Iteración Post-Validación */}
          <section id="f4-acciones-post-validacion" className="mb-12 section-anchor">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Acciones de Iteración Post-Validación</h2>
              <ShareSectionButton sectionId="f4-acciones-post-validacion" title="acciones post-validación" />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La validación es útil si conduce a acciones concretas. Dependiendo de los resultados, deberás implementar diferentes estrategias de mejora.
            </p>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="border-green-300 bg-green-50/20">
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">Si apareces citado explícitamente</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="mb-2">¡Felicidades! Tu contenido es reconocido. Para mantener y mejorar:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Refuerza ese contenido: más ejemplos, profundidad, datos recientes.</li>
                    <li>Multiplica su visibilidad: comparte en redes, newsletters, contenido derivado.</li>
                    <li>Analiza por qué fue citado y replica el éxito.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-yellow-300 bg-yellow-50/20">
                <CardHeader>
                  <CardTitle className="text-xl text-yellow-700">Si apareces sin cita (solo parafraseo)</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="mb-2">Tu contenido es utilizado, pero no recibes crédito explícito. Para mejorar:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Mejora señales de identidad y <GeoTerm term="autoridad">autoridad</GeoTerm> (firma, Schema.org, perfil autor).</li>
                    <li>Aumenta consistencia entre contenido y marca (frases distintivas, estilo reconocible).</li>
                    <li>Mejora la <GeoTerm term="citabilidad">citabilidad</GeoTerm> del contenido (frases concisas, datos citables).</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-red-300 bg-red-50/20">
                <CardHeader>
                  <CardTitle className="text-xl text-red-700">Si no apareces en absoluto</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="mb-2">Necesitas una revisión profunda. Acciones:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Revisa fundamentos técnicos (F1): acceso de bots, HTML semántico, indexación.</li>
                    <li>Evalúa la calidad semántica (F2): ¿responde preguntas, estructurado, conversacional?</li>
                    <li>Analiza tu <GeoTerm term="autoridad">autoridad</GeoTerm> (F3): ¿experiencia, valor único, nicho saturado?</li>
                    <li>Cambia el enfoque del contenido: más explicativo, ángulos menos competidos.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Checklist de Implementación */}
          <section id="f4-checklist" className="mb-12 section-anchor">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Checklist de Implementación del Módulo F4</h2>
              <ShareSectionButton sectionId="f4-checklist" title="checklist de implementación" />
            </div>
            <HighlightSnippet variant="insight" className="mb-6">
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed" data-speakable="true">
                <li>Sistema de seguimiento de validaciones configurado (Notion, Sheets, etc.).</li>
                <li>Calendario regular de validaciones establecido.</li>
                <li>Prompts de validación preparados para diferentes escenarios.</li>
                <li>Primera ronda de validaciones completada en al menos 3 LLMs.</li>
                <li>Resultados analizados y patrones identificados.</li>
                <li>Plan de acción creado para cada tipo de resultado.</li>
                <li>Proceso de iteración y seguimiento establecido.</li>
                <li>Competidores en espacio <GeoTerm term="geo">GEO</GeoTerm> identificados.</li>
                <li>Validación indirecta en plataformas de terceros realizada.</li>
                <li>Dashboard o informe de resultados creado.</li>
              </ul>
            </HighlightSnippet>
            <p className="text-muted-foreground leading-relaxed">
              Al implementar correctamente este módulo, sabrás con evidencia empírica si estás presente en las respuestas generadas por <GeoTerm term="llm">LLMs</GeoTerm>, cómo aparece tu contenido y podrás generar un bucle de mejora continua basado en datos reales.
            </p>
          </section>

          {/* Prompt para LLMs */}
          <section id="f4-prompt" className="mb-12 section-anchor">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Prompt para Implementación con LLMs</h2>
              <ShareSectionButton sectionId="f4-prompt" title="prompt para implementación" />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Puedes utilizar este prompt para ayudarte a crear un sistema de validación efectivo:
            </p>
            <HighlightSnippet variant="stat" className="bg-gray-100 border border-gray-300 p-4 rounded-lg">
              <code className="block whitespace-pre-wrap text-sm font-mono">
{`Actúa como un consultor experto en GEO (Generative Engine Optimization) especializado en validación conversacional.

Mi sitio web/marca es [Describe tu sitio/marca y nicho]. Quiero verificar si mi contenido está siendo utilizado por LLMs como ChatGPT, Claude o Perplexity en sus respuestas.

Por favor, ayúdame a:
1. Crear 10 prompts de validación específicos para mi nicho que pueda usar para comprobar mi visibilidad en LLMs.
2. Diseñar una plantilla de seguimiento para registrar y analizar los resultados de mis validaciones.
3. Establecer un proceso sistemático de validación (frecuencia, herramientas, análisis).
4. Desarrollar criterios para evaluar diferentes tipos de menciones (explícitas, parafraseadas, etc.).
5. Crear un plan de acción para cada escenario posible (citado, parafraseado, ignorado).

Necesito un sistema práctico que pueda implementar inmediatamente y mantener a largo plazo.`}
              </code>
            </HighlightSnippet>
          </section>

          {/* Navegación de Módulos */}
          <div className="mt-16 flex justify-between items-center">
            <Button variant="outline" asChild>
              <Link to="/curso/f3">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Módulo Anterior: F3 Autoridad Generativa
              </Link>
            </Button>
            <Button asChild>
              <Link to="/curso/f5">
                Siguiente Módulo: F5 Medición y Análisis
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Contenido Relacionado */}
          <div className="mt-16 p-6 bg-muted/30 rounded-lg">
            <h3 className="text-lg font-semibold text-primary mb-4 text-center">Herramientas Recomendadas para Validación</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer">
                  Perplexity.ai
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer">
                  ChatGPT con navegación
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://claude.ai/" target="_blank" rel="noopener noreferrer">
                  Claude
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://www.notion.so/" target="_blank" rel="noopener noreferrer">
                  Notion
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/curso/f5">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Continuar con F5
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModuloF4Page;
