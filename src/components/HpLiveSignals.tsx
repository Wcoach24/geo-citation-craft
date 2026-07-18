import { useEffect, useState } from "react";

/**
 * HpLiveSignals — panel de demo en vivo para /hiperpersonalizacion.
 *
 * Lee las señales que el motor (public/hyperpersonal.js) va calculando en tu
 * navegador y las pinta cada medio segundo. Es el "dogfooding" de la sección:
 * la propia web demuestra la metodología sobre ti mientras la lees.
 *
 * Client-only: en SSR no se ejecuta el useEffect, así que el prerender sirve el
 * estado por defecto ("Activa el panel…") y el crawler nunca ve datos de sesión.
 * Nada sale de tu navegador.
 */

type Signals = {
  seconds: number;
  scrollMax: number;
  mouseDist: number;
  sectionsSeen?: Set<string>;
  visits: number;
  refSource: string;
  hourBucket: string;
  section: string;
  favSection: string | null;
  company: string | null;
  score: number;
};

const FIELD = (label: string, value: string) => ({ label, value });

const FREE_MAIL = [
  "gmail", "googlemail", "hotmail", "outlook", "yahoo", "icloud", "proton",
  "protonmail", "live", "msn", "aol", "gmx", "me", "mail",
];

function deduceCompany(email: string): string {
  const m = email.trim().match(/^[^@\s]+@([^@\s]+\.[^@\s]{2,})$/);
  if (!m) {
    return "Escribe un email corporativo (o uno de Gmail) y verás cómo el motor deduciría el copy. No se guarda ni se envía.";
  }
  const domain = m[1].toLowerCase();
  const name = domain.split(".")[0];
  if (FREE_MAIL.includes(name)) {
    return "Detectado: correo personal → el copy pivotaría a tu marca personal.";
  }
  const Cap = name.charAt(0).toUpperCase() + name.slice(1);
  return `Detectado: ${domain} → el titular pasaría a "¿Lo aplicamos en ${Cap}?"`;
}

export default function HpLiveSignals() {
  const [on, setOn] = useState(false);
  const [sig, setSig] = useState<Signals | null>(null);
  const [companyOut, setCompanyOut] = useState<string>(() => deduceCompany(""));

  useEffect(() => {
    if (!on) return;
    const read = () => {
      const s = (window as unknown as { HyperPersonal?: { signals: Signals } })
        .HyperPersonal?.signals;
      if (s) setSig({ ...s });
    };
    read();
    const t = setInterval(read, 500);
    return () => clearInterval(t);
  }, [on]);

  const rows = sig
    ? [
        FIELD("Score de intención", `${sig.score} / 100`),
        FIELD("Tiempo en página", `${sig.seconds}s`),
        FIELD("Scroll máximo", `${Math.round(sig.scrollMax * 100)}%`),
        FIELD("Visita nº", `${sig.visits}`),
        FIELD("Origen", sig.refSource),
        FIELD("Franja horaria", sig.hourBucket || "—"),
        FIELD("Sección actual", sig.section),
        FIELD("Sección favorita", sig.favSection || "—"),
      ]
    : [];

  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h3 className="text-lg font-bold text-foreground">Tus señales, en vivo</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Todo se calcula en tu navegador. No se envía nada a ningún servidor.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setOn((v) => !v)}
          className="rounded-xl bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {on ? "Ocultar mis señales" : "Ver mis señales"}
        </button>
      </div>

      {on && (
        <div className="mt-6">
          <dl className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4">
            {rows.map((r) => (
              <div key={r.label} className="min-w-0">
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  {r.label}
                </dt>
                <dd className="text-base font-mono font-semibold text-foreground truncate">
                  {r.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 rounded-xl border border-border bg-muted/40 p-4">
            <label
              htmlFor="hp-demo-email"
              className="block text-sm font-semibold text-foreground"
            >
              Probar la señal empresa → escribe un email
            </label>
            <input
              id="hp-demo-email"
              type="email"
              inputMode="email"
              autoComplete="off"
              placeholder="tunombre@tuempresa.com"
              onChange={(e) => setCompanyOut(deduceCompany(e.target.value))}
              className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-accent"
            />
            <p id="hp-demo-company-out" className="mt-3 text-sm text-muted-foreground">
              {companyOut}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
