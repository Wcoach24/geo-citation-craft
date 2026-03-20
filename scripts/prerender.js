#!/usr/bin/env node

import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

// Routes to prerender (public only, not authenticated)
const routes = [
  '/',
  '/curso',
  '/curso/f0',
  '/curso/f1',
  '/curso/f2',
  '/curso/f3',
  '/curso/f4',
  '/curso/f5',
  '/curso/f6',
  '/metodologia',
  '/glosario',
  '/radar-ia',
  '/casos',
  '/contenido-ia',
  '/acerca-de',
];

async function waitForServer(port, timeout = 20000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      const response = await fetch(`http://localhost:${port}`, { method: 'HEAD', signal: controller.signal });
      clearTimeout(timeoutId);
      return true;
    } catch {
      await new Promise(r => setTimeout(r, 300));
    }
  }
  throw new Error(`Server did not start on port ${port} within ${timeout}ms`);
}

async function prerender() {
  console.log('🚀 Starting prerendering...\n');

  // Start a local server
  console.log('📦 Starting local server on port 5173...');
  const serverProcess = spawn('npm', ['run', 'preview', '--', '--port', '5173'], {
    cwd: projectRoot,
    stdio: 'pipe',
  });

  serverProcess.on('error', (error) => {
    console.error('✗ Failed to start server:', error.message);
    process.exit(1);
  });

  // Wait for server to start
  try {
    await waitForServer(5173);
    console.log('✓ Server running\n');
  } catch (error) {
    serverProcess.kill();
    console.error('✗ Server startup timeout');
    process.exit(1);
  }

  try {
    // Prerender each route
    for (const route of routes) {
      try {
        const url = `http://localhost:5173${route}`;

        console.log(`📄 Prerendering: ${route}`);

        // Fetch HTML from server
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const html = await response.text();

        // Create directory structure
        let filePath;
        let fileName;

        if (route === '/') {
          // Root route: write to dist/index.html
          filePath = path.join(distDir, 'index.html');
          fileName = 'index.html';
        } else {
          // Other routes: create folder structure dist/route/index.html
          filePath = path.join(distDir, route, 'index.html');
          fileName = `${route}/index.html`;
        }
        const fileDir = path.dirname(filePath);

        if (!fs.existsSync(fileDir)) {
          fs.mkdirSync(fileDir, { recursive: true });
        }

        // Write HTML file
        fs.writeFileSync(filePath, html, 'utf-8');
        const size = (html.length / 1024).toFixed(1);
        console.log(`   ✓ Saved to: ${fileName} (${size} KB)`);
      } catch (error) {
        console.error(`   ✗ Failed to prerender ${route}:`, error.message);
      }

      // Add small delay between requests
      await new Promise(r => setTimeout(r, 100));
    }

    console.log('\n✅ Prerendering complete!');
    console.log('\nℹ️  Note: For client-side React SPAs, prerendered HTML contains initial');
    console.log('metadata and structure. Crawlers will see meta tags, canonical URLs, and');
    console.log('Open Graph data. The page shell hydrates with React on client-side.');
  } catch (error) {
    console.error('✗ Error during prerendering:', error);
    process.exit(1);
  } finally {
    // Kill server
    serverProcess.kill();
    await new Promise(r => setTimeout(r, 500));
  }
}

// Run prerender
prerender().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});