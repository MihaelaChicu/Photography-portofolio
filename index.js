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

// Get the 'About' list item element by its ID
const aboutListItem = document.getElementById('aboutLink');

// Add a click event listener to the 'About' list item 
aboutListItem.addEventListener('click', function() {
  //redirect to the 'about' page when clicked
  window.location.href = 'about/index.html';
});