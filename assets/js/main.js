/* ============================================================
   Mairie de Le Pin — main.js
   Navigation mobile + petits effets
   ============================================================ */

(function () {
  'use strict';

  /* ---- Navigation mobile ---- */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);

      // Animate hamburger → X
      const spans = hamburger.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });

    // Close mobile nav when clicking a link
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      });
    });

    // Close on click outside
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
  }

  /* ---- Barre de recherche toggle ---- */
  const searchToggle = document.getElementById('searchToggle');
  const searchDropdown = document.getElementById('searchDropdown');
  const searchInput = document.getElementById('searchInput');

  if (searchToggle && searchDropdown) {
    searchToggle.addEventListener('click', function () {
      const isOpen = searchDropdown.classList.toggle('open');
      searchToggle.setAttribute('aria-expanded', isOpen);
      searchDropdown.setAttribute('aria-hidden', !isOpen);
      if (isOpen && searchInput) {
        setTimeout(function () { searchInput.focus(); }, 50);
      }
    });

    // Fermer avec Échap
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && searchDropdown.classList.contains('open')) {
        searchDropdown.classList.remove('open');
        searchToggle.setAttribute('aria-expanded', 'false');
        searchDropdown.setAttribute('aria-hidden', 'true');
        searchToggle.focus();
      }
    });

    // Fermer au clic en dehors
    document.addEventListener('click', function (e) {
      if (!searchToggle.contains(e.target) && !searchDropdown.contains(e.target)) {
        searchDropdown.classList.remove('open');
        searchToggle.setAttribute('aria-expanded', 'false');
        searchDropdown.setAttribute('aria-hidden', 'true');
      }
    });
  }

  /* ---- Navbar scroll shadow ---- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.25)';
      } else {
        navbar.style.boxShadow = '0 2px 16px rgba(0,0,0,0.18)';
      }
    }, { passive: true });
  }

  /* ---- Fade-in on scroll (Intersection Observer) ---- */
  const fadeEls = document.querySelectorAll(
    '.news-card, .quick-card, .event-item, .stat-card, .elu-card, .doc-item'
  );

  if ('IntersectionObserver' in window && fadeEls.length) {
    fadeEls.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = el.style.transform
        ? el.style.transform + ' translateY(18px)'
        : 'translateY(18px)';
      el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
    });

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = entry.target.style.transform
            .replace('translateY(18px)', 'translateY(0)');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    fadeEls.forEach(function (el) { observer.observe(el); });
  }

  /* ---- Smooth scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---- Hero slideshow (Ken Burns) ---- */
  var heroSlides = document.querySelectorAll('.hero-slide');
  if (heroSlides.length > 1) {
    var currentSlide = 0;
    setInterval(function () {
      heroSlides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % heroSlides.length;
      heroSlides[currentSlide].classList.add('active');
    }, 5500);
  }

  /* ---- Parallax scroll — bandeau ---- */
  var parallaxInner = document.querySelector('.parallax-band-inner');
  if (parallaxInner) {
    window.addEventListener('scroll', function () {
      var scrolled = window.pageYOffset;
      var bandTop = parallaxInner.closest('.parallax-band').getBoundingClientRect().top + scrolled;
      var offset = (scrolled - bandTop) * 0.3;
      parallaxInner.style.transform = 'translateY(' + offset + 'px)';
    }, { passive: true });
  }

  /* ---- Recherche locale — navigation du site ---- */
  var SEARCH_INDEX = [
    { title: 'Accueil',                    url: 'index.html',         page: 'Accueil',      kw: 'accueil mairie commune lepin' },
    { title: 'Découvrir Le Pin',           url: 'decouvrir.html',     page: 'Découvrir',    kw: 'histoire géographie village commune forêt' },
    { title: 'Plan du village (carte)',    url: 'https://www.google.fr/maps/place/77181+Le+Pin/@48.914,2.630,14z', page: 'Découvrir', kw: 'plan carte map itinéraire' },
    { title: "Livret d'accueil",           url: 'decouvrir.html',     page: 'Découvrir',    kw: 'livret accueil nouveaux habitants bienvenue' },
    { title: 'La Mairie',                  url: 'mairie.html',        page: 'La Mairie',    kw: 'mairie élus conseil budget documents' },
    { title: 'Conseil municipal',          url: 'mairie.html',        page: 'La Mairie',    kw: 'conseil municipal élus délibérations votes' },
    { title: 'Documents officiels',        url: 'mairie.html',        page: 'La Mairie',    kw: 'budget plu tarifs arrêtés documents officiels' },
    { title: 'Actualités de la commune',   url: 'mairie.html',        page: 'La Mairie',    kw: 'actualités nouvelles informations commune' },
    { title: 'Vie pratique',               url: 'vie-pratique.html',  page: 'Vie pratique', kw: 'services démarches administratives pratique' },
    { title: 'École Étienne Martin',       url: 'https://mairiedelepin.fr/horaires-de-lecole-etienne-martin/', page: 'Vie pratique', kw: 'école primaire enfants horaires cantine' },
    { title: 'Démarches administratives',  url: 'vie-pratique.html',  page: 'Vie pratique', kw: 'carte identité passeport certificat urbanisme' },
    { title: 'Associations',               url: 'decouvrir.html',     page: 'Découvrir',    kw: 'associations sport loisirs culture ainés gym' },
    { title: 'Transports & Mobilité',      url: 'https://bouger-les-lignes.fr', page: 'Vie pratique', kw: 'bus train transport mobilité lignes' },
    { title: 'Environnement & Déchets',    url: 'vie-pratique.html',  page: 'Vie pratique', kw: 'déchets tri recyclage poubelle ordures' },
    { title: 'Sécurité & Urgences',        url: 'vie-pratique.html',  page: 'Vie pratique', kw: 'police gendarmerie sécurité urgences' },
    { title: 'Agenda & Événements',        url: 'vie-pratique.html',  page: 'Vie pratique', kw: 'agenda événements fêtes animations calendrier' },
    { title: 'Contact & Horaires mairie',  url: 'contact.html',       page: 'Contact',      kw: 'contact téléphone email adresse horaires mairie' },
  ];

  var searchInput   = document.getElementById('searchInput');
  var searchResults = document.getElementById('searchResults');
  var searchForm    = document.getElementById('searchForm');

  if (searchInput && searchResults && searchForm) {
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // Naviguer vers le premier résultat si possible
      var first = searchResults.querySelector('.search-result-item');
      if (first) first.click();
    });

    searchInput.addEventListener('input', function () {
      var q = searchInput.value.trim().toLowerCase();
      searchResults.innerHTML = '';
      if (!q) { searchResults.classList.remove('visible'); return; }

      var matches = SEARCH_INDEX.filter(function (item) {
        return item.title.toLowerCase().includes(q) || item.kw.toLowerCase().includes(q);
      }).slice(0, 6);

      if (matches.length === 0) {
        searchResults.innerHTML = '<div class="search-no-result">Aucun résultat trouvé</div>';
      } else {
        matches.forEach(function (item) {
          var a = document.createElement('a');
          a.className = 'search-result-item';
          a.href = item.url;
          if (item.url.indexOf('http') === 0) { a.target = '_blank'; a.rel = 'noopener'; }
          a.innerHTML =
            '<svg class="search-result-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' +
            '<span>' + item.title + '</span>' +
            '<span class="search-result-page">' + item.page + '</span>';
          searchResults.appendChild(a);
        });
      }
      searchResults.classList.add('visible');
    });

    // Fermer résultats si clic en dehors
    document.addEventListener('click', function (e) {
      if (!searchForm.contains(e.target)) {
        searchResults.classList.remove('visible');
      }
    });

    // Navigation clavier dans les résultats
    searchInput.addEventListener('keydown', function (e) {
      var items = searchResults.querySelectorAll('.search-result-item');
      var focused = searchResults.querySelector('.focused');
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        var next = focused ? focused.nextElementSibling : items[0];
        if (focused) focused.classList.remove('focused');
        if (next) next.classList.add('focused');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        var prev = focused ? focused.previousElementSibling : items[items.length - 1];
        if (focused) focused.classList.remove('focused');
        if (prev) prev.classList.add('focused');
      } else if (e.key === 'Enter' && focused) {
        e.preventDefault();
        focused.click();
      } else if (e.key === 'Escape') {
        searchResults.classList.remove('visible');
      }
    });
  }

  /* ---- Effet 3D tilt sur les news cards ---- */
  document.querySelectorAll('.news-card').forEach(function (card) {
    card.addEventListener('mouseenter', function () {
      card.style.transition = 'transform 0.08s ease, box-shadow 0.22s ease';
    });
    card.addEventListener('mousemove', function (e) {
      var r = card.getBoundingClientRect();
      var x = ((e.clientX - r.left) / r.width  - 0.5) * 16;
      var y = ((e.clientY - r.top)  / r.height - 0.5) * -16;
      card.style.transform =
        'perspective(700px) rotateX(' + y + 'deg) rotateY(' + x + 'deg) translateY(-4px)';
    });
    card.addEventListener('mouseleave', function () {
      card.style.transition = 'transform 0.45s ease, box-shadow 0.22s ease';
      card.style.transform = '';
    });
  });

})();
