/* ============================================================
   EasyToolz — Google AdSense Integration
   ============================================================
   HOW TO SET UP:
   1. Sign up at https://www.google.com/adsense
   2. Replace 'ca-pub-XXXXXXXXXXXXXXXX' below with your real Publisher ID
   3. Replace the data-ad-slot values with your real ad slot IDs
   4. Push to your site — ads will start showing once approved
   ============================================================ */

const ADSENSE_PUB_ID = 'ca-pub-XXXXXXXXXXXXXXXX'; // ← Replace with your real ID

// Load the AdSense script (called once)
(function loadAdSense() {
  if (document.querySelector('script[src*="adsbygoogle"]')) return;
  const s = document.createElement('script');
  s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUB_ID}`;
  s.crossOrigin = 'anonymous';
  s.async = true;
  document.head.appendChild(s);
})();

/**
 * Insert an ad unit into a container element.
 * @param {string} containerId - The ID of the div to insert the ad into
 * @param {string} slotId - Your AdSense ad slot ID (e.g., '1234567890')
 * @param {string} format - Ad format: 'auto', 'horizontal', 'vertical', 'rectangle'
 */
function insertAd(containerId, slotId, format) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Don't insert if already has an ad
  if (container.querySelector('ins.adsbygoogle')) return;

  const ins = document.createElement('ins');
  ins.className = 'adsbygoogle';
  ins.style.display = 'block';
  ins.setAttribute('data-ad-client', ADSENSE_PUB_ID);
  ins.setAttribute('data-ad-slot', slotId || '0000000000');

  if (format === 'horizontal') {
    ins.setAttribute('data-ad-format', 'horizontal');
    ins.setAttribute('data-full-width-responsive', 'true');
  } else if (format === 'rectangle') {
    ins.style.width = '300px';
    ins.style.height = '250px';
    ins.setAttribute('data-ad-format', 'rectangle');
  } else {
    ins.setAttribute('data-ad-format', 'auto');
    ins.setAttribute('data-full-width-responsive', 'true');
  }

  container.appendChild(ins);

  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  } catch (e) {
    // AdSense not loaded yet — will auto-fill when ready
  }
}

// Auto-initialize ads on page load
document.addEventListener('DOMContentLoaded', function() {
  // Insert ads into any element with class 'ad-container'
  document.querySelectorAll('.ad-container').forEach(function(el, i) {
    const format = el.dataset.adFormat || 'auto';
    const slot = el.dataset.adSlot || '0000000000';
    insertAd(el.id || ('auto-ad-' + i), slot, format);
  });
});
