import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

/**
 * El panel público.
 *
 * Podríamos poner la nota gigante y callarnos. Sería una trampa:
 * un auditor cuyo autor saca la nota máxima huele a amañado, aunque no lo esté. Así que
 * publicamos el panel entero, con el rubric abierto y con el dato que no nos favorece:
 * Wikipedia saca 67 y la citan todos los modelos cada día.
 *
 * Ese es el argumento honesto Y el argumento comercial. La nota no compra autoridad.
 * Elimina el motivo técnico por el que hoy no te citan. Es una condición necesaria,
 * no suficiente — y decirlo es exactamente lo que nos hace creíbles.
 */

interface Row {
  site: string;
  score: number;
  note: string;
  self?: boolean;
}

const PANEL: Row[] = [
  { site: "esgeo.ai", score: 92, note: "Nuestra web, auditada el 12 de julio de 2026. Empezó en 35.", self: true },
  { site: "holded.com", score: 82, note: "Impecable de estructura. Su primer bloque no dice qué es ni para quién." },
  { site: "factorial.es", score: 81, note: "Casi la mitad de sus imágenes no tiene alt." },
  { site: "stripe.com", score: 74, note: "Solo el 13% de sus imágenes tiene alt." },
  { site: "es.wikipedia.org", score: 67, note: "Sin JSON-LD, sin llms.txt, sin directivas para bots IA. Y la citan todos los días." },
  { site: "bbc.com", score: 64, note: "Una portada de periódico no responde qué/para quién/cuánto. Ni tiene por qué." },
  { site: "vercel.com", score: 58, note: "Suspende el gate de accesibilidad: contenido incompleto en el HTML inicial." },
];

const bar = (n: number) => (
  <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
    <div
      className={`h-full rounded-full ${n >= 80 ? "bg-accent" : n >= 60 ? "bg-amber-500" : "bg-destructive"}`}
      style={{ width: `${n}%` }}
    />
  </div>
);

export default function PanelAuditoria() {
  return (
    <section className="py-20 bg-background border-y border-border" data-speakable="true">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-4">
          Auditamos a Wikipedia, la BBC y Stripe con el mismo rubric
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          El rubric es público y va versionado. Estas son las notas auditadas el 12 de julio de 2026,
          incluida la nuestra.
        </p>

        <Card className="border-none card-elevated">
          <CardContent className="p-6 md:p-8">
            <ul className="space-y-5">
              {PANEL.map((r) => (
                <li key={r.site}>
                  <div className="flex items-baseline justify-between gap-4 mb-1.5">
                    <span className={`font-mono text-sm ${r.self ? "text-accent font-semibold" : "text-foreground"}`}>
                      {r.site}
                    </span>
                    <span className="text-2xl font-bold text-foreground tabular-nums">{r.score}</span>
                  </div>
                  {bar(r.score)}
                  <p className="text-sm text-muted-foreground mt-1.5">{r.note}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="mt-10 rounded-2xl border border-accent/30 bg-accent/5 p-6 md:p-8">
          <h3 className="font-bold text-foreground mb-3">
            Un 92 no nos hace mejores que Wikipedia
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Wikipedia saca un 67 en nuestro auditor y los modelos la citan cada día. Stripe saca un
            74 y factura miles de millones. La nota <strong>no mide autoridad</strong>: la autoridad
            no se marca, se gana. Y sacar un 92 en una web de 28 páginas recién construida es mucho
            más fácil que sacarlo en un sitio con veinte años de historia encima.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Lo que la nota mide es si una máquina <strong>puede</strong> leerte y extraer algo
            citable. Es una condición necesaria, no suficiente. Un 35 significa que ni siquiera
            estás en la conversación. Un 90 significa que ya no hay excusa técnica: a partir de
            ahí, el trabajo es tener algo que merezca la pena citar.
          </p>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          <Link to="/metodologia" className="text-accent font-medium underline underline-offset-4">
            Cómo puntúa el rubric y qué mide el framework
          </Link>
        </p>
      </div>
    </section>
  );
}
