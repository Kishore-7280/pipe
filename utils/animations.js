// Animation utility functions
function initScrollAnimations() {
  try {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });

    // Initial animation for hero elements
    setTimeout(() => {
      const heroElements = document.querySelectorAll('#home .fade-in');
      heroElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('visible');
        }, index * 200);
      });
    }, 500);

  } catch (error) {
    console.error('Animation initialization error:', error);
  }
}

// Smooth scroll to top function
function scrollToTop() {
  try {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } catch (error) {
    console.error('Scroll to top error:', error);
  }
}

// Add scroll-based animations
function addScrollEffects() {
  try {
    let ticking = false;
    
    function updateScrollEffects() {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelectorAll('[data-parallax]');
      
      parallax.forEach(element => {
        const speed = element.dataset.parallax;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
      
      ticking = false;
    }
    
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
      }
    }
    
    window.addEventListener('scroll', requestTick);
  } catch (error) {
    console.error('Scroll effects error:', error);
  }
}

// Initialize all animations
function initAllAnimations() {
  try {
    initScrollAnimations();
    addScrollEffects();
  } catch (error) {
    console.error('Animation initialization error:', error);
  }
}
