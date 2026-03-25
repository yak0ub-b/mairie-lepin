# Synthèse Benchmark — Sites Mairie Français

Analyse de 9 sites municipaux (grandes villes + villes moyennes + communes voisines Le Pin).

---

## Scores comparatifs

| Site | Note | Points forts | Points faibles |
|------|------|-------------|----------------|
| Bordeaux | 7/10 | Accès rapides position 2, recherche proéminente | Hero sans CTA, trop de sous-menus |
| Chelles | 7/10 | Chatbot, navigation "Mes services" | Typographie basique, peu mémorable |
| Strasbourg | 7/10 | Multilingue x10, palette unique | Trop sombre, vignettes petites |
| Lyon | 6/10 | Structure solide, bonne organisation | Surcharge, 3 carousels, fade |
| Rennes | 6/10 | Éco-conception, navigation personas | Palette non distinctive |
| Mitry-Mory | 6/10 | Carte interactive, portail citoyen | 50 liens above-fold, chaos |
| Claye-Souilly | 5/10 | "En 1 clic" bien pensé | Rose dominant peu professionnel |
| Villeparisis | 5/10 | Toolbar accessibilité, section quartiers | Visuellement plat |
| Melun | 4/10 | Site fonctionnel | Zéro personnalité graphique |

---

## Top 5 Patterns communs aux meilleurs sites

### 1. Les "Accès rapides" sont systématiques et en position haute
**Présents sur** : Bordeaux (position 2), Rennes (position 3), Claye-Souilly ("En 1 clic"), Mitry-Mory ("En 1 clic" position 8), Chelles (sous le hero).
**Meilleure pratique** : Bordeaux et Chelles → immédiatement après le hero. Services typiques : état civil, démarches en ligne, cantine/portail famille, bibliothèque, urbanisme.
**À faire pour Le Pin** : Section "Accès rapides" avec 4-6 icônes, juste après le hero.

### 2. Navigation en 4-6 items maximum, avec sous-menus thématiques
**Tous les meilleurs sites** utilisent 4-6 items de nav principales, jamais plus.
**Tendance** : labels "citoyens" (Chelles : "Mes services", Mitry-Mory : "Une ville à vivre", Rennes : "Vos services") plutôt qu'administratifs.
**À faire pour Le Pin** : Conserver la structure actuelle (5 items) mais affiner les labels.

### 3. Actualités + Agenda = les deux piliers de contenu
**Sur tous les sites** : section actualités (3-4 articles) + section agenda (4-8 événements).
Bordeaux va plus loin : 850+ événements dans l'agenda.
**À faire pour Le Pin** : Bien séparer visuellement "Actualités" et "Agenda" avec des designs distincts.

### 4. Carousel hero = standard mais souvent mal utilisé
**Problème commun** : carousels sans CTA fort, sans indicateur de progression, sans pause au survol.
**Exception positive** : Bordeaux a un carousel propre avec image 16:9 + titre + date + catégorie.
**À faire pour Le Pin** : Préférer une hero statique forte avec une belle image + 1 CTA clair. Ou carousel limité à 3 slides avec indicateurs.

### 5. Recherche visible en header = standard obligatoire
**Présente sur tous les sites analysés** (sauf Paris qui en fait son moteur principal).
Position : droite dans la nav (desktop) + menu mobile.
**À faire pour Le Pin** : Ajouter une barre de recherche visible dans le header.

---

## Tendances palettes couleur (secteur public français 2023-2025)

| Couleur | Sites | Commentaire |
|---------|-------|-------------|
| Bleu institutionnel | Bordeaux (#342fff), Chelles (#0170B9) | Dominant, classique, rassurant |
| Bleu marine foncé | Le Pin (actuel #1b3a4b) | Sérieux, premium, distingué |
| Vert émeraude | Strasbourg (#2AD783) | Moderne, écologie, unique |
| Rose/violet | Claye-Souilly (#ff5873) | À éviter — peu professionnel |
| Jaune vif | Melun (#ff0) | À éviter — cheap |
| Noir + blanc | Rennes, Paris | Sobre, mais froid pour commune rurale |

**Conclusion** : Le bleu marine (#1b3a4b) de Le Pin est **le bon choix**. C'est premium sans être flashy, institutionnel sans être administratif. L'accent teal (#47797c) apporte la distinction.

---

## Typographies populaires secteur public

| Typographie | Type | Notes |
|-------------|------|-------|
| Polices système (Segoe UI, Roboto) | Sans-serif | Standard, lisible, 0 personnalité |
| TTFors (Strasbourg) | Sans-serif propriétaire | Unique mais risqué |
| Inter (Le Pin actuel) | Sans-serif Google | Excellent choix — lisible + moderne |
| Source Sans Pro | Sans-serif Google | Très utilisé dans le public |
| Marianne | Typographie officielle DINUM | Utilisée par les sites État (data.gouv.fr) |

**Recommandation** : **Inter (déjà en place)** est un excellent choix. Pour différencier les titres, ajouter une display font : `Fraunces` (serif élégant) ou `DM Serif Display` pour les h1/h2 uniquement.

---

## UX Features indispensables en 2025

| Feature | Présence | Impact |
|---------|----------|--------|
| Recherche header | 9/9 sites | **Obligatoire** |
| Accès rapides / En 1 clic | 8/9 sites | **Obligatoire** |
| Actualités grid (3 articles) | 9/9 sites | **Obligatoire** |
| Agenda événements | 9/9 sites | **Obligatoire** |
| Réseaux sociaux footer | 9/9 sites | **Obligatoire** |
| Toolbar accessibilité | 3/9 sites | Recommandée |
| Chatbot | 1/9 sites (Chelles) | Différenciant |
| Navigation personas "Vous êtes" | 2/9 sites | Différenciant |
| Carte interactive | 1/9 sites (Mitry-Mory) | Optionnel |
| Mode multilingue | 1/9 sites (Strasbourg) | Optionnel |

---

## Ce que font les communes voisines qu'on peut dépasser

### Claye-Souilly (commune la plus proche, ~11k hab.)
- Site WordPress peu personnalisé
- Rose dominant = erreur de branding
- **Le Pin peut dépasser ça sans effort** avec le design actuel

### Mitry-Mory (~18k hab.)
- Richesse fonctionnelle (carte, portail citoyen) mais chaos visuel
- 50 liens above-the-fold = mauvaise UX
- **Le Pin : moins de contenu = plus de clarté = meilleur ressenti**

### Villeparisis (~28k hab.)
- Site plat et statique
- Aucune micro-interaction
- **Le Pin a déjà des animations fade-in + scroll effects = on les dépasse**

---

## Anti-patterns à absolument éviter

1. **Multiple carousels** sur la même page (Lyon) → confusion utilisateur
2. **Hero sans CTA** (Bordeaux, Claye-Souilly) → opportunité manquée
3. **50+ liens above-the-fold** (Mitry-Mory) → surcharge cognitive
4. **Couleurs vives inadaptées** : rose (#ff5873), jaune (#ff0) → peu professionnel
5. **Accès rapides en bas de page** (Mitry-Mory, position 10) → incompréhensible
6. **Navigation > 6 items** + sous-menus profonds → abandon mobile
7. **Pas de recherche** visible → frein aux démarches
