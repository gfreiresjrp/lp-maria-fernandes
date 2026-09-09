// Native links work even when JavaScript is unavailable.
document.getElementById('year').textContent = String(new Date().getFullYear());
// Subtle entrance animations; content stays visible without JS or reduced-motion support.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.collection-card, .experience-intro, .steps article, .space-copy, .space-images, .faq > div').forEach((element) => {
    if (element.getBoundingClientRect().top > window.innerHeight) {
      element.classList.add('reveal-ready');
      observer.observe(element);
    }
  });
}
document.querySelectorAll('[data-whatsapp]').forEach((link) => {
  link.addEventListener('click', () => {
    // Optional integration point for an analytics installation; no trackers are loaded.
    window.dispatchEvent(new CustomEvent('whatsapp-click', {
      detail: { placement: link.dataset.whatsapp }
    }));
  });
});
