const hamburger = document.querySelector(".navhamburger");
const navMenu = document.querySelector(".navlink");

hamburger.addEventListener("click", () => {
navMenu.classList.toggle("active");
});