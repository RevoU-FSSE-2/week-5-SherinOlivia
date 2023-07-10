const hamburgerBtn = document.getElementById("hamburgerBtn")
const navPages = document.getElementsByClassName('nav-pages')[0]


hamburgerBtn.addEventListener('click', function(){
    navPages.classList.toggle('d-none')
})

let goTopBtn = document.getElementById("toTopBtn");

window.onscroll = function() {
    showButtonFunction()
};

function showButtonFunction() {
    if (document.documentElement.scrollTop > 20) {
        goTopBtn.style.display = "block";
      } else {
        goTopBtn.style.display = "none";
      }
}

function toTopFunction() {
    document.documentElement.scrollTop = 0;
}