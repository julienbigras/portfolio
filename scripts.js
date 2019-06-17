const navSlide = () => {
    const burger = $('.hamburger');
    const nav = $('.navLinks');

    burger.on('click', () => {
        nav.toggleClass('navActive');
        burger.toggleClass('exit');
    })
}

const scrollToSection = () => {
    const link = $('a.scrollTo');

    link.on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500);
    })
}

const typed = new Typed('#typed', {
    strings: ["Web Developer", "Drummer", "Dog Enthusiast", "Fun Guy"],
    backSpeed: 50,
    typeSpeed: 100,
    loop: true
})

$(document).ready(function () {

    navSlide();
    scrollToSection();

});