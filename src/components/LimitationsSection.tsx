import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Info, Shield, CheckCircle } from "lucide-react";
import HighlightSnippet from "./HighlightSnippet";

const LimitationsSection = () => {
  return (
    <section id="limitaciones" className="py-20 bg-background section-anchor">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-orange-600 border-orange-600">
              <Shield className="mr-2 h-4 w-4" />
              Transparencia Total
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Limitaciones y Realidades del GEO
            </h2>
            <p className="text-xl text-muted-foreground">
              Somos honestos sobre qué funciona, qué no, y qué factores están fuera de nuestro control
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700">
                  <AlertTriangle className="h-5 w-5" />
                  Qué NO podemos garantizar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Citaciones automáticas:</strong> No podemos garantizar que un LLM específico cite tu contenido en una fecha determinada.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Control sobre algoritmos:</strong> Los modelos de IA cambian constantemente sus criterios de selección de fuentes.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Resultados inmediatos:</strong> La optimización para LLMs requiere tiempo y puede tardar semanas o meses en mostrar resultados.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Fórmula mágica:</strong> GEO no reemplaza la calidad del contenido, la autoridad del dominio, ni la relevancia temática.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <CheckCircle className="h-5 w-5" />
                  Qué SÍ podemos hacer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Optimizar estructura:</strong> Mejorar la legibilidad y comprensión de tu contenido para LLMs.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Aumentar probabilidades:</strong> Aplicar mejores prácticas basadas en el comportamiento observado de LLMs.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Enseñar metodología:</strong> Compartir un framework estructurado y reproducible (F0-F6).
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Medir progreso:</strong> Proveer herramientas para monitorear la mejora en la "citabilidad" de tu contenido.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <HighlightSnippet id="metodologia-cientifica" variant="insight" className="mb-8">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-600" />
              Nuestra Metodología Científica
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong>Observación:</strong> Analizamos cómo los LLMs seleccionan y citan fuentes en diferentes contextos.
              </p>
              <p>
                <strong>Hipótesis:</strong> Creemos que ciertos patrones de estructura y contenido aumentan la probabilidad de citación.
              </p>
              <p>
                <strong>Experimentación:</strong> Probamos estas hipótesis en nuestro propio contenido y documentamos los resultados.
              </p>
              <p>
                <strong>Documentación:</strong> Compartimos tanto los éxitos como los fallos, porque la ciencia requiere transparencia.
              </p>
            </div>
          </HighlightSnippet>

          <HighlightSnippet id="expectativas-realistas" variant="stat">
            <h3 className="text-lg font-semibold mb-3">Expectativas Realistas</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-accent mb-1">2-6 meses</div>
                <div className="text-xs text-muted-foreground">Tiempo típico para ver primeros resultados</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent mb-1">Varía</div>
                <div className="text-xs text-muted-foreground">Los resultados dependen del nicho y competencia</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent mb-1">+Calidad</div>
                <div className="text-xs text-muted-foreground">GEO mejora contenido existente, no lo reemplaza</div>
              </div>
            </div>
          </HighlightSnippet>
        </div>
      </div>
    </section>
  );
};

export default LimitationsSection;