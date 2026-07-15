import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Shield, Zap, CheckCircle, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPLETE_COURSE } from "@/data/modules";

const HeroSection = () => {
  return (
    <section id="inicio" className="section-anchor hero-gradient py-20 lg:py-32 text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-accent/15 text-accent border-accent/30 hover:bg-accent/20 transition-colors duration-200 backdrop-blur-sm animate-fade-up cursor-default">
            <Sparkles className="mr-2 h-4 w-4" />
            Primera metodología GEO en español
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] tracking-tight animate-fade-up-delay-1">
            Haz que la IA{" "}
            <span className="text-accent relative">
              Recomiende
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/40" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C40 2 80 1 100 3C120 5 160 6 199 2.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </span>{" "}
            Tu Negocio
          </h1>
          
          {/*
            Bloque de respuesta directa (answerability). Es el primer párrafo que ve una
            máquina, y el que un motor generativo puede extraer y citar tal cual.

            Tiene que responder tres cosas sin rodeos: QUÉ es, PARA QUIÉN es y CUÁNTO cuesta
            — más cómo empezar sin pagar. Antes solo decía el precio, y el auditor lo
            marcaba (answerability 1 de 10). No es relleno de marca: es la unidad citable.
          */}
          <p
            className="snippet-block text-lg md:text-xl text-primary-foreground/75 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-up-delay-2"
            data-speakable="true"
          >
            <strong>esGEO es la plataforma en español de Generative Engine Optimization (GEO)</strong>:
            la disciplina que estructura una web para que ChatGPT, Perplexity, Claude y Gemini la
            citen como fuente. <strong>Precio del curso: 47 € de pago único</strong>, sin
            suscripción — 5 módulos y 142 páginas en PDF, tuyas desde el momento de la compra.
            Antes de pagar puedes auditar tu web <strong>gratis</strong>, aquí mismo, y leer el
            módulo F0 entero. Es para fundadores, responsables de marketing y SEO que ya tienen web
            y no aparecen en las respuestas de la IA. Actualizado en julio de 2026.
          </p>

          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-up-delay-3">
            <Button size="lg" className="btn-glow bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white border border-white/30 font-bold px-10 py-7 text-lg rounded-xl cursor-pointer transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white" asChild>
              <Link to="/curso/f0">
                Empezar Gratis con F0
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            {/* F2-8: cta-pulse en el CTA de pago (antes lo tenía el gratuito) */}
            <Button size="lg" className="btn-glow cta-pulse bg-accent hover:bg-accent/90 text-white font-bold px-10 py-7 text-lg rounded-xl cursor-pointer transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary" asChild>
              <Link to="/curso#comprar">
                <Zap className="mr-2 h-5 w-5" />
                Curso Completo — €{COMPLETE_COURSE.price}
              </Link>
            </Button>
          </div>

          {/* Value props */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-primary-foreground/60 animate-fade-up-delay-3">
            <span className="flex items-center gap-1.5 cursor-default">
              <CheckCircle className="h-4 w-4 text-accent" />
              5 módulos + guías PDF
            </span>
            <span className="flex items-center gap-1.5 cursor-default">
              <Shield className="h-4 w-4 text-accent" />
              Pago único, sin suscripción
            </span>
            <span className="flex items-center gap-1.5 cursor-default">
              <Bot className="h-4 w-4 text-accent" />
              Optimizado para 5 LLMs
            </span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default HeroSection;