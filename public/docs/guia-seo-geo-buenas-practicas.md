# 🤖 Guía de Auditoría y Optimización SEO/GEO para LLMs

> **Versión:** 3.0 | **Formato:** Instrucciones para Agentes IA  
> **Propósito:** Auditar y optimizar proyectos web para SEO tradicional y GEO (Generative Engine Optimization)  
> **Licencia:** CC BY-NC-SA 4.0

---

## 🎯 INSTRUCCIONES PARA EL AGENTE

Este documento contiene las buenas prácticas definitivas para optimizar proyectos web. Como agente IA, debes:

1. **AUDITAR** el proyecto actual comparando con estas prácticas
2. **IDENTIFICAR** elementos faltantes o mejorables
3. **IMPLEMENTAR** las optimizaciones de forma incremental
4. **PRIORIZAR** según el impacto: Crítico > Alto > Medio > Bajo

### Flujo de Auditoría Recomendado

```
1. Revisar index.html → Meta tags y Schema.org
2. Revisar estructura de archivos → .geo.txt, llm.txt, robots.txt, sitemap.xml
3. Revisar componentes → HTML semántico y atributos GEO
4. Revisar contenido → Estructura, citabilidad, autoridad
5. Generar reporte de mejoras priorizadas
```

---

## 📋 CHECKLIST DE AUDITORÍA RÁPIDA

Usa esta lista para evaluar rápidamente un proyecto:

### Nivel Crítico (Implementar siempre)
- [ ] `<title>` único y descriptivo (50-60 caracteres)
- [ ] `<meta name="description">` (150-160 caracteres)
- [ ] `<link rel="canonical">` en todas las páginas
- [ ] `<html lang="xx">` con idioma correcto
- [ ] `robots.txt` configurado
- [ ] `sitemap.xml` actualizado
- [ ] Schema.org WebSite y Organization
- [ ] Open Graph básico (og:title, og:description, og:image)

### Nivel Alto (Muy recomendado)
- [ ] Meta tags de citación (`citation_title`, `citation_author`)
- [ ] Schema.org BreadcrumbList en páginas internas
- [ ] FAQPage Schema donde aplique
- [ ] Twitter Cards
- [ ] Archivo `llm.txt` para directivas IA
- [ ] Archivos `.geo.txt` para contenido principal

### Nivel Medio (Diferenciador)
- [ ] SpeakableSpecification en contenido clave
- [ ] Meta tags específicos para LLMs (`ai-content-files`, `llm-content-summary`)
- [ ] DefinedTermSet para glosarios
- [ ] Article Schema para blog posts
- [ ] HowTo Schema para tutoriales

### Nivel Bajo (Avanzado)
- [ ] Pre-rendering configurado
- [ ] Entity SEO implementado
- [ ] Topical Authority mapeado
- [ ] Métricas de citabilidad

---

## 1. ARQUITECTURA DEL `index.html`

### 1.1 Meta Tags Básicos (CRÍTICO)

**Auditar:** Verifica que existan estos meta tags en `index.html` o en el `<head>` de cada página.

```html
<!DOCTYPE html>
<html lang="[IDIOMA: es|en|fr|de|pt|it]">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- SEO Básico - OBLIGATORIO -->
  <title>[Título 50-60 chars] - [Marca] | [Propuesta de valor]</title>
  <meta name="description" content="[Descripción 150-160 chars con keyword principal]" />
  <meta name="keywords" content="[keyword1], [keyword2], [keyword3]" />
  <meta name="author" content="[Nombre o Empresa]" />
  <link rel="canonical" href="https://[DOMINIO]/" />
  
  <!-- Idioma y región -->
  <meta name="language" content="[IDIOMA]" />
  <meta name="geo.region" content="[CÓDIGO-PAÍS: ES|US|MX|AR]" />
  <meta http-equiv="content-language" content="[IDIOMA-REGIÓN: es-ES|en-US]" />
```

**Acción si falta:** Crear o actualizar con valores específicos del proyecto.

### 1.2 Meta Tags para Robots (CRÍTICO)

```html
  <!-- Directivas para crawlers - OBLIGATORIO -->
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <meta name="googlebot" content="index, follow, max-image-preview:large" />
  <meta name="bingbot" content="index, follow" />
  
  <!-- Fechas - Actualizar automáticamente -->
  <meta name="revisit-after" content="7 days" />
  <meta name="date" content="[FECHA-ACTUAL: YYYY-MM-DD]" />
```

### 1.3 Meta Tags de Citación (ALTO - GEO)

**Propósito:** Permiten que LLMs y sistemas académicos citen correctamente el contenido.

