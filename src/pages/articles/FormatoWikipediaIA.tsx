
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import HighlightSnippet from "@/components/HighlightSnippet";
import GeoTerm from "@/components/GeoTerm";

const FormatoWikipediaIA = () => {
  return (
    <>
      <Helmet>
        <title>¿Por qué los modelos prefieren textos con formato Wikipedia? | Radar IA - esGEO</title>
        <meta name="description" content="El estilo enciclopédico como modelo ideal para la citabilidad por modelos de lenguaje generativo." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Article", "WebPage"],
            "headline": "¿Por qué los modelos prefieren textos con formato Wikipedia?",
            "description": "El estilo enciclopédico como modelo ideal para la citabilidad",
            "datePublished": "2025-01-08",
            "author": {
              "@type": "Organization",
              "name": "esGEO"
            },
            "publisher": {
              "@type": "Organization",
              "name": "esGEO"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": window.location.href
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Inicio",
                  "item": "/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Radar IA",
                  "item": "/radar-ia"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "¿Por qué los modelos prefieren textos con formato Wikipedia?",
                  "item": "/radar-ia/formato-wikipedia-ia"
                }
              ]
            },
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": "#formato-wikipedia-definition, #entrenamiento-gpt, #estilo-enciclopedico"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <Link to="/radar-ia" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Radar IA
            </Link>

            <header className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
                ¿Por qué los modelos prefieren textos con formato Wikipedia?
              </h1>
              
              <HighlightSnippet id="formato-wikipedia-definition" variant="definition" className="mb-6">
                <p className="text-xl leading-relaxed">
                  <strong>Las IA priorizan textos que imitan el estilo de Wikipedia:</strong> breves, neutrales, bien titulados y estructurados.
                </p>
              </HighlightSnippet>

              <div className="text-sm text-muted-foreground">
                Publicado el 8 de enero de 2025 • Categoría: Casos
              </div>
            </header>

            <article className="prose prose-lg max-w-none">
              <section id="introduccion" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Introducción</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Wikipedia no es solo una enciclopedia: es el template perfecto para la <GeoTerm term="citabilidad">citabilidad</GeoTerm>. 
                  Los <GeoTerm term="modelo-de-lenguaje">modelos de lenguaje</GeoTerm> fueron entrenados mayoritariamente con su contenido, 
                  convirtiendo su formato en el estándar de oro para la comprensión por IA.
                </p>
              </section>

              <section id="entrenamiento-datos" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Explicación: cómo fue entrenado GPT</h2>
                
                <HighlightSnippet id="entrenamiento-gpt" variant="insight" className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Fuentes de entrenamiento de GPT-3/4:</h3>
                  <ul className="space-y-2">
                    <li><strong>Wikipedia:</strong> ~3% del dataset, pero máxima calidad</li>
                    <li><strong>Common Crawl:</strong> Web general, calidad variable</li>
                    <li><strong>WebText2:</strong> Contenido curado de Reddit</li>
                    <li><strong>Books:</strong> Literatura y textos académicos</li>
                  </ul>
                </HighlightSnippet>

                <h3 className="text-xl font-medium text-primary mb-3">Por qué Wikipedia marca la diferencia</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wikipedia no representa el mayor volumen de datos, pero sí la mayor densidad de información estructurada. 
                  Sus estándares editoriales crearon el patrón que los modelos reconocen como "contenido de autoridad".
                </p>
                
                <div className="bg-muted/30 p-4 rounded-lg mb-4">
                  <p className="text-sm text-muted-foreground mb-2"><strong>Dato clave:</strong></p>
                  <p className="italic">"Los artículos de Wikipedia tienen 15x más probabilidad de ser citados por ChatGPT que el contenido web promedio."</p>
                </div>
              </section>

              <section id="estilo-enciclopedico" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Estilo enciclopédico como modelo ideal</h2>
                
                <HighlightSnippet id="estilo-enciclopedico" variant="stat" className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Características del formato Wikipedia:</h3>
                  <ul className="space-y-2">
                    <li><strong>Definición clara:</strong> Primera frase explica qué es el concepto</li>
                    <li><strong>Estructura jerárquica:</strong> H2 para temas, H3 para subtemas</li>
                    <li><strong>Tono neutral:</strong> Sin adjetivos comerciales o hipérboles</li>
                    <li><strong>Enlaces contextuales:</strong> Términos relacionados enlazados naturalmente</li>
                    <li><strong>Referencias:</strong> Fuentes verificables y citables</li>
                  </ul>
                </HighlightSnippet>

                <h3 className="text-xl font-medium text-primary mb-3">Comparación práctica</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">❌ Contenido comercial típico</h4>
                    <p className="text-sm text-red-700 italic">
                      "¡Descubre el INCREÍBLE secreto del marketing que REVOLUCIONARÁ tu negocio! 
                      Esta PODEROSA estrategia que usan los expertos..."
                    </p>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">✅ Estilo Wikipedia</h4>
                    <p className="text-sm text-green-700 italic">
                      "El marketing de contenidos es una estrategia que consiste en crear y distribuir 
                      contenido valioso para atraer y retener una audiencia específica."
                    </p>
                  </div>
                </div>
              </section>

              <section id="adaptacion-contenido" className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Cómo adaptar tu contenido a ese formato</h2>
                
                <h3 className="text-xl font-medium text-primary mb-3">Fórmula de adaptación</h3>
                <ol className="space-y-3 text-muted-foreground leading-relaxed mb-4">
                  <li><strong>1. Primer párrafo definitorio:</strong> Explica qué es X en 1-2 frases claras</li>
                  <li><strong>2. Estructura temática:</strong> Divide en H2 lógicos (Historia, Características, Aplicaciones)</li>
                  <li><strong>3. Tono enciclopédico:</strong> Elimina adjetivos comerciales, usa tercera persona</li>
                  <li><strong>4. Enlaces contextuales:</strong> Conecta con tu <Link to="/glosario" className="text-primary underline">glosario</Link> y conceptos relacionados</li>
                  <li><strong>5. Datos verificables:</strong> Incluye estadísticas, fechas, fuentes cuando sea posible</li>
                </ol>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">💡 Tip práctico</h4>
                  <p className="text-sm text-blue-700">
                    Antes de publicar, pregúntate: "¿Estaría este contenido en Wikipedia?" 
                    Si la respuesta es no, necesitas más neutralidad y estructura.
                  </p>
                </div>
              </section>
            </article>

            <div className="mt-16 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-4">Contenido relacionado</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/metodologia#f3">
                  <Button variant="ghost" size="sm">
                    Módulo F3: Autoridad Generativa
                  </Button>
                </Link>
                <Link to="/glosario#citabilidad">
                  <Button variant="ghost" size="sm">
                    Definición: Citabilidad
                  </Button>
                </Link>
                <Link to="/radar-ia/estructura-web-para-lenguaje">
                  <Button variant="ghost" size="sm">
                    Estructura para LLMs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default FormatoWikipediaIA;
