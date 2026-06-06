import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const DIR = path.resolve('slides');
const files = fs.readdirSync(DIR).filter(f => f.endsWith('.svg')).sort();

const fontHead = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,700;12..96,800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>html,body{margin:0;padding:0}svg{display:block}</style>
`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 2 });

for (const f of files) {
  const svg = fs.readFileSync(path.join(DIR, f), 'utf8');
  const htmlDoc = `<!doctype html><html><head>${fontHead}</head><body>${svg}</body></html>`;
  await page.setContent(htmlDoc, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);
  const el = await page.$('svg');
  const out = path.join(DIR, f.replace('.svg', '.png'));
  await el.screenshot({ path: out });
  console.log('rendered', out);
}
await browser.close();
console.log('done');
