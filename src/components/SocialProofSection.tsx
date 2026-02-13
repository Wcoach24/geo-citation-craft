import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, BookOpen, FileText, Target, Quote } from "lucide-react";

const SocialProofSection = () => {
  const stats = [
    { icon: Bot, number: "5", label: "LLMs cubiertos", sub: "ChatGPT · Claude · Perplexity · Gemini · Copilot" },
    { icon: BookOpen, number: "6", label: "Módulos progresivos", sub: "De fundamentos a métricas avanzadas" },
    { icon: FileText, number: "5", label: "Guías PDF", sub: "15-25 páginas, descargables" },
    { icon: Target, number: "100%", label: "Práctico", sub: "Checklists, plantillas y prompts" },
  ];

  const testimonials = [
    {
      quote: "Aplicamos la metodología GEO y ChatGPT empezó a citarnos como referencia en español para optimización generativa.",
      author: "Equipo esGEO",
      role: "Caso propio verificable",
    },
    {
      quote: "El framework F1-F6 es increíblemente práctico. Cada módulo tiene pasos concretos que puedes implementar en horas.",
      author: "Metodología documentada",
      role: "6 módulos + checklists",
    },
    {
      quote: "Transparencia total: documentan tanto lo que funciona como lo que no. Sin promesas vacías, solo mejores prácticas probadas.",
      author: "Filosofía esGEO",
      role: "Sin humo",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-background card-elevated">
              <stat.icon className="h-6 w-6 text-accent mx-auto mb-3" />
              <div className="text-4xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="font-semibold text-sm text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground leading-snug">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-primary text-center mb-8">
            ¿Por qué confiar en esGEO?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <Card key={index} className="border-none card-elevated bg-background">
                <CardContent className="p-6">
                  <Quote className="h-5 w-5 text-accent/40 mb-3" />
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">
                    "{t.quote}"
                  </p>
                  <div className="border-t pt-3">
                    <p className="font-semibold text-sm text-primary">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
