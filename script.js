// Add an active class to the current navigation link
const currentPage = location.pathname.split('/').slice(-1)[0];
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});