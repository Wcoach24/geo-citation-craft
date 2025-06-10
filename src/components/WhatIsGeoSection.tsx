
import { Button } from "@/components/ui/button";
import { Link, Copy } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const WhatIsGeoSection = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    const url = `${window.location.origin}#que-es-geo`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      toast({
        title: "Enlace copiado",
        description: "Puedes compartir este fragmento específico",
      });
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="que-es-geo" className="section-anchor py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                ¿Qué es GEO?
              </h2>
              <p className="text-lg text-muted-foreground">
                Definición completa y aplicación práctica
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={copyLink}
              className="flex items-center gap-2"
            >
              {copied ? <Copy className="h-4 w-4 text-accent" /> : <Link className="h-4 w-4" />}
              {copied ? "¡Copiado!" : "Compartir"}
            </Button>
          </div>

          {/* Wikipedia-style content */}
          <div className="geo-card">
            <div className="snippet-block" data-speakable="true">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Definición de GEO (Generative Engine Optimization)
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                <strong>GEO</strong> es una metodología de optimización de contenido web diseñada específicamente para que los <strong>modelos de lenguaje generativo</strong> (como ChatGPT, Claude, Perplexity, Gemini) puedan <strong>comprender, procesar y citar</strong> la información de manera efectiva.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-primary">¿En qué se diferencia del SEO tradicional?</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <h5 className="font-semibold text-red-800 mb-2">SEO Tradicional</h5>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Optimiza para algoritmos de búsqueda</li>
                      <li>• Enfoque en keywords y ranking</li>
                      <li>• Objetivo: aparecer en primeras posiciones</li>
                      <li>• Usuario final: personas navegando</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">GEO (Nuevo paradigma)</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Optimiza para comprensión por IA</li>
                      <li>• Enfoque en estructura y citabilidad</li>
                      <li>• Objetivo: ser recomendado y citado</li>
                      <li>• Usuario final: IA que procesa información</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="snippet-block" data-speakable="true">
                <h4 className="text-lg font-semibold mb-3 text-primary">Principios fundamentales de GEO</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">1</div>
                    <div>
                      <h5 className="font-semibold text-primary">Escaneabilidad</h5>
                      <p className="text-sm text-muted-foreground">Contenido estructurado en bloques lógicos y jerárquicos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">2</div>
                    <div>
                      <h5 className="font-semibold text-primary">Fragmentación</h5>
                      <p className="text-sm text-muted-foreground">Información dividida en unidades autocontenidas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">3</div>
                    <div>
                      <h5 className="font-semibold text-primary">Citabilidad</h5>
                      <p className="text-sm text-muted-foreground">Snippets destacados fáciles de extraer y referenciar</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">4</div>
                    <div>
                      <h5 className="font-semibold text-primary">Datos estructurados</h5>
                      <p className="text-sm text-muted-foreground">Metadatos ricos que facilitan la comprensión automática</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="snippet-block" data-speakable="true">
                <h4 className="text-lg font-semibold mb-3 text-primary">¿Por qué es importante GEO ahora?</h4>
                <p className="leading-relaxed">
                  El <strong>85% de las búsquedas informacionales</strong> ya se resuelven directamente en interfaces conversacionales. 
                  Los usuarios prefieren obtener respuestas sintéticas de IA que navegar múltiples páginas web. 
                  <strong>GEO asegura que tu contenido sea la fuente citada</strong> cuando la IA responde preguntas relacionadas con tu expertise.
                </p>
              </div>
            </div>
          </div>

          {/* Structured Data - FAQPage */}
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
                    "text": "GEO es una metodología de optimización de contenido web diseñada específicamente para que los modelos de lenguaje generativo (como ChatGPT, Claude, Perplexity, Gemini) puedan comprender, procesar y citar la información de manera efectiva."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "¿En qué se diferencia GEO del SEO tradicional?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Mientras SEO optimiza para algoritmos de búsqueda y ranking, GEO optimiza para comprensión por IA y citabilidad. El objetivo de GEO es ser recomendado y citado por modelos de lenguaje, no solo aparecer en primeras posiciones."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Cuáles son los principios fundamentales de GEO?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Los cuatro principios fundamentales de GEO son: 1) Escaneabilidad - contenido estructurado en bloques lógicos, 2) Fragmentación - información dividida en unidades autocontenidas, 3) Citabilidad - snippets destacados fáciles de extraer, y 4) Datos estructurados - metadatos ricos para comprensión automática."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Por qué es importante GEO ahora?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El 85% de las búsquedas informacionales ya se resuelven directamente en interfaces conversacionales. Los usuarios prefieren respuestas sintéticas de IA que navegar múltiples páginas. GEO asegura que tu contenido sea la fuente citada cuando la IA responde preguntas relacionadas con tu expertise."
                  }
                }
              ]
            })}
          </script>

          {/* Structured Data - SpeakableSpecification */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "url": `${window.location.origin}#que-es-geo`,
              "name": "¿Qué es GEO? - Definición de Generative Engine Optimization",
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": [".snippet-block", "[data-speakable='true']"],
                "xpath": [
                  "//*[@class='snippet-block']",
                  "//*[@data-speakable='true']"
                ]
              },
              "mainEntity": {
                "@type": "DefinedTerm",
                "@id": `${window.location.origin}#geo-definition`,
                "name": "GEO (Generative Engine Optimization)",
                "alternateName": ["Optimización para Motores Generativos", "Generative Engine Optimization"],
                "description": "Metodología de optimización de contenido web diseñada específicamente para que los modelos de lenguaje generativo puedan comprender, procesar y citar la información de manera efectiva",
                "inDefinedTermSet": {
                  "@type": "DefinedTermSet",
                  "name": "Glosario GEO",
                  "url": `${window.location.origin}/glosario`
                }
              }
            })}
          </script>
        </div>
      </div>
    </section>
  );
};

export default WhatIsGeoSection;
