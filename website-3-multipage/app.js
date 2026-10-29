document.addEventListener('DOMContentLoaded', () => {
  // Automatically sync page URL with active nav highlights
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav a');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Client-side search filter
  const searchInput = document.getElementById('search-filter');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      const cards = document.querySelectorAll('.card');

      cards.forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(query) ? 'flex' : 'none';
      });
    });
  }
});