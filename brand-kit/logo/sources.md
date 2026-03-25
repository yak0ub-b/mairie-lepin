# Logo — Sources & Instructions

---

## Logo actuel : Écusson de Le Pin

### URL directe
```
https://mairiedelepin.fr/wp-content/uploads/2018/06/Ecusson.jpg
```

### Comment le récupérer
1. Ouvrir l'URL ci-dessus dans un navigateur
2. Clic droit → "Enregistrer l'image sous..."
3. Nommer le fichier : `ecusson-le-pin.jpg`
4. Placer dans : `brand-kit/logo/ecusson-le-pin.jpg`
5. Copier aussi dans : `assets/images/logo.jpg`

---

## Usage dans le site
Actuellement dans le code HTML du nouveau site, le logo est remplacé par l'emoji 🏛️.
Une fois l'écusson récupéré, remplacer dans chaque page :

```html
<!-- AVANT -->
<div class="brand-logo">🏛️</div>

<!-- APRÈS (avec image) -->
<img src="assets/images/logo.jpg" alt="Écusson Mairie de Le Pin" class="brand-logo-img" />
```

CSS à ajouter dans `assets/css/style.css` :
```css
.brand-logo-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: contain;
  background: var(--color-white);
  padding: 2px;
}
```

---

## À prévoir pour le site final
- Demander à la mairie s'ils ont une version vectorielle (SVG ou AI/EPS) de l'écusson
- Si non : recréer une version SVG propre à partir du JPG (peut se faire avec Inkscape - gratuit)
- Format idéal : SVG (scalable, léger, qualité parfaite)
- Format acceptable : PNG transparent 200×200px minimum

---

## Favicon
Utiliser le logo redimensionné en 32×32px pour le favicon.
```html
<link rel="icon" type="image/jpeg" href="assets/images/favicon.jpg" />
```
