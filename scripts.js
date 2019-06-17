// $(document).ready(function () {

//     $('#nav-icon3').click(function () {
//         $(this).toggleClass('open');
//     });

// });

const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navLinks');

    burger.addEventListener('click', () => {
        nav.classList.toggle('navActive')
    }) 
}

navSlide();