// Détection simple de la taille d'écran et application d'une classe
(function(){
  const MOBILE_BREAKPOINT = 820; // px — ajustable
  const CLS = 'is-mobile';
  function apply() {
    try {
      const w = window.innerWidth || document.documentElement.clientWidth || screen.width;
      if (w <= MOBILE_BREAKPOINT) document.documentElement.classList.add(CLS), document.body.classList.add(CLS);
      else document.documentElement.classList.remove(CLS), document.body.classList.remove(CLS);
    } catch (e) { /* silent */ }
  }
  function debounce(fn, wait){ let t; return function(){ clearTimeout(t); t = setTimeout(fn, wait); }; }
  apply();
  window.addEventListener('resize', debounce(apply, 120));
  window.addEventListener('orientationchange', function(){ setTimeout(apply, 120); });
  // expose for debugging
  window.__applyResponsiveClass = apply;
})();
