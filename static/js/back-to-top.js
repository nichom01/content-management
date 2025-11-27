// Back to Top Button Functionality
(function() {
    'use strict';
    
    const backToTopButton = document.getElementById('back-to-top');
    if (!backToTopButton) return;
    
    // Show/hide button based on scroll position
    function toggleBackToTopButton() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }
    
    // Smooth scroll to top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Throttle scroll events for performance
    let ticking = false;
    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                toggleBackToTopButton();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // Event listeners
    window.addEventListener('scroll', onScroll, { passive: true });
    backToTopButton.addEventListener('click', scrollToTop);
    
    // Initial check
    toggleBackToTopButton();
})();

