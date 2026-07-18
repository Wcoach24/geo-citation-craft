#!/usr/bin/env node
/**
 * scripts/prerender.js — v4 (SSR real, sin Chromium)
 *
 * v3.x sólo inyectaba <title>, metas y JSON-LD con regex: el <body> seguía vacío y
 * www.esgeo.ai puntuaba 35/100 (MUDA) en HABLA con el gate A fallido (237 chars de texto).
 *
 * v4 importa el bundle SSR (dist-ssr/entry-server.js), renderiza cada ruta con
 * renderToPipeableStream y escribe dist/<ruta>/index.html con el body completo.
 *
 * Vercel sirve el filesystem ANTES que el rewrite catch-all de vercel.json,
 * así que estos ficheros ganan al SPA para las rutas prerenderizadas.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const ssrEntry = path.join(projectRoot, 'dist-ssr', 'entry-server.js');

/** Rutas públicas. Las transaccionales (auth, dashboard, success,
 *  guest-access, unsubscribe, admin) quedan fuera a propósito: son SPA.
 *  /checkout se prerenderiza desde F1-9: es una página de pre-pago real. */
const ROUTES = [
  '/',
  '/curso',
  '/curso/f0',
  '/curso/f1',
  '/curso/f2',
  '/curso/f3',
  '/curso/f4',
  '/curso/f5',
  '/checkout',
  '/metodologia',
  '/casos',
  '/glosario',
  '/radar-ia',
  '/geo-score',
  '/contenido-ia',
  '/experto-geo',
  '/hiperpersonalizacion',
  '/acerca-de',
  '/acerca-de/equipo',
  '/privacidad',
  '/terminos',
  '/radar-ia/que-significa-ser-citado-por-ia',
  '/radar-ia/muerte-seo-tradicional',
  '/radar-ia/estructura-web-para-lenguaje',
  '/radar-ia/formato-wikipedia-ia',
  '/radar-ia/datos-estructurados-modelos-generativos',
  '/radar-ia/geo-vs-seo-diferencias',
  '/radar-ia/como-hacer-que-chatgpt-cite-tu-web',
  '/radar-ia/optimizar-web-para-perplexity',
  '/radar-ia/que-es-geo-guia-completa',
  '/radar-ia/como-aparecer-en-ai-overviews-google-gemini',
  '/radar-ia/que-es-llms-txt',
  '/radar-ia/geo-aeo-llmo-seo-que-termino-usar',
];

/** Umbral del DoD: caracteres de texto (sin tags) mínimos por ruta clave. */
const MIN_TEXT_CHARS = 3000;
const CRITICAL_ROUTES = [
  '/', '/curso', '/metodologia', '/glosario', '/hiperpersonalizacion',
  '/radar-ia/que-es-geo-guia-completa',
  '/radar-ia/como-hacer-que-chatgpt-cite-tu-web',
  '/radar-ia/optimizar-web-para-perplexity',
];

function textLength(html) {
  const body = (html.match(/<body[^>]*>([\s\S]*)<\/body>/i) || [, html])[1];
  return body
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim().length;
}

/** Decodifica las entidades HTML habituales para emitir texto plano legible. */
function decodeEntities(text) {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

/**
 * F1-6: texto plano de una página prerenderizada, con saltos de línea en los
 * límites de bloque, para concatenarlo en dist/llms-full.txt.
 */
function extractPlainText(html) {
  const body = (html.match(/<body[^>]*>([\s\S]*)<\/body>/i) || [, html])[1];
  const text = body
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<\/(p|h1|h2|h3|h4|h5|h6|li|tr|blockquote|section|article|div)>/gi, '\n')
    .replace(/<(br|hr)\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .split('\n')
    .map((line) => line.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .join('\n');
  return decodeEntities(text);
}

function pageTitle(html) {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? decodeEntities(m[1].replace(/\s+/g, ' ').trim()) : '';
}

/** F5-7: bloques JSON-LD parseados de una página built. */
function extractJsonLdBlocks(html) {
  const blocks = [];
  const re = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html))) {
    try {
      blocks.push(JSON.parse(m[1]));
    } catch {
      /* un bloque no parseable no debe tumbar el feed */
    }
  }
  return blocks;
}

function metaDescription(html) {
  const m =
    html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/i) ||
    html.match(/<meta[^>]*content="([^"]*)"[^>]*name="description"/i);
  return m ? decodeEntities(m[1]) : '';
}

