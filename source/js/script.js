if (document.querySelector('.no-js')) {
  document.querySelector('.no-js').classList.remove('no-js');
}



const nav = document.querySelector('.main-nav');
const navBtn = document.querySelector(".main-nav__toggle");

if (navBtn) {
  navBtn.addEventListener("click", () => {
    nav.classList.toggle("is-open");
  })
}
