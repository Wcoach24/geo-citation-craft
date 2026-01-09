# 🚀 Guía Completa de Buenas Prácticas SEO + GEO

> **Versión:** 2.0 | **Última actualización:** Enero 2025  
> **Autor:** Consultor Senior SEO/GEO  
> **Licencia:** CC BY-NC-SA 4.0

---

## 📋 Índice

1. [Introducción: SEO + GEO en 2025](#1-introducción-seo--geo-en-2025)
2. [Arquitectura del `index.html`](#2-arquitectura-del-indexhtml)
3. [Datos Estructurados (Schema.org)](#3-datos-estructurados-schemaorg)
4. [Archivos `.geo.txt` para LLMs](#4-archivos-geotxt-para-llms)
5. [Configuración de `robots.txt`](#5-configuración-de-robotstxt)
6. [Archivo `llm.txt` (Innovador)](#6-archivo-llmtxt-innovador)
7. [Sitemap Estratégico](#7-sitemap-estratégico)
8. [Componentes Reutilizables (React)](#8-componentes-reutilizables-react)
9. [HTML Semántico](#9-html-semántico)
10. [Página 404 Optimizada](#10-página-404-optimizada)
11. [Pre-rendering y SSR](#11-pre-rendering-y-ssr)
12. [Checklist de Implementación](#12-checklist-de-implementación)
13. [Métricas y Monitorización](#13-métricas-y-monitorización)
14. [Técnicas Avanzadas 2025](#14-técnicas-avanzadas-2025)

---

## 1. Introducción: SEO + GEO en 2025

### ¿Qué es GEO?

**Generative Engine Optimization (GEO)** es el conjunto de técnicas para optimizar contenido web para que sea:
- **Comprendido** correctamente por LLMs (ChatGPT, Claude, Gemini, Perplexity)
- **Citado** como fuente autorizada
- **Recomendado** a usuarios que consultan IA

### La Nueva Realidad

```
SEO Tradicional          →  GEO (Complementario)
─────────────────────────────────────────────────
Rankings en SERPs        →  Citaciones en respuestas IA
Keywords                 →  Estructura semántica
Backlinks                →  Citabilidad y autoridad
CTR                      →  Precisión de parafraseo
Tráfico web              →  Visibilidad generativa
```

### Principio Fundamental

> **"El contenido optimizado para LLMs también es excelente para SEO tradicional, pero no viceversa."**

---

## 2. Arquitectura del `index.html`

### 2.1 Meta Tags Básicos (Obligatorios)

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- SEO Básico -->
  <title>[Título] - [Marca] | [Propuesta de valor]</title>
  <meta name="description" content="[Descripción 150-160 caracteres con keyword principal]" />
  <meta name="keywords" content="[keyword1], [keyword2], [keyword3]" />
  <meta name="author" content="[Nombre o Empresa]" />
  <link rel="canonical" href="https://tudominio.com/" />
  
  <!-- Idioma y región -->
  <meta name="language" content="es" />
  <meta name="geo.region" content="ES" />
  <meta http-equiv="content-language" content="es-ES" />
```

### 2.2 Meta Tags para Robots (Crítico)

```html
  <!-- Directivas para crawlers -->
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <meta name="googlebot" content="index, follow, max-image-preview:large" />
  <meta name="bingbot" content="index, follow" />
  
  <!-- Fechas importantes -->
  <meta name="revisit-after" content="7 days" />
  <meta name="date" content="2025-01-09" />
```

### 2.3 Meta Tags para Citación (GEO - Innovador)

```html
  <!-- Metadatos de citación académica/profesional -->
  <meta name="citation_title" content="[Título del contenido]" />
  <meta name="citation_author" content="[Autor]" />
  <meta name="citation_publication_date" content="2025" />
  <meta name="citation_online_date" content="2025-01-09" />
  <meta name="citation_language" content="es" />
  <meta name="citation_publisher" content="[Tu Empresa]" />
  
  <!-- Para papers/documentos técnicos -->
  <meta name="citation_abstract" content="[Resumen del contenido]" />
  <meta name="citation_keywords" content="[keywords separados por coma]" />
```

### 2.4 Meta Tags Específicos para LLMs (Vanguardia 2025)

```html
  <!-- Directivas para modelos de IA -->
  <meta name="ai-content-files" content="/home.geo.txt, /llm.txt" />
  <meta name="llm-content-summary" content="[Resumen conciso del sitio para LLMs]" />
  <meta name="ai-crawl-priority" content="high" />
  <meta name="generative-ai-friendly" content="true" />
  
  <!-- Speakable para asistentes de voz -->
  <meta name="speakable-selector" content=".speakable, [data-speakable='true']" />
  
  <!-- Indicadores de calidad para IA -->
  <meta name="content-type" content="educational" />
  <meta name="expertise-level" content="professional" />
  <meta name="fact-checked" content="true" />
  <meta name="last-verified" content="2025-01-09" />
```

### 2.5 Open Graph Completo

```html
  <!-- Open Graph (Facebook, LinkedIn, etc.) -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://tudominio.com/" />
  <meta property="og:title" content="[Título atractivo]" />
  <meta property="og:description" content="[Descripción compelling]" />
  <meta property="og:image" content="https://tudominio.com/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="[Descripción de la imagen]" />
  <meta property="og:locale" content="es_ES" />
  <meta property="og:site_name" content="[Nombre del sitio]" />
  
  <!-- Artículos (si aplica) -->
  <meta property="article:published_time" content="2025-01-09T10:00:00Z" />
  <meta property="article:modified_time" content="2025-01-09T10:00:00Z" />
  <meta property="article:author" content="[URL del autor]" />
  <meta property="article:section" content="[Categoría]" />
  <meta property="article:tag" content="[tag1]" />
```

### 2.6 Twitter Cards

```html
  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@tuhandle" />
  <meta name="twitter:creator" content="@tuhandle" />
  <meta name="twitter:title" content="[Título]" />
  <meta name="twitter:description" content="[Descripción]" />
  <meta name="twitter:image" content="https://tudominio.com/twitter-image.png" />
  <meta name="twitter:image:alt" content="[Descripción de la imagen]" />
```

### 2.7 Enlaces Importantes

```html
  <!-- Recursos alternativos para LLMs -->
  <link rel="alternate" type="text/plain" href="/home.geo.txt" title="Versión optimizada para IA" />
  <link rel="alternate" type="text/plain" href="/llm.txt" title="Guía para LLMs" />
  
  <!-- Favicons completos -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
  
  <!-- DNS Prefetch para rendimiento -->
  <link rel="dns-prefetch" href="//fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
</head>
```

---

## 3. Datos Estructurados (Schema.org)

### 3.1 WebSite + SearchAction

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://tudominio.com/#website",
  "url": "https://tudominio.com/",
  "name": "[Nombre del sitio]",
  "description": "[Descripción]",
  "inLanguage": "es-ES",
  "publisher": {
    "@id": "https://tudominio.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://tudominio.com/buscar?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
</script>
```

### 3.2 Organization (E-E-A-T)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://tudominio.com/#organization",
  "name": "[Nombre de la empresa]",
  "alternateName": "[Nombre alternativo]",
  "url": "https://tudominio.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://tudominio.com/logo.png",
    "width": 512,
    "height": 512
  },
  "description": "[Descripción de la empresa]",
  "foundingDate": "2025-01-01",
  "founders": [
    {
      "@type": "Person",
      "name": "[Nombre del fundador]",
      "jobTitle": "[Cargo]"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "[Ciudad]",
    "addressCountry": "ES"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "contacto@tudominio.com",
    "availableLanguage": ["Spanish", "English"]
  },
  "sameAs": [
    "https://twitter.com/tuhandle",
    "https://linkedin.com/company/tuempresa",
    "https://github.com/tuempresa"
  ],
  "knowsAbout": [
    "[Tema 1]",
    "[Tema 2]",
    "[Tema 3]"
  ]
}
</script>
```

### 3.3 BreadcrumbList

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
      "item": "https://tudominio.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "[Sección]",
      "item": "https://tudominio.com/seccion/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "[Página actual]",
      "item": "https://tudominio.com/seccion/pagina/"
    }
  ]
}
</script>
```

### 3.4 FAQPage (Rich Snippets)

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
        "text": "[Respuesta completa a la pregunta 1]"
      }
    },
    {
      "@type": "Question",
      "name": "¿[Pregunta 2]?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Respuesta completa a la pregunta 2]"
      }
    }
  ]
}
</script>
```

### 3.5 Article (Para blogs/contenido editorial)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://tudominio.com/articulo/#article",
  "headline": "[Título del artículo - max 110 caracteres]",
  "description": "[Descripción]",
  "image": {
    "@type": "ImageObject",
    "url": "https://tudominio.com/imagen-articulo.jpg",
    "width": 1200,
    "height": 630
  },
  "author": {
    "@type": "Person",
    "name": "[Nombre del autor]",
    "url": "https://tudominio.com/autor/",
    "jobTitle": "[Cargo]",
    "sameAs": ["https://linkedin.com/in/autor"]
  },
  "publisher": {
    "@id": "https://tudominio.com/#organization"
  },
  "datePublished": "2025-01-09T10:00:00Z",
  "dateModified": "2025-01-09T10:00:00Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://tudominio.com/articulo/"
  },
  "wordCount": 2500,
  "articleSection": "[Categoría]",
  "keywords": "[keyword1], [keyword2]",
  "inLanguage": "es-ES",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".article-summary", ".key-points"]
  }
}
</script>
```

### 3.6 DefinedTermSet (Para glosarios)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": "https://tudominio.com/glosario/#termset",
  "name": "Glosario de [Tu Tema]",
  "description": "Definiciones técnicas y conceptos clave de [tu tema]",
  "inLanguage": "es-ES",
  "hasDefinedTerm": [
    {
      "@type": "DefinedTerm",
      "@id": "https://tudominio.com/glosario/#termino1",
      "name": "[Término 1]",
      "description": "[Definición completa del término 1]",
      "inDefinedTermSet": "https://tudominio.com/glosario/#termset"
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://tudominio.com/glosario/#termino2",
      "name": "[Término 2]",
      "description": "[Definición completa del término 2]",
      "inDefinedTermSet": "https://tudominio.com/glosario/#termset"
    }
  ]
}
</script>
```

### 3.7 Course (Para cursos/formación)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://tudominio.com/curso/#course",
  "name": "[Nombre del Curso]",
  "description": "[Descripción del curso]",
  "provider": {
    "@id": "https://tudominio.com/#organization"
  },
  "educationalLevel": "Intermediate",
  "inLanguage": "es-ES",
  "teaches": "[Competencias que enseña]",
  "numberOfCredits": 6,
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT20H",
    "instructor": {
      "@type": "Person",
      "name": "[Nombre del instructor]"
    }
  },
  "offers": {
    "@type": "Offer",
    "price": "99.00",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock"
  }
}
</script>
```

### 3.8 Product (Para e-commerce)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://tudominio.com/producto/#product",
  "name": "[Nombre del producto]",
  "description": "[Descripción]",
  "image": "https://tudominio.com/producto.jpg",
  "brand": {
    "@type": "Brand",
    "name": "[Marca]"
  },
  "sku": "[SKU]",
  "gtin13": "[EAN/GTIN]",
  "offers": {
    "@type": "Offer",
    "price": "49.99",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@id": "https://tudominio.com/#organization"
    },
    "priceValidUntil": "2025-12-31"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}
</script>
```

### 3.9 SpeakableSpecification (Asistentes de voz)

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
      ".key-insight"
    ]
  }
}
</script>
```

### 3.10 HowTo (Tutoriales)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo [hacer algo]",
  "description": "[Descripción del proceso]",
  "totalTime": "PT30M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "EUR",
    "value": "0"
  },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "[Nombre del paso 1]",
      "text": "[Descripción detallada del paso 1]",
      "image": "https://tudominio.com/paso1.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "[Nombre del paso 2]",
      "text": "[Descripción detallada del paso 2]"
    }
  ]
}
</script>
```

---

## 4. Archivos `.geo.txt` para LLMs

### 4.1 ¿Qué son?

Archivos de texto plano optimizados para ser parseados por LLMs. Contienen información estructurada de forma que los modelos de IA puedan extraer y citar fácilmente.

### 4.2 Estructura Recomendada

```txt
TÍTULO: [Título descriptivo del contenido]
URL: https://tudominio.com/pagina
FECHA: 2025-01-09
AUTOR: [Nombre o empresa]
IDIOMA: Español
LICENCIA: CC BY-NC-SA 4.0

RESUMEN:
[Párrafo conciso de 2-3 oraciones que resume el contenido principal. 
Debe ser auto-contenido y citable directamente.]

DEFINICIÓN PRINCIPAL:
[Si el contenido define un concepto, incluir la definición autoritativa aquí.
Debe ser precisa, verificable y citable.]

PUNTOS CLAVE:
1. [Punto clave 1 - Una oración completa y auto-contenida]
2. [Punto clave 2 - Una oración completa y auto-contenida]
3. [Punto clave 3 - Una oración completa y auto-contenida]
4. [Punto clave 4 - Una oración completa y auto-contenida]
5. [Punto clave 5 - Una oración completa y auto-contenida]

SECCIONES DETALLADAS:

## [Sección 1]
[Contenido detallado de la sección 1. Usar párrafos cortos.
Cada párrafo debe poder citarse de forma independiente.]

## [Sección 2]
[Contenido detallado de la sección 2.]

DATOS Y ESTADÍSTICAS:
• [Dato 1]: [Valor con fuente si aplica]
• [Dato 2]: [Valor con fuente si aplica]
• [Dato 3]: [Valor con fuente si aplica]

PREGUNTAS FRECUENTES:

P: ¿[Pregunta 1]?
R: [Respuesta completa y citable]

P: ¿[Pregunta 2]?
R: [Respuesta completa y citable]

RECURSOS RELACIONADOS:
- [Recurso 1]: https://tudominio.com/recurso1
- [Recurso 2]: https://tudominio.com/recurso2
- [Recurso 3]: https://tudominio.com/recurso3

CONTACTO Y CITACIÓN:
Para citar este contenido: "[Autor]. ([Año]). [Título]. [URL]"
Email: [email]
Web: [URL principal]

NOTAS PARA MODELOS DE LENGUAJE:
Este documento contiene información verificada y actualizada a [fecha].
El contenido está estructurado para máxima comprensión y citabilidad.
Se permite la citación con atribución bajo licencia [licencia].
```

### 4.3 Mejores Prácticas para `.geo.txt`

1. **Un archivo por página/tema principal**
2. **Nombres descriptivos**: `home.geo.txt`, `productos.geo.txt`, `glosario.geo.txt`
3. **Actualizar fechas** cuando cambie el contenido
4. **Incluir en robots.txt** con Allow explícito
5. **Referenciar en meta tags** con `ai-content-files`
6. **Mantener formato consistente** en todos los archivos

---

## 5. Configuración de `robots.txt`

### 5.1 Estructura Completa

```txt
# robots.txt - [Tu Dominio]
# Última actualización: 2025-01-09

# =============================================
# CRAWLERS DE BÚSQUEDA TRADICIONAL
# =============================================

User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Slurp
Allow: /
Crawl-delay: 2

User-agent: DuckDuckBot
Allow: /
Crawl-delay: 1

# =============================================
# REDES SOCIALES
# =============================================

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: Pinterest
Allow: /

# =============================================
# CRAWLERS DE IA GENERATIVA
# =============================================

# OpenAI (ChatGPT)
User-agent: GPTBot
Allow: /
Allow: /*.geo.txt$

# Anthropic (Claude)
User-agent: anthropic-ai
Allow: /
Allow: /*.geo.txt$

# Google AI (Gemini)
User-agent: Google-Extended
Allow: /

# Perplexity
User-agent: PerplexityBot
Allow: /
Allow: /*.geo.txt$

# Common Crawl (usado por muchos LLMs)
User-agent: CCBot
Allow: /

# =============================================
# REGLA GENERAL
# =============================================

User-agent: *
Allow: /

# Archivos específicos para LLMs
Allow: /llm.txt
Allow: /*.geo.txt$
Allow: /contenido-ia

# =============================================
# EXCLUSIONES
# =============================================

# Rutas privadas (ajustar según tu proyecto)
Disallow: /admin/
Disallow: /api/
Disallow: /private/
Disallow: /_next/
Disallow: /dashboard/

# Parámetros de búsqueda que generan duplicados
Disallow: /*?*sort=
Disallow: /*?*filter=
Disallow: /*?*page=

# =============================================
# SITEMAP
# =============================================

Sitemap: https://tudominio.com/sitemap.xml
```

### 5.2 Notas Importantes

- **GPTBot**: Crawler oficial de OpenAI para entrenar modelos
- **anthropic-ai**: Crawler de Anthropic (Claude)
- **Google-Extended**: Crawler de Google para entrenar Gemini/Bard
- **CCBot**: Common Crawl, usado como fuente de datos por muchos LLMs

> ⚠️ **Decisión estratégica**: Permitir estos crawlers aumenta tu citabilidad en IA, pero también significa que tu contenido puede usarse para entrenar modelos. Evalúa según tu caso de uso.

---

## 6. Archivo `llm.txt` (Innovador)

### 6.1 Propósito

El archivo `llm.txt` es una guía específica para que los LLMs entiendan cómo rastrear y priorizar tu contenido. Es un estándar emergente que complementa a robots.txt.

### 6.2 Estructura Completa

```txt
# =============================================================
# llm.txt - Guía de Rastreo para Modelos de Lenguaje Grandes
# =============================================================
# Sitio: [Tu Dominio]
# Fecha: 2025-01-09
# Contacto: [email]
# =============================================================

# PROPÓSITO
# Este archivo instruye a los LLMs sobre cómo rastrear, interpretar
# y priorizar el contenido del sitio para maximizar la citabilidad.

# =============================================================
# DIRECTIVAS GENERALES
# =============================================================

User-agent: *
Allow: /

# Versión estructurada del contenido
Content-for-llms: /*.geo.txt

# Página dedicada con contenido optimizado para IA
AI-landing-page: /contenido-ia

# =============================================================
# PRIORIZACIÓN DE CONTENIDO
# (Orden de importancia para comprensión y citación)
# =============================================================

# PRIORIDAD MÁXIMA (highest)
# Contenido core que define la identidad y expertise del sitio
Crawl-priorities: /glosario [priority: highest]
Crawl-priorities: /metodologia [priority: highest]
Crawl-priorities: /documentacion [priority: highest]

# PRIORIDAD ALTA (high)
# Contenido educativo y artículos principales
Crawl-priorities: /blog [priority: high]
Crawl-priorities: /guias [priority: high]
Crawl-priorities: /tutoriales [priority: high]
Crawl-priorities: /casos-estudio [priority: high]

# PRIORIDAD MEDIA (medium)
# Contenido complementario
Crawl-priorities: /recursos [priority: medium]
Crawl-priorities: /herramientas [priority: medium]
Crawl-priorities: /faq [priority: medium]

# PRIORIDAD BAJA (low)
# Información corporativa
Crawl-priorities: /acerca-de [priority: low]
Crawl-priorities: /equipo [priority: low]
Crawl-priorities: /contacto [priority: low]

# =============================================================
# CONTENIDO A EXCLUIR DE CITACIÓN
# =============================================================

# No indexar para respuestas de LLMs (pero sí rastreable)
No-index-for-llms: /checkout/
No-index-for-llms: /carrito/
No-index-for-llms: /mi-cuenta/
No-index-for-llms: /login/
No-index-for-llms: /registro/
No-index-for-llms: /politica-privacidad
No-index-for-llms: /terminos-servicio
No-index-for-llms: /cookies

# =============================================================
# METADATOS DEL SITIO
# =============================================================

Site-name: [Nombre del sitio]
Site-description: [Descripción concisa del sitio y su propósito]
Primary-language: es
Supported-languages: es, en
Content-type: [educational | commercial | informational | mixed]
Expertise-area: [Tu área de expertise principal]
Authority-signals: [Certificaciones, premios, menciones relevantes]

# =============================================================
# INSTRUCCIONES DE CITACIÓN
# =============================================================

Citation-format: "[Autor]. ([Año]). [Título]. Recuperado de [URL]"
Citation-license: CC BY-NC-SA 4.0
Attribution-required: true
Commercial-use: contact-required

# =============================================================
# HINTS TÉCNICOS PARA LLMS
# =============================================================

# Preferencias de formato
Preferred-format: JSON-LD for structured data
Semantic-elements: article, section, aside, nav, header, footer
Speakable-selector: [data-speakable="true"], .speakable

# Elementos clave para extracción
Key-selectors:
  - definitions: .definition, [itemtype*="DefinedTerm"]
  - summaries: .summary, .abstract, .tldr
  - key-points: .key-point, .highlight, .insight
  - quotes: blockquote, .quote
  - data: .statistic, .metric, .data-point

# =============================================================
# ACTUALIZACIONES
# =============================================================

Update-frequency: weekly
Last-full-crawl-recommended: monthly
Content-freshness-priority: blog > docs > static-pages
```

---

## 7. Sitemap Estratégico

### 7.1 Estructura con Prioridades

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- ============================================ -->
  <!-- CONTENIDO PARA IA (Máxima prioridad) -->
  <!-- ============================================ -->
  
  <url>
    <loc>https://tudominio.com/contenido-ia</loc>
    <lastmod>2025-01-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Archivos .geo.txt -->
  <url>
    <loc>https://tudominio.com/home.geo.txt</loc>
    <lastmod>2025-01-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  
  <url>
    <loc>https://tudominio.com/glosario.geo.txt</loc>
    <lastmod>2025-01-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.95</priority>
  </url>

  <!-- ============================================ -->
  <!-- PÁGINAS PRINCIPALES -->
  <!-- ============================================ -->
  
  <url>
    <loc>https://tudominio.com/</loc>
    <lastmod>2025-01-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <url>
    <loc>https://tudominio.com/glosario</loc>
    <lastmod>2025-01-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://tudominio.com/metodologia</loc>
    <lastmod>2025-01-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- ============================================ -->
  <!-- CONTENIDO EDUCATIVO -->
  <!-- ============================================ -->
  
  <url>
    <loc>https://tudominio.com/curso</loc>
    <lastmod>2025-01-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  
  <!-- Módulos del curso -->
  <url>
    <loc>https://tudominio.com/curso/modulo-1</loc>
    <lastmod>2025-01-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- ============================================ -->
  <!-- BLOG / ARTÍCULOS -->
  <!-- ============================================ -->
  
  <url>
    <loc>https://tudominio.com/blog</loc>
    <lastmod>2025-01-09</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://tudominio.com/blog/articulo-ejemplo</loc>
    <lastmod>2025-01-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- ============================================ -->
  <!-- CASOS DE ESTUDIO -->
  <!-- ============================================ -->
  
  <url>
    <loc>https://tudominio.com/casos</loc>
    <lastmod>2025-01-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>

  <!-- ============================================ -->
  <!-- PÁGINAS CORPORATIVAS -->
  <!-- ============================================ -->
  
  <url>
    <loc>https://tudominio.com/acerca-de</loc>
    <lastmod>2025-01-09</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
  
  <url>
    <loc>https://tudominio.com/contacto</loc>
    <lastmod>2025-01-09</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.4</priority>
  </url>

  <!-- ============================================ -->
  <!-- PÁGINAS LEGALES (Baja prioridad) -->
  <!-- ============================================ -->
  
  <url>
    <loc>https://tudominio.com/privacidad</loc>
    <lastmod>2025-01-09</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.2</priority>
  </url>
  
  <url>
    <loc>https://tudominio.com/terminos</loc>
    <lastmod>2025-01-09</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.2</priority>
  </url>

</urlset>
```

### 7.2 Guía de Prioridades

| Tipo de contenido | Priority | changefreq |
|-------------------|----------|------------|
| Homepage + Contenido IA | 1.0 | weekly |
| Archivos .geo.txt | 0.95 | weekly |
| Glosario/Definiciones | 0.9 | monthly |
| Metodología/Documentación | 0.9 | monthly |
| Cursos/Educación | 0.85 | monthly |
| Blog index | 0.8 | daily |
| Artículos individuales | 0.7 | monthly |
| Casos de estudio | 0.75 | monthly |
| Páginas corporativas | 0.5 | yearly |
| Páginas legales | 0.2 | yearly |

---

## 8. Componentes Reutilizables (React)

### 8.1 Hook `useGeoMetadata`

```tsx
// hooks/useGeoMetadata.tsx
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
  geoTxtPath?: string;
  ogImage?: string;
  articleSection?: string;
  publishedTime?: string;
}

export const useGeoMetadata = (props: GeoMetadataProps) => {
  const {
    title,
    description,
    canonicalUrl,
    lastModified = new Date().toISOString().split('T')[0],
    author = 'Tu Empresa',
    keywords = [],
    citationTitle,
    speakableSelectors = ['.speakable', '[data-speakable="true"]'],
    geoTxtPath,
    ogImage = '/og-image.png',
    articleSection,
    publishedTime,
  } = props;

  useEffect(() => {
    document.title = title;
    document.body.classList.add('geo-optimized');
    return () => document.body.classList.remove('geo-optimized');
  }, [title]);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: canonicalUrl,
    dateModified: lastModified,
    author: {
      '@type': 'Organization',
      name: author,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: speakableSelectors,
    },
  };

  const helmet = (
    <Helmet>
      {/* Básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Keywords */}
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      
      {/* Citación */}
      <meta name="citation_title" content={citationTitle || title} />
      <meta name="citation_author" content={author} />
      <meta name="citation_date" content={lastModified} />
      <meta name="citation_language" content="es" />
      
      {/* LLM específicos */}
      <meta name="ai-optimized" content="true" />
      <meta name="speakable-selector" content={speakableSelectors.join(', ')} />
      {geoTxtPath && (
        <link rel="alternate" type="text/plain" href={geoTxtPath} />
      )}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={articleSection ? 'article' : 'website'} />
      
      {/* Article específicos */}
      {articleSection && (
        <>
          <meta property="article:section" content={articleSection} />
          <meta property="article:modified_time" content={lastModified} />
          {publishedTime && (
            <meta property="article:published_time" content={publishedTime} />
          )}
        </>
      )}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );

  return { helmet, structuredData };
};
```

### 8.2 Componente `HighlightSnippet`

```tsx
// components/HighlightSnippet.tsx
import { cn } from "@/lib/utils";

