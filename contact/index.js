document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelectorAll(".icon");
  
    icons.forEach(icon => {
      const iconName = icon.id.replace("-icon", "");
      const coloredSrc = `images/${iconName}-colorized.png`;
  
      icon.addEventListener("mouseover", () => {
        icon.src = coloredSrc;
      });
  
      icon.addEventListener("mouseout", () => {
        icon.src = `images/${iconName}-gray.png`;
      });
    });
  });
  
