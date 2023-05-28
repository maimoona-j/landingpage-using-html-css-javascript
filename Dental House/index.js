// Function to handle animations on scroll
function handleScrollAnimations(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }
  
 
  const observer = new IntersectionObserver(handleScrollAnimations, {
    threshold: 0.2,  
  });
  
  
  const animatedElements = document.querySelectorAll('.animated');
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
  