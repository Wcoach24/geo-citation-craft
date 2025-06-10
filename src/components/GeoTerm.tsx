
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useState } from "react";

interface GeoTermProps {
  term: string;
  children: React.ReactNode;
  className?: string;
  definition?: string;
  href?: string;
}

const GeoTerm = ({ 
  term, 
  children, 
  className = "", 
  definition,
  href
}: GeoTermProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Generate href based on term if not provided
  const termHref = href || `/glosario#${term.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <span className="relative inline-block">
      <Link
        to={termHref}
        className={cn(
          "text-primary underline decoration-dotted underline-offset-2 hover:decoration-solid transition-all duration-200",
          className
        )}
        onMouseEnter={() => definition && setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        data-geo-term={term}
      >
        {children}
      </Link>
      
      {definition && showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-background border border-border rounded-lg shadow-lg z-50">
          <div className="text-sm text-muted-foreground">
            <strong className="text-foreground">{term}:</strong> {definition}
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
        </div>
      )}
    </span>
  );
};

export default GeoTerm;