```html
  <!-- Citación académica/profesional -->
  <meta name="citation_title" content="[Título del contenido principal]" />
  <meta name="citation_author" content="[Autor o equipo]" />
  <meta name="citation_publication_date" content="[AÑO]" />
  <meta name="citation_online_date" content="[FECHA: YYYY-MM-DD]" />
  <meta name="citation_language" content="[IDIOMA]" />
  <meta name="citation_publisher" content="[Empresa/Organización]" />
  
  <!-- Para contenido técnico/educativo -->
  <meta name="citation_abstract" content="[Resumen 200-300 chars]" />
  <meta name="citation_keywords" content="[keywords separados por coma]" />
```

### 1.4 Meta Tags para LLMs (MEDIO - Innovador 2025)

**Propósito:** Directivas específicas para que modelos de IA procesen mejor el contenido.

```html
  <!-- Directivas específicas para modelos de IA -->
  <meta name="ai-content-files" content="/home.geo.txt, /llm.txt" />
  <meta name="llm-content-summary" content="[Resumen conciso del sitio en 1-2 frases]" />
  <meta name="ai-crawl-priority" content="high" />
  <meta name="generative-ai-friendly" content="true" />
  
  <!-- Speakable para asistentes de voz -->
  <meta name="speakable-selector" content=".speakable, [data-speakable='true']" />
  
  <!-- Indicadores de calidad -->
  <meta name="content-type" content="[educational|commercial|informational|transactional]" />
  <meta name="expertise-level" content="[beginner|intermediate|professional|expert]" />
  <meta name="fact-checked" content="true" />
  <meta name="last-verified" content="[FECHA: YYYY-MM-DD]" />
```

### 1.5 Open Graph (ALTO)

**Auditar:** Verificar que existan y tengan valores correctos.

```html
  <!-- Open Graph - OBLIGATORIO para redes sociales -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://[DOMINIO]/" />
  <meta property="og:title" content="[Título atractivo - puede diferir del title]" />
  <meta property="og:description" content="[Descripción compelling]" />
  <meta property="og:image" content="https://[DOMINIO]/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="[Descripción accesible de la imagen]" />
  <meta property="og:locale" content="[LOCALE: es_ES|en_US]" />
  <meta property="og:site_name" content="[Nombre del sitio]" />
  
  <!-- Para artículos/blog -->
  <meta property="article:published_time" content="[FECHA-ISO]" />
  <meta property="article:modified_time" content="[FECHA-ISO]" />
  <meta property="article:author" content="[URL del autor]" />
  <meta property="article:section" content="[Categoría]" />
```

### 1.6 Twitter Cards (ALTO)

```html
  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@[HANDLE]" />
  <meta name="twitter:creator" content="@[HANDLE]" />
  <meta name="twitter:title" content="[Título]" />
  <meta name="twitter:description" content="[Descripción]" />
  <meta name="twitter:image" content="https://[DOMINIO]/twitter-image.png" />
  <meta name="twitter:image:alt" content="[Descripción de la imagen]" />
```

### 1.7 Enlaces Importantes (MEDIO)

```html
  <!-- Recursos para LLMs -->
  <link rel="alternate" type="text/plain" href="/home.geo.txt" title="Versión optimizada para IA" />
  <link rel="alternate" type="text/plain" href="/llm.txt" title="Guía para LLMs" />
  
  <!-- Favicons - Verificar que existan los archivos -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
  
  <!-- Rendimiento -->
  <link rel="dns-prefetch" href="//fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
</head>
```

---

## 2. DATOS ESTRUCTURADOS (Schema.org)

### Reglas de Implementación

1. **Ubicación:** Al final del `<body>` o dentro de `<head>`
2. **Formato:** JSON-LD (preferido sobre Microdata)
3. **Validación:** Usar https://validator.schema.org/
4. **IDs:** Usar `@id` para referenciar entidades entre schemas

### 2.1 WebSite + Organization (CRÍTICO - Siempre incluir)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://[DOMINIO]/#website",
      "url": "https://[DOMINIO]/",
      "name": "[Nombre del sitio]",
      "description": "[Descripción del sitio]",
      "inLanguage": "[IDIOMA-REGIÓN]",
      "publisher": {
        "@id": "https://[DOMINIO]/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://[DOMINIO]/buscar?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://[DOMINIO]/#organization",
      "name": "[Nombre de la empresa]",
      "alternateName": "[Nombre alternativo si existe]",
      "url": "https://[DOMINIO]",
      "logo": {
        "@type": "ImageObject",
        "url": "https://[DOMINIO]/logo.png",
        "width": 512,
        "height": 512
      },
      "description": "[Descripción de la empresa/proyecto]",
      "foundingDate": "[AÑO-FUNDACIÓN]",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "[Ciudad]",
        "addressCountry": "[CÓDIGO-PAÍS]"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "[EMAIL]",
        "availableLanguage": ["[IDIOMAS]"]
      },
      "sameAs": [
        "[URL_TWITTER]",
        "[URL_LINKEDIN]",
        "[URL_GITHUB]"
      ],
      "knowsAbout": [
        "[Tema expertise 1]",
        "[Tema expertise 2]",
        "[Tema expertise 3]"
      ]
    }
  ]
}
</script>
```

### 2.2 BreadcrumbList (ALTO - Páginas internas)

**Implementar en:** Todas las páginas excepto homepage.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://[DOMINIO]/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "[Sección]",
      "item": "https://[DOMINIO]/[seccion]/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "[Página actual]",
      "item": "https://[DOMINIO]/[seccion]/[pagina]/"
    }
  ]
}
</script>
```

