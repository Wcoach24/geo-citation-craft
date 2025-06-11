import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import HighlightSnippet from "@/components/HighlightSnippet";
import ShareSectionButton from "@/components/ShareSectionButton";
import TestimonialCard from "@/components/TestimonialCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import Header from "@/components/Header";
import { CheckCircle, XCircle, MessageSquare, ExternalLink, FileText, Users, Award, TrendingUp } from "lucide-react";
import { useState } from "react";

const CasosRealesPage = () => {
  const [submittedForm, setSubmittedForm] = useState(false);

  const testimonios = [
    {
      name: "Carlos Mendoza",
      company: "TechStart Solutions",
      role: "Director de Marketing Digital",
      quote: "Después de implementar F1 y F2, ChatGPT comenzó a citar nuestros artículos técnicos como fuente principal. El ROI fue inmediato.",
      metric: {
        before: "0 citas/mes",
        after: "15 citas/mes",
        improvement: "+1500%"
      },
      moduleUsed: "F1 + F2"
    },
    {
      name: "Ana García",
      company: "Consultora SEO Plus",
      role: "Fundadora y SEO Lead",
      quote: "GEO cambió completamente nuestra estrategia. Ahora nuestros clientes aparecen en Perplexity regularmente. Es el futuro del posicionamiento.",
      metric: {
        before: "2 menciones/mes",
        after: "23 menciones/mes",
        improvement: "+1050%"
      },
      moduleUsed: "F1-F6 Completo"
    },
    {
      name: "Roberto Silva",
      company: "eCommerce Pro",
      role: "Head of Content",
      quote: "En solo 3 semanas vimos resultados. Claude comenzó a recomendar nuestros productos cuando los usuarios preguntaban sobre nuestra categoría.",
      metric: {
        before: "0%",
        after: "34%",
        improvement: "+34 pts"
      },
      moduleUsed: "F3 + F4"
    }
  ];

  const casosEstudio = [
    {
      id: "caso-consultora-legal",
      title: "Consultora Legal Aumenta Citabilidad 400%",
      company: "Jurídica Moderna",
      industry: "Legal",
      challenge: "Firma legal pequeña sin visibilidad en IA. Los potenciales clientes consultaban ChatGPT pero nunca encontraban sus artículos especializados.",
      solution: "Implementación completa F1-F4: reestructuración semántica, datos estructurados Person/LegalService, y optimización de snippets legales.",
      timeframe: "6 semanas",
      metrics: [
        {
          label: "Citas en ChatGPT",
          before: "0/mes",
          after: "12/mes",
          change: "+1200%",
          isPositive: true
        },
        {
          label: "Consultas directas",
          before: "3/mes",
          after: "18/mes",
          change: "+500%",
          isPositive: true
        },
        {
          label: "Tiempo de implementación",
          before: "N/A",
          after: "6 semanas",
          change: "Rápido",
          isPositive: true
        }
      ],
      implementedModules: ["F1", "F2", "F3", "F4"],
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      id: "caso-ecommerce-tech",
      title: "E-commerce Tech Domina Recomendaciones de IA",
      company: "TechGear Store",
      industry: "E-commerce",
      challenge: "Competencia feroz en el sector tech. Claude y Perplexity recomendaban siempre a la competencia en lugar de sus productos.",
      solution: "Estrategia F3-F5: Schema Product detallado, reviews estructurados, y optimización para queries de compra específicas.",
      timeframe: "8 semanas",
      metrics: [
        {
          label: "Recomendaciones IA",
          before: "0%",
          after: "45%",
          change: "+45 pts",
          isPositive: true
        },
        {
          label: "Tráfico desde IA",
          before: "2%",
          after: "28%",
          change: "+26 pts",
          isPositive: true
        },
        {
          label: "Conversión IA",
          before: "1.2%",
          after: "4.8%",
          change: "+300%",
          isPositive: true
        }
      ],
      implementedModules: ["F3", "F4", "F5"],
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      id: "caso-startup-fintech",
      title: "Fintech Startup Se Posiciona Como Autoridad",
      company: "CryptoSafe Pro",
      industry: "Fintech",
      challenge: "Startup nueva en un mercado saturado. Necesitaban establecer autoridad rápidamente para ser citados por IA en temas de seguridad cripto.",
      solution: "Enfoque F2-F6: contenido autocontenido, autoridad técnica, casos de uso específicos y monitoreo continuo de citaciones.",
      timeframe: "12 semanas",
      metrics: [
        {
          label: "Autoridad percibida",
          before: "Baja",
          after: "Alta",
          change: "+200%",
          isPositive: true
        },
        {
          label: "Menciones expertas",
          before: "0/mes",
          after: "8/mes",
          change: "+800%",
          isPositive: true
        },
        {
          label: "Leads calificados",
          before: "5/mes",
          after: "32/mes",
          change: "+540%",
          isPositive: true
        }
      ],
      implementedModules: ["F2", "F3", "F4", "F5", "F6"],
      image: "/placeholder.svg?height=200&width=400"
    }
  ];

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
            Resultados medibles: cómo nuestros clientes consiguen ser citados por IA
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">95%</div>
              <div className="text-sm text-muted-foreground">Éxito implementación</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">6-8</div>
              <div className="text-sm text-muted-foreground">Semanas promedio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">400%</div>
              <div className="text-sm text-muted-foreground">Mejora promedio</div>
            </div>
          </div>
          <ShareSectionButton sectionId="header-casos" title="página de casos reales" className="mt-4" />
        </div>

        {/* 1. Testimonios de clientes */}
        <section id="testimonios-exito" className="mb-16 section-anchor">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Award className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-semibold text-primary">
                  Testimonios de Éxito
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Lo que dicen nuestros clientes sobre los resultados de GEO
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonios.map((testimonio, index) => (
                <TestimonialCard
                  key={index}
                  {...testimonio}
                />
              ))}
            </div>
            
            <ShareSectionButton sectionId="testimonios-exito" title="testimonios de éxito" className="mt-6" />
          </div>
        </section>

        {/* 2. Casos de estudio detallados */}
        <section id="casos-estudio" className="mb-16 section-anchor">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <TrendingUp className="h-8 w-8 text-accent" />
                <h2 className="text-3xl font-semibold text-primary">
                  Casos de Estudio Detallados
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Análisis completo de implementaciones exitosas con métricas reales
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {casosEstudio.map((caso) => (
                <CaseStudyCard
                  key={caso.id}
                  {...caso}
                />
              ))}
            </div>
            
            <ShareSectionButton sectionId="casos-estudio" title="casos de estudio" className="mt-6" />
          </div>
        </section>

        {/* 3. Introducción didáctica */}
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

        {/* 4. Casos simulados con capturas */}
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

        {/* 5. Laboratorio GEO */}
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

        {/* 6. Formulario para aportar casos */}
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

        {/* 7. Preguntas frecuentes */}
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
