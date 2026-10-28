
/* Mimi's Bakery — website interactions */
(function () {
  'use strict';

  var D = window.BAKERY;
  var $ = function (s, r) {
    return (r || document).querySelector(s);
  };

  var filter = 'all';

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  function byId(id) {
    return D.products.find(function (p) {
      return p.id === id;
    });
  }

  /* ---------- Website text ---------- */
  function renderText() {
    var text = D.ui.vi;

    document.querySelectorAll('[data-i18n]').forEach(function (node) {
      var key = node.getAttribute('data-i18n');

      if (Object.prototype.hasOwnProperty.call(text, key)) {
        node.textContent = text[key];
      }
    });
  }

  /* ---------- Product categories ---------- */
  function renderChips() {
    var box = $('#chips');
    box.textContent = '';

    D.categories.forEach(function (category) {
      var button = el(
        'button',
        'chip',
        category.emoji + ' ' + category.vi
      );

      button.type = 'button';
      button.setAttribute(
        'aria-selected',
        String(category.id === filter)
      );

      button.addEventListener('click', function () {
        filter = category.id;
        renderChips();
        renderGrid();
      });

      box.appendChild(button);
    });
  }

  /* ---------- Product grid ---------- */
  function renderGrid() {
    var grid = $('#grid');
    grid.textContent = '';

    var products = D.products.filter(function (p) {
      return filter === 'all' || p.category === filter;
    });

    if (!products.length) {
      grid.appendChild(
        el('p', 'empty', D.ui.vi['menu.empty'])
      );
      return;
    }

    products.forEach(function (p, i) {
      var card = el('button', 'card');
      card.type = 'button';
      card.style.animationDelay = (i * 60) + 'ms';

      var photo = el('div', 'card-photo');
      var img = el('img');

      img.src = p.image;
      img.alt = p.vi.name;
      img.loading = 'lazy';
      img.decoding = 'async';

      if (p.focus) img.style.objectPosition = p.focus;

      photo.appendChild(img);
      card.appendChild(photo);

      var body = el('div', 'card-body');
      body.appendChild(el('h3', null, p.vi.name));

      card.appendChild(body);

      card.addEventListener('click', function () {
        openModal(p.id);
      });

      grid.appendChild(card);
    });
  }

  /* ---------- Product pop-up ---------- */
  var modal = $('#modal');

  function fillModal(p) {
    if (!p) return;

    modal.dataset.id = p.id;

    var img = $('#mImg');
    img.src = p.image;
    img.alt = p.vi.name;

    if (p.focus) {
      img.style.objectPosition = p.focus;
    } else {
      img.style.objectPosition = '';
    }

    $('#mName').textContent = p.vi.name;
    $('#mDesc').textContent = p.vi.desc;

    var price = $('#mPrice');
    price.hidden = !p.price;
    price.textContent = p.price || '';
  }

  function openModal(id) {
    var p = byId(id);
    if (!p) return;

    fillModal(p);

    if (!modal.open) {
      modal.showModal();
    }
  }

  function closeModal() {
    if (modal.open) modal.close();
  }

  $('#modalX').addEventListener('click', closeModal);
  $('#modalClose').addEventListener('click', closeModal);

  modal.addEventListener('click', function (event) {
    if (event.target === modal) closeModal();
  });

  /* ---------- Pet Mimi ---------- */
  var mimi = $('#mimi');
  var bubble = $('#bubble');
  var taps = 0;
  var sayIndex = 0;
  var hideTimer;

  var mimiLines = D.ui.vi['mimi.say'];

  mimi.addEventListener('click', function () {
    bubble.textContent =
      mimiLines[sayIndex % mimiLines.length];

    sayIndex++;

    bubble.classList.add('show');

    clearTimeout(hideTimer);
    hideTimer = setTimeout(function () {
      bubble.classList.remove('show');
    }, 2500);

    mimi.classList.remove('petted');
    void mimi.offsetWidth;
    mimi.classList.add('petted');

    taps++;

    if (taps % 7 === 0) makePaws(12);
  });

  mimi.addEventListener('animationend', function (event) {
    if (event.animationName === 'pet-wiggle') {
      mimi.classList.remove('petted');
    }
  });

  /* ---------- Occasional paw prints ---------- */
  function makePaws(count) {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    for (var i = 0; i < count; i++) {
      var paw = el('span', 'paw', '🐾');

      paw.style.left = Math.random() * 100 + 'vw';
      paw.style.animationDuration =
        (2 + Math.random() * 2) + 's';
      paw.style.animationDelay =
        Math.random() * 0.5 + 's';

      document.body.appendChild(paw);

      setTimeout(function (node) {
        return function () {
          node.remove();
        };
      }(paw), 4800);
    }
  }

  /* ---------- Reveal sections on scroll ---------- */
  function setupReveal() {
    var targets = Array.prototype.slice.call(
      document.querySelectorAll('.section, .footer')
    );

    targets.forEach(function (node) {
      node.classList.add('reveal');
    });

    if (!('IntersectionObserver' in window)) {
      targets.forEach(function (node) {
        node.classList.add('in');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    targets.forEach(function (node) {
      observer.observe(node);
    });
  }

  /* ---------- Start ---------- */
  renderText();
  renderChips();
  renderGrid();
  setupReveal();
})();
