const hamburgerBtn = document.getElementById("hamburgerBtn")
const navPages = document.getElementsByClassName('nav-pages')[0]


hamburgerBtn.addEventListener('click', function(){
    navPages.classList.toggle('d-none')
})


// Cookie Modal:
let cookieModal = document.getElementById("cookieModal");
let openCookie = document.getElementById("cookieDeclaration");
let closeCookie = document.getElementsByClassName("close-cookie-modal")[0];

openCookie.onclick = function() {
    cookieModal.style.display = "block";
}

closeCookie.onclick = function() {
    cookieModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == cookieModal) {
    cookieModal.style.display = "none";
  }
}

let catchphraseModal = document.getElementById("catchphraseModal");
let openCatchphrase = document.getElementById("catchphraseLogo");
let closeCatchphrase = document.getElementsByClassName("close-catchphrase-modal")[0];

openCatchphrase.onclick = function() {
    catchphraseModal.style.display = "block";
}

closeCatchphrase.onclick = function() {
    catchphraseModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == catchphraseModal) {
    catchphraseModal.style.display = "none";
  }
}