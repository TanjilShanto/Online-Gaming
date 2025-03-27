// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Example of Adding Dynamic Content (optional)
window.onload = () => {
  const welcomeText = document.querySelector('.hero h2');
  welcomeText.style.transition = 'opacity 1s';
  welcomeText.style.opacity = 1;  // Fade in effect
};
