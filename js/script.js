// Scroll Navbar BG

var navbar = document.querySelector('#navbar')

window.onscroll = function () {
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
}


// Navbar Close on Click
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarNavDropdown')
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false })
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})

// Submit Message
$('#contactForm').submit(function (e) {
    e.preventDefault();

    var formData = $('#contactForm').serialize();
    var url = "contact-form-process.php";
    var posting = $.post(url, formData);

    posting.done(function (data) {
        alert(data);
        $('#contactForm')[0].reset();
    });
});