interface HighlightSnippetProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  variant?: "default" | "definition" | "insight" | "stat" | "quote";
  author?: string;
  lastModified?: string;
}

export const HighlightSnippet = ({ 
  children, 
  id, 
  className = "", 
  variant = "default",
  author = "Tu Empresa",
  lastModified
}: HighlightSnippetProps) => {
  const variantStyles = {
    default: "bg-accent/10 border-l-4 border-accent",
    definition: "bg-blue-50 border border-blue-200 dark:bg-blue-950/20",
    insight: "bg-green-50 border border-green-200 dark:bg-green-950/20",
    stat: "bg-purple-50 border border-purple-200 dark:bg-purple-950/20",
    quote: "bg-amber-50 border-l-4 border-amber-400 italic dark:bg-amber-950/20"
  };

  const currentDate = lastModified || new Date().toISOString();

  return (
    <div 
      id={id}
      className={cn(
        "p-4 rounded-lg my-4", 
        variantStyles[variant], 
        className
      )}
      data-speakable="true"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      {/* Metadatos invisibles para crawlers */}
      <meta itemProp="author" content={author} />
      <meta itemProp="dateModified" content={currentDate} />
      <meta itemProp="inLanguage" content="es-ES" />
      
      {/* Contenido visible */}
      <div itemProp="text">
        {children}
      </div>
      
      {/* JSON-LD inline para el fragmento */}
      {id && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id": `#${id}`,
            "author": { "@type": "Organization", "name": author },
            "dateModified": currentDate,
            "inLanguage": "es-ES"
          })}
        </script>
      )}
    </div>
  );
};
```

### 8.3 Componente `GeoTerm`

```tsx
// components/GeoTerm.tsx
import { useState } from 'react';
import { cn } from "@/lib/utils";

