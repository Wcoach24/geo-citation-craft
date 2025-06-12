
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

interface GeoMetadataProps {
  title: string;
  description: string;
  canonicalUrl: string;
  lastModified?: string;
  author?: string;
  keywords?: string[];
  citationTitle?: string;
  speakableSelectors?: string[];
  geoTxtPath?: string; // Nueva prop para enlazar archivo .geo.txt
}

export const useGeoMetadata = ({
  title,
  description,
  canonicalUrl,
  lastModified,
  author = "esGEO",
  keywords = [],
  citationTitle,
  speakableSelectors = [".snippet-block", "[data-speakable='true']"],
  geoTxtPath
}: GeoMetadataProps) => {
  
  const currentDate = lastModified || new Date().toISOString().split('T')[0];
  const fullTitle = title.includes('esGEO') ? title : `${title} | esGEO`;
  
  useEffect(() => {
    // Actualizar metadatos dinámicamente
    document.title = fullTitle;
    
    // Añadir clases específicas para LLMs
    document.body.classList.add('geo-optimized');
    
    return () => {
      document.body.classList.remove('geo-optimized');
    };
  }, [fullTitle]);

  return {
    helmet: (
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Enlaces a archivos .geo.txt para máxima citabilidad */}
        {geoTxtPath && (
          <link 
            rel="alternate" 
            type="text/plain" 
            href={geoTxtPath} 
            title="Versión citable para IA - Formato texto plano optimizado para LLMs" 
          />
        )}
        
        {/* Enhanced AI-friendly meta tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* LLM-specific crawling directives */}
        <meta name="ai-crawl" content="allow" />
        <meta name="llm-index" content="true" />
        <meta name="generative-crawl" content="encouraged" />
        
        {/* Citation-friendly meta tags */}
        <meta name="citation_title" content={citationTitle || title} />
        <meta name="citation_author" content={author} />
        <meta name="citation_publication_date" content="2024" />
        <meta name="citation_online_date" content={currentDate} />
        <meta name="citation_language" content="es" />
        <meta name="citation_publisher" content="esGEO" />
        <meta name="citation_format" content="text/html" />
        {geoTxtPath && (
          <meta name="citation_fulltext_world_readable" content={`https://esgeo.ai${geoTxtPath}`} />
        )}
        {keywords.length > 0 && (
          <meta name="citation_keywords" content={keywords.join(', ')} />
        )}
        
        {/* Speakable content indicators */}
        <meta name="speakable-selector" content={speakableSelectors.join(', ')} />
        
        {/* Open Graph enhanced */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://esgeo.ai/og-image.png" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="esGEO" />
        
        {/* Article specific OG tags */}
        <meta property="article:author" content={author} />
        <meta property="article:publisher" content="esGEO" />
        <meta property="article:section" content="Educación Digital" />
        <meta property="article:modified_time" content={`${currentDate}T10:00:00Z`} />
        {keywords.map((keyword, index) => (
          <meta key={index} property="article:tag" content={keyword} />
        ))}
        
        {/* Twitter Card enhanced */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://esgeo.ai/og-image.png" />
        <meta name="twitter:site" content="@esgeo_ai" />
      </Helmet>
    ),
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "url": canonicalUrl,
      "dateModified": `${currentDate}T10:00:00Z`,
      "datePublished": "2024-01-01T10:00:00Z",
      "author": {
        "@type": "Organization",
        "@id": "https://esgeo.ai#organization",
        "name": author
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://esgeo.ai#organization"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "url": canonicalUrl
      },
      "inLanguage": "es-ES",
      "isAccessibleForFree": true,
      "keywords": keywords.join(', '),
      // Enlace a versión citable si existe
      ...(geoTxtPath && {
        "associatedMedia": {
          "@type": "MediaObject",
          "contentUrl": `https://esgeo.ai${geoTxtPath}`,
          "encodingFormat": "text/plain",
          "description": "Versión citable para modelos de lenguaje"
        }
      })
    }
  };
};
