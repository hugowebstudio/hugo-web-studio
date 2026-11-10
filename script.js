// Låt de tre exempelcirklarna byta plats med jämna mellanrum.
(() => {
  const orbit = document.querySelector('.example-orbit');
  if (!orbit || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const items = Array.from(orbit.querySelectorAll('.orbit-item'));
  if (items.length !== 3) return;

  window.setInterval(() => {
    const first = items.shift();
    items.push(first);
    items.forEach((item, index) => {
      item.style.order = index;
      item.classList.add('is-shifting');
    });
    window.setTimeout(() => {
      items.forEach(item => item.classList.remove('is-shifting'));
    }, 700);
  }, 4500);
})();