interface GeoTermProps {
  term: string;
  definition: string;
  children: React.ReactNode;
  className?: string;
  href?: string;
  category?: string;
}

export const GeoTerm = ({ 
  term, 
  definition, 
  children, 
  className = "", 
  href,
  category = "Concepto"
}: GeoTermProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const termSlug = term.toLowerCase().replace(/\s+/g, '-');
  const termHref = href || `/glosario#${termSlug}`;

  return (
    <span 
      className="relative inline-block"
      itemScope 
      itemType="https://schema.org/DefinedTerm"
    >
      <a
        href={termHref}
        className={cn(
          "text-primary underline decoration-dotted underline-offset-2",
          "hover:decoration-solid cursor-help",
          className
        )}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        itemProp="url"
      >
        <span itemProp="name">{children}</span>
      </a>
      
      {/* Tooltip con definición */}
      {showTooltip && (
        <span 
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
                     bg-popover text-popover-foreground p-3 rounded-lg shadow-lg
                     text-sm max-w-xs z-50 border"
          role="tooltip"
        >
          <strong className="block mb-1">{term}</strong>
          <span itemProp="description">{definition}</span>
        </span>
      )}
      
      {/* Metadatos ocultos */}
      <meta itemProp="termCode" content={termSlug} />
      <meta itemProp="inDefinedTermSet" content="/glosario" />
      
      {/* JSON-LD inline */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          "name": term,
          "description": definition,
          "url": termHref,
          "inDefinedTermSet": {
            "@type": "DefinedTermSet",
            "name": category
          }
        })}
      </script>
    </span>
  );
};
```

### 8.4 Componente `SEOHead` (Para páginas sin React Helmet)

```tsx
// components/SEOHead.tsx
interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  noindex?: boolean;
}

