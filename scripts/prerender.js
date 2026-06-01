#!/usr/bin/env node
/**
 * scripts/prerender.js — v3.2 (regex-based, no Chromium)
 *
 * v2 usaba Playwright/Chromium pero Vercel build env no tiene libnspr4.so y
 * no permite apt-get sin sudo. v3 parsea componentes React con regex/vm y
 * genera HTML estático con metas correctas, SIN runtime de browser.
 *
 * v3.2 combina useGeoMetadata + Helmet inline (página puede tener ambos).
 *
 * Soporta:
 *  - <Helmet>...</Helmet> inline (la mayoría de páginas)
 *  - useGeoMetadata({ ... }) hook (Index.tsx)
 *  - Ambos en el mismo archivo (combinados, no excluyentes)
 */

import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const srcDir = path.join(projectRoot, 'src');

const ROUTE_TO_FILE = {
  '/': 'pages/Index.tsx',
  '/curso': 'pages/CursoGeoPage.tsx',
  '/curso/f0': 'pages/modules/ModuloF0Page.tsx',
  '/curso/f1': 'pages/modules/ModuloF1Page.tsx',
  '/curso/f2': 'pages/modules/ModuloF2Page.tsx',
  '/curso/f3': 'pages/modules/ModuloF3Page.tsx',
  '/curso/f4': 'pages/modules/ModuloF4Page.tsx',
  '/curso/f5': 'pages/modules/ModuloF5Page.tsx',
  '/metodologia': 'pages/MetodologiaGeoPage.tsx',
  '/casos': 'pages/CasosRealesPage.tsx',
  '/glosario': 'pages/GlosarioPage.tsx',
  '/radar-ia': 'pages/RadarIAPage.tsx',
  '/geo-score': 'pages/GeoScorePage.tsx',
  '/contenido-ia': 'pages/ContenidoIAPage.tsx',
  '/acerca-de': 'pages/AcercaDePage.tsx',
  '/acerca-de/equipo': 'pages/EquipoPage.tsx',
  '/privacidad': 'pages/PrivacidadPage.tsx',
  '/terminos': 'pages/TerminosPage.tsx',
  '/radar-ia/que-significa-ser-citado-por-ia': 'pages/articles/QueSIgnificaSerCitadoPorIA.tsx',
  '/radar-ia/muerte-seo-tradicional': 'pages/articles/MuerteSeoTradicional.tsx',
  '/radar-ia/estructura-web-para-lenguaje': 'pages/articles/EstructuraWebParaLenguaje.tsx',
  '/radar-ia/formato-wikipedia-ia': 'pages/articles/FormatoWikipediaIA.tsx',
  '/radar-ia/datos-estructurados-modelos-generativos': 'pages/articles/DatosEstructuradosModelosGenerativos.tsx',
  '/radar-ia/geo-vs-seo-diferencias': 'pages/articles/GeoVsSeoGuiaRapida.tsx',
  '/radar-ia/como-hacer-que-chatgpt-cite-tu-web': 'pages/articles/ComoHacerQueChatGPTCiteTuWeb.tsx',
  '/radar-ia/optimizar-web-para-perplexity': 'pages/articles/OptimizarWebParaPerplexity.tsx',
  '/radar-ia/que-es-geo-guia-completa': 'pages/articles/QueEsGeoGuiaCompleta.tsx',
};

// ── helpers ─────────────────────────────────────────────────────────────────

