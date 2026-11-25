// Reveal on scroll
document.addEventListener('DOMContentLoaded', () => {
  const animated = document.querySelectorAll('[data-animate]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('reveal');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  animated.forEach(el => io.observe(el));

  // Smooth anchor navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (ev) => {
      const id = anchor.getAttribute('href');
      const target = document.querySelector(id);
      if (target) {
        ev.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
