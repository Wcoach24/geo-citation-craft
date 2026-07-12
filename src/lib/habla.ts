/**
 * Cliente de HABLA — el auditor de legibilidad máquina de esGEO.
 *
 * HABLA analiza el HTML que un servidor sirve de verdad (sin ejecutar JS, igual que un
 * crawler de IA) y devuelve una puntuación 0–100 sobre cinco dimensiones:
 *   H — Higiene (robots.txt, sitemap, HTTPS)
 *   A — Accesible (¿hay texto en el HTML inicial? es un gate: si falla, el resto da igual)
 *   B — Bloques (h1, headings, HTML semántico, JSON-LD)
 *   L — Lenguaje (answerability: ¿el primer bloque responde qué/para quién/cuánto?)
 *   X — eXtras (llms.txt, señales de citación)
 *
 * La API responde con CORS abierto, así que el widget la llama desde el navegador.
 */

/**
 * Base de la API. `habla.esgeo.ai` es el destino final (subdominio apuntando al proyecto
 * Vercel `machineready`); hasta que el DNS propague, el fallback es el dominio de Vercel.
 * Se puede forzar con VITE_HABLA_API sin tocar código.
 */
export const HABLA_API =
  import.meta.env.VITE_HABLA_API || "https://machineready.vercel.app";

export interface HablaResult {
  url: string;
  http: number;
  /** Versión del rubric. Una nota sin rubric no es una nota, es una opinión. */
  rubric?: string;
  /** Lo que la nota NO significa. Se enseña, no se esconde. */
  caveat?: string;
  total: number;
  grade: "MUDA" | "TARTAMUDA" | "BILINGÜE" | "NATIVA" | string;
  gateH: boolean;
  gateA: boolean;
  scores: { H: number; A: number; B: number; L: number; X: number };
  checks: {
    text_chars: number;
    shell: boolean;
    h1: number;
    headings: number;
    semantic: number;
    jsonld: number;
    llms_txt: boolean;
    robots_ai_bots: string[];
    /** rubric 2.0: 0-5 hechos, no un recuento de palabras. */
    answerability: number;
    answerability_facts?: {
      what: boolean; who: boolean; howMuch: boolean; dated: boolean; selfContained: boolean;
    };
    content_chars?: number;
    [k: string]: unknown;
  };
  wins: string[];
}

export async function analyze(rawUrl: string): Promise<HablaResult> {
  const url = rawUrl.trim().replace(/^https?:\/\//, "").replace(/\/+$/, "");
  if (!url || !url.includes(".")) throw new Error("Escribe un dominio válido, por ejemplo tuempresa.com");

  const res = await fetch(`${HABLA_API}/api/analyze?url=${encodeURIComponent(url)}`);
  if (!res.ok) throw new Error(`El auditor no pudo leer esa web (HTTP ${res.status}).`);

  const data = (await res.json()) as HablaResult;
  if (typeof data.total !== "number") throw new Error("Respuesta inesperada del auditor.");
  return data;
}

/** Lectura humana de la nota. */
export function gradeCopy(r: HablaResult): { label: string; blurb: string } {
  if (!r.gateA) {
    return {
      label: "Tu web no habla",
      blurb:
        "Tu contenido no está en el HTML inicial. Los crawlers de IA no ejecutan JavaScript: ven una página en blanco.",
    };
  }
  if (r.total >= 80) return { label: "Tu web habla bien", blurb: "Las máquinas te leen. Ahora toca que te citen." };
  if (r.total >= 55) return { label: "Tu web tartamudea", blurb: "Te leen, pero les cuesta entender qué haces y para quién." };
  return { label: "Tu web casi no habla", blurb: "Hay texto, pero falta estructura y contexto para que te citen." };
}
