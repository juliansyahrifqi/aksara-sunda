// Navbar
const mobileMenu = document.querySelector(".mobile-menu");
const navbarMenu = document.querySelector(".navbar-menu");

mobileMenu.addEventListener("click", function () {
  navbarMenu.classList.toggle("show");
});
