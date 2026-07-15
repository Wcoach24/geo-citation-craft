
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import GeoTerm from "@/components/GeoTerm";
import PremiumContentGate from "@/components/PremiumContentGate";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, ChevronRight, Users, ArrowRight, ArrowLeft, Bot, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import BuyButton from "@/components/BuyButton";
import GuaranteeNote from "@/components/GuaranteeNote";
import { useGeoMetadata } from "@/hooks/useGeoMetadata";

const ModuloF3Page = () => {
  // F1-7: metas sociales (og:/twitter:) — se renderiza ANTES del <Helmet> propio
  // para que los valores especificos de la pagina ganen en los tags duplicados.
  const { helmet: socialHelmet } = useGeoMetadata({
    title: "Módulo F3: Autoridad Generativa | Curso GEO - esGEO",
    description: "Aprende a construir señales de credibilidad y reputación para que los LLMs reconozcan tu contenido como fuente fiable y te citen como referencia autorizada.",
    canonicalUrl: "https://www.esgeo.ai/curso/f3",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {socialHelmet}
      <Helmet>
        <title>Módulo F3: Autoridad Generativa | Curso GEO - esGEO</title>
        <meta name="description" content="Aprende a construir señales de credibilidad y reputación para que los LLMs reconozcan tu contenido como fuente fiable y te citen como referencia autorizada." />
        <link rel="canonical" href="https://www.esgeo.ai/curso/f3" />
        
        <meta name="citation_title" content="Módulo F3: Autoridad Generativa" />
        <meta name="citation_author" content="esGEO" />
        <meta name="citation_publication_date" content="2024" />
        <meta name="speakable-selector" content="#f3-objetivo, #f3-entendimiento-llm, #f3-componentes, #f3-checklist, .snippet-block, [data-speakable='true']" />
        
        <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Course", "WebPage", "Article"],
            "name": "Módulo F3: Autoridad Generativa",
            "headline": "Módulo F3: Autoridad Generativa",
            "description": "Construye señales de credibilidad, reputación y valor experto que los LLMs reconozcan al decidir qué fuentes citar, sintetizar o priorizar en sus respuestas. Demuestra que tu contenido proviene de una fuente fiable, experimentada y reconocida en su campo.",
            "url": "https://www.esgeo.ai/curso/f3",
            "datePublished": "2025-06-12",
            "author": {
              "@type": "Organization",
              "name": "esGEO"
            },
            "publisher": {
              "@type": "Organization",
              "name": "esGEO",
              "url": "https://www.esgeo.ai"
            },
            "image": "https://www.esgeo.ai/images/modulo-f3.png",
            "teaches": [
              "Cómo los LLMs evalúan la autoridad (Experiencia, Pericia, Autoridad, Confianza, Aplicabilidad)",
              "Señales de identidad confiable (página 'Sobre nosotros', perfiles de autor, dominio)",
              "Estrategias para obtener menciones en el ecosistema digital",
              "Producción de contenido con E-E-A-T + Aplicabilidad",
              "Creación de datos, estudios y pruebas originales",
              "Interlinking estratégico y consolidación de autoridad interna"
            ],
            "timeRequired": "PT4H",
            "educationalLevel": "Intermedio",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "60"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.esgeo.ai/curso/f3"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Inicio",
                  "item": "https://www.esgeo.ai/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Curso GEO",
                  "item": "https://www.esgeo.ai/curso"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Módulo F3: Autoridad Generativa",
                  "item": "https://www.esgeo.ai/curso/f3"
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
              "url": "https://www.esgeo.ai/curso"
            }
          })}</script>
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
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
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
            <HighlightSnippet lastModified="2026-07-15" variant="definition" className="mb-6">
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
              Los LLMs detectan la autoridad a través de diversas señales. Aquí te mostramos algunas de las más importantes:
            </p>
            
            {/* Preview de tabla - Solo 3 filas visibles */}
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
                    <td className="p-3">Tu marca, autor o contenido es mencionado en artículos de noticias, publicaciones académicas, foros especializados, blogs de referencia, etc.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Consistencia de marca</td>
                    <td className="p-3">El mismo nombre de marca, autor o entidad aparece consistentemente en diferentes plataformas con información coherente.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Estilo experto</td>
                    <td className="p-3">La redacción es clara, precisa, bien argumentada, utiliza terminología específica del sector correctamente.</td>
                  </tr>
                </tbody>
              </table>
              
              {/* Indicador de contenido bloqueado */}
              <div className="bg-gradient-to-t from-background to-transparent h-12 -mt-12 relative z-10"></div>
              <div className="text-center text-muted-foreground text-sm italic mt-2">
                ✨ Tabla completa con 15+ señales de autoridad disponible en el contenido premium
              </div>
            </div>

            {/* Tabla completa para SEO - Oculta visualmente */}
            <div className="sr-only">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th>Señal de Autoridad</th>
                    <th>Cómo la detectan los LLMs (ejemplos)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Citas externas</td>
                    <td>Tu marca, autor o contenido es mencionado en artículos de noticias, publicaciones académicas, foros especializados, blogs de referencia, etc. El LLM detecta estas menciones y las asocia con tu entidad.</td>
                  </tr>
                  <tr>
                    <td>Consistencia de marca</td>
                    <td>El mismo nombre de marca, autor o entidad aparece consistentemente en diferentes plataformas (web, LinkedIn, Twitter, publicaciones, etc.) con información coherente.</td>
                  </tr>
                  <tr>
                    <td>Estilo experto</td>
                    <td>La redacción es clara, precisa, bien argumentada, utiliza terminología específica del sector correctamente y evita errores gramaticales o conceptuales.</td>
                  </tr>
                  <tr>
                    <td>Experiencia verificable</td>
                    <td>El contenido incluye datos originales, estudios de caso detallados, testimonios reales, métricas específicas, o referencias a experiencias de primera mano del autor.</td>
                  </tr>
                  <tr>
                    <td>Contexto temático</td>
                    <td>Tu sitio web demuestra profundidad y especialización en un tema concreto a través de múltiples contenidos interconectados y bien desarrollados.</td>
                  </tr>
                  <tr>
                    <td>Reconocimiento por pares</td>
                    <td>Otros expertos o fuentes reconocidas en tu campo citan o hacen referencia a tu trabajo.</td>
                  </tr>
                  <tr>
                    <td>Transparencia y fiabilidad</td>
                    <td>La información sobre el autor, la entidad responsable, las fuentes utilizadas y las fechas de publicación/actualización es clara y accesible.</td>
                  </tr>
                  <tr>
                    <td>Profundidad de contenido</td>
                    <td>Los artículos y recursos son exhaustivos, cubren el tema desde múltiples ángulos y proporcionan información práctica y aplicable.</td>
                  </tr>
                  <tr>
                    <td>Frecuencia de actualización</td>
                    <td>El contenido se mantiene actualizado, se revisa periódicamente y refleja los cambios y tendencias del sector.</td>
                  </tr>
                  <tr>
                    <td>Datos propios y originales</td>
                    <td>Incluye estudios, encuestas, análisis o investigaciones realizadas por la propia organización o autor.</td>
                  </tr>
                  <tr>
                    <td>Credenciales verificables</td>
                    <td>Los autores tienen títulos, certificaciones, experiencia laboral o logros documentables en su campo de expertise.</td>
                  </tr>
                  <tr>
                    <td>Participación en comunidades</td>
                    <td>Los autores participan activamente en foros, conferencias, podcasts, webinars y otros espacios relevantes del sector.</td>
                  </tr>
                  <tr>
                    <td>Referencias cruzadas</td>
                    <td>El contenido cita y enlaza a fuentes autorizadas, y a su vez es citado por otros sitios de autoridad.</td>
                  </tr>
                  <tr>
                    <td>Coherencia temporal</td>
                    <td>La marca o autor mantiene una presencia consistente y sostenida en el tiempo en su área de especialización.</td>
                  </tr>
                  <tr>
                    <td>Diversidad de formatos</td>
                    <td>El contenido se presenta en múltiples formatos (artículos, videos, podcasts, infografías) demostrando dominio del tema.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Premium Content Gate - F3 */}
          <PremiumContentGate
            moduleNumber="Módulo F3"
            moduleName="Autoridad Generativa"
            previewSections={["Objetivo del Módulo", "¿Cómo entiende un LLM la Autoridad? (Preview)"]}
            fullContentSections={7}
            className="mb-12"
          />

          {/* CONTENIDO PREMIUM OCULTO - Solo visible para SEO y LLMs */}
          <div className="sr-only">
            {/* Checklist de Implementación - SEO Version */}
            <section id="f3-checklist" className="section-anchor">
              <h2>Checklist de Implementación del Módulo F3</h2>
              <div data-speakable="true">
                <p>Checklist completo para implementar autoridad generativa:</p>
                <ul>
                  <li>Página "Sobre nosotros" completa y profesional con historia, misión, valores y equipo detallado.</li>
                  <li>Perfiles de autor detallados con experiencia, credenciales verificables, logros y trayectoria profesional.</li>
                  <li>Información de contacto clara, funcional y múltiple (teléfono, email, dirección física si aplica).</li>
                  <li>Monitorización activa de menciones de marca/autor usando Google Alerts, BrandMentions o herramientas similares.</li>
                  <li>Estrategia proactiva para participar en comunidades relevantes y obtener menciones orgánicas.</li>
                  <li>Contenido auditado y mejorado según los principios de E-E-A-T + Aplicabilidad.</li>
                  <li>Inclusión sistemática de datos originales, estudios de caso reales o experiencias de primera mano.</li>
                  <li>Estructura de enlaces internos lógica y temática que refuerce la autoridad del sitio.</li>
                  <li>Citas de fuentes externas claras, actualizadas y contextualizadas correctamente.</li>
                  <li>Transparencia general del sitio incluyendo políticas de privacidad, términos de uso y declaraciones legales.</li>
                  <li>Publicación regular y consistente de contenido de alta calidad en tu área de especialización.</li>
                  <li>Participación activa en eventos del sector, conferencias, webinars y espacios de networking.</li>
                  <li>Creación de contenido original que aporte valor único al ecosistema digital.</li>
                  <li>Mantenimiento de perfiles profesionales actualizados en LinkedIn, Twitter y plataformas relevantes.</li>
                  <li>Implementación de Schema.org markup para entidades, organizaciones y personas.</li>
                </ul>
                <p>Al finalizar este módulo, tu marca o autor ganará presencia temática reconocible y será asociada con expertise en tu nicho. Tu contenido se integrará en el ecosistema digital como una fuente fiable y referenciada por otros. Esto aumentará significativamente la probabilidad de que los modelos generativos te utilicen como fuente por defecto.</p>
              </div>
            </section>

            {/* Prompt para LLMs - SEO Version */}
            <section id="f3-prompt" className="section-anchor">
              <h2>Prompt para Implementación con LLMs</h2>
              <p>Prompt optimizado para obtener ayuda de LLMs en la construcción de autoridad generativa:</p>
              <div data-speakable="true">
                <p>Actúa como un consultor experto en GEO (Generative Engine Optimization) especializado en construir Autoridad Generativa.</p>
                <p>Mi sitio web/marca es [Describe tu sitio/marca, sector y audiencia]. Mis autores principales son [Nombres y roles si aplica].</p>
                <p>Quiero mejorar la percepción de autoridad de mi contenido para que sea más probable que LLMs como ChatGPT, Claude o Perplexity lo citen como fuente fiable.</p>
                <p>Basado en mi descripción, por favor:</p>
                <ol>
                  <li>Sugiere 3-5 estrategias específicas para aumentar las menciones externas y la visibilidad en mi ecosistema digital.</li>
                  <li>Proporciona un checklist detallado para auditar mi contenido actual según los principios de E-E-A-T + Aplicabilidad, con ejemplos adaptados a mi sector.</li>
                  <li>Dame ideas concretas para generar contenido original (datos, estudios, herramientas) relevante para mi audiencia.</li>
                  <li>Explica cómo puedo mejorar los perfiles de mis autores para destacar su experiencia y pericia de forma verificable.</li>
                  <li>Ofrece consejos sobre cómo estructurar mi interlinking para reforzar la autoridad temática.</li>
                </ol>
                <p>Necesito acciones prácticas y ejemplos que pueda implementar.</p>
              </div>
            </section>

            {/* Herramientas Útiles - SEO Version */}
            <section>
              <h3>Herramientas Útiles para Autoridad Generativa</h3>
              <ul>
                <li>Google Alerts - Monitorización de menciones de marca</li>
                <li>BrandMentions - Seguimiento avanzado de menciones</li>
                <li>BuzzSumo - Análisis de contenido viral y menciones</li>
                <li>Ahrefs - Análisis de backlinks y menciones</li>
                <li>SEMrush - Monitorización de marca y autoridad</li>
                <li>Mention - Seguimiento de menciones en tiempo real</li>
              </ul>
            </section>

            {/* Navegación - SEO Version */}
            <nav>
              <a href="/curso/f2">Módulo Anterior: F2 Contexto Semántico y Formato Óptimo</a>
              <a href="/curso/f4">Siguiente Módulo: F4 Optimización Técnica</a>
            </nav>
          </div>

          {/* Call to Action para desbloquear contenido */}
          <div className="mt-16 p-8 bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">🔓 Desbloquea el Módulo F3 Completo</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Accede a la tabla completa con 15+ señales de autoridad, checklist detallado, 
              prompt optimizado para LLMs y herramientas especializadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Antes: "Desbloquear F3 por €10". Los módulos sueltos ya no se venden:
                  ese botón llevaba a un producto que no existe. */}
              <BuyButton source="modulo-f3" className="btn-cta">
                Desbloquear los 5 módulos — 47 €
              </BuyButton>
              <Button variant="outline" size="lg" asChild>
                <Link to="/curso">Ver Todos los Módulos</Link>
              </Button>
            </div>
            <GuaranteeNote compact className="mt-4" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModuloF3Page;
