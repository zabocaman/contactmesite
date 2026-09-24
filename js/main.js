// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Fade sections in as they scroll into view
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add('in'));
}

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Contact form: if no form service is connected yet, fall back to opening the visitor's email app
const form = document.getElementById('contact-form');
if (form && form.getAttribute('action').includes('YOUR_FORM_ID')) {
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const d = new FormData(form);
    const subject = encodeURIComponent(`[Portfolio] ${d.get('topic')} — ${d.get('name')}`);
    const body = encodeURIComponent(`${d.get('message')}\n\n— ${d.get('name')}\n${d.get('email')}${d.get('company') ? '\n' + d.get('company') : ''}`);
    window.location.href = `mailto:warren.chanansingh@hotmail.com?subject=${subject}&body=${body}`;
  });
}