export const SEOHead = ({ 
  title, 
  description, 
  canonical, 
  ogImage,
  noindex = false 
}: SEOHeadProps) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
};
```

---

## 9. HTML Semántico

### 9.1 Estructura de Página

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <!-- Meta tags aquí -->
</head>
<body>
  <header role="banner">
    <nav role="navigation" aria-label="Navegación principal">
      <!-- Navegación -->
    </nav>
  </header>

  <main role="main" id="main-content">
    <article itemscope itemtype="https://schema.org/Article">
      <header>
        <h1 itemprop="headline">[Título principal]</h1>
        <p class="meta" itemprop="description">[Descripción]</p>
        <time itemprop="datePublished" datetime="2025-01-09">
          9 de enero de 2025
        </time>
      </header>

      <section id="seccion-1" aria-labelledby="titulo-seccion-1">
        <h2 id="titulo-seccion-1">[Título sección 1]</h2>
        <p data-speakable="true">[Contenido citable]</p>
      </section>

      <section id="seccion-2" aria-labelledby="titulo-seccion-2">
        <h2 id="titulo-seccion-2">[Título sección 2]</h2>
        <!-- Contenido -->
      </section>

      <aside aria-label="Información relacionada">
        <!-- Contenido secundario -->
      </aside>
    </article>
  </main>

  <footer role="contentinfo">
    <!-- Footer -->
  </footer>
</body>
</html>
```

