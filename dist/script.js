// Native links work even when JavaScript is unavailable.
document.getElementById('year').textContent = String(new Date().getFullYear());
document.querySelectorAll('[data-whatsapp]').forEach((link) => {
  link.addEventListener('click', () => {
    // Optional integration point for an analytics installation; no trackers are loaded.
    window.dispatchEvent(new CustomEvent('whatsapp-click', {
      detail: { placement: link.dataset.whatsapp }
    }));
  });
});
