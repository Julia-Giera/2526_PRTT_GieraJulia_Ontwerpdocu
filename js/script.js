document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menuBtn');
  const menuOverlay = document.getElementById('menuOverlay');

  if (!menuBtn || !menuOverlay) return;

  menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('open');
    menuOverlay.classList.toggle('open');
  });

  // Close menu when clicking any link inside it
  menuOverlay.addEventListener('click', function(e) {
    const target = e.target;
    if (target.tagName === 'A') {
      menuBtn.classList.remove('open');
      menuOverlay.classList.remove('open');
    }
  });

  // Optional: close with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      menuBtn.classList.remove('open');
      menuOverlay.classList.remove('open');
    }
  });
});