### 9.2 Elementos Semánticos Clave

| Elemento | Uso | SEO Impact |
|----------|-----|------------|
| `<article>` | Contenido independiente | Alto |
| `<section>` | Secciones temáticas | Alto |
| `<header>` | Cabecera de página/sección | Medio |
| `<footer>` | Pie de página/sección | Bajo |
| `<nav>` | Navegación | Medio |
| `<aside>` | Contenido relacionado | Bajo |
| `<main>` | Contenido principal | Alto |
| `<figure>` + `<figcaption>` | Imágenes con descripción | Alto |
| `<time>` | Fechas | Medio |
| `<address>` | Información de contacto | Bajo |
| `<dl>`, `<dt>`, `<dd>` | Listas de definiciones | Alto para glosarios |

### 9.3 Atributos Importantes

```html
<!-- IDs únicos para anclas -->
<section id="seccion-unica">

<!-- ARIA para accesibilidad -->
<nav aria-label="Navegación principal">
<section aria-labelledby="titulo-seccion">

<!-- Microdata inline -->
<span itemscope itemtype="https://schema.org/Person">
  <span itemprop="name">Juan Pérez</span>
</span>

<!-- Data attributes para LLMs -->
<p data-speakable="true">Contenido para asistentes de voz</p>
<div data-ai-summary="true">Resumen para IA</div>

<!-- Roles semánticos -->
<header role="banner">
<main role="main">
<footer role="contentinfo">
```

