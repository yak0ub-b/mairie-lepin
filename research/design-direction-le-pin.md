# Direction Artistique — Mairie de Le Pin

Basé sur le benchmark de 9 sites municipaux français.

---

## Positionnement

**Qui** : Commune rurale, 1 642 habitants (Pinois/Pinoises), Seine-et-Marne (77).
**Audience** : Habitants 25-80 ans. Pas de techos, pas de jeunes branchés — des gens qui veulent trouver vite ce dont ils ont besoin.
**Ton** : Sobre, chaleureux, rassurant. Ni "admin gris des années 2000", ni "startup colorée", ni "réseau social".
**Objectif** : Donner confiance et fierté — ce site doit faire dire "wow c'est propre" à la Maire et aux habitants.

---

## Palette couleur (validée après benchmark)

La palette actuelle est **confirmée comme un excellent choix** — bleu marine premium, rare dans les communes voisines.

```css
--color-primary:        #1b3a4b    /* Bleu marine — institutionnel, sérieux, premium */
--color-primary-dark:   #122835    /* Footer, sections très foncées */
--color-accent:         #47797c    /* Teal — distinction, modernité, ancrage nature */
--color-accent-dark:    #2f5f62    /* Hover teal */
--color-accent-light:   #e8f4f4    /* Fonds légers teal */
--color-bg:             #f5f6f8    /* Fond page — gris très clair, pas blanc pur */
--color-white:          #ffffff
--color-text:           #1a1a2e    /* Texte principal */
--color-text-muted:     #6b7280    /* Texte secondaire */
--color-border:         #e2e8f0    /* Bordures légères */
```

**Ce qui nous différencie** :
- Claye-Souilly → rose `#ff5873` (peu professionnel)
- Melun → jaune vif `#ff0` (cheap)
- Chelles → bleu classique `#0170B9` (ordinaire)
- **Le Pin → bleu marine `#1b3a4b` = premium, distingué, unique dans le 77**

---

## Typographie

**Choix actuel : Inter → confirmé excellent.**

Inter est utilisé sur les sites les plus sérieux du web (Linear, Vercel, Notion). Rare dans les mairies → différenciant. Lisible à toutes tailles.

### Proposition d'amélioration : ajouter une serif pour les titres
Pour les h1 et h2 des pages (pas du header), ajouter `DM Serif Display` ou `Fraunces` pour donner du caractère aux grandes titres de pages intérieures.

```css
/* Titres de section importants */
font-family: 'Fraunces', 'Georgia', serif;   /* option A — élégant, humaniste */
/* ou */
font-family: 'DM Serif Display', serif;       /* option B — moderne, propre */

/* Corps + nav + boutons = Inter (inchangé) */
font-family: 'Inter', system-ui, sans-serif;
```

**À ne pas faire** : polices système (Segoe UI, Roboto) → zéro personnalité.
**À ne pas faire** : polices décoratives, polices manuscrites → pas sérieux.

---

## Structure de page — Homepage idéale (inspirée du benchmark)

```
1. HEADER fixe
   └── Logo | Navigation 5 items | 🔍 Barre de recherche | Réseaux sociaux

2. HERO
   └── Image belle du village (mairie, place, nature)
       Titre court + sous-titre
       1 CTA primaire : "Découvrir Le Pin →"

3. ACCÈS RAPIDES (position 3 = CRITIQUE — leçon Bordeaux/Chelles)
   └── 6 icônes cards : État civil | Démarches en ligne | Cantine |
                         Urbanisme | Bibliothèque | Contact mairie

4. ACTUALITÉS
   └── 3 cards avec image + catégorie + titre + date

5. AGENDA
   └── 4-5 événements à venir (liste ou cards)

6. LA COMMUNE EN CHIFFRES
   └── Stats (population, surface, altitude, associations...)

7. FOOTER
   └── Horaires | Coordonnées | Liens rapides | Réseaux | Mentions légales
```

