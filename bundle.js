const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const mainFile = path.join(__dirname, 'main.md');
const outDir = path.join(__dirname, 'dist');
const outFile = path.join(outDir, 'deck.md');
const outPdf = path.join(outDir, 'deck.pdf');

const themePath = path.join(__dirname, 'themes', 'hfu.css'); // Pfad zu deiner Theme-CSS-Datei

if (!fs.existsSync(mainFile)) {
  console.error(`Error: ${mainFile} not found.`);
  process.exit(1);
}

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

let content = fs.readFileSync(mainFile, 'utf8');
const includeRegex = /^[ \t]*!INCLUDE[ \t]+["']?([^"'\r\n]+)["']?[ \t]*$/gm;

content = content.replace(includeRegex, (match, relPath) => {
  const cleanPath = relPath.trim();
  const targetPath = path.resolve(__dirname, cleanPath);

  if (fs.existsSync(targetPath)) {
    const includedContent = fs.readFileSync(targetPath, 'utf8').trim();
    // Garantiert saubere Trennung vor und nach dem Include
    return `\n\n<!-- Start: ${cleanPath} -->\n${includedContent}\n<!-- End: ${cleanPath} -->\n\n`;
  } else {
    console.warn(`[bundle] Warning: File not found -> ${targetPath}`);
    return `\n\n<!-- Missing include: ${cleanPath} -->\n\n`;
  }
});

fs.writeFileSync(outFile, content, 'utf8');
console.log(`[bundle] Generated ${outFile}`);

// PDF automatisch kompilieren
try {
  console.log('[bundle] Rendering PDF with theme...');
  execSync(
    `npx @marp-team/marp-cli "${outFile}" -o "${outPdf}" --theme-set "${themePath}" --allow-local-files`,
    { stdio: 'inherit' }
  );
  console.log(`[bundle] PDF ready: ${outPdf}`);
} catch (err) {
  console.error('[bundle] Error rendering PDF:', err.message);
}