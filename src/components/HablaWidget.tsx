import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Loader2, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import EmailCapture from "@/components/EmailCapture";
import { useVisitorState } from "@/hooks/useVisitorState";
import { analyze, gradeCopy, HABLA_API, type HablaResult } from "@/lib/habla";

interface HablaWidgetProps {
  /** Titular del bloque. */
  title?: string;
  /** Texto bajo el titular. */
  subtitle?: string;
  className?: string;
  /** F5-8: dominio con el que pre-lanzar el análisis (p. ej. de ?url= en /geo-score).
   *  Solo se consume en useEffect: SSR-safe. */
  initialUrl?: string;
  /** Hooks de analítica — solo se disparan en handlers de evento (SSR-safe). */
  onAnalyzeStart?: (url: string) => void;
  onAnalyzeComplete?: (result: HablaResult) => void;
  onAnalyzeError?: (message: string) => void;
  /** Click en los CTAs que aparecen tras el resultado. `target`: 'curso' | 'informe'. */
  onResultCtaClick?: (target: string, grade: string) => void;
}

/**
 * HablaWidget — el lead magnet: audita la web del visitante en directo.
 *
 * No es un quiz ni una estimación: llama al auditor real (HABLA) y devuelve la misma
 * puntuación que obtendría un crawler de IA leyendo su HTML. El gancho es que casi todas
 * las webs modernas fallan el gate A, y ese fallo es exactamente lo que enseña el curso.
 *
 * Renderiza en SSR: el estado inicial (titular + formulario) es HTML estático, así que
 * también suma texto legible por máquinas en la página que lo incruste.
 */
