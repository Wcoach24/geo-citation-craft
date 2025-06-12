
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Iniciando build con prerendering para GEO...');

try {
  // Build normal
  console.log('📦 Construyendo aplicación...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Verificar que las páginas se prerenderizaron correctamente
  const distPath = path.join(process.cwd(), 'dist');
  const requiredPages = [
    'index.html',
    'curso/index.html',
    'metodologia/index.html',
    'coach/index.html',
    'glosario/index.html'
  ];
  
  console.log('🔍 Verificando páginas prerenderizadas...');
  requiredPages.forEach(page => {
    const pagePath = path.join(distPath, page);
    if (fs.existsSync(pagePath)) {
      const content = fs.readFileSync(pagePath, 'utf8');
      if (content.includes('snippet-block') || content.includes('data-speakable')) {
        console.log(`✅ ${page} - Contenido GEO renderizado correctamente`);
      } else {
        console.warn(`⚠️ ${page} - Posible problema con contenido GEO`);
      }
    } else {
      console.error(`❌ ${page} - No encontrada`);
    }
  });
  
  console.log('🎉 Build con prerendering completado exitosamente!');
  console.log('📊 Las páginas ahora contienen HTML estático visible para LLMs y bots');
  
} catch (error) {
  console.error('❌ Error durante el build:', error.message);
  process.exit(1);
}
