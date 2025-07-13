// =========================
// Typed.js Animated Text
// =========================
var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Web Developer", "UI/UX Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// =========================
// Hamburger Menu Toggle
// =========================
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // =========================
  // Contact Form Submission (Formspree)
  // =========================
  const form = document.querySelector('.cont-form');
  if (form) {
    const msgDiv = document.createElement('div');
    msgDiv.id = 'form-message';
    form.appendChild(msgDiv);

    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const name = document.querySelector('[name="name"]').value.trim();
      const email = document.querySelector('[name="email"]').value.trim();
      const message = document.querySelector('[name="message"]').value.trim();

      const response = await fetch('https://formspree.io/f/xzzgbekp', {
        method: 'POST',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({name, email, message})
      });

      if (response.ok) {
        msgDiv.textContent = "Thank you for contacting us! We'll get back to you soon.";
        msgDiv.style.color = "green";
        form.reset();
      } else {
        msgDiv.textContent = "Oops! Something went wrong. Please try again later.";
        msgDiv.style.color = "red";
      }
    });
  }

  // =========================
  // Animate Technical Skill Bars on Scroll
  // =========================
  // ...add your skill bar animation code here...
});

function animateOnScroll() {
  const elements = [
    ...document.querySelectorAll('.home-content h3'),
    ...document.querySelectorAll('.home-content h1'),
    ...document.querySelectorAll('.home-content p'),
    ...document.querySelectorAll('.home-social a'),
    ...document.querySelectorAll('.about-text p'),
    ...document.querySelectorAll('.about-text h4'),
    ...document.querySelectorAll('.about-text h2'),
    ...document.querySelectorAll('.about-img img'),
    ...document.querySelectorAll('.ser-title'),
    ...document.querySelectorAll('.nav-links a'),
    ...document.querySelectorAll('.more-btn'),
    ...document.querySelectorAll('.read-more'),
    ...document.querySelectorAll('.technical-bar .bar .progress-line span'),
    ...document.querySelectorAll('.radial-bar .percentage'),
    ...document.querySelectorAll('.radial-bar .text1'),
    ...document.querySelectorAll('.radial-bar .path'),
    ...document.querySelectorAll('.main-text h2'),
    ...document.querySelectorAll('.row'),
    ...document.querySelectorAll('.contact-text h2'),
    ...document.querySelectorAll('.contact-text h4'),
    ...document.querySelectorAll('.contact-text p'),
    ...document.querySelectorAll('.contact-list'),
    ...document.querySelectorAll('.contact-icons a'),
    ...document.querySelectorAll('.last-text p')

  ];

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50 && rect.bottom > 0) {
      if (el.matches('.home-content h3')) el.classList.add('animate-slideDown');
      if (el.matches('.home-content h1')) el.classList.add('animate-slideRight');
      if (el.matches('.home-content p')) el.classList.add('animate-slideDown');
      if (el.matches('.home-social a')) el.classList.add('animate-slideRight');
      if (el.matches('.about-text h2')) el.classList.add('animate-slideTop');
      if (el.matches('.about-text h4')) el.classList.add('animate-slideTop');
      if (el.matches('.ser-title')) el.classList.add('animate-slideTop');
      if (el.matches('.about-text p')) el.classList.add('animate-slideTop');
      if (el.matches('.about-img img')) el.classList.add('animate-slideInFromLeft');
      if (el.matches('.more-btn')) el.classList.add('animate-slideTop');
      if (el.matches('.read-more')) el.classList.add('animate-slideTop');
      if (el.matches('.nav-links a')) el.classList.add('animate-slideTop');
      if (el.matches('.technical-bar .bar .progress-line span')) el.classList.add('animate-fillBar');
      if (el.matches('.radial-bar .percentage, .radial-bar .text1')) el.classList.add('animate-showText');
      if (el.matches('.radial-bar .path')) el.classList.add('animate-path');
      if (el.matches('.main-text h2')) el.classList.add('animate-slideTop');
      if (el.matches('.row3')) el.classList.add('animate-slideRight');
      if (el.matches('.row1')) el.classList.add('animate-slideInFromLeft');
      if (el.matches('.row2')) el.classList.add('animate-slideDown');
      if (el.matches('.contact-text h2')) el.classList.add('animate-slideInFromLeft');
      if (el.matches('.contact-text h4')) el.classList.add('animate-slideRight');
      if (el.matches('.contact-text p')) el.classList.add('animate-slideTop');
      if (el.matches('.contact-list')) el.classList.add('animate-slideRight');
      if (el.matches('.contact-icons a')) el.classList.add('animate-slideInFromLeft');
      if (el.matches('.last-text p')) el.classList.add('animate-slideTop');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);
