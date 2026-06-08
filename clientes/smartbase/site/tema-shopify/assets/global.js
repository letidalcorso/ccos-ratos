/* smartbase — tema · JS global mínimo (Etapa 1)
   Só o menu mobile por enquanto. Animações ficam pra depois. */
(function () {
  'use strict';

  document.addEventListener('click', function (e) {
    var burger = e.target.closest('[data-sb-burger]');
    if (!burger) return;
    var drawer = document.querySelector('[data-sb-drawer]');
    var isOpen = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!isOpen));
    if (drawer) drawer.hidden = isOpen;
    document.body.classList.toggle('sb-drawer-open', !isOpen);
  });

  // Fecha a gaveta ao clicar num link dela.
  document.addEventListener('click', function (e) {
    if (!document.body.classList.contains('sb-drawer-open')) return;
    var link = e.target.closest('[data-sb-drawer] a');
    if (!link) return;
    var burger = document.querySelector('[data-sb-burger]');
    var drawer = document.querySelector('[data-sb-drawer]');
    if (burger) burger.setAttribute('aria-expanded', 'false');
    if (drawer) drawer.hidden = true;
    document.body.classList.remove('sb-drawer-open');
  });
})();
