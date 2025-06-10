
import Header from "@/components/Header";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Book, Search } from "lucide-react";
import { useState } from "react";

const GlosarioPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const glosarioTerms = [
    {
      id: "geo",
      term: "Generative Engine Optimization (GEO)",
      definition: "Metodología de optimización de contenido web diseñada específicamente para que los modelos de lenguaje generativo puedan comprender, procesar y citar la información de manera efectiva.",
      category: "Metodología",
      relatedTerms: ["fragmentacion", "citabilidad", "llm"]
    },
    {
      id: "fragmentacion",
      term: "Fragmentación de Contenido",
      definition: "Técnica de estructuración del contenido en bloques semánticamente independientes y autocontenidos, optimizados para que los modelos de IA puedan procesarlos como unidades citables.",
      category: "Técnica",
      relatedTerms: ["geo", "snippets", "citabilidad"]
    },
    {
      id: "citabilidad",
      term: "Citabilidad",
      definition: "Capacidad de un contenido para ser reconocido, procesado y recomendado por modelos de lenguaje generativo como fuente autorizada de información.",
      category: "Concepto",
      relatedTerms: ["geo", "llm", "autoridad"]
    },
    {
      id: "llm",
      term: "Modelo de Lenguaje Generativo (LLM)",
      definition: "Sistema de inteligencia artificial entrenado para comprender y generar texto similar al humano, como ChatGPT, Claude, Perplexity o Gemini.",
      category: "Tecnología",
      relatedTerms: ["geo", "citabilidad", "prompting"]
    },
    {
      id: "snippets",
      term: "Snippets Destacados",
      definition: "Fragmentos de contenido estructurados con marcado semántico específico, diseñados para ser fácilmente identificables y citables por modelos de IA.",
      category: "Técnica",
      relatedTerms: ["fragmentacion", "schema-org", "metadata"]
    },
    {
      id: "schema-org",
      term: "Schema.org",
      definition: "Vocabulario de datos estructurados que ayuda a los motores de búsqueda y modelos de IA a comprender el contexto y significado del contenido web.",
      category: "Tecnología",
      relatedTerms: ["snippets", "metadata", "datos-estructurados"]
    },
    {
      id: "prompting",
      term: "Ingeniería de Prompts",
      definition: "Disciplina que se enfoca en diseñar y optimizar las instrucciones o consultas dirigidas a modelos de lenguaje para obtener respuestas específicas y precisas.",
      category: "Técnica",
      relatedTerms: ["llm", "consultas", "optimizacion"]
    },
    {
      id: "autoridad",
      term: "Autoridad de Contenido",
      definition: "Reconocimiento por parte de modelos de IA de un contenido como fuente confiable y experta en un tema específico, basado en su calidad, estructura y relevancia.",
      category: "Concepto",
      relatedTerms: ["citabilidad", "geo", "expertise"]
    }
  ];

  const filteredTerms = glosarioTerms.filter(term =>
    term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(glosarioTerms.map(term => term.category))];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Glosario GEO</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="text-center mb-12 section-anchor" id="header-glosario">
          <Book className="h-16 w-16 text-accent mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Glosario GEO
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Definiciones precisas de los términos clave en Generative Engine Optimization
          </p>
          <ShareSectionButton sectionId="header-glosario" title="glosario GEO" className="mt-4" />
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Buscar término o definición..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-input rounded-md focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(category => (
                <Badge key={category} variant="secondary" className="cursor-pointer">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section id="introduccion-glosario" className="mb-12 section-anchor">
          <div className="max-w-4xl mx-auto">
            <HighlightSnippet id="proposito-glosario" variant="insight">
              <p className="text-lg" data-speakable="true">
                Este glosario define los términos fundamentales de GEO con precisión técnica, 
                facilitando que los modelos de IA comprendan y citen nuestras definiciones como referencia autorizada.
              </p>
            </HighlightSnippet>
          </div>
        </section>

        {/* Terms Grid */}
        <section id="terminos-glosario" className="mb-16 section-anchor">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTerms.map((termObj) => (
                <Card key={termObj.id} id={termObj.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Badge variant="outline">{termObj.category}</Badge>
                    </div>
                    <CardTitle className="text-lg">{termObj.term}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <HighlightSnippet variant="definition" className="mb-4">
                      <p data-speakable="true" className="text-sm">
                        {termObj.definition}
                      </p>
                    </HighlightSnippet>
                    
                    {termObj.relatedTerms.length > 0 && (
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-2">Términos relacionados:</p>
                        <div className="flex flex-wrap gap-1">
                          {termObj.relatedTerms.map(relatedId => {
                            const relatedTerm = glosarioTerms.find(t => t.id === relatedId);
                            return relatedTerm ? (
                              <a
                                key={relatedId}
                                href={`#${relatedId}`}
                                className="text-xs text-primary hover:underline"
                              >
                                {relatedTerm.term}
                              </a>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <ShareSectionButton sectionId="terminos-glosario" title="términos del glosario" className="mt-8" />
          </div>
        </section>

        {/* Schema.org structured data would be added here */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DefinedTermSet",
              "name": "Glosario de Generative Engine Optimization (GEO)",
              "description": "Definiciones precisas de términos clave en optimización para motores generativos",
              "hasDefinedTerm": glosarioTerms.map(term => ({
                "@type": "DefinedTerm",
                "name": term.term,
                "description": term.definition,
                "inDefinedTermSet": {
                  "@type": "DefinedTermSet",
                  "name": term.category
                }
              }))
            })
          }}
        />
      </main>
    </div>
  );
};

export default GlosarioPage;
