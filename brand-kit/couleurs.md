# Couleurs — Brand Kit Mairie Le Pin

---

## Palette du site ACTUEL (mairiedelepin.fr)

| Rôle | Valeur CSS | Aperçu (description) |
|------|-----------|----------------------|
| Fond principal / header | `#2b2b2b` | Gris très sombre, presque noir |
| Fond sombre variante | `rgba(51,51,51,1)` = `#333333` | Gris foncé |
| Fond avec opacité | `rgba(43,43,43,0.67)` | Semi-transparent sombre |
| Couleur accent / hover | `#47797c` | Teal/vert-bleu — **couleur signature de Le Pin** |
| Texte principal | `#ffffff` | Blanc (sur fond sombre) |
| Liens / bordures | `#000000` | Noir pur |

**Observations :**
- Site actuel = fond sombre + texte blanc → design daté, peu lisible en contenu dense
- Seul le teal `#47797c` est une vraie couleur identitaire à conserver

---

## Palette du NOUVEAU site (redesign)

| Nom | Valeur | Usage |
|-----|--------|-------|
| `--color-primary` | `#1b3a4b` | Header, footer, titres forts — bleu marine profond |
| `--color-primary-dark` | `#122835` | Footer fond, hover header |
| `--color-accent` | `#47797c` | ✅ Conservé du site actuel — boutons CTA, liens, accents |
| `--color-accent-dark` | `#2f5f62` | Hover des boutons accent |
| `--color-accent-light` | `#e8f4f4` | Fonds légers, badges, icônes |
| `--color-bg` | `#f5f6f8` | Fond de page — gris très clair, aéré |
| `--color-white` | `#ffffff` | Cartes, sections alternées |
| `--color-text` | `#1a1a2e` | Texte principal |
| `--color-text-muted` | `#6b7280` | Sous-titres, méta, textes secondaires |
| `--color-border` | `#e2e8f0` | Séparateurs, bordures de cartes |

### Pourquoi ce choix ?
- **Marine `#1b3a4b`** : autorité, institutionnel, moderne — parfait pour une mairie
- **Teal `#47797c`** : continuité avec l'existant, couleur mémorisée par les habitants
- **Fond clair `#f5f6f8`** : inverse du site actuel → plus lisible, plus moderne
- **Pas de rouge/orange/vert vif** : ton institutionnel, sobre et professionnel

---

## Swatches en CSS (copier dans style.css)

```css
:root {
  --color-primary:       #1b3a4b;
  --color-primary-dark:  #122835;
  --color-accent:        #47797c;
  --color-accent-dark:   #2f5f62;
  --color-accent-light:  #e8f4f4;
  --color-bg:            #f5f6f8;
  --color-white:         #ffffff;
  --color-text:          #1a1a2e;
  --color-text-muted:    #6b7280;
  --color-border:        #e2e8f0;
}
```
