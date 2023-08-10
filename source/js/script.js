// Меню
if (document.querySelector('.no-js')) {
  document.querySelector('.no-js').classList.remove('no-js');
}

const menuBtn = document.querySelector('.main-nav__toggle');
const menuNav = document.querySelector('.main-nav');


if (menuBtn) {
  menuBtn.addEventListener('click', function (evt) {
    evt.preventDefault;
    menuNav.classList.toggle('is-open');
  });
}
