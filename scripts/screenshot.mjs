import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const url   = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

// Dossier de sortie
const screenshotDir = path.join(rootDir, 'screen');
if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir);

// Numérotation auto-incrémentée
const existing = fs.readdirSync(screenshotDir).filter(f => /^screenshot-\d+/.test(f));
const numbers  = existing.map(f => parseInt(f.match(/^screenshot-(\d+)/)?.[1] || '0'));
const next     = numbers.length ? Math.max(...numbers) + 1 : 1;

const filename = label
  ? `screenshot-${next}-${label}.png`
  : `screenshot-${next}.png`;

const outputPath = path.join(screenshotDir, filename);

// Lancement Chrome système
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

// Pause courte pour les animations CSS
await new Promise(r => setTimeout(r, 500));

await page.screenshot({ path: outputPath, fullPage: true });
await browser.close();

console.log(`Screenshot saved: screen/${filename}`);
