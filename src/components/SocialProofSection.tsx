
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, TrendingUp, Bot, Shield } from "lucide-react";

const SocialProofSection = () => {
  const stats = [
    {
      icon: Users,
      number: "1,247",
      label: "Optimizadores GEO",
      description: "Ya confían en nuestra metodología"
    },
    {
      icon: Bot,
      number: "127",
      label: "LLMs activos",
      description: "Citan contenido optimizado con GEO"
    },
    {
      icon: TrendingUp,
      number: "340%",
      label: "Mejora promedio",
      description: "En citabilidad por IA"
    },
    {
      icon: Star,
      number: "4.9",
      label: "Puntuación",
      description: "De satisfacción del curso"
    }
  ];

  const testimonials = [
    {
      name: "María González",
      role: "Content Manager",
      company: "TechStartup",
      quote: "Con GEO aumentamos un 280% las menciones en ChatGPT. El framework F1-F6 es revolucionario.",
      rating: 5,
      result: "+280% menciones IA"
    },
    {
      name: "Carlos Ruiz",
      role: "SEO Consultant",
      company: "Digital Agency",
      quote: "Mis clientes ahora aparecen como fuentes autorizadas en Perplexity. GEO es el futuro del SEO.",
      rating: 5,
      result: "5 clientes citados"
    },
    {
      name: "Ana Martín",
      role: "Marketing Director",
      company: "SaaS Company",
      quote: "El módulo F3 transformó nuestra estrategia. Claude ahora recomienda nuestro producto activamente.",
      rating: 5,
      result: "+150% conversiones"
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
            Únete a la Revolución GEO
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Miles de profesionales ya optimizan para IA y obtienen resultados medibles
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