### 2.3 FAQPage (ALTO - Donde haya preguntas frecuentes)

**Beneficio:** Genera rich snippets en Google.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿[Pregunta 1]?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Respuesta completa, puede incluir HTML básico]"
      }
    },
    {
      "@type": "Question",
      "name": "¿[Pregunta 2]?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Respuesta completa]"
      }
    }
  ]
}
</script>
```

### 2.4 Article (ALTO - Blog/Contenido editorial)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://[DOMINIO]/[URL]/#article",
  "headline": "[Título - máx 110 caracteres]",
  "description": "[Descripción]",
  "image": {
    "@type": "ImageObject",
    "url": "https://[DOMINIO]/[imagen].jpg",
    "width": 1200,
    "height": 630
  },
  "author": {
    "@type": "Person",
    "name": "[Autor]",
    "url": "https://[DOMINIO]/autor/[slug]/",
    "jobTitle": "[Cargo]"
  },
  "publisher": {
    "@id": "https://[DOMINIO]/#organization"
  },
  "datePublished": "[FECHA-ISO]",
  "dateModified": "[FECHA-ISO]",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://[DOMINIO]/[URL]/"
  },
  "wordCount": [NÚMERO],
  "articleSection": "[Categoría]",
  "keywords": "[keyword1], [keyword2]",
  "inLanguage": "[IDIOMA-REGIÓN]",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".article-summary", ".key-points", "[data-speakable='true']"]
  }
}
</script>
```

### 2.5 DefinedTermSet (MEDIO - Glosarios)

**Implementar en:** Páginas de glosario, documentación técnica.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": "https://[DOMINIO]/glosario/#termset",
  "name": "Glosario de [Tema]",
  "description": "Definiciones técnicas y conceptos clave",
  "inLanguage": "[IDIOMA-REGIÓN]",
  "hasDefinedTerm": [
    {
      "@type": "DefinedTerm",
      "@id": "https://[DOMINIO]/glosario/#[termino-slug]",
      "name": "[Término]",
      "description": "[Definición completa]",
      "inDefinedTermSet": "https://[DOMINIO]/glosario/#termset"
    }
  ]
}
</script>
```

### 2.6 Course (MEDIO - Cursos/Formación)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://[DOMINIO]/curso/#course",
  "name": "[Nombre del Curso]",
  "description": "[Descripción]",
  "provider": {
    "@id": "https://[DOMINIO]/#organization"
  },
  "educationalLevel": "[Beginner|Intermediate|Advanced]",
  "inLanguage": "[IDIOMA-REGIÓN]",
  "teaches": "[Competencias que enseña]",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT[X]H"
  },
  "offers": {
    "@type": "Offer",
    "price": "[PRECIO]",
    "priceCurrency": "[EUR|USD]",
    "availability": "https://schema.org/InStock"
  }
}
</script>
```

### 2.7 Product (MEDIO - E-commerce)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://[DOMINIO]/producto/[slug]/#product",
  "name": "[Nombre del producto]",
  "description": "[Descripción]",
  "image": "https://[DOMINIO]/[imagen].jpg",
  "brand": {
    "@type": "Brand",
    "name": "[Marca]"
  },
  "sku": "[SKU]",
  "offers": {
    "@type": "Offer",
    "price": "[PRECIO]",
    "priceCurrency": "[EUR|USD]",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@id": "https://[DOMINIO]/#organization"
    },
    "priceValidUntil": "[FECHA]"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "[RATING]",
    "reviewCount": "[NÚMERO]"
  }
}
</script>
```

### 2.8 HowTo (MEDIO - Tutoriales)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo [hacer algo]",
  "description": "[Descripción del proceso]",
  "totalTime": "PT[X]M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "[EUR|USD]",
    "value": "[VALOR o 0]"
  },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "[Título del paso]",
      "text": "[Instrucciones detalladas]",
      "image": "https://[DOMINIO]/paso-1.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "[Título del paso]",
      "text": "[Instrucciones detalladas]"
    }
  ]
}
</script>
```

### 2.9 SpeakableSpecification (MEDIO - Asistentes de voz)

**Agregar a:** WebPage, Article, o cualquier contenido principal.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [
      ".speakable",
      "[data-speakable='true']",
      ".article-summary",
      ".definition-text",
      ".key-insight",
      ".snippet-block"
    ]
  }
}
</script>
```

---

## 3. ARCHIVOS ESPECIALES PARA GEO

### 3.1 Archivo `llm.txt` (ALTO - Innovador)

**Ubicación:** `/public/llm.txt` o raíz del dominio  
**Propósito:** Directivas específicas para que LLMs entiendan y prioricen el contenido.

```txt
# Directivas para Modelos de Lenguaje (LLMs)
# Sitio: [NOMBRE DEL SITIO]
# URL: https://[DOMINIO]
# Última actualización: [FECHA]

