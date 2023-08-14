// Function to check if an element is in the viewport

function isElementInViewPort(element){
    var rect = element.getBoundingClientRect(); //method returns a DOMRect object with info about size of an element and its position relative to the viewport
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }


    // Function to load images when they enter the viewpo
    function lazyLoad() {
        var lazyImages = document.querySelectorAll('img[data-src]');
        
        lazyImages.forEach(function(img) {
          if (isElementInViewport(img)) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
        });
      }
    
      // Attach lazyLoad function to scroll and resize events
      window.addEventListener('scroll', lazyLoad);
      window.addEventListener('resize', lazyLoad);
      
      // Initial lazy load
      document.addEventListener('DOMContentLoaded', lazyLoad);