**Règle absolue** : Les accès rapides (section 3) doivent être visibles sans scroll sur desktop.

---

## Composants prioritaires à améliorer

### 1. Header — Ajouter la recherche
Le header actuel n'a pas de barre de recherche → manque sur 9/9 sites benchmarkés.
Placement : entre nav et burger mobile.

### 2. Hero — CTA plus fort
Le hero actuel a un bon visuel mais le CTA pourrait être plus affirmé.
Modèle à suivre : **image pleine largeur + overlay gradient + titre blanc + 1 bouton primaire**.

### 3. Section "Accès rapides" — Remonter et enrichir
Actuellement présente mais à positionner immédiatement après le hero.
Format idéal : 6 cards avec icône SVG + label court + hover color.

### 4. Cards actualités — Ajouter images
Cards actuelles sans image vraie → utiliser photos locales dès disponibles.
En attendant : overlay coloré avec initiales ou illustration SVG.

### 5. Footer — Ajouter horaires mairie en évidence
Sur tous les sites de communes : les horaires d'ouverture sont en footer, bien visibles.

---

## Ce qu'on fait que les concurrents ne font pas

| Feature | Le Pin | Concurrents voisins |
|---------|--------|---------------------|
| Design system cohérent (CSS vars) | ✅ | ❌ (WordPress templates) |
| Inter comme font | ✅ | ❌ (system fonts) |
| Palette bleu marine premium | ✅ | ❌ (rose, jaune, bleu basique) |
| Animations fade-in scroll | ✅ | ❌ |
| HTML sémantique + ARIA | ✅ | ⚠️ partiel |
| Code propre sans dépendances | ✅ | ❌ (WordPress + 20 plugins) |

---

## Références à imiter (concrètes)

| Element | Référence | Pourquoi |
|---------|-----------|----------|
| Structure accès rapides | **Bordeaux.fr** (section 2) | Positionnement immédiat après hero |
| Navigation ton citoyen | **Chelles.fr** ("Mes services") | Appropriation, chaleur |
| Navigation personas | **Mitry-Mory.fr** ("Vous êtes") | Utile si plus de contenu |
| Toolbar accessibilité | **Villeparisis.fr** | Simple à implémenter, vertueux |
| Multilingue (optionnel) | **Strasbourg.eu** | Long terme seulement |

---

## Direction visuelle — Ambiance générale

**Moodboard en mots** :
- Propre comme un cabinet médical haut de gamme
- Chaleureux comme un office de tourisme de village
- Rassurant comme une banque régionale
- Moderne comme un site SaaS B2B sobre

**Ce qu'on évite absolument** :
- Les couleurs criantes (rose, jaune flash)
- Les carousels multiples sur la même page
- Les tableaux HTML pour les horaires
- Les boutons trop ronds ou trop carrés (radius 10px = bien)
- Les animations de chargement complexes
- Les ombres plates `box-shadow: 2px 2px 5px gray`

**Ce qu'on soigne particulièrement** :
- Les ombres : légères, colorées (`rgba(27, 58, 75, 0.08)`)
- Les hover : toujours un feedback (couleur + léger lift)
- La hiérarchie : titres > sous-titres > corps bien différenciés
- L'espacement : aéré, pas dense — une commune rurale n'a pas 500 services

---

## Checklist avant présentation à la Mairie

- [ ] Barre de recherche visible dans le header
- [ ] Section "Accès rapides" en position 3 (juste après hero)
- [ ] Hero avec 1 vrai CTA bouton
- [ ] 3 actualités avec images (vraies ou placeholders colorés)
- [ ] Agenda avec 4-5 événements
- [ ] Horaires mairie visibles en footer
- [ ] Mobile : toutes sections lisibles sans zoom
- [ ] Toutes transitions = `transform` + `opacity` uniquement (pas `all`)
- [ ] Tous les boutons : états hover + focus + active