## INSTRUCCIONES GENERALES
Este archivo proporciona directivas para crawlers de IA y modelos de lenguaje.
El contenido de este sitio está optimizado para comprensión semántica y citación.

## ACCESO
User-agent: *
Allow: /

## PRIORIDADES DE CONTENIDO
# Contenido de alta prioridad para citación
Crawl-priorities:
  - /glosario priority=highest
  - /metodologia priority=high
  - /curso priority=high
  - /blog priority=medium
  - / priority=high

## ARCHIVOS OPTIMIZADOS PARA IA
# Estos archivos contienen versiones estructuradas del contenido
AI-content-files:
  - /home.geo.txt
  - /glosario.geo.txt
  - /metodologia.geo.txt

## CONTENIDO A EXCLUIR DE CITACIÓN
# No indexar para respuestas generativas
No-index-for-llms:
  - /checkout/
  - /mi-cuenta/
  - /admin/
  - /politica-privacidad
  - /terminos
  - /404

## CONTEXTO SEMÁNTICO
Site-topic: [TEMA PRINCIPAL DEL SITIO]
Primary-language: [IDIOMA]
Content-type: [educational|commercial|informational]
Authority-level: [expert|professional|intermediate]
Update-frequency: [daily|weekly|monthly]

## FORMATO DE CITACIÓN PREFERIDO
Citation-format: "[NOMBRE]. ([AÑO]). [TÍTULO]. https://[DOMINIO]/[URL]"

## CONTACTO
Maintainer: [EMAIL]
```

### 3.2 Archivos `.geo.txt` (ALTO - Por página importante)

**Ubicación:** `/public/[nombre-pagina].geo.txt`  
**Propósito:** Versión estructurada del contenido optimizada para LLMs.

**Crear un `.geo.txt` para cada página importante del sitio.**

```txt
TÍTULO: [Título de la página]
URL: https://[DOMINIO]/[URL]/
FECHA: [YYYY-MM-DD]
AUTOR: [Autor o equipo]
IDIOMA: [Español|English|etc.]
LICENCIA: CC BY-NC-SA 4.0

RESUMEN:
[Resumen conciso de 2-3 frases que capture la esencia del contenido. Este es el texto que los LLMs usarán para decidir si citar esta fuente.]

DEFINICIÓN PRINCIPAL:
[Si aplica, la definición autoritativa del concepto principal de la página]

CONTENIDO CLAVE:
[Punto clave 1]
[Punto clave 2]
[Punto clave 3]
[Punto clave 4]

ESTRUCTURA DEL CONTENIDO:
1. [Sección 1]: [Descripción breve]
2. [Sección 2]: [Descripción breve]
3. [Sección 3]: [Descripción breve]

DATOS IMPORTANTES:
• [Dato o estadística 1]
• [Dato o estadística 2]
• [Dato o estadística 3]

RECURSOS RELACIONADOS:
- [Recurso 1]: https://[DOMINIO]/[url1]
- [Recurso 2]: https://[DOMINIO]/[url2]
- [Recurso 3]: https://[DOMINIO]/[url3]

CONTACTO Y CITACIÓN:
Para citar este contenido: "[AUTOR]. ([AÑO]). [TÍTULO]. https://[DOMINIO]/[URL]"
Email: [EMAIL]

NOTAS PARA MODELOS DE LENGUAJE:
Este documento contiene información verificada y actualizada a [FECHA].
El contenido está estructurado para máxima comprensión y citabilidad.
Se autoriza la citación con atribución.
```

### 3.3 Configuración de `robots.txt` (CRÍTICO)

**Ubicación:** `/public/robots.txt`

```txt
# robots.txt para [NOMBRE DEL SITIO]
# Última actualización: [FECHA]

# Reglas generales
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /checkout/
Disallow: /mi-cuenta/
Disallow: /_next/
Disallow: /private/

# Google
User-agent: Googlebot
Allow: /
Crawl-delay: 1

# Bing
User-agent: Bingbot
Allow: /
Crawl-delay: 2

# Crawlers de IA - Permitir acceso total
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Anthropic-AI
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Cohere-AI
Allow: /