function evalJsLiteral(literal, contextUrl) {
  try {
    const sandbox = { window: { location: { href: contextUrl } } };
    vm.createContext(sandbox);
    return vm.runInContext(`(${literal})`, sandbox, { timeout: 1000 });
  } catch (e) {
    return null;
  }
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── Pattern 1: <Helmet>...</Helmet> (puede haber varios) ──────────────────

function extractHelmetBlocks(tsxSource) {
  const blocks = [];
  const regex = /<Helmet[^>]*>([\s\S]*?)<\/Helmet>/g;
  let m;
  while ((m = regex.exec(tsxSource)) !== null) blocks.push(m[1].trim());
  return blocks;
}

function jsxHelmetToHtml(jsx, url) {
  let html = jsx;

  html = html.replace(
    /<script\s+type="application\/ld\+json">\s*\{\s*JSON\.stringify\(([\s\S]*?)\)\s*\}\s*<\/script>/g,
    (_full, lit) => {
      const result = evalJsLiteral(lit, url);
      return result ? `<script type="application/ld+json">${JSON.stringify(result)}</script>` : '';
    }
  );

  html = html.replace(
    /<script\s+type="application\/ld\+json"\s+dangerouslySetInnerHTML=\{\{\s*__html:\s*JSON\.stringify\(([\s\S]*?)\)\s*\}\}\s*\/>/g,
    (_full, lit) => {
      const result = evalJsLiteral(lit, url);
      return result ? `<script type="application/ld+json">${JSON.stringify(result)}</script>` : '';
    }
  );

  html = html.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
  html = html.replace(/\{[^{}]*\}/g, '');
  html = html.replace(/\n\s*\n\s*\n/g, '\n\n');
  return html.trim();
}

// ── Pattern 2: useGeoMetadata({...}) ───────────────────────────────────────

function extractGeoMetadataCall(tsxSource) {
  const start = tsxSource.search(/useGeoMetadata\s*\(\s*\{/);
  if (start === -1) return null;
  const openIdx = tsxSource.indexOf('{', start);
  let depth = 0;
  let inString = false;
  let stringChar = '';
  for (let i = openIdx; i < tsxSource.length; i++) {
    const c = tsxSource[i];
    if (inString) {
      if (c === '\\') { i++; continue; }
      if (c === stringChar) inString = false;
    } else {
      if (c === '"' || c === "'" || c === '`') { inString = true; stringChar = c; continue; }
      if (c === '{') depth++;
      else if (c === '}') {
        depth--;
        if (depth === 0) return tsxSource.slice(openIdx, i + 1);
      }
    }
  }
  return null;
}

function geoMetadataToHtml(propsLiteral, url) {
  const props = evalJsLiteral(propsLiteral, url);
  if (!props) return null;

  const title = props.title || '';
  const fullTitle = title.includes('esGEO') ? title : `${title} | esGEO`;
  const description = props.description || '';
  const canonicalUrl = props.canonicalUrl || url;
  const keywords = Array.isArray(props.keywords) ? props.keywords : [];
  const citationTitle = props.citationTitle || title;
  const author = props.author || 'esGEO';
  const speakableSelectors = props.speakableSelectors || [".snippet-block", "[data-speakable='true']"];
  const geoTxtPath = props.geoTxtPath || '';
  const today = new Date().toISOString().slice(0, 10);

  const tags = [
    `<title>${escapeHtml(fullTitle)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
    geoTxtPath ? `<link rel="alternate" type="text/plain" href="${escapeHtml(geoTxtPath)}" title="Versión citable para IA - Formato texto plano optimizado para LLMs" />` : '',
    `<meta name="citation_title" content="${escapeHtml(citationTitle)}" />`,
    `<meta name="citation_author" content="${escapeHtml(author)}" />`,
    `<meta name="citation_publication_date" content="2024" />`,
    `<meta name="citation_online_date" content="${today}" />`,
    `<meta name="citation_language" content="es" />`,
    `<meta name="citation_publisher" content="esGEO" />`,
    `<meta name="citation_format" content="text/html" />`,
    geoTxtPath ? `<meta name="citation_fulltext_world_readable" content="https://esgeo.ai${escapeHtml(geoTxtPath)}" />` : '',
    keywords.length ? `<meta name="citation_keywords" content="${escapeHtml(keywords.join(', '))}" />` : '',
    `<meta name="speakable-selector" content="${escapeHtml(speakableSelectors.join(', '))}" />`,
    `<meta property="og:title" content="${escapeHtml(fullTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:type" content="article" />`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:image" content="https://esgeo.ai/og-image.png" />`,
    `<meta property="og:locale" content="es_ES" />`,
    `<meta property="og:site_name" content="esGEO" />`,
    `<meta property="article:author" content="${escapeHtml(author)}" />`,
    `<meta property="article:publisher" content="esGEO" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(fullTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `<meta name="twitter:image" content="https://esgeo.ai/og-image.png" />`,
  ].filter(Boolean);
  return tags.join('\n    ');
}

// ── main ───────────────────────────────────────────────────────────────────

function readTemplateOnce() {
  const indexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexPath)) throw new Error(`Missing dist/index.html. Run \`vite build\` first.`);
  return fs.readFileSync(indexPath, 'utf-8');
}

function injectIntoHead(template, tagsHtml) {
  return template.replace(/<\/head>/i, `\n    ${tagsHtml}\n  </head>`);
}

function safeWritePage(route, html) {
  let filePath;
  if (route === '/') {
    filePath = path.join(distDir, 'index.html');
  } else {
    filePath = path.join(distDir, route, 'index.html');
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
  }
  fs.writeFileSync(filePath, html, 'utf-8');
}

async function prerender() {
  console.log('🚀 Static prerender v3.2 (no browser)\n');

  const template = readTemplateOnce();
  let success = 0, failed = 0;

  for (const [route, file] of Object.entries(ROUTE_TO_FILE)) {
    const tsxPath = path.join(srcDir, file);
    process.stdout.write(`📄 ${route.padEnd(55)}  `);

    if (!fs.existsSync(tsxPath)) {
      console.log(`✗ source missing`);
      failed++;
      continue;
    }

    const src = fs.readFileSync(tsxPath, 'utf-8');
    const url = `https://esgeo.ai${route === '/' ? '' : route}`;
    const tagParts = [];

    // 1. Si usa useGeoMetadata, esos son los tags base (incluyen title/meta/canonical)
    const metaCall = extractGeoMetadataCall(src);
    if (metaCall) {
      const part = geoMetadataToHtml(metaCall, url);
      if (part) tagParts.push(part);
    }

    // 2. CADA <Helmet> inline aporta tags adicionales (schema FAQ extra, etc.)
    const helmetBlocks = extractHelmetBlocks(src);
    for (const block of helmetBlocks) {
      const part = jsxHelmetToHtml(block, url);
      if (part) tagParts.push(part);
    }

    const tagsHtml = tagParts.join('\n    ').trim();

    if (!tagsHtml) {
      console.log(`⚠ no SEO source found, using base template`);
      safeWritePage(route, template);
      failed++;
      continue;
    }

    const html = injectIntoHead(template, tagsHtml);
    safeWritePage(route, html);

    const kb = (html.length / 1024).toFixed(1);
    console.log(`✓ ${kb} KB`);
    success++;
  }

  console.log(`\n✅ Prerender complete: ${success}/${Object.keys(ROUTE_TO_FILE).length} routes`);
  if (failed > 0) console.log(`⚠️  ${failed} routes had warnings`);
  if (success === 0) process.exit(1);
}

prerender().catch(e => { console.error('Fatal:', e); process.exit(1); });
