import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, BookOpen, FileText, Target } from "lucide-react";

const SocialProofSection = () => {
  const stats = [
    {
      icon: Bot,
      number: "5",
      label: "LLMs cubiertos",
      description: "ChatGPT, Claude, Perplexity, Gemini, Copilot"
    },
    {
      icon: BookOpen,
      number: "6",
      label: "Módulos progresivos",
      description: "De fundamentos a métricas avanzadas"
    },
    {
      icon: FileText,
      number: "5",
      label: "Guías PDF",
      description: "15-25 páginas cada una, descargables"
    },
    {
      icon: Target,
      number: "100%",
      label: "Práctico",
      description: "Checklists, plantillas y prompts incluidos"
    }
  ];

  const proofPoints = [
    {
      title: "Nuestro propio caso",
      text: "Aplicamos la metodología GEO en esgeo.ai y conseguimos que ChatGPT nos cite como referencia para contenido GEO en español.",
      tag: "Verificable en ChatGPT"
    },
    {
      title: "Metodología documentada",
      text: "Framework completo F0-F6 con pasos concretos, no teoría abstracta. Cada módulo incluye checklist de implementación.",
      tag: "6 módulos + checklists"
    },
    {
      title: "Transparencia total",
      text: "Documentamos tanto lo que funciona como lo que no. Sin promesas de resultados garantizados — solo mejores prácticas probadas.",
      tag: "Sin humo"
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            ¿Qué incluye el Curso GEO?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para optimizar tu contenido para IA generativa
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-none shadow-sm">
              <CardContent className="p-5">
                <stat.icon className="h-7 w-7 text-accent mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="font-semibold text-sm mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Proof Points */}
        <div className="grid md:grid-cols-3 gap-6">
          {proofPoints.map((point, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3 text-xs">{point.tag}</Badge>
                <h3 className="font-semibold text-primary mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
