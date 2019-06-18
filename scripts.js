// FUNCTION TO DISPLAY RESPONSIVE NAV MENU
const navSlide = () => {
    // save the div with class of hamburger in a variable; save ul with class navLinks in a variable
    const burger = $('.hamburger');
    const nav = $('.navLinks');

    // when burger is clicked, call an anonymous function to do the following
    burger.on('click keydown', (e) => {
        const key = e.keyCode;

        if (key === 9) {
            return;
        } else {
        // toggle a class of navActive on the nav section
        nav.toggleClass('navActive');
        // toggle a class of exit on the burger
        burger.toggleClass('exit');
        }
    })
}

// FUNCTION TO CLOSE RESPONSIVE NAV ONCE LINK IS CLICKED
const closeOnClick = () => {
    // save a elements in the navLinks ul in a variable, save navLinks ul to variable
    const link = $('.navLinks a');
    const responsiveNav = $('.navLinks');
    const burgerIcon = $('.hamburger');

    // when links are clicked, call an anonymous function
    link.on('click', () => {
        // remove the class of navActive from the navLinks ul
        responsiveNav.removeClass('navActive');
        // remove the class of exit from the hamburger div
        burgerIcon.removeClass('exit');
    })
}

// FUNCTION TO SMOOTH SCROLL TO SECTION
const scrollToSection = () => {
    // save a elements with class of scrollTo in a variable
    const link = $('a.scrollTo');

    //when variable is clicked, do the following
    link.on('click', function(e) {
        // prevent default event
        e.preventDefault();

        // animate the entire body
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top-81
        }, 1500);
    })
}

// TYPED.JS 
const typed = new Typed('#typed', {
    strings: ["Web Developer", "Drummer", "Dog Enthusiast", "Fun Guy"],
    backSpeed: 50,
    typeSpeed: 100,
    loop: true
})

// DOCUMENT READY
$(document).ready(function () {

    // calling the previously-defined functions upon loading of document
    navSlide();
    scrollToSection();
    closeOnClick();

});