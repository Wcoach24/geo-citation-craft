#!/usr/bin/env node
/**
 * scripts/check-routes.mjs — MASTERPLAN F0-2
 *
 * Check de paridad: toda ruta pública declarada en src/App.tsx debe estar en
 * ROUTES de scripts/prerender.js, y viceversa. Si divergen, sale con código 1
 * (rompe el build ANTES de gastar 2 minutos en vite build + SSR + prerender).
 *
 * Reglas:
 *  - Se ignoran las rutas cuyo element es <Navigate .../> (redirects: /coach,
 *    /casos-reales, /consultor-geo, /especialista-geo...) — no se prerenderiza
 *    un redirect.
 *  - Se ignoran las rutas de EXCLUDED_PATHS (transaccionales/SPA a propósito).
 *    ⚠ F1-9 convertirá /checkout en prerenderizada: cuando llegue, quita
 *    '/checkout' de esta lista y añádelo a ROUTES en prerender.js.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

/** Rutas SPA a propósito — editar aquí cuando una pase a ser prerenderizada. */
const EXCLUDED_PATHS = [
  '*',
  '/dashboard',
  '/auth',
  '/success',
  '/guest-access',
  '/unsubscribe',
];

function extractAppRoutes() {
  const src = fs.readFileSync(path.join(projectRoot, 'src', 'App.tsx'), 'utf-8');
  const routes = [];
  // <Route path="/x" element={<Componente .../>} />  (path y element en cualquier orden no
  // se usa en este repo: path va primero; si cambia, este regex habría que ampliarlo)
  const re = /<Route\s+path="([^"]+)"\s+element=\{<([A-Za-z0-9_]+)/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    const [, routePath, component] = m;
    if (component === 'Navigate') continue; // redirect, no se prerenderiza
    if (EXCLUDED_PATHS.includes(routePath)) continue;
    routes.push(routePath);
  }
  return routes;
}

function extractPrerenderRoutes() {
  const src = fs.readFileSync(path.join(projectRoot, 'scripts', 'prerender.js'), 'utf-8');
  const block = src.match(/const ROUTES = \[([\s\S]*?)\];/);
  if (!block) {
    console.error('✗ No se encontró `const ROUTES = [...]` en scripts/prerender.js');
    process.exit(1);
  }
  return [...block[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
}

const appRoutes = extractAppRoutes();
const prerenderRoutes = extractPrerenderRoutes();

const missingInPrerender = appRoutes.filter((r) => !prerenderRoutes.includes(r));
const missingInApp = prerenderRoutes.filter((r) => !appRoutes.includes(r));

if (appRoutes.length === 0) {
  console.error('✗ check-routes: no se extrajo ninguna ruta de src/App.tsx (¿cambió el formato de <Route>?)');
  process.exit(1);
}

if (missingInPrerender.length || missingInApp.length) {
  console.error('✗ check-routes: App.tsx y prerender.js divergen.');
  if (missingInPrerender.length) {
    console.error('\n  Rutas públicas en App.tsx que FALTAN en ROUTES de scripts/prerender.js:');
    missingInPrerender.forEach((r) => console.error(`    - ${r}`));
  }
  if (missingInApp.length) {
    console.error('\n  Rutas en ROUTES de scripts/prerender.js que NO existen en App.tsx:');
    missingInApp.forEach((r) => console.error(`    - ${r}`));
  }
  console.error('\n  Arregla la divergencia (o añade la ruta a EXCLUDED_PATHS si es SPA a propósito).');
  process.exit(1);
}

console.log(`✓ check-routes: paridad OK — ${appRoutes.length} rutas públicas en App.tsx = ROUTES del prerender.`);
