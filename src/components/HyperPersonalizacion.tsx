import { useEffect } from "react";

/**
 * HyperPersonalizacion — arranque del motor de hiperpersonalización client-side.
 *
 * ORIGEN: la metodología `hiperpersonalizacion-web` nació de esta misma landing
 * (jul 2026). El motor vive en `public/hyperpersonal.js` (se sirve tal cual, sin
 * pasar por el bundler) y aquí solo lo cargamos y configuramos.
 *
 * ⚠ SSR: TODO ocurre dentro de useEffect, que NO se ejecuta en el prerender de
 * Node (src/entry-server.tsx). El HTML servido a los crawlers es el default
 * completo; la personalización se aplica ENCIMA, en el navegador, después de
 * pintar. Nunca se toca window/localStorage en fase de render.
 *
 * Principio: señal → regla → adaptación, con default primero. Si este script
 * falla o no carga, la página funciona exactamente igual.
 */

// --- Tipos mínimos del motor (public/hyperpersonal.js) ---
type Signals = {
  visits: number;
  refSource: string;
  score: number;
  seconds: number;
  scrollMax: number;
  dwell: Record<string, number>;
};
type RuleApi = {
  setHTML: (sel: string, html: string) => void;
  show: (sel: string) => void;
  setText: (sel: string, txt: string) => void;
  toast: (msg: string) => void;
};
type Rule = {
  id: string;
  when: (s: Signals) => boolean;
  do: (a: RuleApi, s: Signals) => void;
};

const ACCENT = "text-accent-light";

// Señal → regla → adaptación. Máximo 6 reglas vivas (norma de la metodología).
// Precedencia cuando varias tocan #hp-headline: recurrencia > origen > intención.
// Cada disparo emite `hp_rule` por onEvent (medible en analytics).
const RULES: Rule[] = [
  {
    id: "recurrente",
    when: (s) => s.visits > 1,
    do: (a) =>
      a.setHTML("#hp-headline", `Otra vez por aquí. ¿Y si <span class="${ACCENT}">lo arreglamos</span> hoy?`),
  },
  {
    id: "linkedin",
    when: (s) => s.refSource === "linkedin",
    do: (a) =>
      a.setHTML(
        "#hp-headline",
        `Que la IA <span class="${ACCENT}">recomiende</span> tu empresa cuando pregunten por tu sector`,
      ),
  },
  {
    id: "busqueda",
    when: (s) => s.refSource === "búsqueda",
    do: (a) =>
      a.setHTML(
        "#hp-headline",
        `Estabas buscando GEO. Esto es <span class="${ACCENT}">lo que te falta</span> para que te citen`,
      ),
  },
  {
    id: "caliente",
    when: (s) => s.score >= 65,
    do: (a) => a.show("#hp-hot-strip"),
  },
  {
    id: "skimmer",
    when: (s) => s.seconds >= 12 && s.scrollMax > 0.55 && (s.dwell.top || 0) < 7,
    do: (a) => a.show("#hp-tldr"),
  },
];

let booted = false;

export default function HyperPersonalizacion({ debug = false }: { debug?: boolean }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window as unknown as {
      HyperPersonal?: {
        init: (cfg: unknown) => void;
        split: (pct: number) => boolean;
      };
      __hpBooted?: boolean;
    };
    if (w.__hpBooted || booted) return;

    const boot = () => {
      const HP = w.HyperPersonal;
      if (!HP) return;
      booted = true;
      w.__hpBooted = true;

      // A/B 50/50: mitad ve personalización, mitad la versión genérica. Sin esto,
      // no sabes si personalizar gana. El bucket es persistente por navegador.
      const personalized = HP.split(50);

      const onEvent = (ev: string, data: Record<string, unknown>) => {
        try {
          (window as unknown as { clarity?: (...a: unknown[]) => void }).clarity?.(
            "event",
            ev,
          );
          (window as unknown as { va?: (...a: unknown[]) => void }).va?.("event", {
            name: ev,
            ...data,
          });
        } catch {
          /* analytics opcional */
        }
      };

      HP.init({
        debug,
        storageKey: "esgeo_hp",
        onEvent,
        weights: { time: 30, scroll: 25, mouse: 15, sections: 15, extra: 15 },
        features: {
          // Nudge suave al inactivarse (no intrusivo, sin manipular el título).
          idle: {
            ms: 30000,
            onIdle: (api: { toast: (m: string) => void }) =>
              api.toast("¿Sigues por aquí? El módulo F0 es gratis y se lee en 10 minutos."),
          },
          copyToast: "¿Compartiendo? Mejor con el enlace: esgeo.ai 😉",
        },
        rules: personalized ? RULES : [],
      });

      onEvent("hp_bucket", { personalized });
    };

    const HP = w.HyperPersonal;
    if (HP) {
      boot();
      return;
    }
    // Carga diferida del motor como asset estático (no entra en el bundle).
    const existing = document.querySelector('script[data-hp="1"]');
    if (existing) {
      existing.addEventListener("load", boot);
      return;
    }
    const s = document.createElement("script");
    s.src = "/hyperpersonal.js";
    s.async = true;
    s.dataset.hp = "1";
    s.addEventListener("load", boot);
    document.head.appendChild(s);
  }, [debug]);

  return null;
}
