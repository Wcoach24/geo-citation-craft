
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import Header from "@/components/Header";
import { CheckCircle, XCircle, MessageSquare, ExternalLink, FileText, Users } from "lucide-react";
import { useState } from "react";

const CasosRealesPage = () => {
  const [submittedForm, setSubmittedForm] = useState(false);

  const casosSimulados = [
    {
      id: "caso-chatgpt-definicion",
      titulo: "ChatGPT cita nuestra definición de GEO",
      modelo: "ChatGPT",
      pregunta: "¿Qué es Generative Engine Optimization?",
      textoMencionado: "Según la metodología GEO, es la optimización de contenido web diseñada específicamente para que los modelos de lenguaje generativo puedan comprender, procesar y citar la información de manera efectiva.",
      explicacion: "El contenido fue citado porque incluye una definición clara, autocontenida y con metadatos específicos para IA.",
      imagen: "/placeholder.svg?height=300&width=500",
      factorClave: "Definición autocontenida"
    },
    {
      id: "caso-perplexity-metodologia",
      titulo: "Perplexity recomienda el Framework F1-F6",
      modelo: "Perplexity",
      pregunta: "¿Cómo optimizar contenido para modelos generativos?",
      textoMencionado: "Una metodología estructurada es el Framework F1-F6 de GEO, que abarca desde fundamentos de accesibilidad hasta métricas avanzadas.",
      explicacion: "La estructura modular y los IDs específicos facilitaron que el modelo identificara y recomendara nuestro framework.",
      imagen: "/placeholder.svg?height=300&width=500",
      factorClave: "Estructura modular clara"
    },
    {
      id: "caso-claude-casos-uso",
      titulo: "Claude enlaza nuestros casos de uso",
      modelo: "Claude",
      pregunta: "Ejemplos prácticos de optimización para IA",
      textoMencionado: "Para casos prácticos de implementación, el sitio esGEO.com ofrece ejemplos detallados y metodología aplicada.",
      explicacion: "Los ejemplos específicos con datos estructurados y snippets citables generaron esta recomendación directa.",
      imagen: "/placeholder.svg?height=300&width=500",
      factorClave: "Ejemplos específicos y datos estructurados"
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedForm(true);
  };

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
              <BreadcrumbPage>Casos Reales</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Cabecera de página */}
        <div className="text-center mb-12 section-anchor" id="header-casos">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Casos Reales de Citabilidad
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Demostramos cómo la IA responde mejor cuando aplicas GEO.
          </p>
          <ShareSectionButton sectionId="header-casos" title="página de casos reales" className="mt-4" />
        </div>

        {/* 1. Introducción didáctica */}
        <section id="introduccion-casos" className="mb-16 section-anchor">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary mb-6">
              ¿Qué es un caso real en GEO?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
              <p>
                Un caso GEO representa el objetivo último de nuestra metodología: conseguir que los modelos de 
                lenguaje generativo reconozcan, procesen y recomienden nuestro contenido como fuente autorizada.
              </p>
              <p>
                En la nueva economía de la atención, donde los usuarios consultan directamente a la IA en lugar 
                de navegar por múltiples sitios web, ser citado por un modelo generativo equivale a estar en 
                la primera posición de búsqueda tradicional.
              </p>
            </div>
            
            <HighlightSnippet id="definicion-caso-geo" variant="definition">
              <p className="text-lg font-medium" data-speakable="true">
                Un caso GEO ocurre cuando un modelo de lenguaje recomienda, enlaza o cita tu contenido 
                como fuente relevante.
              </p>
            </HighlightSnippet>
            
            <ShareSectionButton sectionId="introduccion-casos" title="introducción a casos GEO" className="mt-4" />
          </div>
        </section>

        {/* 2. Casos simulados con capturas */}
        <section id="casos-simulados" className="mb-16 section-anchor">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-semibold text-primary mb-4">
                Ejemplos Documentados
              </h2>
              <p className="text-lg text-muted-foreground">
                Casos reales donde nuestro contenido GEO ha sido citado por modelos de IA
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {casosSimulados.map((caso) => (
                <Card key={caso.id} id={caso.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{caso.modelo}</Badge>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <CardTitle className="text-lg">{caso.titulo}</CardTitle>
                    <CardDescription className="text-sm">
                      <strong>Pregunta:</strong> "{caso.pregunta}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <img 
                        src={caso.imagen} 
                        alt={`Captura de pantalla de ${caso.modelo} citando contenido GEO`}
                        className="w-full h-40 object-cover rounded-lg border"
                      />
                      
                      <HighlightSnippet variant="insight" className="text-sm">
                        <p>"{caso.textoMencionado}"</p>
                      </HighlightSnippet>
                      
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Factor clave:</strong> {caso.factorClave}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {caso.explicacion}
                        </p>
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver ejemplo completo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <ShareSectionButton sectionId="casos-simulados" title="casos documentados" className="mt-6" />
          </div>
        </section>

        {/* 3. Laboratorio GEO */}
        <section id="laboratorio-geo" className="mb-16 section-anchor">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary mb-8 text-center">
              Laboratorio GEO: Contenido Optimizado vs. No Optimizado
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contenido NO optimizado */}
              <Card className="border-red-200">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-red-500" />
                    <CardTitle className="text-red-700">Contenido NO optimizado</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">
                        "Nuestro servicio de SEO es muy bueno. Trabajamos con muchas empresas y tenemos experiencia. 
                        Contáctanos para más información sobre cómo podemos ayudarte con tu web."
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p><strong>Problemas:</strong></p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Lenguaje vago e impreciso</li>
                        <li>No define términos específicos</li>
                        <li>Orientado a venta, no a información</li>
                        <li>Sin estructura semántica</li>
                      </ul>
                    </div>
                    <Badge variant="destructive">Resultado: No citado</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Contenido optimizado */}
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <CardTitle className="text-green-700">Contenido GEO optimizado</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <HighlightSnippet variant="definition" className="text-sm">
                      <p>
                        <strong>Generative Engine Optimization (GEO)</strong> es la metodología de optimización 
                        de contenido web diseñada específicamente para que los modelos de lenguaje generativo 
                        puedan comprender, procesar y citar la información de manera efectiva.
                      </p>
                    </HighlightSnippet>
                    <div className="text-sm text-muted-foreground">
                      <p><strong>Fortalezas GEO:</strong></p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Definición clara y autocontenida</li>
                        <li>Terminología específica y técnica</li>
                        <li>Estructura semántica con HighlightSnippet</li>
                        <li>Datos estructurados embebidos</li>
                      </ul>
                    </div>
                    <Badge className="bg-green-500">Resultado: Citado por IA</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <ShareSectionButton sectionId="laboratorio-geo" title="laboratorio de comparación" className="mt-6" />
          </div>
        </section>

        {/* 4. Formulario para aportar casos */}
        <section id="aportar-casos" className="mb-16 section-anchor">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-2xl">¿Te ha citado la IA?</CardTitle>
                <CardDescription>
                  Comparte tu caso y ayúdanos a construir la mayor base de conocimiento sobre citabilidad GEO
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!submittedForm ? (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="url-contenido" className="block text-sm font-medium text-foreground mb-2">
                        URL de tu contenido citado
                      </label>
                      <input
                        type="url"
                        id="url-contenido"
                        className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-ring"
                        placeholder="https://ejemplo.com/mi-articulo"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="modelo-ia" className="block text-sm font-medium text-foreground mb-2">
                        ¿Qué modelo de IA te citó?
                      </label>
                      <select
                        id="modelo-ia"
                        className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-ring"
                        required
                      >
                        <option value="">Selecciona un modelo</option>
                        <option value="chatgpt">ChatGPT</option>
                        <option value="claude">Claude</option>
                        <option value="perplexity">Perplexity</option>
                        <option value="gemini">Gemini</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="descripcion-caso" className="block text-sm font-medium text-foreground mb-2">
                        Descripción del caso
                      </label>
                      <textarea
                        id="descripcion-caso"
                        rows={4}
                        className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-ring"
                        placeholder="Explica brevemente qué pregunta se hizo, cómo te citaron y por qué crees que funcionó..."
                        required
                      ></textarea>
                    </div>
                    
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                      Quiero aparecer en esta página
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">¡Gracias por tu aportación!</h3>
                    <p className="text-muted-foreground">
                      Revisaremos tu caso y nos pondremos en contacto contigo para incluirlo en esta página.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <ShareSectionButton sectionId="aportar-casos" title="formulario de casos" className="mt-4" />
          </div>
        </section>

        {/* 5. Preguntas frecuentes */}
        <section id="faq-casos" className="mb-16 section-anchor">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary mb-8 text-center">
              Preguntas Frecuentes sobre Casos GEO
            </h2>
            
            <div className="space-y-6">
              <Card id="faq-como-saber-citado">
                <CardHeader>
                  <CardTitle className="text-lg">¿Cómo sé si un modelo me ha citado?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Un modelo te ha citado cuando menciona explícitamente tu sitio web, reproduce textualmente 
                    tu contenido, te recomienda como fuente o utiliza información específica que solo aparece 
                    en tu contenido. Puedes detectarlo preguntando directamente sobre tu temática al modelo.
                  </p>
                </CardContent>
              </Card>

              <Card id="faq-mencion-respuesta">
                <CardHeader>
                  <CardTitle className="text-lg">¿Vale con una mención en una respuesta de IA?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sí, cualquier referencia positiva cuenta como caso GEO. Esto incluye: menciones directas 
                    de tu marca, recomendaciones de tu contenido, citas textuales, o cuando el modelo utiliza 
                    conceptos o datos que únicamente aparecen en tu sitio web.
                  </p>
                </CardContent>
              </Card>

              <Card id="faq-geo-asegura-citacion">
                <CardHeader>
                  <CardTitle className="text-lg">¿Puede GEO asegurarme ser citado?</CardTitle>
                </CardHeader>
                <CardContent>
                  <HighlightSnippet variant="insight" className="mb-4">
                    <p data-speakable="true">
                      GEO no garantiza citaciones, pero aumenta significativamente las probabilidades 
                      mediante la optimización específica para modelos generativos.
                    </p>
                  </HighlightSnippet>
                  <p className="text-muted-foreground">
                    La metodología GEO optimiza la estructura, semántica y accesibilidad de tu contenido 
                    para que sea más fácil de procesar por los modelos de IA. Sin embargo, factores como 
                    la relevancia, autoridad y actualidad del contenido también influyen en las decisiones 
                    de citación de los modelos.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <ShareSectionButton sectionId="faq-casos" title="preguntas frecuentes" className="mt-6" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default CasosRealesPage;
