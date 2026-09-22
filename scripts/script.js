const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');

  menuToggle.setAttribute('aria-expanded', isOpen);
});

// Expanding search toggle
const searchForm = document.querySelector('.search');
const searchToggle = document.querySelector('.search-toggle');
const searchInput = document.querySelector('.search-input');

if (searchForm && searchToggle && searchInput) {
  const closeSearch = () => {
    searchForm.classList.remove('is-open');
    searchToggle.setAttribute('aria-expanded', 'false');
  };

  searchToggle.addEventListener('click', () => {
    const isOpen = searchForm.classList.toggle('is-open');
    searchToggle.setAttribute('aria-expanded', String(isOpen));

    if (isOpen) {
      searchInput.focus();
    }
  });

  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeSearch();
      searchToggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!searchForm.contains(event.target)) {
      closeSearch();
    }
  });

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
  });
}
