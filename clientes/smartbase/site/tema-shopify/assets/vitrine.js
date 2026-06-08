/* smartbase — vitrine · filtro client-side (condição + categoria).
   Portado da lógica do VitrinePage.jsx. Sem dependências. */
(function () {
  'use strict';
  var root = document.querySelector('.vitrine-page');
  if (!root) return;

  var CONDS = ['tudo', 'novos', 'seminovos'];
  var CATS = ['todos', 'iphone', 'mac', 'ipad', 'watch', 'airpods', 'acessorios'];
  var state = { cond: 'tudo', cat: 'todos' };

  function normCond(v) { v = (v || '').toLowerCase(); return CONDS.indexOf(v) >= 0 ? v : null; }
  function normCat(v) { v = (v || '').toLowerCase(); return CATS.indexOf(v) >= 0 ? v : null; }

  // estado inicial via URL (?cond= / ?cat= ou #novos|#seminovos), validado.
  try {
    var p = new URLSearchParams(location.search);
    var qc = normCond(p.get('cond')); if (qc) state.cond = qc;
    var qa = normCat(p.get('cat')); if (qa) state.cat = qa;
    var h = normCond((location.hash || '').replace('#', ''));
    if (h === 'novos' || h === 'seminovos') state.cond = h;
  } catch (e) {}

  function emptyText() {
    var w = state.cond === 'novos' ? 'de novo' : state.cond === 'seminovos' ? 'de seminovo' : 'aqui';
    return 'nada ' + w + ' nessa categoria ainda.';
  }

  function apply() {
    root.querySelectorAll('.product-card').forEach(function (card) {
      var okCat = state.cat === 'todos' || card.getAttribute('data-cat') === state.cat;
      var okCond = state.cond === 'tudo' || card.getAttribute('data-cond') === state.cond;
      card.hidden = !(okCat && okCond);
    });

    // cabeçalhos de categoria: só no modo "todos" e quando há cards visíveis
    root.querySelectorAll('[data-cat-head]').forEach(function (head) {
      var c = head.getAttribute('data-cat-head');
      var visible = root.querySelectorAll('.product-card[data-cat="' + c + '"]:not([hidden])').length;
      head.hidden = state.cat !== 'todos' || visible === 0;
      var n = head.querySelector('.vt-cat-n');
      if (n) n.textContent = visible + ' modelos';
    });

    var anyVisible = root.querySelectorAll('.product-card:not([hidden])').length > 0;
    var empty = root.querySelector('.vt-empty');
    if (empty) {
      empty.hidden = anyVisible;
      var t = empty.querySelector('.vt-empty-t');
      if (t) t.textContent = emptyText();
    }

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