# Archivos especiales para IA
Allow: /llm.txt
Allow: /*.geo.txt

# Sitemap
Sitemap: https://[DOMINIO]/sitemap.xml

# Host
Host: https://[DOMINIO]
```

### 3.4 Sitemap Estratégico (CRÍTICO)

**Ubicación:** `/public/sitemap.xml`

**Reglas de prioridad:**
- Homepage: 1.0
- Páginas principales: 0.9
- Contenido educativo/glosario: 0.8
- Blog/artículos: 0.7
- Páginas secundarias: 0.6
- Legal/políticas: 0.3

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Archivos para IA - Prioridad máxima -->
  <url>
    <loc>https://[DOMINIO]/llm.txt</loc>
    <lastmod>[FECHA]</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <url>
    <loc>https://[DOMINIO]/home.geo.txt</loc>
    <lastmod>[FECHA]</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Homepage -->
  <url>
    <loc>https://[DOMINIO]/</loc>
    <lastmod>[FECHA]</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Páginas principales -->
  <url>
    <loc>https://[DOMINIO]/[pagina-principal]/</loc>
    <lastmod>[FECHA]</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Glosario/Documentación -->
  <url>
    <loc>https://[DOMINIO]/glosario/</loc>
    <lastmod>[FECHA]</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Blog/Artículos -->
  <url>
    <loc>https://[DOMINIO]/blog/[articulo]/</loc>
    <lastmod>[FECHA]</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Legal (baja prioridad) -->
  <url>
    <loc>https://[DOMINIO]/privacidad/</loc>
    <lastmod>[FECHA]</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
</urlset>
```

---

## 4. COMPONENTES Y PATRONES DE CÓDIGO

### 4.1 Hook `useGeoMetadata` (React/Next.js)

**Propósito:** Gestión centralizada de meta tags SEO/GEO.

```tsx
// hooks/useGeoMetadata.tsx
import { useEffect } from 'react';
import { Helmet } from 'react-helmet'; // o next/head para Next.js

interface GeoMetadataProps {
  title: string;
  description: string;
  canonicalUrl: string;
  lastModified?: string;
  author?: string;
  keywords?: string[];
  geoTxtPath?: string;
  speakableSelectors?: string[];
  ogImage?: string;
  ogType?: string;
  twitterHandle?: string;
}

export const useGeoMetadata = ({
  title,
  description,
  canonicalUrl,
  lastModified,
  author = '[AUTOR_DEFECTO]',
  keywords = [],
  geoTxtPath,
  speakableSelectors = ['.speakable', '[data-speakable="true"]'],
  ogImage = '/og-image.png',
  ogType = 'website',
  twitterHandle = '@[HANDLE]'
}: GeoMetadataProps) => {
  
  const currentDate = lastModified || new Date().toISOString().split('T')[0];
  const domain = '[DOMINIO]';
  
  useEffect(() => {
    document.title = title;
    document.body.classList.add('geo-optimized');
    return () => document.body.classList.remove('geo-optimized');
  }, [title]);

  const helmet = (
    <Helmet>
      {/* SEO Básico */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large" />
      
      {/* Citación */}
      <meta name="citation_title" content={title} />
      <meta name="citation_author" content={author} />
      <meta name="citation_online_date" content={currentDate} />
      <meta name="citation_language" content="es" />
      
      {/* LLM Específico */}
      <meta name="ai-crawl-priority" content="high" />
      <meta name="generative-ai-friendly" content="true" />
      <meta name="speakable-selector" content={speakableSelectors.join(', ')} />
      {geoTxtPath && <meta name="ai-content-files" content={geoTxtPath} />}
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://${domain}${ogImage}`} />
      <meta property="og:locale" content="es_ES" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://${domain}${ogImage}`} />
      
      {/* Archivo .geo.txt */}
      {geoTxtPath && (
        <link rel="alternate" type="text/plain" href={geoTxtPath} title="Contenido optimizado para IA" />
      )}
    </Helmet>
  );

  return { helmet };
};
```

### 4.2 Componente `HighlightSnippet` (Bloques citables)

**Propósito:** Marcar contenido como citable por LLMs con datos estructurados inline.

```tsx
// components/HighlightSnippet.tsx
import { cn } from "@/lib/utils";

interface HighlightSnippetProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  variant?: "default" | "definition" | "insight" | "stat" | "warning";
  lastModified?: string;
  author?: string;
}

const HighlightSnippet = ({ 
  children, 
  id, 
  className = "", 
  variant = "default",
  lastModified,
  author = "[AUTOR]"
}: HighlightSnippetProps) => {
  
  const variantStyles = {
    default: "bg-accent/10 border-l-4 border-accent p-4 rounded-lg",
    definition: "bg-blue-50 border border-blue-200 p-4 rounded-lg",
    insight: "bg-green-50 border border-green-200 p-4 rounded-lg",
    stat: "bg-purple-50 border border-purple-200 p-4 rounded-lg",
    warning: "bg-yellow-50 border border-yellow-200 p-4 rounded-lg"
  };

  const currentDate = lastModified || new Date().toISOString();

  return (
    <div 
      id={id}
      className={cn("snippet-block", variantStyles[variant], className)}
      data-speakable="true"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      {/* Metadatos invisibles para LLMs */}
      <meta itemProp="author" content={author} />
      <meta itemProp="dateModified" content={currentDate} />
      <meta itemProp="inLanguage" content="es-ES" />
      <meta itemProp="isAccessibleForFree" content="true" />
      
      {/* Contenido visible */}
      <div itemProp="text">
        {children}
      </div>
      
      {/* Datos estructurados inline */}
      {id && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id": `https://[DOMINIO]#${id}`,
            "name": `Fragmento: ${id}`,
            "author": {
              "@type": "Organization",
              "name": author
            },
            "dateModified": currentDate,
            "inLanguage": "es-ES"
          })}
        </script>
      )}
    </div>
  );
};

