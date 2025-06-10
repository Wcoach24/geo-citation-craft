
import HighlightSnippet from "./HighlightSnippet";
import ShareSectionButton from "./ShareSectionButton";
import GeoTerm from "./GeoTerm";

const WhatIsGeoSection = () => {
  return (
    <section id="que-es-geo" className="py-20 bg-background section-anchor">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            ¿Qué es GEO?
          </h2>
          
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

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6">
              Mientras que el SEO tradicional se enfoca en optimizar para motores de búsqueda como Google, 
              GEO se centra en optimizar para{" "}
              <GeoTerm term="citabilidad" definition="Capacidad de un contenido para ser reconocido y recomendado por modelos de IA">
                la citabilidad
              </GeoTerm>{" "}
              por parte de ChatGPT, Perplexity, Claude y otros modelos generativos.
            </p>
            
            <p className="mb-6">
              En la nueva economía de la atención, los usuarios consultan directamente a la IA 
              en lugar de navegar por múltiples sitios web. Ser citado por un modelo generativo 
              equivale a estar en la primera posición de búsqueda tradicional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold text-primary mb-4">Comprensibilidad</h3>
              <p className="text-muted-foreground">
                Estructura el contenido para que sea fácilmente procesable por{" "}
                <GeoTerm term="llm">modelos de IA</GeoTerm>.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold text-primary mb-4">Citabilidad</h3>
              <p className="text-muted-foreground">
                Optimiza para que tu contenido sea recomendado como fuente autorizada.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold text-primary mb-4">Autoridad</h3>
              <p className="text-muted-foreground">
                Establece tu contenido como referencia en tu área de expertise.
              </p>
            </div>
          </div>

          <ShareSectionButton sectionId="que-es-geo" title="definición de GEO" className="mt-8" />
        </div>
      </div>
    </section>
  );
};

export default WhatIsGeoSection;
