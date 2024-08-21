document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNavLinks = document.querySelector('.mobile-nav-links');
    const form = document.querySelector('#contact-form');
    const answer = document.querySelector('answer');

    menuToggle.addEventListener('click', function() {
        mobileNavLinks.classList.toggle('active');
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

    // form.addEventListener('submit', e => {
    //     e.preventDefault();
    //     document.querySelector('.form-success').classList.toggle('on');
    // })
    if (form) {
        form.addEventListener("submit", function(event){
            event.preventDefault();
            
            let formData = new FormData(this);
            
            fetch('send-email.php', {
                method: 'POST',
                body: formData
            }).then(response => response.text())
              .then(data => {
                  // Display the message in a div or alert
                  answer.innerText = data;
                  answer.classList.toggle('form-success');
              }).catch(error => {
                    answer.innerText = error;
                    answer.classList.toggle('form-error');
              });
        });
    }
});