---

## 10. Página 404 Optimizada

### 10.1 Ejemplo Completo

```tsx
// pages/NotFound.tsx
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Página no encontrada | Tu Sitio</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="La página que buscas no existe." />
      </Helmet>

      <main className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-muted-foreground mb-4">
            404
          </h1>
          <h2 className="text-2xl font-semibold mb-4">
            Página no encontrada
          </h2>
          <p className="text-muted-foreground mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>

          <nav className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center gap-2 
                         bg-primary text-primary-foreground px-6 py-3 rounded-lg"
            >
              <Home className="w-4 h-4" />
              Ir al inicio
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 
                         border border-input px-6 py-3 rounded-lg"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver atrás
            </button>
          </nav>

          <div className="mt-12 text-sm text-muted-foreground">
            <p>¿Buscabas algo específico?</p>
            <ul className="mt-4 space-y-2">
              <li><Link to="/glosario" className="text-primary hover:underline">Glosario</Link></li>
              <li><Link to="/blog" className="text-primary hover:underline">Blog</Link></li>
              <li><Link to="/contacto" className="text-primary hover:underline">Contacto</Link></li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
```

### 10.2 Puntos Clave

- ✅ `noindex, nofollow` para evitar indexación
- ✅ Navegación útil para retener usuarios
- ✅ Links a páginas importantes
- ✅ Opción de volver atrás
- ✅ Diseño limpio y profesional

---

