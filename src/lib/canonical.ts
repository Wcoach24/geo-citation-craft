import { useLocation } from "react-router-dom";

/** Dominio canónico. www es el canónico (ver .gsd/CONTEXT.md D6). */
export const SITE_URL = "https://www.esgeo.ai";

/**
 * URL canónica de la ruta actual, segura en SSR.
 *
 * Sustituye a `window.location.href`, que reventaba el prerender ("window is not
 * defined") en cualquier componente que lo usara dentro del render — típicamente
 * dentro de un JSON-LD. Se apoya en el router, así que funciona igual en Node.
 */
export function useCanonicalHref(): string {
  const { pathname } = useLocation();
  return `${SITE_URL}${pathname === "/" ? "" : pathname}`;
}
