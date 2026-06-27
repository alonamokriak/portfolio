"use strict";

/* MENU BURGER */
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("menu--open");
});

document.querySelectorAll(".menu__link").forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("burger--active");
    menu.classList.remove("menu--open");
  });
});