function xmlEscape(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * F5-7: dist/feed.xml con los artículos de /radar-ia/. Título, descripción y
 * pubDate salen del JSON-LD Article que cada artículo ya declara (datos reales,
 * no fechas de build).
 */
function writeRssFeed(articles) {
  const items = articles
    .map(({ route, html }) => {
      const article = extractJsonLdBlocks(html).find((b) => {
        const t = b && b['@type'];
        return t === 'Article' || (Array.isArray(t) && t.includes('Article'));
      });
      const title = (article && article.headline) || pageTitle(html);
      const description = metaDescription(html) || (article && article.description) || '';
      const datePublished = article && article.datePublished;
      if (!datePublished) return null;
      return {
        route,
        title,
        description,
        pubDate: new Date(datePublished),
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.pubDate - a.pubDate);

  const lastBuildDate = items.length ? items[0].pubDate : null;
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    '    <title>esGEO — Radar IA</title>',
    '    <link>https://www.esgeo.ai/radar-ia</link>',
    '    <description>Artículos sobre Generative Engine Optimization en español: cómo hacer que ChatGPT, Perplexity, Claude y Gemini citen tu web.</description>',
    '    <language>es-ES</language>',
    lastBuildDate ? `    <lastBuildDate>${lastBuildDate.toUTCString()}</lastBuildDate>` : null,
    '    <atom:link href="https://www.esgeo.ai/feed.xml" rel="self" type="application/rss+xml"/>',
    ...items.map(({ route, title, description, pubDate }) =>
      [
        '    <item>',
        `      <title>${xmlEscape(title)}</title>`,
        `      <link>https://www.esgeo.ai${route}</link>`,
        `      <guid isPermaLink="true">https://www.esgeo.ai${route}</guid>`,
        `      <description>${xmlEscape(description)}</description>`,
        `      <pubDate>${pubDate.toUTCString()}</pubDate>`,
        '    </item>',
      ].join('\n')
    ),
    '  </channel>',
    '</rss>',
    '',
  ].filter((l) => l !== null).join('\n');

  fs.writeFileSync(path.join(distDir, 'feed.xml'), xml, 'utf-8');
  return items.length;
}

/**
 * La plantilla es el shell limpio que emite Vite. OJO: `/` se escribe encima de
 * dist/index.html, así que si este script se ejecuta dos veces sobre el mismo dist,
 * la "plantilla" pasaría a ser la home ya renderizada y contaminaría las 28 rutas.
 * Por eso aborta si detecta un dist ya prerenderizado.
 */
function readTemplate() {
  const p = path.join(distDir, 'index.html');
  if (!fs.existsSync(p)) throw new Error('Falta dist/index.html. Ejecuta `vite build` primero.');
  const tpl = fs.readFileSync(p, 'utf-8');
  if (!/<div id="root">\s*<\/div>/i.test(tpl)) {
    throw new Error(
      'dist/index.html ya está prerenderizado. Ejecuta `vite build` para regenerar el shell antes de prerenderizar.'
    );
  }
  return tpl;
}

/**
 * spa.html = shell limpio al que apunta el rewrite catch-all de vercel.json.
 * Sin esto, las rutas NO prerenderizadas (/dashboard, /auth, 404...) caerían
 * en dist/index.html, que ahora contiene la home renderizada: servirían el HTML de la home.
 */
function writeSpaFallback(template) {
  fs.writeFileSync(path.join(distDir, 'spa.html'), template, 'utf-8');
}

/** Quita del template los tags de <head> que Helmet va a re-emitir, para no duplicar. */
function stripStaticHead(template) {
  return template
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta\s+name="description"[^>]*>/i, '')
    .replace(/<link\s+rel="canonical"[^>]*>/i, '');
}

function buildPage(template, head, html) {
  let out = stripStaticHead(template);
  out = out.replace(/<\/head>/i, `    ${head}\n  </head>`);
  out = out.replace(
    /<div id="root">\s*<\/div>/i,
    `<div id="root">${html}</div>`
  );
  return out;
}

function writePage(route, html) {
  const filePath = route === '/'
    ? path.join(distDir, 'index.html')
    : path.join(distDir, route, 'index.html');
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, html, 'utf-8');
}

