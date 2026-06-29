// Scroll reveal
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});


// Close nav on outside click
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// ── WHATSAPP WIDGET ──
const waFab     = document.getElementById('wa-fab');
const waPopup   = document.getElementById('wa-popup');
const waClose   = document.getElementById('wa-popup-close');

function openWaPopup() {
  waPopup.classList.add('visible');
  waFab.classList.add('open');
  waFab.setAttribute('aria-expanded', 'true');
}

function closeWaPopup() {
  waPopup.classList.remove('visible');
  waFab.classList.remove('open');
  waFab.setAttribute('aria-expanded', 'false');
}

waFab.addEventListener('click', (e) => {
  e.stopPropagation();
  waPopup.classList.contains('visible') ? closeWaPopup() : openWaPopup();
});

waClose.addEventListener('click', closeWaPopup);

// Close on outside click
document.addEventListener('click', (e) => {
  const widget = document.getElementById('wa-widget');
  if (!widget.contains(e.target)) closeWaPopup();
});

// Auto-open popup after 8 seconds if user hasn't interacted
setTimeout(() => {
  if (!waPopup.classList.contains('visible')) openWaPopup();
}, 8000);