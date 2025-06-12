
import fs from 'fs';
import path from 'path';

const distPath = path.join(process.cwd(), 'dist');

const criticalChecks = [
  {
    file: 'index.html',
    checks: [
      'snippet-block',
      'data-speakable',
      'application/ld+json',
      'esGEO',
      'Generative Engine Optimization'
    ]
  },
  {
    file: 'curso/index.html', 
    checks: ['snippet-block', 'data-speakable', 'application/ld+json']
  },
  {
    file: 'metodologia/index.html',
    checks: ['snippet-block', 'data-speakable', 'application/ld+json']
  }
];

console.log('🔍 Verificando calidad del prerendering GEO...\n');

let totalScore = 0;
let maxScore = 0;

criticalChecks.forEach(({ file, checks }) => {
  const filePath = path.join(distPath, file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ ${file} - FALTA`);
    maxScore += checks.length;
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  let fileScore = 0;
  
  console.log(`📄 ${file}:`);
  checks.forEach(check => {
    const found = content.includes(check);
    console.log(`  ${found ? '✅' : '❌'} ${check}`);
    if (found) fileScore++;
    maxScore++;
  });
  
  totalScore += fileScore;
  console.log(`  📊 Puntuación: ${fileScore}/${checks.length}\n`);
});

const percentage = Math.round((totalScore / maxScore) * 100);
console.log(`🎯 PUNTUACIÓN TOTAL GEO: ${totalScore}/${maxScore} (${percentage}%)`);

if (percentage >= 90) {
  console.log('🎉 ¡EXCELENTE! Tu sitio está optimizado para LLMs');
} else if (percentage >= 70) {
  console.log('⚠️ BUENO - Algunas mejoras necesarias');
} else {
  console.log('❌ CRÍTICO - Problemas graves de renderizado');
  process.exit(1);
}
