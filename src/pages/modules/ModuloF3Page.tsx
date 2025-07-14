
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import GeoTerm from "@/components/GeoTerm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, ChevronRight, Users, ArrowRight, ArrowLeft, Bot, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const ModuloF3Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Módulo F3: Autoridad Generativa | Curso GEO - esGEO</title>
        <meta name="description" content="Aprende a construir señales de credibilidad y reputación para que los LLMs reconozcan tu contenido como fuente fiable y te citen como referencia autorizada." />
        <link rel="canonical" href="https://esgeo.es/curso/f3" />
        
        <meta name="citation_title" content="Módulo F3: Autoridad Generativa" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2024" />
        <meta name="speakable-selector" content="#f3-objetivo, #f3-entendimiento-llm, #f3-componentes, #f3-checklist, .snippet-block, [data-speakable='true']" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Course", "WebPage", "Article"],
            "name": "Módulo F3: Autoridad Generativa",
            "headline": "Módulo F3: Autoridad Generativa",
            "description": "Construye señales de credibilidad, reputación y valor experto que los LLMs reconozcan al decidir qué fuentes citar, sintetizar o priorizar en sus respuestas. Demuestra que tu contenido proviene de una fuente fiable, experimentada y reconocida en su campo.",
            "url": "https://esgeo.es/curso/f3",
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
            "image": "https://esgeo.es/images/modulo-f3.png",
            "teaches": [
              "Cómo los LLMs evalúan la autoridad (Experiencia, Pericia, Autoridad, Confianza, Aplicabilidad)",
              "Señales de identidad confiable (página 'Sobre nosotros', perfiles de autor, dominio)",
              "Estrategias para obtener menciones en el ecosistema digital",
              "Producción de contenido con E-E-A-T + Aplicabilidad",
              "Creación de datos, estudios y pruebas originales",
              "Interlinking estratégico y consolidación de autoridad interna"
            ],
            "timeRequired": "PT4H",
            "educationalLevel": "Intermediate",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "60"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://esgeo.es/curso/f3"
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
                  "name": "Módulo F3: Autoridad Generativa",
                  "item": "https://esgeo.es/curso/f3"
                }
              ]
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": "#f3-objetivo, #f3-entendimiento-llm, #f3-componentes, #f3-checklist"
            },
            "courseCode": "GEO-F3",
            "inLanguage": "es-ES",
            "duration": "PT4H",
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
                <BreadcrumbPage>Módulo F3</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Header del Módulo */}
          <header className="mb-12 text-center" id="f3-header">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-700 border border-purple-500/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="h-4 w-4" />
              MÓDULO F3
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Autoridad Generativa
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground italic mb-6">
              "Para aparecer en una respuesta generada por IA, no basta con existir: debes ser digno de confianza para el modelo."
            </p>
            <ShareSectionButton sectionId="f3-header" title="Módulo F3" className="mx-auto" />
          </header>

          {/* Objetivo del Módulo */}
          <section id="f3-objetivo" className="mb-12 section-anchor">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Objetivo del Módulo</h2>
              <ShareSectionButton sectionId="f3-objetivo" title="objetivo del módulo" />
            </div>
            <HighlightSnippet variant="definition" className="mb-6">
              <p className="text-lg leading-relaxed" data-speakable="true">
                Este módulo busca construir señales de credibilidad, reputación y valor experto que los <GeoTerm term="llm">LLMs</GeoTerm> reconozcan al decidir qué fuentes citar, sintetizar o priorizar en sus respuestas. La <GeoTerm term="autoridad-generativa">autoridad generativa</GeoTerm> va más allá de los enlaces y las palabras clave; se trata de demostrar que tu contenido proviene de una fuente fiable, experimentada y reconocida en su campo.
              </p>
            </HighlightSnippet>
            <p className="text-muted-foreground leading-relaxed">
              A diferencia de los motores de búsqueda clásicos como Google, que dependían mucho de los backlinks, los LLMs evalúan la autoridad a través de una combinación compleja de factores semánticos y contextuales. Interpretan la información disponible en la web para inferir la credibilidad, no "ven" los enlaces de la misma manera.
            </p>
          </section>

          {/* Cómo entiende un LLM la Autoridad */}
          <section id="f3-entendimiento-llm" className="mb-12 section-anchor">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">¿Cómo entiende un LLM la Autoridad?</h2>
              <ShareSectionButton sectionId="f3-entendimiento-llm" title="entendimiento LLM autoridad" />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Los LLMs detectan la autoridad a través de diversas señales. Algunas de las más importantes incluyen:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted-foreground border border-border rounded-lg">
                <thead>
                  <tr className="border-b bg-muted/30">
                    <th className="text-left p-3 font-semibold text-primary">Señal de Autoridad</th>
                    <th className="text-left p-3 font-semibold text-primary">Cómo la detectan los LLMs (ejemplos)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Citas externas</td>
                    <td className="p-3">Tu marca, autor o contenido es mencionado en artículos de noticias, publicaciones académicas, foros especializados, blogs de referencia, etc. El LLM detecta estas menciones y las asocia con tu entidad.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Consistencia de marca</td>
                    <td className="p-3">El mismo nombre de marca, autor o entidad aparece consistentemente en diferentes plataformas (web, LinkedIn, Twitter, publicaciones, etc.) con información coherente.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Estilo experto</td>
                    <td className="p-3">La redacción es clara, precisa, bien argumentada, utiliza terminología específica del sector correctamente y evita errores gramaticales o conceptuales.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Experiencia verificable</td>
                    <td className="p-3">El contenido incluye datos originales, estudios de caso detallados, testimonios reales, métricas específicas, o referencias a experiencias de primera mano del autor.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Contexto temático</td>
                    <td className="p-3">Tu sitio web demuestra profundidad y especialización en un tema concreto a través de múltiples contenidos interconectados y bien desarrollados.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Reconocimiento por pares</td>
                    <td className="p-3">Otros expertos o fuentes reconocidas en tu campo citan o hacen referencia a tu trabajo.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Transparencia y fiabilidad</td>
                    <td className="p-3">La información sobre el autor, la entidad responsable, las fuentes utilizadas y las fechas de publicación/actualización es clara y accesible.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Componentes Clave del Módulo */}
          <section id="f3-componentes" className="mb-12 section-anchor">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Componentes Clave del Módulo</h2>
              <ShareSectionButton sectionId="f3-componentes" title="componentes clave" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-xl">Señales de Identidad Confiable</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• Página "<Link to="/acerca-de" className="underline hover:text-primary">Sobre nosotros</Link>" transparente y profesional.</li>
                    <li>• Información de contacto visible y operativa.</li>
                    <li>• Perfiles de autor completos y verificables.</li>
                    <li>• Dominio corporativo verificado.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-xl">Menciones y Ecosistema Digital</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• Obtención de menciones (con o sin enlace) mediante guest blogging, entrevistas, notas de prensa.</li>
                    <li>• Participación activa en comunidades relevantes.</li>
                    <li>• Publicación en plataformas de autoridad.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-xl">Producción de Contenido con E-E-A-T + Aplicabilidad</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="mb-2">Integración de:</p>
                  <ul className="space-y-2">
                    <li>• <strong>Experience:</strong> Anécdotas, estudios de caso propios.</li>
                    <li>• <strong>Expertise:</strong> Conocimiento profundo, análisis detallados.</li>
                    <li>• <strong>Authoritativeness:</strong> Reconocimientos, certificaciones.</li>
                    <li>• <strong>Trustworthiness:</strong> Transparencia, citas de fuentes.</li>
                    <li>• <strong>Aplicabilidad (GEO):</strong> Pasos prácticos, checklists, prompts.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-xl">Datos, Estudios y Pruebas Originales</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• Publicar casos de estudio detallados.</li>
                    <li>• Realizar encuestas o investigaciones propias.</li>
                    <li>• Compartir datos internos (agregados y anonimizados).</li>
                    <li>• Crear herramientas o calculadoras gratuitas.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-muted/20 md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-xl">Reputación y Enlaces Cruzados Internos</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• Interlinking estratégico con anchor text descriptivos.</li>
                    <li>• Consolidar autoridad en páginas pilares.</li>
                    <li>• Obtener enlaces de calidad desde sitios relevantes (aunque menos crucial).</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Checklist de Implementación */}
          <section id="f3-checklist" className="mb-12 section-anchor">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Checklist de Implementación del Módulo F3</h2>
              <ShareSectionButton sectionId="f3-checklist" title="checklist de implementación" />
            </div>
            <HighlightSnippet variant="insight" className="mb-6">
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed" data-speakable="true">
                <li>Página "Sobre nosotros" completa y profesional.</li>
                <li>Perfiles de autor detallados con experiencia y credenciales verificables.</li>
                <li>Información de contacto clara y funcional.</li>
                <li>Monitorización activa de menciones de marca/autor.</li>
                <li>Estrategia para participar en comunidades y obtener menciones.</li>
                <li>Contenido auditado y mejorado para E-E-A-T + Aplicabilidad.</li>
                <li>Inclusión de datos originales, estudios de caso o experiencias de primera mano.</li>
                <li>Estructura de enlaces internos lógica y temática.</li>
                <li>Citas de fuentes externas claras y contextualizadas.</li>
                <li>Transparencia general del sitio (políticas, etc.).</li>
              </ul>
            </HighlightSnippet>
            <p className="text-muted-foreground leading-relaxed">
              Al finalizar este módulo, tu marca o autor ganará presencia temática reconocible y será asociada con expertise en tu nicho. Tu contenido se integrará en el ecosistema digital como una fuente fiable y referenciada por otros. Esto aumentará significativamente la probabilidad de que los modelos generativos te utilicen como fuente por defecto.
            </p>
          </section>

          {/* Prompt para LLMs */}
          <section id="f3-prompt" className="mb-12 section-anchor">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-primary">Prompt para Implementación con LLMs</h2>
              <ShareSectionButton sectionId="f3-prompt" title="prompt para implementación" />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Puedes usar el siguiente prompt para obtener ideas y ayuda de un <GeoTerm term="llm">LLM</GeoTerm> para construir tu autoridad generativa:
            </p>
            <HighlightSnippet variant="stat" className="bg-gray-100 border border-gray-300 p-4 rounded-lg">
              <code className="block whitespace-pre-wrap text-sm font-mono">
{`Actúa como un consultor experto en GEO (Generative Engine Optimization) especializado en construir Autoridad Generativa.

Mi sitio web/marca es [Describe tu sitio/marca, sector y audiencia]. Mis autores principales son [Nombres y roles si aplica].

Quiero mejorar la percepción de autoridad de mi contenido para que sea más probable que LLMs como ChatGPT, Claude o Perplexity lo citen como fuente fiable.

Basado en mi descripción, por favor:
1. Sugiere 3-5 estrategias específicas para aumentar las menciones externas y la visibilidad en mi ecosistema digital.
2. Proporciona un checklist detallado para auditar mi contenido actual según los principios de E-E-A-T + Aplicabilidad, con ejemplos adaptados a mi sector.
3. Dame ideas concretas para generar contenido original (datos, estudios, herramientas) relevante para mi audiencia.
4. Explica cómo puedo mejorar los perfiles de mis autores para destacar su experiencia y pericia de forma verificable.
5. Ofrece consejos sobre cómo estructurar mi interlinking para reforzar la autoridad temática.

Necesito acciones prácticas y ejemplos que pueda implementar.`}
              </code>
            </HighlightSnippet>
          </section>

          {/* Navegación de Módulos */}
          <div className="mt-16 flex justify-between items-center">
            <Button variant="outline" asChild>
              <Link to="/curso/f2">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Módulo Anterior: F2 Contexto Semántico y Formato Óptimo
              </Link>
            </Button>
            <Button asChild>
              <Link to="/curso/f4">
                Siguiente Módulo: F4 Optimización Técnica
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Contenido Relacionado */}
          <div className="mt-16 p-6 bg-muted/30 rounded-lg">
            <h3 className="text-lg font-semibold text-primary mb-4 text-center">Herramientas Útiles</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://alerts.google.com/" target="_blank" rel="noopener noreferrer">
                  Google Alerts
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://brandmentions.com/" target="_blank" rel="noopener noreferrer">
                  BrandMentions
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://buzzsumo.com/" target="_blank" rel="noopener noreferrer">
                  BuzzSumo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/curso/f4">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Continuar con F4
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModuloF3Page;
