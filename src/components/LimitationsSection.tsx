import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Shield } from "lucide-react";

const LimitationsSection = () => {
  const cantDo = [
    { title: "Citaciones automáticas", text: "No podemos garantizar que un LLM específico cite tu contenido en una fecha determinada." },
    { title: "Control sobre algoritmos", text: "Los modelos de IA cambian constantemente sus criterios de selección de fuentes." },
    { title: "Resultados inmediatos", text: "La optimización para LLMs requiere tiempo y puede tardar semanas o meses." },
  ];

  const canDo = [
    { title: "Optimizar estructura", text: "Mejorar la legibilidad y comprensión de tu contenido para LLMs." },
    { title: "Aumentar probabilidades", text: "Aplicar mejores prácticas basadas en el comportamiento observado de LLMs." },
    { title: "Enseñar metodología", text: "Un framework estructurado y reproducible (F0-F6)." },
  ];

  return (
    <section id="limitaciones" className="py-20 bg-muted/20 section-anchor">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-orange-600 border-orange-500/30">
              <Shield className="mr-2 h-4 w-4" />
              Transparencia Total
            </Badge>
            <h2 className="text-3xl font-bold text-primary mb-3">
              Lo que Podemos y lo que No
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Somos honestos sobre qué funciona y qué factores están fuera de nuestro control.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Can't */}
            <div className="rounded-2xl border border-orange-200 bg-orange-50/50 p-6">
              <h3 className="font-bold text-orange-700 flex items-center gap-2 mb-4">
                <AlertTriangle className="h-5 w-5" />
                Qué NO podemos garantizar
              </h3>
              <div className="space-y-4">
                {cantDo.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Can */}
            <div className="rounded-2xl border border-green-200 bg-green-50/50 p-6">
              <h3 className="font-bold text-green-700 flex items-center gap-2 mb-4">
                <CheckCircle className="h-5 w-5" />
                Qué SÍ podemos hacer
              </h3>
              <div className="space-y-4">
                {canDo.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Realistic expectations */}
          <div className="grid grid-cols-3 gap-4 mt-8 text-center">
            <div className="p-4 rounded-xl bg-background card-elevated">
              <div className="text-2xl font-bold text-accent mb-1">2-6 meses</div>
              <div className="text-xs text-muted-foreground">Primeros resultados</div>
            </div>
            <div className="p-4 rounded-xl bg-background card-elevated">
              <div className="text-2xl font-bold text-accent mb-1">Varía</div>
              <div className="text-xs text-muted-foreground">Según nicho y competencia</div>
            </div>
            <div className="p-4 rounded-xl bg-background card-elevated">
              <div className="text-2xl font-bold text-accent mb-1">+Calidad</div>
              <div className="text-xs text-muted-foreground">Mejora, no reemplaza</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitationsSection;
