
import HighlightSnippet from "./HighlightSnippet";
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
            <HighlightSnippet lastModified="2026-07-15" id="definicion-geo" variant="definition" className="mb-8">
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
            <HighlightSnippet lastModified="2026-07-15" id="diferencia-seo-geo" variant="insight" className="mb-8">
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

        </article>
      </div>

      {/* Datos estructurados específicos para esta sección */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          "@id": "https://www.esgeo.ai#geo-definition",
          "name": "Generative Engine Optimization (GEO)",
          "description": "Metodología de optimización de contenido web diseñada específicamente para que los modelos de lenguaje generativo puedan comprender, procesar y citar la información de manera efectiva",
          "inDefinedTermSet": {
            "@type": "DefinedTermSet",
            "name": "Glosario GEO",
            "url": "https://www.esgeo.ai/glosario"
          },
          "termCode": "GEO",
          "url": "https://www.esgeo.ai/glosario#geo"
        }) }} />

      {/* El FAQPage que vivía aquí se eliminó: la home ya emite su propio FAQPage
          (Index.tsx) y dos bloques FAQPage en la misma página compiten entre sí. */}
    </section>
  );
};

export default WhatIsGeoSection;
