(() => {
  const refs = {
    // openMenuBtn: document.querySelector('.header-button__open'),
    // closeMenuBtn: document.querySelector('.header-button__close'),
    headerBurger: document.querySelector('.heder__burger'),
    Burger: document.querySelector('.burger'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body')
  };

  // refs.openMenuBtn.addEventListener('click', toggleMenu);
  // refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.headerBurger.addEventListener('click', toggleMenu);
  window.addEventListener('resize', resizeCallback);

  function resizeCallback() {
    const windowWidth = window.innerWidth;
    console.log(windowWidth + 'px');
    if (windowWidth >= 768) {    
      refs.headerBurger.classList.remove('is-hidden');
      refs.Burger.classList.remove('is-hidden');
      refs.menu.classList.add('is-hidden');
      refs.body.classList.remove('lock');
    }
  }

  function toggleMenu() {
    refs.headerBurger.classList.toggle('is-hidden');
    refs.Burger.classList.toggle('is-hidden');
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('lock');
  }
})();