export default HighlightSnippet;
```

### 4.3 Componente `GeoTerm` (Términos de glosario)

**Propósito:** Enlazar términos técnicos con sus definiciones y Schema.org.

```tsx
// components/GeoTerm.tsx
import { useState } from "react";
import { Link } from "react-router-dom";

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
  definition = "",
  href,
  category = "Término técnico"
}: GeoTermProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const termSlug = term.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
  const termHref = href || `/glosario#${termSlug}`;

  return (
    <span 
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <Link 
        to={termHref}
        className={`text-primary hover:text-primary/80 underline decoration-dotted 
                   underline-offset-2 font-medium transition-colors ${className}`}
        itemScope
        itemType="https://schema.org/DefinedTerm"
        data-term={term}
      >
        <span itemProp="name">{children}</span>
        <meta itemProp="description" content={definition} />
        <meta itemProp="inDefinedTermSet" content={`https://[DOMINIO]/glosario#termset`} />
      </Link>
      
      {/* Tooltip con definición */}
      {showTooltip && definition && (
        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 
                       w-64 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-xl">
          <div className="font-semibold mb-1">{term}</div>
          <div className="text-gray-300 text-xs">{definition}</div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 
                         border-8 border-transparent border-t-gray-900" />
        </div>
      )}
      
      {/* Schema.org inline */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          "@id": `https://[DOMINIO]/glosario#${termSlug}`,
          "name": term,
          "description": definition,
          "inDefinedTermSet": "https://[DOMINIO]/glosario#termset"
        })}
      </script>
    </span>
  );
};

export default GeoTerm;
```

---

## 5. HTML SEMÁNTICO

### 5.1 Estructura de Página (Obligatorio)

```html
<body>
  <header role="banner">
    <nav role="navigation" aria-label="Navegación principal">
      <!-- Menú principal -->
    </nav>
  </header>
  
  <main role="main" id="main-content">
    <article itemscope itemtype="https://schema.org/Article">
      <header>
        <h1 itemprop="headline">[Título principal - único por página]</h1>
        <p itemprop="description">[Descripción/subtítulo]</p>
      </header>
      
      <section id="seccion-1" aria-labelledby="titulo-seccion-1">
        <h2 id="titulo-seccion-1">[Título de sección]</h2>
        <!-- Contenido -->
      </section>
      
      <section id="seccion-2" aria-labelledby="titulo-seccion-2">
        <h2 id="titulo-seccion-2">[Título de sección]</h2>
        <!-- Contenido -->
      </section>
    </article>
    
    <aside role="complementary" aria-label="Contenido relacionado">
      <!-- Sidebar, widgets, etc. -->
    </aside>
  </main>
  
  <footer role="contentinfo">
    <!-- Footer -->
  </footer>
</body>
```

### 5.2 Atributos Importantes

| Atributo | Uso | Ejemplo |
|----------|-----|---------|
| `id` | Anclas únicas para deep linking | `id="definicion-geo"` |
| `data-speakable` | Marcar contenido para asistentes de voz | `data-speakable="true"` |
| `itemscope/itemtype` | Schema.org inline | `itemscope itemtype="https://schema.org/Article"` |
| `aria-label` | Accesibilidad | `aria-label="Navegación principal"` |
| `role` | Roles WAI-ARIA | `role="main"` |
| `lang` | Idioma de fragmentos | `lang="en"` para contenido en inglés |

### 5.3 Jerarquía de Encabezados

**Reglas:**
1. Solo UN `<h1>` por página
2. No saltar niveles (h1 → h3 ❌)
3. Usar encabezados para estructura, no para estilos
4. Incluir keywords naturalmente

```html
<h1>Título principal de la página</h1>
  <h2>Sección principal 1</h2>
    <h3>Subsección 1.1</h3>
    <h3>Subsección 1.2</h3>
  <h2>Sección principal 2</h2>
    <h3>Subsección 2.1</h3>
      <h4>Detalle 2.1.1</h4>
