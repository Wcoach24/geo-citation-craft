
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useState } from "react";

interface GeoTermProps {
  term: string;
  children: React.ReactNode;
  className?: string;
  definition?: string;
  href?: string;
  category?: string;
}

const GeoTerm = ({ 
  term, 
  children, 
  className = "", 
  definition,
  href,
  category = "GEO"
}: GeoTermProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Generate href based on term if not provided
  const termHref = href || `/glosario#${term.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <span 
      className="relative inline-block"
      itemScope
      itemType="https://schema.org/DefinedTerm"
    >
      {/* Metadatos invisibles */}
      <meta itemProp="name" content={term} />
      {definition && <meta itemProp="description" content={definition} />}
      <meta itemProp="inDefinedTermSet" content="https://esgeo.ai/glosario" />
      
      <Link
        to={termHref}
        className={cn(
          "text-primary underline decoration-dotted underline-offset-2 hover:decoration-solid transition-all duration-200",
          className
        )}
        onMouseEnter={() => definition && setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        data-geo-term={term}
        itemProp="url"
        aria-describedby={definition ? `tooltip-${term}` : undefined}
      >
        <span itemProp="name">{children}</span>
      </Link>
      
      {definition && showTooltip && (
        <div 
          id={`tooltip-${term}`}
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-background border border-border rounded-lg shadow-lg z-50"
          role="tooltip"
          aria-label={`Definición de ${term}`}
        >
          <div className="text-sm text-muted-foreground">
            <strong className="text-foreground">{term}:</strong> {definition}
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
        </div>
      )}

      {/* Datos estructurados para el término */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          "@id": `https://esgeo.ai/glosario#${term.toLowerCase().replace(/\s+/g, '-')}`,
          "name": term,
          "description": definition || `Término relacionado con ${category}`,
          "inDefinedTermSet": {
            "@type": "DefinedTermSet",
            "name": "Glosario GEO",
            "url": "https://esgeo.ai/glosario"
          },
          "termCode": term.toUpperCase().replace(/\s+/g, '_'),
          "url": `https://esgeo.ai${termHref}`
        })}
      </script>
    </span>
  );
};

export default GeoTerm;
