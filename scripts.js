document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNavLinks = document.querySelector('.mobile-nav-links');


    const headerLogo = document.querySelector('.header-logo');
    const adjustLogo = () => {
        headerLogo.classList.toggle('.header-logo-opened')
    }

    menuToggle.addEventListener('click', function() {
        mobileNavLinks.classList.toggle('active');
        headerLogo.classList.toggle('header-logo-opened')
    });
});
