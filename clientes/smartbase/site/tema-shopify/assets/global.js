/* smartbase — tema · JS global mínimo (Etapa 1)
   Só os botões da BrowserBar por enquanto. Animações ficam pra depois. */
(function () {
  'use strict';

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-bb]');
    if (!btn) return;
    var action = btn.getAttribute('data-bb');

    if (action === 'back') {
      history.back();
    } else if (action === 'forward') {
      history.forward();
    } else if (action === 'reload') {
      location.reload();
    } else if (action === 'share') {
      var link = window.location.href;
      if (navigator.share) {
        navigator.share({ title: document.title, url: link }).catch(function () {});
        return;
      }
      var label = document.querySelector('.chrome-url-text');
      var restore = label ? label.textContent : '';
      if (navigator.clipboard) {
        navigator.clipboard.writeText(link).then(function () {
          if (label) {
            label.textContent = 'link copiado ✓';
            setTimeout(function () { label.textContent = restore; }, 1600);
          }
        }).catch(function () {});
      }
    }
  });
})();
