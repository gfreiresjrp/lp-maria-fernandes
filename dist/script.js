// Native links work even when JavaScript is unavailable.
document.getElementById('year').textContent = String(new Date().getFullYear());
// Content is visible by default; motion only enhances elements as they enter view.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
  reducedMotion.addEventListener('change', (event) => {
    if (event.matches) revealObserver.disconnect();
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
