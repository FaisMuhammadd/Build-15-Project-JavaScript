// classList - show/gets all classes
// contains - checks classList for spesific class
// add - add class
// remove - remove class
// toggle - toggle class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
  links.classList.toggle("show-links");
});