/* smartbase — tema · JS global. BrowserBar + acordeão FAQ + filtro Blog.
   Animações de entrada ficam pra depois. */
(function () {
  'use strict';

  /* ---- BrowserBar (botões voltar/avançar/recarregar/compartilhar) ---- */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-bb]');
    if (!btn) return;
    var action = btn.getAttribute('data-bb');
    if (action === 'back') { history.back(); }
    else if (action === 'forward') { history.forward(); }
    else if (action === 'reload') { location.reload(); }
    else if (action === 'share') {
      var link = window.location.href;
      if (navigator.share) { navigator.share({ title: document.title, url: link }).catch(function () {}); return; }
      var label = document.querySelector('.chrome-url-text');
      var restore = label ? label.textContent : '';
      if (navigator.clipboard) {
        navigator.clipboard.writeText(link).then(function () {
          if (label) { label.textContent = 'link copiado ✓'; setTimeout(function () { label.textContent = restore; }, 1600); }
        }).catch(function () {});
      }
    }
  });

  /* ---- Acordeão do FAQ ---- */
  document.addEventListener('click', function (e) {
    var q = e.target.closest('[data-faq-q]');
    if (!q) return;
    var row = q.closest('.faq-row');
    if (!row) return;
    var ans = row.querySelector('.faq-a');
    var open = row.classList.toggle('open');
    q.setAttribute('aria-expanded', String(open));
    var sign = q.querySelector('.faq-sign');
    if (sign) sign.textContent = open ? '–' : '+';
    if (ans) ans.style.maxHeight = open ? (ans.scrollHeight + 'px') : '0px';
  });

  /* ---- Filtro do Blog ---- */
  function blogMatch(card, f) {
    if (f === 'todos') return true;
    var cat = card.getAttribute('data-cat') || '';
    var tags = (card.getAttribute('data-tags') || '').toLowerCase();
    return cat === f || tags.split(/[\s,]+/).indexOf(f.toLowerCase()) >= 0;
  }
  document.addEventListener('click', function (e) {
    var chip = e.target.closest('.bl-chip');
    if (!chip) return;
    var page = chip.closest('.blog-page');
    if (!page) return;
    var f = chip.getAttribute('data-filter');
    page.querySelectorAll('.bl-chip').forEach(function (c) { c.classList.toggle('on', c === chip); });
    page.querySelectorAll('.post-card').forEach(function (card) { card.hidden = !blogMatch(card, f); });
  });
})();
