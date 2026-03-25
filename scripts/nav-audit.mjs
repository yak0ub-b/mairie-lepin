/**
 * nav-audit.mjs — Audit de navigation du site Mairie de Le Pin
 * Détecte : liens morts, liens vers soi-même, liens vides/bidon
 * Usage : node scripts/nav-audit.mjs [--fix]
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { resolve, dirname, basename, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const FIX_MODE = process.argv.includes('--fix');

// Couleurs console
const RED    = '\x1b[31m';
const YELLOW = '\x1b[33m';
const GREEN  = '\x1b[32m';
const CYAN   = '\x1b[36m';
const RESET  = '\x1b[0m';
const BOLD   = '\x1b[1m';

// ─── 1. Trouver tous les fichiers HTML à la racine ───────────────────────────

const htmlFiles = readdirSync(ROOT)
  .filter(f => f.endsWith('.html'))
  .sort();

console.log(`${BOLD}${CYAN}=== NAV-AUDIT — Mairie de Le Pin ===${RESET}`);
console.log(`Mode : ${FIX_MODE ? `${YELLOW}FIX (corrections automatiques)${RESET}` : 'RAPPORT SEUL (--fix pour corriger)'}`);
console.log(`Pages analysées : ${htmlFiles.length} fichiers HTML\n`);

// ─── 2. Regex d'extraction des href ──────────────────────────────────────────

const HREF_RE = /href\s*=\s*(['"])(.*?)\1/gi;

// ─── 3. Classification d'un href ─────────────────────────────────────────────

function classifyHref(href, currentFile, lineContent) {
  const h = href.trim();

  if (h === '' || h === '#' || h.startsWith('javascript:')) {
    return { type: 'empty', issue: 'empty', label: 'Lien vide/bidon' };
  }
  if (h.startsWith('http://') || h.startsWith('https://') || h.startsWith('//')) {
    return { type: 'external', issue: null, label: 'Lien externe' };
  }
  if (h.startsWith('tel:') || h.startsWith('mailto:')) {
    return { type: 'tel', issue: null, label: 'Lien tel/mail' };
  }

  // Hash-only anchor sur la même page ex: #section
  if (h.startsWith('#')) {
    return { type: 'hash', issue: null, label: 'Ancre interne' };
  }

  // Lien interne : peut contenir un fragment (page.html#section)
  const [filePart] = h.split('#');
  const targetPath = resolve(ROOT, filePart);
  const currentBase = basename(currentFile);

  // Lien vers soi-même — exclure le logo navbar-brand (comportement normal)
  if (filePart === currentBase || filePart === `./${currentBase}`) {
    if (/navbar-brand/i.test(lineContent)) {
      return { type: 'self', issue: null, label: 'Logo navbar (OK)' };
    }
    return { type: 'self', issue: 'self', label: 'Lien vers soi-même' };
  }

  // Fichier inexistant
  if (!existsSync(targetPath)) {
    return { type: 'internal', issue: 'dead', label: 'Lien mort (fichier absent)' };
  }

  return { type: 'internal', issue: null, label: 'Lien interne OK' };
}

// ─── 4. Analyse de chaque fichier ────────────────────────────────────────────

const allIssues = [];

for (const file of htmlFiles) {
  const filePath = join(ROOT, file);
  const raw = readFileSync(filePath, 'utf8');
  const lines = raw.split('\n');
  const fileIssues = [];

  let inScript = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Détecter les blocs <script> pour exclure les href dans le JS
    if (/<script[\s>]/i.test(line)) inScript = true;
    if (/<\/script>/i.test(line)) { inScript = false; continue; }
    if (inScript) continue;

    let match;
    HREF_RE.lastIndex = 0;

    while ((match = HREF_RE.exec(line)) !== null) {
      const href = match[2];
      const { type, issue, label } = classifyHref(href, file, line);

      // Skip self-links already corrected with aria-current="page"
      if (issue === 'self' && line.includes(`href="${href}" aria-current="page"`)) continue;

      if (issue) {
        fileIssues.push({
          file,
          line: i + 1,        // numéro de ligne (1-based)
          lineIndex: i,        // index 0-based pour fix
          col: match.index + 1,
          href,
          type,
          issue,
          label,
          lineContent: line.trim().slice(0, 120),
        });
      }
    }

    // Détection boutons sans destination (hors script)
    if (/<button(?![^>]*onclick\s*=)(?![^>]*href\s*=)(?![^>]*data-)[^>]*>/i.test(line)) {
      if (!/type\s*=\s*['"]submit['"]/i.test(line) && !/type\s*=\s*['"]reset['"]/i.test(line)) {
        if (!/id\s*=\s*['"](?:hamburger|mobile-menu|search|close|open|toggle)/i.test(line)) {
          fileIssues.push({
            file,
            line: i + 1,
            lineIndex: i,
            col: 1,
            href: '(bouton)',
            type: 'button',
            issue: 'no-action',
            label: 'Bouton sans action/destination',
            lineContent: line.trim().slice(0, 120),
          });
        }
      }
    }
  }

  allIssues.push(...fileIssues);
}

// ─── 5. Affichage du rapport ──────────────────────────────────────────────────

const deadLinks   = allIssues.filter(i => i.issue === 'dead');
const selfLinks   = allIssues.filter(i => i.issue === 'self');
const emptyLinks  = allIssues.filter(i => i.issue === 'empty');
const noAction    = allIssues.filter(i => i.issue === 'no-action');

function printGroup(title, items, color) {
  if (items.length === 0) return;
  console.log(`${BOLD}${color}● ${title} (${items.length})${RESET}`);
  for (const item of items) {
    console.log(`  ${item.file}:${item.line}  ${color}${item.label}${RESET}`);
    console.log(`    href="${item.href}"`);
    console.log(`    ${CYAN}${item.lineContent}${RESET}`);
  }
  console.log('');
}

printGroup('LIENS MORTS (fichier absent)',   deadLinks,  RED);
printGroup('LIENS VERS SOI-MÊME',            selfLinks,  YELLOW);
printGroup('LIENS VIDES / BIDONS',           emptyLinks, YELLOW);
printGroup('BOUTONS SANS ACTION',            noAction,   YELLOW);

if (allIssues.length === 0) {
  console.log(`${GREEN}${BOLD}✓ Aucun problème détecté — navigation saine.${RESET}\n`);
} else {
  console.log(`${BOLD}Résumé : ${RED}${deadLinks.length} lien(s) mort(s)${RESET}, ${YELLOW}${selfLinks.length} vers soi-même${RESET}, ${YELLOW}${emptyLinks.length} vide(s)${RESET}, ${YELLOW}${noAction.length} bouton(s) sans action${RESET}`);
  console.log('');
}

// ─── 6. Mode FIX ─────────────────────────────────────────────────────────────

if (FIX_MODE && allIssues.length > 0) {
  console.log(`${BOLD}${YELLOW}=== APPLICATION DES CORRECTIONS ===${RESET}\n`);

  // Grouper par fichier
  const byFile = {};
  for (const issue of allIssues) {
    if (!byFile[issue.file]) byFile[issue.file] = [];
    byFile[issue.file].push(issue);
  }

  for (const [file, issues] of Object.entries(byFile)) {
    const filePath = join(ROOT, file);
    const lines = readFileSync(filePath, 'utf8').split('\n');
    let changed = false;
    const fixes = [];

    for (const issue of issues) {
      const lineIdx = issue.lineIndex;
      const originalLine = lines[lineIdx];

      if (issue.issue === 'self') {
        // Ajouter aria-current="page" en ciblant EXACTEMENT href="X.html" (évite le mauvais lien sur lignes multi-href)
        const escaped = issue.href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const targetRe = new RegExp(`href="${escaped}"(?!\\s+aria-current)(?!\\s+class.*aria-current)`);
        if (targetRe.test(originalLine)) {
          lines[lineIdx] = originalLine.replace(targetRe, `href="${issue.href}" aria-current="page"`);
          if (lines[lineIdx] !== originalLine) {
            fixes.push(`  ${GREEN}✓ aria-current ajouté${RESET} : href="${issue.href}" ligne ${issue.line}`);
            changed = true;
          }
        }
      }

      if (issue.issue === 'dead') {
        // Marquer le lien mort avec data-dead-link (ligne exacte)
        lines[lineIdx] = originalLine.replace(
          new RegExp(`href="${issue.href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g'),
          `href="#" data-dead-link="${issue.href}"`
        );
        if (lines[lineIdx] !== originalLine) {
          fixes.push(`  ${YELLOW}⚠ Lien mort marqué${RESET} : "${issue.href}" → data-dead-link (ligne ${issue.line})`);
          changed = true;
        }
      }

      if (issue.issue === 'empty' && issue.href === '') {
        lines[lineIdx] = originalLine.replace(/href=""/g, 'href="#"');
        if (lines[lineIdx] !== originalLine) {
          fixes.push(`  ${YELLOW}⚠ href="" normalisé${RESET} → href="#" (ligne ${issue.line})`);
          changed = true;
        }
      }
    }

    if (changed) {
      writeFileSync(filePath, lines.join('\n'), 'utf8');
      console.log(`${BOLD}${file}${RESET}`);
      fixes.forEach(f => console.log(f));
      console.log('');
    }
  }

  console.log(`${GREEN}${BOLD}✓ Corrections appliquées. Relancer sans --fix pour vérifier.${RESET}\n`);
} else if (FIX_MODE && allIssues.length === 0) {
  console.log(`${GREEN}Rien à corriger.${RESET}\n`);
}

// ─── 7. Export JSON ───────────────────────────────────────────────────────────

const jsonReport = {
  generatedAt: new Date().toISOString(),
  totalFiles: htmlFiles.length,
  totalIssues: allIssues.length,
  summary: {
    dead: deadLinks.length,
    self: selfLinks.length,
    empty: emptyLinks.length,
    noAction: noAction.length,
  },
  issues: allIssues,
};

writeFileSync(join(ROOT, 'nav-audit-report.json'), JSON.stringify(jsonReport, null, 2), 'utf8');
console.log(`Rapport JSON : ${CYAN}nav-audit-report.json${RESET}`);
