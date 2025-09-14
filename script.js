
  // Function to show the selected section and update active nav
  function activate(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));

    // Show target section
    const target = document.getElementById(sectionId);
    if (target) target.classList.add('active');

    // Update nav active state
    document.querySelectorAll('.nav-link').forEach(a => {
      a.classList.toggle('active', a.dataset.section === sectionId);
    });
  }

  // Handle clicks on nav links and buttons with data-section
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-section]');
    if (!t) return;

    e.preventDefault(); // Prevent page jump
    const id = t.getAttribute('data-section');
    activate(id);
  });

  // Show home section on page load
  window.addEventListener('DOMContentLoaded', () => {
    activate('home');
  });

