
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, CheckCircle, Download, ArrowRight, Bot } from "lucide-react";

const CoachSection = () => {
  const steps = [
    {
      step: 1,
      title: "Análisis inicial",
      description: "El Coach evalúa tu contenido actual y identifica oportunidades GEO",
      icon: <Bot className="h-5 w-5" />
    },
    {
      step: 2,
      title: "Recomendaciones personalizadas",
      description: "Recibe sugerencias específicas basadas en tu sector y objetivos",
      icon: <MessageCircle className="h-5 w-5" />
    },
    {
      step: 3,
      title: "Implementación guiada",
      description: "Sigue instrucciones paso a paso para optimizar tu contenido",
      icon: <CheckCircle className="h-5 w-5" />
    },
    {
      step: 4,
      title: "Informe descargable",
      description: "Obtén un documento PDF con todas las mejoras implementadas",
      icon: <Download className="h-5 w-5" />
    }
  ];

  return (
    <section id="coach" className="section-anchor py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-accent border-accent">
              Asistente IA
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Coach GEO
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tu asistente conversacional especializado en optimización para IA generativa. 
              Recibe análisis personalizados y recomendaciones específicas para tu contenido.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Process */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-8">
                ¿Cómo funciona el Coach GEO?
              </h3>
              
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={step.step} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-accent">
                          {step.icon}
                        </div>
                        <h4 className="text-lg font-semibold text-primary">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                <h4 className="font-semibold text-primary mb-3">🎯 ¿Qué obtienes con Coach GEO?</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Análisis automático de tu estructura de contenido
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Sugerencias de mejora específicas por módulo
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Templates de snippet y formatos citeables
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Informe PDF descargable con plan de acción
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Interface Preview */}
            <div className="lg:order-2">
              <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-muted/30">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bot className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">
                    Interfaz Coach GEO
                  </CardTitle>
                  <CardDescription>
                    Conversación inteligente para optimización personalizada
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Mock conversation */}
                  <div className="space-y-4 bg-background rounded-lg p-4 border">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                      <div className="bg-muted p-3 rounded-lg flex-1">
                        <p className="text-sm">
                          ¡Hola! Soy tu Coach GEO. Analicemos tu web. ¿Podrías compartir la URL de la página que quieres optimizar?
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 justify-end">
                      <div className="bg-accent p-3 rounded-lg max-w-xs text-primary">
                        <p className="text-sm">
                          Hola, quiero optimizar mi blog sobre marketing digital
                        </p>
                      </div>
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground text-xs font-bold">TÚ</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                      <div className="bg-muted p-3 rounded-lg flex-1">
                        <p className="text-sm">
                          Perfecto. He analizado tu estructura actual. Veo oportunidades en:
                          <br />• Fragmentación de contenido
                          <br />• Snippets destacados
                          <br />• Datos estructurados
                          <br /><br />¿Empezamos con F2 - Estructura Semántica?
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <Button className="flex-1 bg-accent hover:bg-accent/90 text-primary">
                      Lanzar Coach
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Ver Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4">
                ¿Listo para optimizar tu contenido con IA?
              </h3>
              <p className="text-muted-foreground mb-6">
                El Coach GEO está disponible 24/7 para analizar tu web y generar recomendaciones personalizadas. 
                Comienza ahora y obtén tu primer informe GEO en menos de 10 minutos.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8">
                Lanzar Coach GEO ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachSection;
