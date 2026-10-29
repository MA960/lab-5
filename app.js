document.addEventListener('DOMContentLoaded', () => {
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const sections = [...document.querySelectorAll('.section-anchor')];
  const filterButtons = [...document.querySelectorAll('.filter-button')];
  const releases = [...document.querySelectorAll('.release-row')];
  const toast = document.querySelector('.toast');
  const lastSync = document.querySelector('#last-sync');

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove('is-visible'), 2200);
  };

  document.querySelector('.copy-button')?.addEventListener('click', async (event) => {
    const text = event.currentTarget.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
      event.currentTarget.textContent = 'copied';
      showToast('Command copied to clipboard');
      window.setTimeout(() => { event.currentTarget.textContent = 'copy'; }, 1800);
    } catch {
      showToast(text);
    }
  });

  filterButtons.forEach((button) => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      item.classList.toggle('is-active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
    releases.forEach((release) => {
      release.classList.toggle('is-hidden', filter !== 'all' && release.dataset.release !== filter);
    });
  }));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('is-active', isActive);
        if (isActive) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-30% 0px -55% 0px', threshold: 0 });
  sections.forEach((section) => observer.observe(section));

  const formatTime = () => new Intl.DateTimeFormat('en', { hour: '2-digit', minute: '2-digit' }).format(new Date());
  const updateStatus = (data) => {
    const label = document.querySelector('#health-label');
    const code = document.querySelector('#health-code');
    const rail = document.querySelector('#rail-status');
    const healthDot = document.querySelector('.health-dot');
<<<<<<< HEAD
    if (label) label.textContent = data.status === 'operational' ? 'All systems operational' : data.status === 'local' ? 'Local static mode' : 'Status unavailable';
    if (code) code.textContent = data.statusCode || '200 OK';
    if (rail) rail.textContent = data.availability || 'available for work';
    healthDot?.classList.toggle('is-degraded', data.status !== 'operational' && data.status !== 'local');
    if (lastSync) lastSync.textContent = formatTime();
  };

  const statusRequest = window.location.protocol === 'file:'
    ? Promise.resolve({ status: 'local', statusCode: 'LOCAL', availability: 'available locally' })
    : fetch('/api/status').then((response) => response.ok ? response.json() : Promise.reject(new Error('status unavailable')));
  statusRequest.then(updateStatus).catch(() => {
=======
    if (label) label.textContent = data.status === 'operational' ? 'All systems operational' : 'Status unavailable';
    if (code) code.textContent = data.statusCode || '200 OK';
    if (rail) rail.textContent = data.availability || 'available for work';
    healthDot?.classList.toggle('is-degraded', data.status !== 'operational');
    if (lastSync) lastSync.textContent = formatTime();
  };

  fetch('/api/status').then((response) => response.ok ? response.json() : Promise.reject(new Error('status unavailable'))).then(updateStatus).catch(() => {
>>>>>>> e6f1d548fe82ccc98c8dcf8fce0e0b68044e0b3f
    updateStatus({ status: 'degraded', statusCode: '—', availability: 'status unavailable' });
  });
});