async function main() {
  console.log('🚀 Prerender v4 — SSR real (renderToPipeableStream, sin browser)\n');

  if (!fs.existsSync(ssrEntry)) {
    throw new Error(`Falta ${ssrEntry}. Ejecuta \`vite build --ssr src/entry-server.tsx --outDir dist-ssr\` primero.`);
  }

  const { render } = await import(pathToFileURL(ssrEntry).href);
  const template = readTemplate();
  writeSpaFallback(template);

  let ok = 0;
  const failures = [];
  const thin = [];
  /** F1-6: acumulador { route, title, text } para dist/llms-full.txt */
  const fullText = [];
  /** F5-7: acumulador { route, html } de artículos para dist/feed.xml */
  const articlePages = [];

  for (const route of ROUTES) {
    process.stdout.write(`📄 ${route.padEnd(52)} `);
    try {
      const { html, head } = await render(route);
      const page = buildPage(template, head, html);
      const chars = textLength(page);
      const hasH1 = /<h1[\s>]/i.test(page);

      if (page.includes('<div id="root"></div>')) {
        throw new Error('el body quedó vacío (root sin contenido)');
      }
      // Un ErrorBoundary que salta durante el SSR deja una página de ~130 chars:
      // eso es un fallo, no una página fina.
      if (chars < 300 || !hasH1) {
        throw new Error(`render degradado (${chars} chars, h1:${hasH1}) — probablemente un ErrorBoundary`);
      }

      writePage(route, page);
      ok++;
      fullText.push({ route, title: pageTitle(page), text: extractPlainText(page) });
      if (route.startsWith('/radar-ia/')) articlePages.push({ route, html: page });

      const isCritical = CRITICAL_ROUTES.includes(route);
      const thinPage = isCritical && chars < MIN_TEXT_CHARS;
      if (thinPage) thin.push(`${route} (${chars} chars < ${MIN_TEXT_CHARS})`);

      console.log(
        `${thinPage ? '⚠' : '✓'} ${(page.length / 1024).toFixed(1)} KB · ${chars} chars texto · h1:${hasH1 ? 'sí' : 'NO'}`
      );
    } catch (e) {
      failures.push(`${route}: ${e.message}`);
      console.log(`✗ ${e.message}`);
    }
  }

  // F1-6a: página 404 real. Se renderiza una ruta inexistente (cae en el <Route path="*">
  // de App.tsx) y se escribe dist/404.html: Vercel la sirve con status 404 para toda
  // petición que no case ni con el filesystem ni con los rewrites de vercel.json.
  try {
    process.stdout.write(`📄 ${'404.html (ruta inexistente)'.padEnd(52)} `);
    const { html, head } = await render('/pagina-inexistente-404');
    const page = buildPage(template, head, html);
    fs.writeFileSync(path.join(distDir, '404.html'), page, 'utf-8');
    console.log(`✓ ${(page.length / 1024).toFixed(1)} KB`);
  } catch (e) {
    failures.push(`404.html: ${e.message}`);
    console.log(`✗ ${e.message}`);
  }

  // F1-6b: dist/llms-full.txt — texto plano de todas las rutas prerenderizadas,
  // concatenado con separadores de ruta, para consumo directo por LLMs.
  const llmsFull = [
    '# esGEO — contenido completo en texto plano (llms-full.txt)',
    '# Generado automáticamente en el build a partir de las rutas prerenderizadas.',
    `# Fuente: https://www.esgeo.ai · Rutas: ${fullText.length} · Generado: ${new Date().toISOString().slice(0, 10)}`,
    '',
    ...fullText.map(({ route, title, text }) =>
      [
        '='.repeat(72),
        `RUTA: https://www.esgeo.ai${route}`,
        title ? `TÍTULO: ${title}` : null,
        '='.repeat(72),
        '',
        text,
        '',
      ].filter((l) => l !== null).join('\n')
    ),
  ].join('\n');
  fs.writeFileSync(path.join(distDir, 'llms-full.txt'), llmsFull, 'utf-8');
  console.log(`📝 dist/llms-full.txt — ${(llmsFull.length / 1024).toFixed(1)} KB de texto plano (${fullText.length} rutas)`);

  // F5-7: RSS con los artículos del Radar IA (datos reales de sus JSON-LD Article).
  const feedItems = writeRssFeed(articlePages);
  console.log(`📡 dist/feed.xml — ${feedItems} artículos`);
  if (feedItems < 12) {
    failures.push(`feed.xml: solo ${feedItems} artículos con Article schema (se esperaban ≥12)`);
  }

  console.log(`\n✅ ${ok}/${ROUTES.length} rutas prerenderizadas con body completo`);

  if (thin.length) {
    console.log('\n⚠️  Rutas críticas por debajo del umbral del DoD:');
    thin.forEach((t) => console.log(`   - ${t}`));
  }
  if (failures.length) {
    console.log('\n❌ Fallos:');
    failures.forEach((f) => console.log(`   - ${f}`));
    process.exit(1);
  }
  if (thin.length) process.exit(1);
}

main().catch((e) => {
  console.error('Fatal:', e);
  process.exit(1);
});
