import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, BookOpen, FileText, Gauge, ArrowRight } from "lucide-react";

/**
 * Prueba social.
 *
 * Aquí había tres "testimonios" entrecomillados y firmados por "Equipo esGEO" y
 * "Filosofía esGEO" — citas nuestras con formato de reseña de cliente. Y estadísticas
 * que no podíamos respaldar.
 *
 * Se han sustituido por lo único que es verificable: nos pasamos nuestro propio auditor,
 * suspendimos, lo arreglamos y publicamos el antes y el después. Cualquiera puede
 * comprobarlo con un curl. Admitir que fallamos vende más que inventarnos una reseña.
 */
const SocialProofSection = () => {
  const stats = [
    { icon: Gauge, number: "92", label: "Nota de esgeo.ai", sub: "En nuestro propio auditor, auditado el 12 de julio de 2026. Era 35." },
    { icon: Bot, number: "5", label: "Modelos cubiertos", sub: "ChatGPT · Claude · Perplexity · Gemini · Copilot" },
    { icon: BookOpen, number: "5", label: "Módulos", sub: "F1 a F5, más un F0 gratuito" },
    { icon: FileText, number: "5", label: "Guías PDF", sub: "Descargables, tuyas para siempre" },
  ];

  return (
    <section className="py-20 bg-muted/30" data-speakable="true">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-background card-elevated">
              <stat.icon className="h-6 w-6 text-accent mx-auto mb-3" />
              <div className="text-4xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="font-semibold text-sm text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground leading-snug">{stat.sub}</div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-4">
            La prueba: nuestra web nació invisible
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            No tenemos testimonios de clientes que enseñarte. Tenemos algo más incómodo y más útil:
            nuestro propio fracaso, medido y comprobable por ti.
          </p>

          <Card className="border-none card-elevated bg-background">
            <CardContent className="p-6 md:p-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                esgeo.ai estuvo <strong className="text-foreground">invisible para las IAs desde el
                día en que se publicó</strong>. No fue un despiste puntual: la web está hecha con
                React y, como cualquier SPA, servía un HTML vacío. Escribimos artículos, publicamos
                un glosario, lanzamos un curso — y durante todo ese tiempo ningún modelo pudo leer
                una sola palabra. El HTML que salía de nuestro servidor tenía{" "}
                <strong className="text-foreground">237 caracteres</strong> de texto.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                No lo supimos hasta que construimos el auditor y nos lo pasamos a nosotros mismos.
                Sacamos un <strong className="text-foreground">35 sobre 100</strong>. La web que
                vende un curso sobre cómo ser citado por las IAs era, para las IAs, una página en
                blanco. Aplicamos el método F1–F5 sobre nuestro propio dominio y subimos a{" "}
                <strong className="text-foreground">92</strong> (auditado el 12 de julio de 2026), con 8.700 caracteres legibles. Ese
                es el caso de estudio del curso: no uno inventado, el nuestro.
              </p>

              <dl className="grid grid-cols-3 gap-3 text-center mb-6">
                <div className="rounded-xl border border-border p-4">
                  <dt className="text-xs text-muted-foreground mb-1">Antes</dt>
                  <dd className="text-2xl font-bold text-foreground">35</dd>
                  <dd className="text-xs text-muted-foreground">MUDA</dd>
                </div>
                <div className="rounded-xl border border-border p-4 flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-accent" />
                </div>
                <div className="rounded-xl border border-accent/40 bg-accent/5 p-4">
                  <dt className="text-xs text-muted-foreground mb-1">Después</dt>
                  <dd className="text-2xl font-bold text-accent">92</dd>
                  <dd className="text-xs text-muted-foreground">BILINGÜE</dd>
                </div>
              </dl>

              <p className="text-sm text-muted-foreground">
                No hace falta que nos creas:{" "}
                <a href="#habla-widget" className="text-accent font-medium underline underline-offset-4">
                  audita esgeo.ai con el formulario de arriba
                </a>{" "}
                y después audita la tuya. Y si prefieres el detalle técnico, está en{" "}
                <Link to="/metodologia" className="text-accent font-medium underline underline-offset-4">
                  la metodología
                </Link>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
