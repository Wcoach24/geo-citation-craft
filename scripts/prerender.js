#!/usr/bin/env node
/**
 * scripts/prerender.js — v2 (Playwright-based, hydrated HTML capture)
 *
 * WHY: react-helmet inyecta <title> y <meta> en cliente. El prerender anterior usaba
 * fetch() sin ejecutar JS, así que TODAS las páginas obtenían el shell con la meta
 * default del index.html. Resultado: Googlebot ve metas y canonicals duplicados
 * (uno del shell, otro de Helmet tras hidratar) → SEO penaliza fuerte.
 *
 * QUE HACE AHORA:
 *  1. Lanza vite preview
 *  2. Para cada ruta, navega con Playwright y espera networkidle
 *  3. Ejecuta JS in-page que elimina los <meta> y <link rel="canonical"> SIN
 *     data-react-helmet cuando hay un duplicado CON data-react-helmet (Helmet wins)
 *  4. Captura document.documentElement.outerHTML → dist/[ruta]/index.html
 *
 * REQUIERE: playwright instalado como devDependency. El script `postinstall`
 * en package.json ejecuta `playwright install --with-deps chromium`.
 */

import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

// Routes to prerender — todas las páginas públicas.
const routes = [
  '/',
  '/curso',
  '/curso/f0', '/curso/f1', '/curso/f2', '/curso/f3', '/curso/f4', '/curso/f5', '/curso/f6',
  '/metodologia',
  '/glosario',
  '/radar-ia',
  '/casos',
  '/contenido-ia',
  '/acerca-de',
  '/acerca-de/equipo',
  '/geo-score',
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
];

const PORT = 5173;

async function waitForServer(port, timeout = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 2000);
      const r = await fetch(`http://localhost:${port}`, { method: 'HEAD', signal: ctrl.signal });
      clearTimeout(t);
      if (r.ok || r.status === 404) return true;
    } catch {
      await new Promise(r => setTimeout(r, 300));
    }
  }
  throw new Error(`Server did not start on port ${port} within ${timeout}ms`);
}

/**
 * Script ejecutado in-page tras hidratar. Limpia duplicados que crea Helmet
 * al añadir su propio elemento sin reemplazar el del shell.
 */
const DEDUP_SCRIPT = `
(() => {
  function dedupe(selector) {
    const all = Array.from(document.querySelectorAll(selector));
    const withRH = all.filter(n => n.hasAttribute('data-react-helmet') || n.hasAttribute('data-rh'));
    if (withRH.length === 0) return 0;
    let removed = 0;
    for (const n of all) {
      if (!(n.hasAttribute('data-react-helmet') || n.hasAttribute('data-rh'))) {
        n.remove(); removed++;
      }
    }
    return removed;
  }
  return {
    'meta-description':  dedupe('meta[name="description"]'),
    'canonical':         dedupe('link[rel="canonical"]'),
    'og-title':          dedupe('meta[property="og:title"]'),
    'og-description':    dedupe('meta[property="og:description"]'),
    'og-url':            dedupe('meta[property="og:url"]'),
    'twitter-title':     dedupe('meta[name="twitter:title"]'),
    'twitter-description': dedupe('meta[name="twitter:description"]'),
  };
})();
`;

async function prerender() {
  console.log('🚀 Starting prerendering (Playwright, hydrated HTML)…\n');

  console.log('📦 Starting preview server on port ' + PORT + '…');
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT)], {
    cwd: projectRoot,
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  server.on('error', (e) => { console.error('✗ server error:', e.message); process.exit(1); });

  try {
    await waitForServer(PORT);
    console.log('✓ Server up\n');
  } catch (e) {
    server.kill('SIGTERM');
    console.error('✗', e.message);
    process.exit(1);
  }

  let browser;
  try {
    browser = await chromium.launch({ headless: true });
    const ctx = await browser.newContext({ userAgent: 'esgeo-prerender/2.0 (+playwright)' });
    const page = await ctx.newPage();

    let successCount = 0;
    let dedupTotal = 0;

    for (const route of routes) {
      const url = `http://localhost:${PORT}${route}`;
      try {
        process.stdout.write(`📄 ${route}  …  `);
        await page.goto(url, { waitUntil: 'networkidle', timeout: 25000 });
        // Helmet aplica side-effects en useEffect → un microtask extra para curarnos.
        await page.waitForTimeout(150);

        const dedupReport = await page.evaluate(DEDUP_SCRIPT);
        const removed = Object.values(dedupReport).reduce((a, b) => a + b, 0);
        dedupTotal += removed;

        const html = '<!DOCTYPE html>\n' + await page.evaluate(() => document.documentElement.outerHTML);

        let filePath;
        if (route === '/') {
          filePath = path.join(distDir, 'index.html');
        } else {
          filePath = path.join(distDir, route, 'index.html');
          fs.mkdirSync(path.dirname(filePath), { recursive: true });
        }
        fs.writeFileSync(filePath, html, 'utf-8');
        const kb = (html.length / 1024).toFixed(1);
        console.log(`✓ ${kb} KB (dedup: ${removed})`);
        successCount++;
      } catch (e) {
        console.log(`✗ ${e.message}`);
      }
    }

    await ctx.close();
    console.log(`\n✅ Prerender complete: ${successCount}/${routes.length} routes. Total dedup operations: ${dedupTotal}.`);
  } finally {
    if (browser) await browser.close();
    server.kill('SIGTERM');
    await new Promise(r => setTimeout(r, 500));
  }
}

prerender().catch(e => { console.error('Fatal:', e); process.exit(1); });
