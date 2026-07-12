/**
 * GET /api/premium-health
 *
 * Canario del camino del dinero. Comprueba que la función puede LEER los 5 PDFs
 * premium del disco (los que el webhook de Stripe adjunta tras un pago).
 *
 * Existe porque los PDFs viven fuera de public/ y llegan a la función vía
 * `includeFiles` en vercel.json. Si ese empaquetado se rompe en un deploy, el
 * comprador paga y no recibe nada — y no te enterarías hasta la primera queja.
 * Esto lo detecta en un curl.
 *
 * No expone contenido: solo nombre, existencia y tamaño.
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import manifest from "./_lib/manifest.json" with { type: "json" };

type ModuleInfo = { name: string; filename: string; hash: string };
const MODULES = manifest as Record<string, ModuleInfo>;

export default function handler(_req: VercelRequest, res: VercelResponse) {
  const modules = Object.entries(MODULES).map(([id, info]) => {
    const path = join(process.cwd(), "premium", info.hash, info.filename);
    try {
      const bytes = readFileSync(path).length;
      return { id, ok: true, bytes };
    } catch {
      return { id, ok: false, bytes: 0, error: "no legible desde la función" };
    }
  });

  const ok = modules.every((m) => m.ok);
  return res.status(ok ? 200 : 500).json({
    ok,
    checked: modules.length,
    modules,
    note: ok
      ? "Los 5 PDFs son legibles desde la función. El webhook puede entregarlos."
      : "ALGÚN PDF NO ES LEGIBLE: un comprador pagaría y no recibiría el producto.",
  });
}
