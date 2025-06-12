
import { cn } from "@/lib/utils";

interface HighlightSnippetProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  variant?: "default" | "definition" | "insight" | "stat";
  lastModified?: string;
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
  const variantStyles = {
    default: "bg-accent/10 border-l-4 border-accent p-4 rounded-lg",
    definition: "bg-blue-50 border border-blue-200 p-4 rounded-lg",
    insight: "bg-green-50 border border-green-200 p-4 rounded-lg",
    stat: "bg-purple-50 border border-purple-200 p-4 rounded-lg"
  };

  const currentDate = new Date().toISOString();

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
      <meta itemProp="dateModified" content={lastModified || currentDate} />
      <meta itemProp="inLanguage" content="es-ES" />
      <meta itemProp="isAccessibleForFree" content="true" />
      
      {/* Contenido visible */}
      <div itemProp="text">
        {children}
      </div>
      
      {/* Datos estructurados para el fragmento */}
      {id && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id": `https://esgeo.ai#${id}`,
            "name": `Fragmento GEO: ${id}`,
            "author": {
              "@type": "Organization",
              "@id": "https://esgeo.ai#organization",
              "name": author
            },
            "dateModified": lastModified || currentDate,
            "inLanguage": "es-ES",
            "isAccessibleForFree": true,
            "publisher": {
              "@type": "Organization",
              "@id": "https://esgeo.ai#organization"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "url": `https://esgeo.ai#${id}`
            }
          })}
        </script>
      )}
    </div>
  );
};

export default HighlightSnippet;
