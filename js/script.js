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
$(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");
    var _opened = $navbar.hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggler")) {
        $navbar.collapse('hide');
    }
});

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