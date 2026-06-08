/* smartbase — vitrine · filtro client-side (condição + categoria).
   Portado da lógica do VitrinePage.jsx. Sem dependências. */
(function () {
  'use strict';
  var root = document.querySelector('.vitrine-page');
  if (!root) return;

  var state = { cond: 'tudo', cat: 'todos' };

  // estado inicial via URL (?cond= / ?cat= ou #novos|#seminovos) — usado pelos links da home
  try {
    var p = new URLSearchParams(location.search);
    if (p.get('cond')) state.cond = p.get('cond');
    if (p.get('cat')) state.cat = p.get('cat');
    var h = (location.hash || '').replace('#', '');
    if (h === 'novos' || h === 'seminovos') state.cond = h;
  } catch (e) {}

  function apply() {
    var cards = root.querySelectorAll('.product-card');
    cards.forEach(function (card) {
      var okCat = state.cat === 'todos' || card.getAttribute('data-cat') === state.cat;
      var okCond = state.cond === 'tudo' || card.getAttribute('data-cond') === state.cond;
      card.hidden = !(okCat && okCond);
    });

    // cabeçalhos de categoria: só aparecem no modo "todos" e quando há cards visíveis
    root.querySelectorAll('[data-cat-head]').forEach(function (head) {
      var c = head.getAttribute('data-cat-head');
      var visible = root.querySelectorAll('.product-card[data-cat="' + c + '"]:not([hidden])').length;
      head.hidden = state.cat !== 'todos' || visible === 0;
      var n = head.querySelector('.vt-cat-n');
      if (n) n.textContent = visible + ' modelos';
    });

    var anyVisible = root.querySelectorAll('.product-card:not([hidden])').length > 0;
    var empty = root.querySelector('.vt-empty');
    if (empty) empty.hidden = anyVisible;

    root.querySelectorAll('.vt-seg-b').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-cond') === state.cond);
    });
    root.querySelectorAll('.vt-chip').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-cat') === state.cat);
    });
  }

  root.addEventListener('click', function (e) {
    var seg = e.target.closest('.vt-seg-b');
    if (seg) { state.cond = seg.getAttribute('data-cond'); apply(); return; }
    var chip = e.target.closest('.vt-chip');
    if (chip) { state.cat = chip.getAttribute('data-cat'); apply(); return; }
  });

  apply();
})();
