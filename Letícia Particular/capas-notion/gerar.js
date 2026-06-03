const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const dir = __dirname;

const capas = [
  { foto: 'foto-projetos.jpg', texto: 'projetos', saida: 'capa-projetos.png' },
  { foto: 'foto-produtividade.jpg', texto: 'produtividade', saida: 'capa-produtividade.png' },
  { foto: 'foto-marketing.jpg', texto: 'marketing', saida: 'capa-marketing.png' },
  { foto: 'foto-administrativo.jpg', texto: 'administrativo', saida: 'capa-administrativo.png' },
  { foto: 'foto-financeiro.jpg', texto: 'financeiro', saida: 'capa-financeiro.png' }
];

function imgToBase64(filePath) {
  return fs.readFileSync(filePath).toString('base64');
}

function gerarHTML(fotoPath, texto) {
  const b64 = imgToBase64(fotoPath);
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 1500px; height: 500px; overflow: hidden; position: relative; background: #1a1a1a; }
  .foto {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 40%;
    display: block;
  }
  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0,0,0,0.10) 0%,
      rgba(0,0,0,0.25) 50%,
      rgba(0,0,0,0.55) 100%
    );
  }
  .texto {
    position: absolute;
    bottom: 44px;
    left: 56px;
    font-family: 'Dancing Script', cursive;
    font-size: 88px;
    font-weight: 700;
    color: #ffffff;
    text-shadow: 0 2px 20px rgba(0,0,0,0.5);
    line-height: 1;
  }
</style>
</head>
<body>
  <img class="foto" src="data:image/jpeg;base64,${b64}" />
  <div class="overlay"></div>
  <div class="texto">${texto}</div>
</body>
</html>`;
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1500, height: 500 });

  for (const capa of capas) {
    const fotoPath = path.join(dir, capa.foto);
    const html = gerarHTML(fotoPath, capa.texto);
    await page.setContent(html, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1500); // wait for font
    const saida = path.join(dir, capa.saida);
    await page.screenshot({ path: saida, type: 'png' });
    console.log(`OK: ${capa.saida}`);
  }

  await browser.close();
})();
