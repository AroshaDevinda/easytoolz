// EasyToolz — Main JS (Homepage interactions)
document.addEventListener('DOMContentLoaded', function () {

  /* ── Search ── */
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  const toolsCount  = document.getElementById('toolsCount');
  const noResults   = document.getElementById('noResults');
  const toolCards   = document.querySelectorAll('.tool-card');
  const catTabs     = document.querySelectorAll('.cat-tab');

  let activeCategory = 'all';
  let searchQuery    = '';

  function filter() {
    let visible = 0;
    toolCards.forEach(card => {
      const cat   = card.dataset.cat;
      const name  = card.querySelector('h3').textContent.toLowerCase();
      const desc  = card.querySelector('p').textContent.toLowerCase();
      const q     = searchQuery.toLowerCase().trim();
      const okCat = activeCategory === 'all' || cat === activeCategory;
      const okQ   = !q || name.includes(q) || desc.includes(q);
      if (okCat && okQ) { card.style.display = ''; visible++; }
      else              { card.style.display = 'none'; }
    });
    if (toolsCount) toolsCount.textContent = visible + ' tools';
    if (noResults)  noResults.style.display = visible === 0 ? 'flex' : 'none';
  }

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      searchQuery = this.value;
      searchClear.classList.toggle('visible', searchQuery.length > 0);
      filter();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', function () {
      searchInput.value = ''; searchQuery = '';
      this.classList.remove('visible');
      filter(); searchInput.focus();
    });
  }

  catTabs.forEach(tab => {
    tab.addEventListener('click', function () {
      catTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      activeCategory = this.dataset.cat;
      filter();
    });
  });

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
