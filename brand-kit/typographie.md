# Typographie — Brand Kit Mairie Le Pin

---

## Typographie du site ACTUEL
- **Polices :** Système par défaut — pas de Google Fonts, pas de police déclarée explicitement
- **Rendu :** Arial/Helvetica selon le navigateur/OS
- **Observations :** Pas d'identité typographique — utilise ce que le navigateur propose, résultat incohérent selon l'appareil

---

## Typographie du NOUVEAU site

### Police principale : **Inter**
- **Source :** Google Fonts — https://fonts.google.com/specimen/Inter
- **Import :**
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  ```
- **CSS :**
  ```css
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  ```

### Pourquoi Inter ?
- Police moderne, très lisible à toutes tailles
- Conçue pour les interfaces numériques
- Utilisée par des centaines de services gouvernementaux et institutionnels en Europe
- Gratuite, open-source
- Excellente lisibilité sur mobile

---

## Hiérarchie typographique

| Élément | Taille | Poids | Usage |
|---------|--------|-------|-------|
| H1 (hero) | clamp(2.2rem, 5vw, 3.5rem) | 800 | Titre principal hero |
| H1 (pages) | clamp(1.8rem, 4vw, 2.75rem) | 800 | Titres de pages internes |
| H2 (sections) | clamp(1.5rem, 3vw, 2rem) | 700 | Titres de sections |
| H3 (cartes) | 0.95–1rem | 700 | Titres de cartes/articles |
| Corps | 1rem | 400 | Texte courant |
| Sous-titre | 1rem | 400 | Descriptions sous titres |
| Petit texte | 0.875rem | 400–500 | Méta, dates, étiquettes |
| Micro | 0.75–0.8rem | 500–600 | Tags, labels, badges |

### Interlignage
- Corps : `line-height: 1.6`
- Titres : `line-height: 1.15`

---

## Règles typographiques
1. **Jamais plus de 2 niveaux de gras visibles** en même temps dans un bloc
2. **Titres en `color-primary`** (#1b3a4b), jamais en noir pur
3. **Texte secondaire en `color-text-muted`** (#6b7280)
4. **Pas de texte justifié** — alignement à gauche uniquement
