const navButton = document.querySelector(".nav__menu-button");
const mobileNavMenu = document.querySelector(".modal");
let modalLink = document.querySelectorAll(".modal__link");

function toggleNav() {
  mobileNavMenu.classList.toggle("modal__opened");
  navButton.classList.toggle("nav__menu-button_animation");
}

navButton.addEventListener("click", toggleNav);
