// coldqubit.org · surface behavior
// One effect: show the navbar name only while the hero "coldqubit" is off screen.
(function () {
  var nav = document.getElementById('topnav');
  var heroName = document.querySelector('.hero h1');
  if (!nav || !heroName || !('IntersectionObserver' in window)) return;
  new IntersectionObserver(function (entries) {
    nav.classList.toggle('scrolled', !entries[0].isIntersecting);
  }, { threshold: 0 }).observe(heroName);
})();