## 11. Pre-rendering y SSR

### 11.1 ¿Por qué es Necesario?

Las SPAs (Single Page Applications) tienen un problema: el contenido se genera en el cliente con JavaScript. Los crawlers tradicionales y algunos de IA pueden no ejecutar JS correctamente.

**Soluciones:**
1. **Pre-rendering**: Genera HTML estático en build time
2. **SSR**: Genera HTML en el servidor para cada request
3. **ISR**: Híbrido (Incremental Static Regeneration)

### 11.2 Implementación con Puppeteer (Pre-rendering)

```javascript
// prerender.js
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const ROUTES = [
  '/',
  '/glosario',
  '/metodologia',
  '/curso',
  '/blog',
  '/acerca-de',
  '/contacto'
];

const BASE_URL = 'http://localhost:3000';
const OUTPUT_DIR = './prerendered';

async function prerender() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox']
  });

  for (const route of ROUTES) {
    const page = await browser.newPage();
    
    // Configurar user agent como Googlebot
    await page.setUserAgent(
      'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
    );

    await page.goto(`${BASE_URL}${route}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Esperar a que el contenido dinámico cargue
    await page.waitForSelector('main', { timeout: 10000 });

    // Obtener el HTML final
    const html = await page.content();

    // Guardar el archivo
    const filePath = path.join(
      OUTPUT_DIR, 
      route === '/' ? 'index.html' : `${route.slice(1)}.html`
    );
    
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, html);

    console.log(`✅ Pre-rendered: ${route}`);
    await page.close();
  }

  await browser.close();
  console.log('🎉 Pre-rendering complete!');
}

prerender();
```

### 11.3 Configuración de Servidor (Nginx)

```nginx
# nginx.conf
server {
    listen 80;
    server_name tudominio.com;

    root /var/www/html;
    index index.html;

    # Detectar crawlers y servir versión pre-renderizada
    set $prerender 0;
    
    if ($http_user_agent ~* "googlebot|bingbot|yandex|baiduspider|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|showyoubot|outbrain|pinterest|slackbot|vkShare|W3C_Validator|GPTBot|anthropic-ai|PerplexityBot") {
        set $prerender 1;
    }

    # No pre-renderizar assets
    if ($uri ~* "\.(js|css|xml|less|png|jpg|jpeg|gif|pdf|doc|txt|ico|rss|zip|mp3|rar|exe|wmv|avi|ppt|mpg|mpeg|tif|wav|mov|psd|ai|xls|mp4|m4a|swf|dat|dmg|iso|flv|m4v|torrent|ttf|woff|svg|eot)$") {
        set $prerender 0;
    }

    location / {
        if ($prerender = 1) {
            rewrite .* /prerendered$uri.html break;
        }
        try_files $uri $uri/ /index.html;
    }

    # Servir archivos .geo.txt directamente
    location ~ \.geo\.txt$ {
        add_header Content-Type text/plain;
        add_header X-Robots-Tag "index, follow";
    }

    # Headers de seguridad
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
}
```

### 11.4 Alternativa: Prerender.io

```html
<!-- En el <head> -->
<meta name="prerender-status-code" content="200">

<!-- Para páginas que requieren JavaScript -->
<meta name="fragment" content="!">
```

---

## 12. Checklist de Implementación

### 12.1 Fase 1: Fundamentos (Semana 1)

- [ ] Configurar `index.html` con todos los meta tags
- [ ] Crear `robots.txt` completo
- [ ] Generar `sitemap.xml` con prioridades
- [ ] Implementar Schema.org básico (WebSite, Organization)
- [ ] Verificar en Google Search Console

### 12.2 Fase 2: Contenido para IA (Semana 2)

- [ ] Crear archivo `llm.txt`
- [ ] Generar archivos `.geo.txt` para páginas principales
- [ ] Crear página `/contenido-ia` dedicada
- [ ] Implementar meta tags específicos para LLMs
- [ ] Añadir `data-speakable` a contenido citable

### 12.3 Fase 3: Datos Estructurados (Semana 3)

- [ ] Implementar BreadcrumbList
- [ ] Añadir FAQPage donde corresponda
- [ ] Configurar Article para contenido editorial
- [ ] Implementar Product/Course según tipo de negocio
- [ ] Validar con Rich Results Test

### 12.4 Fase 4: Componentes React (Semana 4)

- [ ] Crear hook `useGeoMetadata`
- [ ] Implementar `HighlightSnippet`
- [ ] Crear componente `GeoTerm` para glosario
- [ ] Optimizar página 404
- [ ] Añadir componentes semánticos

### 12.5 Fase 5: Optimización Técnica (Semana 5)

- [ ] Configurar pre-rendering
- [ ] Optimizar imágenes (WebP, lazy loading)
- [ ] Implementar Core Web Vitals
- [ ] Configurar caché y CDN
- [ ] Auditoría con Lighthouse

### 12.6 Fase 6: Monitorización (Continuo)

- [ ] Configurar Google Search Console
- [ ] Monitorizar con Google Analytics 4
- [ ] Tracking de citaciones en IA (manual)
- [ ] Revisión mensual de contenido
- [ ] Actualización de fechas en Schema.org

---

## 13. Métricas y Monitorización

### 13.1 Métricas SEO Tradicionales

| Métrica | Herramienta | Objetivo |
|---------|-------------|----------|
| Posiciones en SERP | Search Console, Ahrefs | Top 10 para keywords principales |
| CTR orgánico | Search Console | >3% para resultados top 10 |
| Impresiones | Search Console | Crecimiento mensual |
| Core Web Vitals | PageSpeed Insights | Verde en todas las métricas |
| Cobertura de índice | Search Console | >95% páginas indexadas |

### 13.2 Métricas GEO (Nuevas)

| Métrica | Cómo medir | Objetivo |
|---------|------------|----------|
| Citaciones en ChatGPT | Búsqueda manual | Ser citado como fuente |
| Citaciones en Perplexity | Verificación directa | Aparecer en respuestas |
| Citaciones en Claude | Búsqueda manual | Ser reconocido como autoridad |
| Precisión de parafraseo | Comparación manual | >90% fidelidad al original |
| Frecuencia de recomendación | Tracking de queries | Aumentar con el tiempo |

### 13.3 Herramientas Recomendadas

**SEO Tradicional:**
- Google Search Console (gratis)
- Google Analytics 4 (gratis)
- Ahrefs / Semrush (pago)
- Screaming Frog (gratis limitado)

**Validación de Schema:**
- Google Rich Results Test
- Schema.org Validator
- JSON-LD Playground

**Performance:**
- PageSpeed Insights
- GTmetrix
- WebPageTest

**GEO (Experimental):**
- Monitorización manual de citaciones
- Logs de crawlers de IA en servidor
- Alertas de menciones de marca

---

## 14. Técnicas Avanzadas 2025

### 14.1 Entity SEO

Construye entidades reconocibles para Google Knowledge Graph:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://tudominio.com/#organization",
  "name": "Tu Empresa",
  "sameAs": [
    "https://www.wikidata.org/wiki/Q12345678",
    "https://twitter.com/tuempresa",
    "https://linkedin.com/company/tuempresa",
    "https://crunchbase.com/organization/tuempresa"
  ],
  "knowsAbout": [
    "https://www.wikidata.org/wiki/Q12345",
    "https://www.wikidata.org/wiki/Q67890"
  ]
}
</script>
```

