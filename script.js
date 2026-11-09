// Hugo Web Studio – liten JavaScript för hero-exemplet och kontaktformuläret
(() => {
  const mock = document.getElementById('mock');
  if (mock) {
    const data = [
      ['exempel.se', 'Pizzeria Bella', 'God mat. Goda stunder.', 'Se menyn'],
      ['exempel.se', 'Studio Klipp', 'Din stil. Ditt uttryck.', 'Boka tid'],
      ['exempel.se', 'Lilla Butiken', 'Små detaljer. Stor skillnad.', 'Se sortiment']
    ];
    const tabs = [...document.querySelectorAll('[data-tab]')];
    const set = (cls, text) => { mock.querySelector(cls).textContent = text; };
    let current = 0, timer;
    const show = (n) => {
      current = n;
      mock.dataset.t = n;
      ['.m-url', '.m-name', '.m-head', '.m-btn'].forEach((c, i) => set(c, data[n][i]));
      tabs.forEach((t, i) => t.setAttribute('aria-pressed', String(i === n)));
    };
    tabs.forEach((t, i) => t.addEventListener('click', () => { clearInterval(timer); show(i); }));
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      timer = setInterval(() => show((current + 1) % data.length), 4500);
    }
  }

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const v = new FormData(form);
      const body = `Hej Hugo!\n\nNamn: ${v.get('namn')}\nVerksamhet: ${v.get('verksamhet')}\n\n${v.get('meddelande')}`;
      location.href = 'mailto:hu1go.webstudio@gmail.com?subject=' +
        encodeURIComponent('Fråga om hemsida') + '&body=' + encodeURIComponent(body);
    });
  }
})();