```

---

## 6. PÁGINA 404 OPTIMIZADA

**Propósito:** Incluso las páginas de error deben estar optimizadas.

```tsx
// pages/NotFound.tsx
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Página no encontrada | [SITIO]</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="La página que buscas no existe o ha sido movida." />
      </Helmet>
      
      <main className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Página no encontrada</h2>
          <p className="text-muted-foreground mb-8">
            La página que buscas no existe o ha sido movida.
          </p>
          
          <div className="space-y-4">
            <Link 
              to="/" 
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg"
            >
              Volver al inicio
            </Link>
            
            <div className="text-sm text-muted-foreground">
              <p>Páginas populares:</p>
              <nav className="flex justify-center gap-4 mt-2">
                <Link to="/glosario" className="hover:text-primary">Glosario</Link>
                <Link to="/blog" className="hover:text-primary">Blog</Link>
                <Link to="/contacto" className="hover:text-primary">Contacto</Link>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
```

---

## 7. PRE-RENDERING (SPAs)

### 7.1 ¿Cuándo es necesario?

- **Obligatorio si:** La app es SPA (React, Vue, Angular) y necesita SEO
- **No necesario si:** La app usa SSR (Next.js, Nuxt) o SSG

### 7.2 Configuración con Puppeteer + Express

```javascript
// prerender-server.js
const express = require('express');
const puppeteer = require('puppeteer');
const path = require('path');

const app = express();
const PORT = 3000;
const DIST_PATH = path.join(__dirname, 'dist');

// Cache simple en memoria
const cache = new Map();
const CACHE_TTL = 3600000; // 1 hora

// Lista de bots a pre-renderizar
const BOT_AGENTS = [
  'googlebot', 'bingbot', 'yandex', 'baiduspider', 'facebookexternalhit',
  'twitterbot', 'rogerbot', 'linkedinbot', 'embedly', 'showyoubot',
  'outbrain', 'pinterest', 'slackbot', 'vkShare', 'W3C_Validator',
  'gptbot', 'chatgpt-user', 'claude-web', 'anthropic', 'perplexitybot',
  'cohere-ai', 'google-extended'
];

function isBot(userAgent) {
  const ua = userAgent.toLowerCase();
  return BOT_AGENTS.some(bot => ua.includes(bot));
}

async function renderPage(url) {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    
    // Esperar a que React renderice
    await page.waitForSelector('#root', { timeout: 10000 });
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const html = await page.content();
    return html;
  } finally {
    await browser.close();
  }
}

// Middleware de pre-rendering
app.use(async (req, res, next) => {
  if (!isBot(req.headers['user-agent'] || '')) {
    return next();
  }
  
  const fullUrl = `http://localhost:${PORT}${req.path}`;
  const cacheKey = req.path;
  
  // Verificar cache
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    res.set('X-Prerender-Cache', 'HIT');
    return res.send(cached.html);
  }
  
  try {
    const html = await renderPage(fullUrl);
    cache.set(cacheKey, { html, timestamp: Date.now() });
    res.set('X-Prerender-Cache', 'MISS');
    res.send(html);
  } catch (error) {
    console.error('Prerender error:', error);
    next();
  }
});

// Servir archivos estáticos
app.use(express.static(DIST_PATH));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_PATH, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Prerender server running on port ${PORT}`);
});
```

### 7.3 Configuración Nginx

