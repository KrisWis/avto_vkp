/* Объявление глобальных переменных */
const nav__adaptive__burger = document.getElementById("nav__adaptive__burger");
const nav__adaptive__menu = document.getElementById("nav__adaptive__menu");
const nav__mobile__burger = document.getElementById("nav__mobile__burger");

/* Открытие адаптивного меню */
nav__adaptive__burger.addEventListener("click", () => {
    nav__adaptive__menu.classList.toggle("nav__adaptive__menu--active");
});

nav__mobile__burger.addEventListener("click", () => {
    nav__adaptive__menu.classList.toggle("nav__adaptive__menu--active");
});