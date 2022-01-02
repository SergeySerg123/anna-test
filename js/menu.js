(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header-button__open'),
    closeMenuBtn: document.querySelector('.header-button__close'),
    menu: document.querySelector('.mob-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
