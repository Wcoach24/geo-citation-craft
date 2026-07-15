import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Users, Package, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPLETE_COURSE } from "@/data/modules";

const HeroSection = () => {
  return (
    <section id="inicio" className="section-anchor hero-gradient py-20 lg:py-32 text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-accent-light/15 text-accent-light border-accent-light/30 hover:bg-accent-light/20 transition-colors duration-200 backdrop-blur-sm animate-fade-up cursor-default">
            <Sparkles className="mr-2 h-4 w-4" />
            Primera metodología GEO en español
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] tracking-tight animate-fade-up-delay-1">
            Haz que la IA{" "}
            <span className="text-accent-light relative">
              Recomiende
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent-light/40" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C40 2 80 1 100 3C120 5 160 6 199 2.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </span>{" "}
            Tu Negocio
          </h1>

          {/*
            Bloque de respuesta directa (answerability): <60 palabras, precio incluido.
            Es el primer párrafo que ve una máquina y la unidad citable del hero.
          */}
          <p
            className="snippet-block text-lg md:text-xl text-primary-foreground/85 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-up-delay-2 text-left md:text-center"
            data-speakable="true"
          >
            Cuando alguien pregunta a ChatGPT por lo que tú vendes, cita a tres webs. Hoy ninguna
            es la tuya — y probablemente ni siquiera puede leerte. <strong>esGEO te enseña a
            arreglarlo con el método F1-F5: 5 módulos en PDF, 47&nbsp;€ de pago único, sin
            suscripción.</strong>
          </p>

          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 animate-fade-up-delay-3">
            <Button size="lg" className="btn-glow bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white border border-white/30 font-bold px-10 py-7 text-lg rounded-xl cursor-pointer transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white" asChild>
              <Link to="/curso/f0">
                Empezar Gratis con F0
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            {/* F2-8: cta-pulse en el CTA de pago (antes lo tenía el gratuito) */}
            <Button size="lg" className="btn-glow cta-pulse bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 py-7 text-lg rounded-xl cursor-pointer transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary" asChild>
              <Link to="/curso#comprar">
                <Zap className="mr-2 h-5 w-5" />
                Curso Completo — €{COMPLETE_COURSE.price}
              </Link>
            </Button>
          </div>

          {/* Tres respuestas rápidas: para quién / qué obtienes / cómo empezar gratis */}
          <ul className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left text-sm animate-fade-up-delay-3 list-none">
            <li className="flex items-start gap-2.5">
              <Users className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
              <span className="text-primary-foreground/75">
                <strong className="text-primary-foreground block">Para quién</strong>
                Fundadores, marketing y SEO con web propia que no aparece en las respuestas de la IA.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Package className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
              <span className="text-primary-foreground/75">
                <strong className="text-primary-foreground block">Qué obtienes</strong>
                El método F1-F5 completo: 5 módulos y 142 páginas en PDF, tuyos al instante.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Gift className="h-5 w-5 text-accent-light flex-shrink-0 mt-0.5" />
              <span className="text-primary-foreground/75">
                <strong className="text-primary-foreground block">Empieza gratis</strong>
                Lee el módulo F0 entero y audita tu web con nuestro auditor, sin registrarte.
              </span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default HeroSection;
