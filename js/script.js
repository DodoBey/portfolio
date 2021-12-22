// Scroll Navbar BG

var navbar = document.querySelector('#navbar')

window.onscroll = function () {
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
}



const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarNavDropdown')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})