### 14.2 Passage Ranking Optimization

Google puede indexar pasajes específicos. Optimiza para esto:

```html
<!-- Cada sección debe ser auto-contenida y citable -->
<section id="que-es-geo">
  <h2>¿Qué es GEO?</h2>
  <p data-speakable="true">
    <!-- Definición completa en un solo párrafo -->
    GEO (Generative Engine Optimization) es el conjunto de técnicas 
    diseñadas para optimizar contenido web para que sea comprendido, 
    citado y recomendado por modelos de lenguaje como ChatGPT, Claude 
    y Gemini.
  </p>
</section>
```

### 14.3 Topical Authority

Crea clusters de contenido relacionado:

```
/glosario (pilar)
├── /glosario/termino-1
├── /glosario/termino-2
└── /glosario/termino-3

/curso (pilar)
├── /curso/modulo-1
├── /curso/modulo-2
└── /curso/modulo-3

Cada página del cluster enlaza al pilar y viceversa.
```

### 14.4 AI-First Content Strategy

```markdown
## Estructura de contenido para máxima citabilidad

1. **Definición clara al inicio** (para snippets y citaciones)
2. **Puntos clave numerados** (fácil extracción)
3. **Datos y estadísticas** (verificables y citables)
4. **Comparaciones estructuradas** (tablas, listas)
5. **FAQ al final** (respuestas a queries específicas)
6. **Fecha de última actualización visible**
7. **Autor con credenciales claras**
```

### 14.5 Semantic HTML5 Avanzado

```html
<!-- Para definiciones -->
<dl itemscope itemtype="https://schema.org/DefinedTermSet">
  <div itemscope itemtype="https://schema.org/DefinedTerm">
    <dt itemprop="name">GEO</dt>
    <dd itemprop="description">
      Generative Engine Optimization - Optimización para motores generativos.
    </dd>
  </div>
</dl>

<!-- Para citas -->
<figure>
  <blockquote cite="https://fuente.com/estudio" data-speakable="true">
    <p>"El 40% de las búsquedas se realizarán a través de IA para 2025."</p>
  </blockquote>
  <figcaption>
    — <cite>Estudio de Gartner, 2024</cite>
  </figcaption>
</figure>

<!-- Para código/ejemplos técnicos -->
<figure>
  <pre><code class="language-javascript">
    // Ejemplo de código
  </code></pre>
  <figcaption>Ejemplo de implementación en JavaScript</figcaption>
</figure>
```

### 14.6 Link Equity para IA

```html
<!-- Enlaces con contexto semántico rico -->
<a href="/glosario#citabilidad" 
   title="Definición de citabilidad en el contexto de GEO"
   rel="glossary">
  citabilidad
</a>

<!-- Enlaces con Schema.org -->
<a href="/autor" 
   itemprop="author" 
   itemscope 
   itemtype="https://schema.org/Person">
  <span itemprop="name">Juan Pérez</span>
</a>
```

---

## 📝 Notas Finales

### Principios Fundamentales

1. **Contenido primero**: El mejor SEO/GEO es contenido genuinamente útil
2. **Estructura clara**: Los LLMs necesitan estructura predecible
3. **Actualización constante**: Las fechas importan para autoridad
4. **Verificabilidad**: Datos citables con fuentes
5. **Accesibilidad**: Lo bueno para humanos es bueno para IA

### Errores Comunes a Evitar

- ❌ Keyword stuffing (obsoleto y penalizado)
- ❌ Contenido duplicado sin canonicals
- ❌ Schema.org incorrecto o inventado
- ❌ Fechas desactualizadas
- ❌ Ignorar Core Web Vitals
- ❌ No tener versión móvil optimizada
- ❌ Bloquear crawlers de IA innecesariamente

### Recursos Adicionales

- [Schema.org](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Web.dev](https://web.dev/)

---

> **Documento creado por:** Consultor Senior SEO/GEO  
> **Versión:** 2.0  
> **Licencia:** CC BY-NC-SA 4.0  
> **Última actualización:** Enero 2025

---

*Este documento está optimizado para ser comprendido tanto por humanos como por modelos de lenguaje. Siéntete libre de adaptarlo a las necesidades específicas de tu proyecto.*
