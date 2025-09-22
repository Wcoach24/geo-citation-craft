
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, TrendingUp, Bot, Shield } from "lucide-react";

const SocialProofSection = () => {
  const stats = [
    {
      icon: Users,
      number: "F0-F6",
      label: "Framework completo",
      description: "Metodología estructurada y documentada"
    },
    {
      icon: Bot,
      number: "5",
      label: "LLMs principales",
      description: "ChatGPT, Claude, Perplexity, Gemini, Copilot"
    },
    {
      icon: TrendingUp,
      number: "100%",
      label: "Transparente",
      description: "Metodología y limitaciones documentadas"
    },
    {
      icon: Star,
      number: "2024",
      label: "Pioneros",
      description: "Primera metodología GEO en español"
    }
  ];

  const testimonials = [
    {
      name: "Caso: esGEO",
      role: "Verificado",
      company: "Nuestro propio sitio",
      quote: "Aplicamos nuestra metodología y conseguimos que ChatGPT nos cite como referencia en GEO para contenido en español.",
      rating: 4,
      result: "Verificado en ChatGPT*"
    },
    {
      name: "Metodología",
      role: "Estructurada",
      company: "F0 a F6",
      quote: "Framework completo desde fundamentos técnicos hasta medición de resultados, diseñado específicamente para LLMs.",
      rating: 4,
      result: "6 módulos completos"
    },
    {
      name: "Transparencia",
      role: "Limitaciones",
      company: "Documentadas",
      quote: "Explicamos qué funciona, qué no, y qué factores están fuera de nuestro control en la optimización para IA.",
      rating: 4,
      result: "100% transparente"
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Indicators */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Badge variant="outline" className="text-accent border-accent">
              <Shield className="mr-2 h-4 w-4" />
              Metodología Validada
            </Badge>
            <Badge variant="outline" className="text-green-600 border-green-600">
              <TrendingUp className="mr-2 h-4 w-4" />
              Resultados Comprobados
            </Badge>
          </div>
          
          <h2 className="text-3xl font-bold text-primary mb-4">
            Primera Metodología GEO en Español
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Framework completo y transparente para optimización de contenido para IA
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="font-semibold text-sm mb-2">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex justify-between items-end">
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} en {testimonial.company}
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.result}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
