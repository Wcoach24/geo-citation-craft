
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { createContext, useContext, useMemo, useRef, useState } from "react";
import { getGlossaryEntry, toGlossarySlug } from "@/data/glossary";

interface GeoTermProps {
  term: string;
  children: React.ReactNode;
  className?: string;
  definition?: string;
  href?: string;
  category?: string;
}

/**
 * F5-2: registro de DefinedTerm emitidos en la página actual. Solo el PRIMER uso
 * de un término emite JSON-LD; los siguientes solo enlazan (antes cada uso emitía
 * un bloque con el mismo @id → @ids duplicados por página).
 */
interface GeoTermRegistry {
  emitted: Set<string>;
}

const GeoTermRegistryContext = createContext<GeoTermRegistry | null>(null);

/**
 * Provider por ruta. OJO SSR: un Set a nivel de módulo persistiría entre las 29
 * rutas del prerender (la segunda ruta no emitiría nada). Este useMemo crea un
 * Set NUEVO por pathname: cada render de ruta del prerender parte de cero y en
 * cliente se resetea al navegar.
 */
export function GeoTermRegistryProvider({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const registry = useMemo<GeoTermRegistry>(() => ({ emitted: new Set<string>() }), [pathname]);
  return (
    <GeoTermRegistryContext.Provider value={registry}>
      {children}
    </GeoTermRegistryContext.Provider>
  );
}

const GeoTerm = ({
  term,
  children,
  className = "",
  definition,
  href,
}: GeoTermProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const registry = useContext(GeoTermRegistryContext);

  // Definición REAL: la prop explícita gana; si no, la del glosario (src/data/glossary.ts).
  // Sin ninguna de las dos NO se emite JSON-LD: nada de "Término relacionado con GEO".
  const entry = getGlossaryEntry(term);
  const resolvedDefinition = definition || entry?.definition;
  const anchorId = entry?.id ?? toGlossarySlug(term);
  const termHref = href || `/glosario#${anchorId}`;
  const termId = `https://www.esgeo.ai/glosario#${anchorId}`;
  const displayName = entry?.term ?? term;

  // La decisión de emitir se toma UNA vez por instancia (useRef): los re-renders
  // (p. ej. el tooltip) no deben retirar un <script> ya emitido ni re-consultar
  // el registro como si fueran un uso nuevo.
  const emitRef = useRef<boolean | null>(null);
  if (emitRef.current === null) {
    let emit = Boolean(resolvedDefinition);
    if (emit && registry) {
      if (registry.emitted.has(termId)) {
        emit = false;
      } else {
        registry.emitted.add(termId);
      }
    }
    emitRef.current = emit;
  }
  const emitJsonLd = emitRef.current;

  return (
    <span
      className="relative inline-block"
      itemScope
      itemType="https://schema.org/DefinedTerm"
    >
      {/* Metadatos invisibles */}
      <meta itemProp="name" content={displayName} />
      {resolvedDefinition && <meta itemProp="description" content={resolvedDefinition} />}
      <meta itemProp="inDefinedTermSet" content="https://www.esgeo.ai/glosario" />

      <Link
        to={termHref}
        className={cn(
          "text-primary underline decoration-dotted underline-offset-2 hover:decoration-solid transition-all duration-200",
          className
        )}
        onMouseEnter={() => resolvedDefinition && setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        data-geo-term={term}
        itemProp="url"
        aria-describedby={resolvedDefinition ? `tooltip-${anchorId}` : undefined}
      >
        <span itemProp="name">{children}</span>
      </Link>

      {resolvedDefinition && showTooltip && (
        <div
          id={`tooltip-${anchorId}`}
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-background border border-border rounded-lg shadow-lg z-50"
          role="tooltip"
          aria-label={`Definición de ${displayName}`}
        >
          <div className="text-sm text-muted-foreground">
            <strong className="text-foreground">{displayName}:</strong> {resolvedDefinition}
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
        </div>
      )}

      {/* Datos estructurados: solo el primer uso del término en la página, y solo
          con definición real (glosario o prop). */}
      {emitJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            "@id": termId,
            "name": displayName,
            "description": resolvedDefinition,
            "inDefinedTermSet": {
              "@type": "DefinedTermSet",
              "name": "Glosario GEO",
              "url": "https://www.esgeo.ai/glosario"
            },
            "termCode": anchorId,
            "url": `https://www.esgeo.ai${termHref}`
          }) }} />
      )}
    </span>
  );
};

export default GeoTerm;
