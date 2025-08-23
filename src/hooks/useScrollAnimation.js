import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollTop;
        const sectionHeight = rect.height;
        const sectionCenter = sectionTop + sectionHeight / 2;
        
        // Calculate how much of the section is visible
        const visibleTop = Math.max(0, Math.min(windowHeight, rect.bottom));
        const visibleBottom = Math.max(0, Math.min(windowHeight, windowHeight - rect.top));
        const visibleHeight = Math.min(visibleTop, visibleBottom);
        const visibilityRatio = visibleHeight / windowHeight;
        
        // Calculate scroll progress within the section
        const scrollProgress = Math.max(0, Math.min(1, 
          (scrollTop + windowHeight - sectionTop) / (windowHeight + sectionHeight)
        ));
        
        // Apply different animation states based on visibility and scroll progress
        if (rect.top < windowHeight && rect.bottom > 0) {
          // Section is in viewport
          section.classList.add('animate-in');
          
          // Add progressive animation based on scroll progress
          const translateY = Math.max(0, (1 - scrollProgress) * 50);
          const opacity = Math.min(1, scrollProgress * 2);
          
          section.style.setProperty('--scroll-progress', scrollProgress);
          section.style.setProperty('--translate-y', `${translateY}px`);
          section.style.setProperty('--opacity', opacity);
          
          // Add classes for different animation states
          if (scrollProgress > 0.3) {
            section.classList.add('animate-content');
          }
          if (scrollProgress > 0.6) {
            section.classList.add('animate-items');
          }
        } else if (rect.top >= windowHeight) {
          // Section is below viewport - reset to initial state
          section.classList.remove('animate-in', 'animate-content', 'animate-items');
          section.style.removeProperty('--scroll-progress');
          section.style.removeProperty('--translate-y');
          section.style.removeProperty('--opacity');
        } else {
          // Section is above viewport - keep animated
          section.classList.add('animate-in', 'animate-content', 'animate-items');
        }
      });
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial call
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
};

export default useScrollAnimation;