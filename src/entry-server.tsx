/**
 * src/entry-server.tsx — punto de entrada del prerender SSR.
 *
 * Por qué existe: los crawlers de IA (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot)
 * NO ejecutan JavaScript. Un SPA les sirve un <div id="root"></div> vacío. Este módulo
 * renderiza cada ruta a HTML completo en Node, sin Chromium (el build de Vercel no
 * tiene libnspr4.so y no permite apt-get: por eso murió la v2 con Playwright).
 *
 * Usa renderToPipeableStream + onAllReady (no renderToString) porque las rutas son
 * React.lazy: onAllReady espera a que todos los Suspense resuelvan antes de emitir.
 */
import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { Writable } from "node:stream";
import { StaticRouter } from "react-router-dom/server";
import { Helmet } from "react-helmet";
import { AppProviders, AppRoutes } from "./App";

export interface RenderResult {
  html: string;
  head: string;
}

export function render(url: string): Promise<RenderResult> {
  return new Promise((resolve, reject) => {
    let body = "";
    let settled = false;

    const sink = new Writable({
      write(chunk, _enc, cb) {
        body += chunk.toString();
        cb();
      },
    });

    const { pipe, abort } = renderToPipeableStream(
      <AppProviders>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </AppProviders>,
      {
        onAllReady() {
          pipe(sink);
          sink.on("finish", () => {
            if (settled) return;
            settled = true;
            const helmet = Helmet.renderStatic();
            const head = [
              helmet.title?.toString(),
              helmet.meta?.toString(),
              helmet.link?.toString(),
              helmet.script?.toString(),
            ]
              .filter(Boolean)
              .join("\n    ");
            resolve({ html: body, head });
          });
        },
        onShellError(err) {
          if (settled) return;
          settled = true;
          reject(err);
        },
        onError(err) {
          // Errores recuperables (un Suspense que reintenta): se registran, no abortan.
          console.error(`  ⚠ SSR error en ${url}:`, (err as Error)?.message ?? err);
        },
      }
    );

    setTimeout(() => {
      if (settled) return;
      settled = true;
      abort();
      reject(new Error(`SSR timeout (20s) en ${url}`));
    }, 20000);
  });
}
