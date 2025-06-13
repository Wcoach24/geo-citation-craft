
import HighlightSnippet from "./HighlightSnippet";
import ShareSectionButton from "./ShareSectionButton";
import GeoTerm from "./GeoTerm";

const WhatIsGeoSection = () => {
  return (
    <section id="que-es-geo" className="py-20 bg-background section-anchor">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto text-center">
          <header>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              ¿Qué es GEO?
            </h2>
          </header>
          
          <section className="mb-8">
            <h3 className="sr-only">Definición principal de GEO</h3>
            <HighlightSnippet id="definicion-geo" variant="definition" className="mb-8">
              <p className="text-lg" data-speakable="true">
                <strong>Generative Engine Optimization (GEO)</strong> es la metodología de optimización 
                de contenido web diseñada específicamente para que los{" "}
                <GeoTerm 
                  term="modelos-lenguaje-generativo"
                  definition="Sistemas de IA como ChatGPT, Claude o Perplexity que generan texto similar al humano"
                >
                  modelos de lenguaje generativo
                </GeoTerm>{" "}
                puedan comprender, procesar y citar la información de manera efectiva.
              </p>
            </HighlightSnippet>
          </section>

          <section className="mb-8">
            <h3 className="sr-only">Diferencia entre GEO y SEO</h3>
            <HighlightSnippet id="diferencia-seo-geo" variant="insight" className="mb-8">
              <p className="text-lg" data-speakable="true">
                <strong>Diferencia clave:</strong> Mientras que el SEO tradicional se enfoca en optimizar para motores de búsqueda como Google, 
                GEO se centra en optimizar para{" "}
                <GeoTerm term="citabilidad" definition="Capacidad de un contenido para ser reconocido y recomendado por modelos de IA">
                  la citabilidad
                </GeoTerm>{" "}
                por parte de ChatGPT, Perplexity, Claude y otros modelos generativos.
              </p>
            </HighlightSnippet>
          </section>

          <section className="prose prose-lg max-w-none text-muted-foreground mb-8">
            <h3 className="sr-only">Contexto y objetivos de GEO</h3>
            
            <HighlightSnippet id="nueva-economia-atencion" variant="stat" className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Nueva economía de la atención</h4>
              <p data-speakable="true">
                En la nueva economía de la atención, los usuarios consultan directamente a la IA 
                en lugar de navegar por múltiples sitios web. Ser citado por un modelo generativo 
                equivale a estar en la primera posición de búsqueda tradicional.
              </p>
            </HighlightSnippet>
            
            <HighlightSnippet id="objetivo-geo" variant="insight" className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Objetivo principal</h4>
              <p data-speakable="true">
                El objetivo de GEO es que cuando un usuario pregunte a una IA sobre tu área de expertise, 
                tu contenido sea la fuente principal que el modelo cite y recomiende, estableciendo tu autoridad digital 
                en la era de la IA generativa.
              </p>
            </HighlightSnippet>
          </section>

          <ShareSectionButton sectionId="que-es-geo" title="definición de GEO" className="mt-8" />
        </article>
      </div>

      {/* Datos estructurados específicos para esta sección */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          "@id": "https://esgeo.ai#geo-definition",
          "name": "Generative Engine Optimization (GEO)",
          "description": "Metodología de optimización de contenido web diseñada específicamente para que los modelos de lenguaje generativo puedan comprender, procesar y citar la información de manera efectiva",
          "inDefinedTermSet": {
            "@type": "DefinedTermSet",
            "name": "Glosario GEO",
            "url": "https://esgeo.ai/glosario"
          },
          "termCode": "GEO",
          "url": "https://esgeo.ai/glosario#geo"
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "¿Qué es GEO (Generative Engine Optimization)?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "GEO es la metodología de optimización de contenido web diseñada específicamente para que los modelos de lenguaje generativo como ChatGPT, Claude o Perplexity puedan comprender, procesar y citar la información de manera efectiva."
              }
            },
            {
              "@type": "Question", 
              "name": "¿En qué se diferencia GEO del SEO tradicional?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mientras que el SEO tradicional se enfoca en optimizar para motores de búsqueda como Google, GEO se centra en optimizar para la citabilidad por parte de ChatGPT, Perplexity, Claude y otros modelos generativos."
              }
            }
          ]
        })}
      </script>
    </section>
  );
};

export default WhatIsGeoSection;
