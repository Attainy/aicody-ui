// react/scripts/build.js
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ① config 읽기
const cfgPath = path.resolve(process.cwd(), 'aicody.config.cjs');
if (!fs.existsSync(cfgPath)) {
  console.error('❌ aicody.config.js not found.');
  process.exit(1);
}
const { styleTool } = require(cfgPath); // 'tailwind' | 'emotion' | 'vanilla'

// ② 해당 엔진 빌드
console.log(`🔨 Building for "${styleTool}"...`);
execSync(`npm run build:${styleTool}`, { stdio: 'inherit' });

// ③ package.json 업데이트
const pkgPath = path.resolve(process.cwd(), 'package.json');
const pkg = require(pkgPath);
const outDir = `dist/${styleTool}`;

pkg.main = `${outDir}/index.cjs.js`;
pkg.module = `${outDir}/index.esm.js`;
pkg.exports = {
  '.': {
    import: `./${outDir}/index.esm.js`,
    require: `./${outDir}/index.cjs.js`,
  },
};

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
console.log(`✅ package.json set to use "${styleTool}" build.`);
