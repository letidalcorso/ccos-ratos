const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const AGENTES = [
  {
    nome: 'Adequação de Copy',
    url: 'https://chatgpt.com/g/g-6854ae8600988191ad93a24030a5d0ae-lc-agente-de-adequacao-de-copy'
  },
  {
    nome: 'Mestre de Lista',
    url: 'https://chatgpt.com/g/g-6842d61fddc081919ccaa6a9105338a1-mestre-de-lista'
  },
  {
    nome: 'Setup Punchline',
    url: 'https://chatgpt.com/g/g-6854a344b2a08191a0d61482cb32be44-lc-agente-de-setup-punchline'
  },
  {
    nome: 'Transformador de História em Copy',
    url: 'https://chatgpt.com/g/g-6854b45447388191b772ee8a6eafbcaa-lc-agente-transformador-de-historia-em-copy'
  }
];

const OUTPUT_DIR = path.join(__dirname);

async function extrairAgentes() {
  const userDataDir = `${process.env.HOME}/Library/Application Support/Google/Chrome`;

  const context = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    channel: 'chrome',
    slowMo: 500,
    args: ['--profile-directory=Default']
  });
  const page = await context.newPage();

  console.log('\n=== Abrindo ChatGPT com seu perfil do Chrome (já logada) ===');
  await page.goto('https://chatgpt.com', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);

  const resultados = [];

  for (const agente of AGENTES) {
    console.log(`\n=== Acessando: ${agente.nome} ===`);
    await page.goto(agente.url, { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(3000);

    const screenshotPath = path.join(OUTPUT_DIR, `${agente.nome.replace(/\s+/g, '-').toLowerCase()}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Screenshot salvo: ${screenshotPath}`);

    // Tenta extrair descrição e prompts de início visíveis na página
    const info = await page.evaluate(() => {
      const getText = (sel) => {
        const el = document.querySelector(sel);
        return el ? el.innerText.trim() : null;
      };

      // Tenta pegar descrição do agente
      const descricao =
        document.querySelector('[data-testid="gizmo-description"]')?.innerText ||
        document.querySelector('.agent-description')?.innerText ||
        null;

      // Tenta pegar prompts de início
      const promptEls = document.querySelectorAll('[data-testid="conversation-starter"]');
      const starters = Array.from(promptEls).map(el => el.innerText.trim());

      // Pega o título da página
      const titulo = document.title;

      // Pega todo texto visível relevante (parágrafo com descrição)
      const paragrafos = Array.from(document.querySelectorAll('p, [class*="description"], [class*="subtitle"]'))
        .map(el => el.innerText.trim())
        .filter(t => t.length > 20 && t.length < 500);

      return { titulo, descricao, starters, paragrafos: paragrafos.slice(0, 5) };
    });

    resultados.push({ ...agente, ...info });
    console.log('Info capturada:', JSON.stringify(info, null, 2));
  }

  // Salva resultado em JSON
  const jsonPath = path.join(OUTPUT_DIR, 'agentes.json');
  fs.writeFileSync(jsonPath, JSON.stringify(resultados, null, 2), 'utf-8');
  console.log(`\n=== Concluído! Resultado salvo em: ${jsonPath} ===`);

  await context.close();
}

extrairAgentes().catch(console.error);
