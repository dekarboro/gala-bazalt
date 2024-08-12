document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNavLinks = document.querySelector('.mobile-nav-links');

    menuToggle.addEventListener('click', function() {
        mobileNavLinks.classList.toggle('active');
    });
});


