// Menu Mobile
const menu__mobile = document.querySelector('#nav__links--mobile');
const hamburger__btn = document.querySelector('#hamburger__icon');

hamburger__btn.addEventListener('click', () => {
    menu__mobile.classList.toggle('active');
})
