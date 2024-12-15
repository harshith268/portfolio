// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add active class to current navigation item
const navLinks = document.querySelectorAll('.nav-link');
const currentLocation = location.href;

navLinks.forEach(link => {
  if (link.href === currentLocation) {
    link.classList.add('active');
  }
});

// Load footer component
document.addEventListener('DOMContentLoaded', function() {
  fetch('/components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML('beforeend', data);
    });
});
const circle = document.getElementById("circle");


