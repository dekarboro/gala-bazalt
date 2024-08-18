document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNavLinks = document.querySelector('.mobile-nav-links');
    //const headerLogo = document.querySelector('.header-logo');
    //const navMenu = document.querySelector('.nav-menu');
    const headerImg = document.querySelector('.header-img');

    const getHeight = elem => {
        const h = elem.offsetHeight;
        const styles = window.getComputedStyle(elem);
        const mTop = parseInt(styles.marginTop, 10);
        const mBot = parseInt(styles.marginBottom, 10);
        
        return h + mTop + mBot;
    }

    //const baseMargin = getHeight(navMenu);
    //console.log(baseMargin);
    //headerLogo.style.marginTop = `-${baseMargin}px`;

    menuToggle.addEventListener('click', function() {
        mobileNavLinks.classList.toggle('active');
        console.log('hi?')


        //const navHeight = getHeight(navMenu);
        //const mobileNavHeight = getHeight(mobileNavLinks);

        // if (mobileNavLinks.classList.contains('active'))
        //headerLogo.style.marginTop = `${(navHeight + mobileNavHeight) * -1}px`;
        
    });

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetElement = document.querySelector(this.getAttribute('href'));
            const headerOffset = document.querySelector('header').offsetHeight; // Get the height of your sticky header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
    
});


