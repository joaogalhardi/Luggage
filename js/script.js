const btnMobile = document.querySelector("#mobile-menu");
const nav = document.querySelector("nav");


function toggleMenu(){
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);