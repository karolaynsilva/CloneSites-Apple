document.addEventListener('DOMContentLoaded', () => {
  const btnMenu = document.getElementById('btnMenu');
  const menuNavegacao = document.getElementById('menuNavegacao');

  if (btnMenu && menuNavegacao) {
    btnMenu.addEventListener('click', () => {
      btnMenu.classList.toggle('aberto');
      menuNavegacao.classList.toggle('aberto');
      document.body.classList.toggle('menu-aberto');
    });

    menuNavegacao.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        btnMenu.classList.remove('aberto');
        menuNavegacao.classList.remove('aberto');
        document.body.classList.remove('menu-aberto');
      });
    });
  }

  const slider = document.getElementById('tvSlider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (slider && prevBtn && nextBtn) {
    const getScrollAmount = () => {
      const card = slider.querySelector('.tv-card');
      return card ? card.offsetWidth + 20 : 870;
    };

    nextBtn.addEventListener('click', () => {
      const scrollAmount = getScrollAmount();
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      if (slider.scrollLeft >= maxScroll - 10) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    });

    prevBtn.addEventListener('click', () => {
      const scrollAmount = getScrollAmount();

      if (slider.scrollLeft <= 10) {
        slider.scrollTo({ left: slider.scrollWidth, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    });
  }
});