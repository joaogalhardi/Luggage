const btnMobile = document.querySelector("#mobile-menu");
const nav = document.querySelector("nav");
const links = document.querySelectorAll('.menu li')

links.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('active')
  })
})

function toggleMenu(){
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);

