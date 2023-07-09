const hamburgerBtn = document.getElementById("hamburgerBtn")
const navPages = document.getElementsByClassName('nav-pages')[0]


hamburgerBtn.addEventListener('click', function(){
    navPages.classList.toggle('d-none')
})