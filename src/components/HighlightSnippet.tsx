
import { cn } from "@/lib/utils";
import { useCanonicalHref } from "@/lib/canonical";

interface HighlightSnippetProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  variant?: "default" | "definition" | "insight" | "stat";
  /**
   * Fecha REAL de última modificación del contenido (ISO, p. ej. "2026-07-15").
   * Obligatoria a propósito (F5-1): el antiguo fallback a la fecha del build
   * hacía que cada build "actualizara" todos los fragmentos — el anti-patrón de
   * frescura falsa que el propio módulo F5 del curso prohíbe.
   */
  lastModified: string;
  author?: string;
}

const HighlightSnippet = ({
  children,
  id,
  className = "",
  variant = "default",
  lastModified,
  author = "esGEO"
}: HighlightSnippetProps) => {
  // URL canónica de la página actual (SSR-safe): el fragmento pertenece a SU página,
  // no a la home (F5-1: mainEntityOfPage con la URL real).
  const canonicalHref = useCanonicalHref();

  const variantStyles = {
    default: "bg-accent/10 border-l-4 border-accent p-4 rounded-lg",
    definition: "bg-primary/5 border border-primary/20 p-4 rounded-lg",
    insight: "bg-success/5 border border-success/20 p-4 rounded-lg",
    stat: "bg-accent/5 border border-accent/20 p-4 rounded-lg"
  };

  return (
    <div
      id={id}
      className={cn(
        "snippet-block",
        variantStyles[variant],
        className
      )}
      data-speakable="true"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      {/* Metadatos invisibles para LLMs */}
      <meta itemProp="author" content={author} />
      <meta itemProp="dateModified" content={lastModified} />
      <meta itemProp="inLanguage" content="es-ES" />
      <meta itemProp="isAccessibleForFree" content="true" />

      {/* Contenido visible */}
      <div itemProp="text">
        {children}
      </div>

      {/* Datos estructurados para el fragmento */}
      {id && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id": `${canonicalHref}#${id}`,
            "name": `Fragmento GEO: ${id}`,
            "author": {
              "@type": "Organization",
              "@id": "https://www.esgeo.ai#organization",
              "name": author
            },
            "dateModified": lastModified,
            "inLanguage": "es-ES",
            "isAccessibleForFree": true,
            "publisher": {
              "@type": "Organization",
              "@id": "https://www.esgeo.ai#organization"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "url": canonicalHref
            }
          }) }} />
      )}
    </div>
  );
};

export default HighlightSnippet;