export default function HablaWidget({
  title = "¿Tu web habla con las IAs?",
  subtitle = "Escribe tu dominio. En 10 segundos sabrás qué ve ChatGPT cuando entra en tu web — que casi nunca es lo que ves tú.",
  className = "",
  initialUrl,
  onAnalyzeStart,
  onAnalyzeComplete,
  onAnalyzeError,
  onResultCtaClick,
}: HablaWidgetProps) {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [result, setResult] = useState<HablaResult | null>(null);
  const [error, setError] = useState("");
  // F5-8: el informe completo vive en un dominio externo sin captura. Antes de
  // abrirlo pedimos el email; leads/customers existentes pasan directos.
  const { visitorState } = useVisitorState();
  const isKnownVisitor = visitorState === "lead" || visitorState === "customer";
  const [showReportGate, setShowReportGate] = useState(false);
  const [reportUnlocked, setReportUnlocked] = useState(false);
  const autoRanRef = useRef(false);

  const runAnalysis = async (target: string) => {
    setStatus("loading");
    setError("");
    onAnalyzeStart?.(target);
    try {
      const r = await analyze(target);
      setResult(r);
      setStatus("done");
      onAnalyzeComplete?.(r);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Algo falló al analizar esa web.";
      setError(msg);
      setStatus("error");
      onAnalyzeError?.(msg);
    }
  };

  const run = (e: React.FormEvent) => {
    e.preventDefault();
    void runAnalysis(url);
  };

  // F5-8: pre-lanzar el análisis con ?url= — SOLO en useEffect (SSR-safe).
  useEffect(() => {
    if (!initialUrl || autoRanRef.current) return;
    autoRanRef.current = true;
    setUrl(initialUrl);
    void runAnalysis(initialUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialUrl]);

  const reportUrl = result ? `${HABLA_API}/?url=${encodeURIComponent(result.url)}` : "";

  const openReport = () => {
    window.open(reportUrl, "_blank", "noopener");
  };

  const handleReportClick = () => {
    if (!result) return;
    onResultCtaClick?.("informe", result.grade);
    if (isKnownVisitor || reportUnlocked) {
      openReport();
    } else {
      setShowReportGate(true);
    }
  };

  const copy = result ? gradeCopy(result) : null;

  return (
    <section
      id="habla-widget"
      className={`rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm ${className}`}
      aria-labelledby="habla-widget-title"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 id="habla-widget-title" className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          {title}
        </h2>
        <p className="text-muted-foreground mb-6">{subtitle}</p>

        <form onSubmit={run} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <Input
            type="text"
            inputMode="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="tuempresa.com"
            aria-label="Dominio de tu web"
            className="flex-1 h-12"
            required
          />
          <Button type="submit" size="lg" className="h-12" disabled={status === "loading"}>
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Leyendo…
              </>
            ) : (
              "Analizar gratis"
            )}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground mt-3">
          Gratis, sin registro. Analiza el HTML público, igual que lo haría GPTBot.
        </p>

        {status === "error" && (
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-destructive">
            <AlertTriangle className="h-4 w-4" />
            {error}
          </p>
        )}

        {status === "done" && result && copy && (
          <div className="mt-8 text-left">
            {/* Nota */}
            <div className="flex items-center gap-5 rounded-xl border border-border bg-background p-5">
              <div className="text-center shrink-0">
                <div className="text-5xl font-bold leading-none text-foreground">{result.total}</div>
                <div className="text-xs text-muted-foreground mt-1">/ 100</div>
              </div>
              <div>
                <div className="font-semibold text-foreground">
                  {copy.label} <span className="text-muted-foreground font-normal">· {result.grade}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{copy.blurb}</p>
              </div>
            </div>

            {/* Dimensiones H-A-B-L-A */}
            <dl className="grid grid-cols-5 gap-2 mt-4">
              {(["H", "A", "B", "L", "X"] as const).map((k) => (
                <div key={k} className="rounded-lg border border-border bg-background p-3 text-center">
                  <dt className="text-xs text-muted-foreground">{k}</dt>
                  <dd className="text-lg font-semibold text-foreground">{result.scores[k]}</dd>
                </div>
              ))}
            </dl>

            {/* Dato duro: lo que ve el crawler */}
            <p className="text-sm text-muted-foreground mt-4">
              El crawler encuentra{" "}
              <strong className="text-foreground">
                {result.checks.content_chars ?? result.checks.text_chars} caracteres
              </strong>{" "}
              de contenido en tu HTML inicial y{" "}
              <strong className="text-foreground">{result.checks.h1}</strong> etiqueta h1.
            </p>

            {/* Los 5 hechos del primer bloque: el eje donde casi todo el mundo suspende */}
            {result.checks.answerability_facts && (
              <div className="mt-4 rounded-xl border border-border bg-background p-4">
                <p className="text-sm font-semibold text-foreground mb-2">
                  Tu primer bloque, ¿responde?
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-sm">
                  {[
                    ["what", "Qué eres"],
                    ["who", "Para quién"],
                    ["howMuch", "Una cifra con unidad"],
                    ["dated", "Fechado (mes y año)"],
                    ["selfContained", "Se sostiene solo"],
                  ].map(([k, label]) => {
                    const ok = (result.checks.answerability_facts as Record<string, boolean>)[k];
                    return (
                      <li key={k} className={ok ? "text-foreground" : "text-muted-foreground"}>
                        {ok ? "✓" : "✗"} {label}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Quick wins */}
            {result.wins.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold text-foreground mb-3">Lo primero que arreglaría:</h3>
                <ul className="space-y-2">
                  {result.wins.slice(0, 2).map((w, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
                {result.wins.length > 2 && (
                  <p className="text-sm text-muted-foreground mt-3">
                    Quedan {result.wins.length - 2} más. El curso te enseña a arreglarlos todos.
                  </p>
                )}
              </div>
            )}

            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="flex-1">
                <Link to="/curso" onClick={() => onResultCtaClick?.("curso", result.grade)}>
                  Arreglarlo con el curso — 47 €
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              {/* F5-8: el informe se abre desde un handler, tras el gate de email */}
              <Button variant="outline" size="lg" className="flex-1" onClick={handleReportClick}>
                Ver informe completo
              </Button>
            </div>

            {/* Captura de email — si el visitante pidió el informe, es el gate que lo abre */}
            {showReportGate && !reportUnlocked && !isKnownVisitor ? (
              <div className="mt-6 rounded-xl border border-accent/30 bg-accent/5 p-4">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Dime a qué email te mando también el resultado y te abro el informe completo:
                </p>
                <EmailCapture
                  source={`habla-informe-${result.grade}`}
                  onSuccess={() => {
                    setReportUnlocked(true);
                    openReport();
                  }}
                />
              </div>
            ) : (
              <div className="mt-6">
                <EmailCapture source={`habla-${result.grade}`} />
              </div>
            )}

            {/* Si el popup del informe fue bloqueado, el enlace directo queda visible */}
            {reportUnlocked && (
              <p className="mt-3 text-sm">
                <a
                  href={reportUrl}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1 text-accent underline underline-offset-2"
                >
                  Abrir informe completo <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </p>
            )}

            {/* Lo que la nota NO significa. Va aquí, no en la letra pequeña. */}
            {result.caveat && (
              <p className="mt-6 text-xs text-muted-foreground leading-relaxed border-t border-border pt-4">
                {result.caveat}
                {result.rubric && <span className="opacity-70"> (rubric {result.rubric})</span>}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
