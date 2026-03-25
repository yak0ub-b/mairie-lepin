# Paris.fr — Analyse design

## Navigation
- Architecture multi-index Algolia : Services / Lieux / Sorties / Activités
- Navigation très complexe (portail métropolitain, pas comparable à une commune rurale)
- Barre de recherche moteur principal de découverte

## Hero
- Non accessible via simple fetch (rendu JS lourd, données backend uniquement)
- Basé sur données temps réel : qualité de l'eau, pollution, trafic, météo

## Couleurs
- Non visibles via HTML statique (rendu JS)
- Logo parisien : rouge + blanc (identité forte)

## Typographies
- Non détectées (site full JS/React)

## Sections homepage
- Données qualité eau Seine
- Indicateurs environnementaux temps réel
- Moteur de recherche Algolia multi-index

## Features notables
- ✅ **Moteur Algolia** (recherche instantanée multi-index)
- ✅ Données temps réel (eau, trafic, pollution)
- ✅ API scoped par arrondissement
- ✅ Multilingue (infrastructure locale par district)

## Points faibles
- Inaccessible sans JS (non applicable aux communes rurales)
- Complexité disproportionnée pour toute commune < 50k hab.

## Note globale
N/A — Hors catégorie. Paris est une référence technique uniquement. L'architecture Algolia et les données temps réel ne sont pas réplicables. À retenir : la recherche est LE moteur de navigation principal.
