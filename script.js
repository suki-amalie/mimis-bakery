/* Mimi's Bakery — logic của website. Không cần sửa file này khi thêm bánh;
   chỉ cần sửa products.js. */
(function () {
  'use strict';

  var D = window.BAKERY;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var lang = 'vi';
  try { lang = localStorage.getItem('mimi-lang') || 'vi'; } catch (e) {}
  if (!D.ui[lang]) lang = 'vi';
  var filter = 'all';

  function t(key) { return D.ui[lang][key]; }
  function byId(id) { return D.products.filter(function (p) { return p.id === id; })[0]; }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  /* ---------- language ---------- */
  function applyLang() {
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(function (n) {
      var v = t(n.getAttribute('data-i18n'));
      if (typeof v === 'string') n.textContent = v;
    });
    $$('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    renderChips();
    renderGrid();
    renderQuiz();
    var open = $('#modal');
    if (open.open && open.dataset.id) fillModal(byId(open.dataset.id));
  }
  $$('.lang button').forEach(function (b) {
    b.addEventListener('click', function () {
      lang = b.getAttribute('data-lang');
      try { localStorage.setItem('mimi-lang', lang); } catch (e) {}
      applyLang();
    });
  });

  /* ---------- menu ---------- */
  function renderChips() {
    var box = $('#chips');
    box.textContent = '';
    D.categories.forEach(function (c) {
      var b = el('button', 'chip', c.emoji + ' ' + c[lang]);
      b.type = 'button';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-selected', String(c.id === filter));
      b.addEventListener('click', function () { filter = c.id; renderChips(); renderGrid(); });
      box.appendChild(b);
    });
  }

  function renderGrid() {
    var grid = $('#grid');
    grid.textContent = '';
    var list = D.products.filter(function (p) { return filter === 'all' || p.category === filter; });
    if (!list.length) { grid.appendChild(el('p', 'empty', t('menu.empty'))); return; }
    list.forEach(function (p, i) {
      var c = el('button', 'card' + (p.available === false ? ' soldout' : ''));
      c.type = 'button';
      c.style.animationDelay = (i * 60) + 'ms';
      var ph = el('div', 'card-photo');
      var img = el('img');
      img.src = p.image; img.alt = ''; img.loading = 'lazy'; img.decoding = 'async';
      if (p.focus) img.style.objectPosition = p.focus;
      ph.appendChild(img);
      c.appendChild(ph);
      if (p.available === false) c.appendChild(el('span', 'badge', t('menu.soldout')));
      var body = el('div', 'card-body');
      body.appendChild(el('h3', null, p[lang].name));
      if (p[lang].tag) body.appendChild(el('span', 'card-tag', p[lang].tag));
      c.appendChild(body);
      c.addEventListener('click', function () { openModal(p.id); });
      grid.appendChild(c);
    });
  }

  /* ---------- pop-up (also what a product QR code opens: ?p=<id>) ---------- */
  var modal = $('#modal');
  function fillModal(p) {
    if (!p) return;
    modal.dataset.id = p.id;
    var img = $('#mImg');
    img.src = p.image; img.alt = p[lang].name;
    if (p.focus) img.style.objectPosition = p.focus;
    $('#mTag').textContent = p[lang].tag || '';
    $('#mTag').hidden = !p[lang].tag;
    $('#mName').textContent = p[lang].name;
    $('#mDesc').textContent = p[lang].desc;
    var price = $('#mPrice');
    price.hidden = !p.price;
    price.textContent = p.price || '';
  }
  function openModal(id) {
    var p = byId(id);
    if (!p) return;
    fillModal(p);
    if (!modal.open) { if (modal.showModal) modal.showModal(); else modal.setAttribute('open', ''); }
    try { history.replaceState(null, '', '?p=' + encodeURIComponent(id)); } catch (e) {}
  }
  function closeModal() {
    if (modal.close) modal.close(); else modal.removeAttribute('open');
  }
  modal.addEventListener('close', function () {
    try { history.replaceState(null, '', location.pathname + location.hash); } catch (e) {}
  });
  $('#modalX').addEventListener('click', closeModal);
  $('#modalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });

  /* ---------- quiz ---------- */
  var quiz = { step: -1, score: {}, order: [] };

  function renderQuiz() {
    var box = $('#quizBox');
    var qs = t('quiz.questions');
    box.textContent = '';

    if (quiz.step < 0) {                       // intro
      box.appendChild(el('h2', null, t('quiz.title')));
      box.appendChild(el('p', 'sub', t('quiz.sub')));
      var go = el('button', 'btn primary', t('quiz.start'));
      go.type = 'button';
      go.addEventListener('click', function () { quiz = { step: 0, score: {}, order: [] }; renderQuiz(); });
      box.appendChild(go);
      return;
    }

    if (quiz.step < qs.length) {               // a question
      var prog = el('div', 'quiz-progress');
      qs.forEach(function (_, i) { prog.appendChild(el('i', i <= quiz.step ? 'on' : '')); });
      box.appendChild(prog);
      var q = qs[quiz.step];
      box.appendChild(el('p', 'quiz-q', q.q));
      var list = el('div', 'answers');
      q.a.forEach(function (a) {
        var b = el('button', 'answer', a.t);
        b.type = 'button';
        b.addEventListener('click', function () {
          if (!(a.to in quiz.score)) { quiz.score[a.to] = 0; quiz.order.push(a.to); }
          quiz.score[a.to] += 1;
          quiz.step += 1;
          renderQuiz();
        });
        list.appendChild(b);
      });
      box.appendChild(list);
      return;
    }

    // result: highest score wins, ties go to the earliest answer
    var best = quiz.order[0];
    quiz.order.forEach(function (id) { if (quiz.score[id] > quiz.score[best]) best = id; });
    var p = byId(best);
    var img = el('img', 'result-img');
    img.src = p.image; img.alt = '';
    if (p.focus) img.style.objectPosition = p.focus;
    box.appendChild(img);
    box.appendChild(el('p', 'result-text', t('quiz.results')[best]));
    var row = el('div', 'cta');
    var see = el('button', 'btn primary', t('quiz.see') + ' ' + p[lang].name);
    see.type = 'button';
    see.addEventListener('click', function () { openModal(best); });
    var again = el('button', 'btn ghost', t('quiz.again'));
    again.type = 'button';
    again.addEventListener('click', function () { quiz = { step: -1, score: {}, order: [] }; renderQuiz(); });
    row.appendChild(see); row.appendChild(again);
    box.appendChild(row);
    paws(14);
  }

  /* ---------- Mimi the mascot ---------- */
  var mimi = $('#mimi'), bubble = $('#bubble'), taps = 0, sayIdx = 0, hideTimer;
  mimi.addEventListener('click', function () {
    var lines = t('mimi.say');
    bubble.textContent = lines[sayIdx % lines.length];
    sayIdx += 1;
    bubble.classList.add('show');
    clearTimeout(hideTimer);
    hideTimer = setTimeout(function () { bubble.classList.remove('show'); }, 2200);
    mimi.classList.remove('wiggle'); void mimi.offsetWidth; mimi.classList.add('wiggle');
    mimi.addEventListener('animationend', function done(e) {
      if (e.target !== mimi) return;
      mimi.classList.remove('wiggle');           // go back to gently bobbing
      mimi.removeEventListener('animationend', done);
    });
    taps += 1;
    if (taps % 7 === 0) paws(24);              // surprise after 7 taps
  });

  function paws(n) {
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    for (var i = 0; i < n; i++) {
      var p = el('span', 'paw', '🐾');
      p.style.left = Math.random() * 100 + 'vw';
      p.style.animationDuration = (2 + Math.random() * 2) + 's';
      p.style.animationDelay = (Math.random() * 0.6) + 's';
      p.style.fontSize = (1.1 + Math.random() * 1.2) + 'rem';
      document.body.appendChild(p);
      setTimeout(function (n) { return function () { n.remove(); }; }(p), 4800);
    }
  }

  /* ---------- reveal on scroll ---------- */
  function setupReveal() {
    var targets = $$('.section, .footer');
    targets.forEach(function (n) { n.classList.add('reveal'); });
    if (!('IntersectionObserver' in window)) { targets.forEach(function (n) { n.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    targets.forEach(function (n) { io.observe(n); });
  }

  /* ---------- start ---------- */
  applyLang();
  setupReveal();
  var wanted = new URLSearchParams(location.search).get('p');   // e.g. ?p=flan  (from a product QR code)
  if (wanted && byId(wanted)) {
    var m = $('#menu');
    if (m) m.scrollIntoView();
    openModal(wanted);
  }
})();
