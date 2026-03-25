# Images — Sources & Catalogue

> Toutes les images utilisables du site actuel mairiedelepin.fr

---

## Images du Hero / Slider (homepage)

Pattern d'URL : `https://mairiedelepin.fr/wp-content/uploads/slider/[fichier].jpg`

### Images connues
```
https://mairiedelepin.fr/wp-content/uploads/slider/img_0088.jpg
```
→ Ouvrir dans un navigateur, faire clic droit → Enregistrer sous

**Pour récupérer toutes les images du slider :**
1. Aller sur https://mairiedelepin.fr/
2. Ouvrir les DevTools (F12) → onglet "Network" → filtrer "img"
3. Recharger la page
4. Télécharger toutes les images `.jpg` qui viennent de `/slider/`

### Nommage recommandé pour le nouveau site
```
assets/images/hero-village-1.jpg
assets/images/hero-village-2.jpg
assets/images/hero-village-3.jpg
```

---

## Autres images identifiées

### Écusson (logo)
```
https://mairiedelepin.fr/wp-content/uploads/2018/06/Ecusson.jpg
```
→ `assets/images/logo.jpg`

### Magazines (couvertures PDF)
Voir `site-actuel/la-mairie/magazines.md` pour les liens PDF.
Les magazines contiennent sûrement des photos du village utilisables.

---

## Images à demander à la mairie
Lors du RDV / devis, demander :
- [ ] Photos récentes du village (rues, monuments, nature)
- [ ] Photos de la salle des fêtes (intérieur et extérieur)
- [ ] Photos de l'école Étienne Martin
- [ ] Photos du conseil municipal / élus
- [ ] Photo portrait du Maire (Lydie Wallez)
- [ ] Photos des événements communaux (Vœux, Noël, etc.)
- [ ] Version SVG/PNG de l'écusson

---

## Banques d'images libres (backup)
Si pas d'images disponibles pour la preview :
- **Unsplash** : https://unsplash.com/s/photos/village-france
- **Pixabay** : https://pixabay.com/fr/photos/search/village%20france/
- Chercher : "village île-de-france", "mairie france", "commune seine-et-marne"

---

## Comment intégrer dans le site
```html
<!-- Image locale -->
<img src="assets/images/hero-village-1.jpg" alt="Vue du village de Le Pin" loading="lazy" />

<!-- Image depuis le site actuel (temporaire) -->
<img src="https://mairiedelepin.fr/wp-content/uploads/slider/img_0088.jpg"
     alt="Le Pin" loading="lazy" />
```

**Note :** Pour la preview, les images du site actuel peuvent être référencées directement par URL. Pour le site final hébergé, télécharger et héberger localement.