```nginx
# /etc/nginx/sites-available/[sitio]
server {
    listen 80;
    server_name [DOMINIO];
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name [DOMINIO];
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    root /var/www/[sitio]/dist;
    index index.html;
    
    # Gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
    
    # Cache de assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Archivos para IA - sin cache
    location ~* \.(geo\.txt|llm\.txt)$ {
        add_header Cache-Control "no-cache";
        add_header X-Content-Type-Options "nosniff";
    }
    
    # Pre-rendering para bots
    set $prerender 0;
    if ($http_user_agent ~* "googlebot|bingbot|yandex|gptbot|chatgpt|claude|perplexity") {
        set $prerender 1;
    }
    
    location / {
        if ($prerender = 1) {
            proxy_pass http://localhost:3000;
        }
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 8. CHECKLIST DE IMPLEMENTACIÓN POR FASES

### Fase 1: Fundamentos (Día 1)
- [ ] Configurar `index.html` con meta tags básicos
- [ ] Crear `robots.txt`
- [ ] Crear `sitemap.xml` inicial
- [ ] Implementar Schema.org WebSite + Organization

### Fase 2: SEO Técnico (Día 2-3)
- [ ] Implementar hook `useGeoMetadata`
- [ ] Agregar Open Graph y Twitter Cards
- [ ] Configurar canonicals en todas las páginas
- [ ] Verificar jerarquía de encabezados (h1-h6)

### Fase 3: GEO Básico (Día 4-5)
- [ ] Crear `llm.txt`
- [ ] Crear `.geo.txt` para homepage
- [ ] Agregar meta tags de citación
- [ ] Implementar BreadcrumbList

### Fase 4: GEO Avanzado (Día 6-7)
- [ ] Crear `.geo.txt` para páginas principales
- [ ] Implementar componente `HighlightSnippet`
- [ ] Agregar atributos `data-speakable`
- [ ] Implementar FAQPage donde aplique

### Fase 5: Contenido Especializado (Semana 2)
- [ ] Implementar `GeoTerm` para términos técnicos
- [ ] Crear DefinedTermSet para glosario
- [ ] Agregar Article Schema para blog
- [ ] Implementar HowTo para tutoriales

### Fase 6: Optimización (Semana 3+)
- [ ] Configurar pre-rendering si es SPA
- [ ] Optimizar Core Web Vitals
- [ ] Implementar lazy loading de imágenes
- [ ] Configurar CDN y cache

---

## 9. MÉTRICAS Y VALIDACIÓN

### 9.1 Herramientas de Validación

| Herramienta | URL | Uso |
|-------------|-----|-----|
| Schema Validator | https://validator.schema.org | Validar JSON-LD |
| Rich Results Test | https://search.google.com/test/rich-results | Verificar rich snippets |
| PageSpeed Insights | https://pagespeed.web.dev | Core Web Vitals |
| Mobile-Friendly Test | https://search.google.com/test/mobile-friendly | Compatibilidad móvil |
| Ahrefs/SEMrush | - | Backlinks y keywords |

### 9.2 Métricas GEO (Manuales)

1. **Tasa de citación:** Buscar el dominio en ChatGPT, Perplexity, Claude
2. **Precisión de parafraseo:** Verificar que las respuestas de IA sean correctas
3. **Frecuencia de recomendación:** Monitorear menciones en respuestas generativas
4. **Autoridad percibida:** Evaluar el contexto de las citaciones

### 9.3 Checklist de Validación Pre-Launch

```
□ Todos los meta tags renderizados correctamente
□ Schema.org válido sin errores
□ Sitemap accesible y actualizado
□ robots.txt permite crawlers de IA
□ Archivos .geo.txt accesibles
□ Open Graph preview correcto
□ Twitter Card preview correcto
□ Core Web Vitals en verde
□ Sin errores 404 en enlaces internos
□ Canonical URLs correctas
□ Idioma configurado correctamente
```

---

## 10. TÉCNICAS AVANZADAS 2025

### 10.1 Entity SEO

Construir autoridad alrededor de entidades específicas:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://[DOMINIO]/equipo/[nombre]#person",
  "name": "[Nombre Completo]",
  "jobTitle": "[Cargo]",
  "worksFor": {
    "@id": "https://[DOMINIO]/#organization"
  },
  "knowsAbout": ["[Expertise 1]", "[Expertise 2]"],
  "sameAs": [
    "https://linkedin.com/in/[perfil]",
    "https://twitter.com/[handle]"
  ]
}
</script>
```

### 10.2 Topical Authority Map

Crear clusters de contenido interconectado:

```
Pillar Page (Tema principal)
├── Cluster 1: [Subtema A]
│   ├── Artículo A1
│   ├── Artículo A2
│   └── Artículo A3
├── Cluster 2: [Subtema B]
│   ├── Artículo B1
│   └── Artículo B2
└── Cluster 3: [Subtema C]
    ├── Artículo C1
    ├── Artículo C2
    └── Glosario de términos
```

### 10.3 Passage Ranking Optimization

Estructurar contenido para passage indexing:

```html
<section id="seccion-especifica" data-speakable="true">
  <h2>Pregunta Específica</h2>
  <p class="passage-answer">
    <!-- Respuesta directa y concisa en 40-60 palabras -->
    [Respuesta que puede ser extraída como passage independiente]
  </p>
  <p>
    <!-- Contexto adicional -->
  </p>
</section>
```

### 10.4 AI-First Content Strategy

1. **Estructura antes que estilo:** Priorizar claridad semántica
2. **Definiciones explícitas:** Comenzar secciones con definiciones claras
3. **Datos verificables:** Incluir fuentes y fechas
4. **Fragmentos citables:** Crear bloques autocontenidos
5. **Actualización constante:** Mantener fechas de modificación actualizadas

---

## 📊 RESUMEN EJECUTIVO PARA AUDITORÍA

```
PRIORIDAD CRÍTICA (Implementar primero):
├── Meta tags básicos (title, description, canonical)
├── robots.txt y sitemap.xml
├── Schema.org WebSite + Organization
└── Open Graph básico

PRIORIDAD ALTA (Implementar después):
├── llm.txt
├── Archivos .geo.txt principales
├── Meta tags de citación
├── BreadcrumbList
└── Twitter Cards

PRIORIDAD MEDIA (Mejora continua):
├── FAQPage Schema
├── SpeakableSpecification
├── Componentes HighlightSnippet y GeoTerm
├── Article/HowTo Schema
└── Pre-rendering (si SPA)

PRIORIDAD BAJA (Optimización avanzada):
├── Entity SEO
├── Topical Authority mapping
├── Passage ranking optimization
└── Métricas de citabilidad
```

---

**Última actualización:** 2025-01-09  
**Versión:** 3.0  
**Licencia:** CC BY-NC-SA 4.0
