
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from 'vite-plugin-prerender';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    mode === 'production' && prerender({
      // Páginas clave para prerenderizar
      routes: [
        '/',
        '/curso',
        '/metodologia', 
        '/coach',
        '/glosario',
        '/acerca-de',
        '/casos-reales',
        '/radar-ia',
        '/curso/f1',
        '/curso/f2', 
        '/curso/f3',
        '/curso/f4',
        '/curso/f5',
        '/curso/f6',
        '/articulo/geo-vs-seo-guia-rapida',
        '/articulo/muerte-seo-tradicional',
        '/articulo/que-significa-ser-citado-por-ia',
        '/articulo/estructura-web-para-lenguaje',
        '/articulo/datos-estructurados-modelos-generativos',
        '/articulo/formato-wikipedia-ia'
      ],
      // Configuración para mejorar la renderización
      rendererOptions: {
        headless: true,
        renderAfterDocumentEvent: 'render-event'
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimizar para el prerendering
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    }
  }
}));
