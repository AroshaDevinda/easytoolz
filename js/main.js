// EasyToolz — Main JS (Homepage interactions)
document.addEventListener('DOMContentLoaded', function () {

  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  const noResults   = document.getElementById('noResults');
  const toolsGrid   = document.getElementById('toolsGrid');
  const categorySections = document.getElementById('categorySections');
  // Only get cards from category sections so we don't duplicate
  const toolCards = categorySections ? categorySections.querySelectorAll('.tool-card') : [];

  let searchQuery = '';

  function filter() {
    const q = searchQuery.toLowerCase().trim();
    
    if (!q) {
      if (toolsGrid) toolsGrid.style.display = 'none';
      if (categorySections) categorySections.style.display = 'block';
      if (noResults) noResults.style.display = 'none';
      // Remove all cloned cards
      if (toolsGrid) {
        const clones = toolsGrid.querySelectorAll('.search-clone');
        clones.forEach(c => c.remove());
      }
      return;
    }

    if (categorySections) categorySections.style.display = 'none';
    if (toolsGrid) toolsGrid.style.display = 'grid'; // Using grid layout

    // Clear previous clones
    const clones = toolsGrid.querySelectorAll('.search-clone');
    clones.forEach(c => c.remove());

    let visible = 0;
    
    toolCards.forEach(card => {
      const name = card.querySelector('h3').textContent.toLowerCase();
      const desc = card.querySelector('p').textContent.toLowerCase();
      
      if (name.includes(q) || desc.includes(q)) {
        const clone = card.cloneNode(true);
        clone.classList.add('search-clone');
        // Insert before noResults
        if (noResults) {
          toolsGrid.insertBefore(clone, noResults);
        } else {
          toolsGrid.appendChild(clone);
        }
        visible++;
      }
    });

    if (noResults) noResults.style.display = visible === 0 ? 'flex' : 'none';
  }

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      searchQuery = this.value;
      if (searchClear) searchClear.classList.toggle('visible', searchQuery.length > 0);
      filter();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', function () {
      searchInput.value = ''; 
      searchQuery = '';
      this.classList.remove('visible');
      filter(); 
      searchInput.focus();
    });
  }

  /* ── Mobile nav ── */
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  if (navToggle) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    document.addEventListener('click', e => {
      if (navLinks.classList.contains('open') &&
          !navLinks.contains(e.target) && !navToggle.contains(e.target))
        navLinks.classList.remove('open');
    });
  }

  /* ── Keyboard shortcuts ── */
  document.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== searchInput && searchInput) {
      e.preventDefault(); searchInput.focus();
    }
    if (e.key === 'Escape') {
      searchInput && searchInput.blur();
      navLinks && navLinks.classList.remove('open');
    }
  });

  filter();
});

/* ── Shared utility: copy to clipboard ── */
function copyText(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const old = btn.textContent;
    btn.textContent = '✓ Copied!';
    setTimeout(() => btn.textContent = old, 2000);
  });
}

/* ── Shared: nav toggle for tool pages ── */
(function () {
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }
})();

/* ── Shared: Buy Me a Coffee Floating Widget & Nav Link (All Pages) ── */
(function initBMC() {
  function inject() {
    // 1. Floating Widget (bottom right on all pages)
    if (!document.querySelector('.bmc-floating-widget')) {
      const bmcLink = document.createElement('a');
      bmcLink.href = 'https://buymeacoffee.com/easytoolz';
      bmcLink.target = '_blank';
      bmcLink.rel = 'noopener noreferrer';
      bmcLink.className = 'bmc-floating-widget';
      bmcLink.setAttribute('aria-label', 'Support EasyToolz on Buy Me a Coffee');
      bmcLink.setAttribute('title', 'EasyToolz is 100% free. If these tools helped you, consider supporting my family on Buy Me a Coffee.');
      bmcLink.innerHTML = '<span class="bmc-icon">☕</span><span>Buy Me a Coffee</span>';
      document.body.appendChild(bmcLink);
    }

    // 2. Nav Link (in navbar of all pages)
    const navLinks = document.getElementById('navLinks');
    if (navLinks && !navLinks.querySelector('.nav-bmc-btn')) {
      const li = document.createElement('li');
      li.innerHTML = '<a href="https://buymeacoffee.com/easytoolz" target="_blank" rel="noopener noreferrer" class="nav-bmc-btn"><span>☕</span> Support</a>';
      navLinks.appendChild(li);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();

