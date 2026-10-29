document.addEventListener('DOMContentLoaded', () => {
  const tabs = Array.from(document.querySelectorAll('input[name="dash-tab"]'));

  document.addEventListener('keydown', (e) => {
    const currentIndex = tabs.findIndex(tab => tab.checked);
    if (currentIndex === -1) return;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      const nextIndex = (currentIndex + 1) % tabs.length;
      tabs[nextIndex].checked = true;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      tabs[prevIndex].checked = true;
    }
  });
});