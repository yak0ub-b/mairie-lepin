# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`. Chrome cache is at `C:/Users/nateh/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color

---

## Direction Artistique — Mairie de Le Pin

> Basé sur benchmark de 9 sites municipaux (Lyon, Bordeaux, Strasbourg, Rennes, Melun, Chelles, Claye-Souilly, Mitry-Mory, Villeparisis). Dossier complet : `research/`

### Positionnement
Site municipal pour commune rurale ~1 600 hab. Audience : habitants 25-80 ans.
Ton : **sobre, chaleureux, rassurant**. Ni "admin gris", ni "startup colorée", ni "réseau social".

### Stack réelle du projet
- HTML / CSS / JS vanilla — pas de Tailwind CDN, pas de build tool
- Fichiers CSS : `assets/css/style.css` (design system complet avec CSS vars)
- Fichiers JS : `assets/js/main.js`
- Pages : index.html, mairie.html, decouvrir.html, contact.html, vie-pratique.html

### Palette validée (confirmée après benchmark)
```css
--color-primary:        #1b3a4b    /* Bleu marine — premium, unique dans le 77 */
--color-accent:         #47797c    /* Teal — distinction, modernité */
--color-accent-light:   #e8f4f4    /* Fonds légers */
--color-bg:             #f5f6f8    /* Fond page */
--color-text:           #1a1a2e
--color-text-muted:     #6b7280
```
Ne jamais inventer d'autres couleurs. Dériver uniquement depuis ces variables.

### Typographie
- **Corps + nav + boutons** : `Inter` (déjà chargé via Google Fonts) — conserver
- **Titres h1/h2 impactants** (optionnel) : `Fraunces` ou `DM Serif Display` pour les sections de page intérieure uniquement

### Structure homepage obligatoire (ordre validé par benchmark)
1. Header fixe : logo | nav 5 items | 🔍 recherche | réseaux sociaux
2. Hero : image village + titre + **1 CTA bouton primaire**
3. **Accès rapides** (POSITION CRITIQUE — juste après hero, visible sans scroll)
4. Actualités : 3 cards avec image
5. Agenda : 4-5 événements
6. Chiffres clés commune
7. Footer : horaires + coordonnées + réseaux

### Références benchmark à imiter
- **Accès rapides** → Bordeaux.fr : positionnés en section 2, immédiatement après hero
- **Ton navigation** → Chelles.fr : "Mes services" (ton citoyen, pas administratif)
- **Hero CTA fort** → Chelles.fr : 1 bouton clair sous le titre hero
- **Toolbar accessibilité** → Villeparisis.fr : contraste + taille texte (simple à ajouter)

### Anti-patterns (constatés sur les concurrents — à ne JAMAIS faire)
- ❌ Multiple carousels sur la même page (Lyon = erreur majeure)
- ❌ Hero sans CTA (Bordeaux, Claye-Souilly = opportunité manquée)
- ❌ Accès rapides en bas de page (Mitry-Mory en position 10 = incompréhensible)
- ❌ Couleurs vives inadaptées : rose (#ff5873 Claye-Souilly), jaune flash (#ff0 Melun)
- ❌ Navigation > 6 items + sous-menus profonds (Bordeaux : 4 niveaux = abandon mobile)
- ❌ Polices système seules (Segoe UI, Roboto) = zéro personnalité
- ❌ Ombres plates `box-shadow: 2px 2px 5px gray` — utiliser des ombres colorées légères

### Avantages Le Pin vs concurrents voisins
Le Pin dépasse déjà Claye-Souilly, Mitry-Mory et Villeparisis sur :
- Design system CSS cohérent (eux : WordPress + plugins)
- Inter comme font (eux : system fonts)
- Bleu marine premium (eux : rose, jaune, bleu basique)
- Animations scroll (eux : sites statiques)
- HTML sémantique propre (eux : soup WordPress)
