/* ============================================================
   Lumière — Centro de Estética Premium
   main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar: cambia fondo al hacer scroll ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ── Scroll reveal con blur ── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ── Scroll veil: desaparece cerca del final de página ── */
  const veil = document.getElementById('scrollVeil');
  function updateVeil() {
    const scrolled = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    veil.style.opacity = scrolled > docH - 200 ? '0' : '1';
  }
  window.addEventListener('scroll', updateVeil, { passive: true });
  updateVeil();

  /* ── Parallax en hero ── */
  const heroHeadline = document.querySelector('.hero-headline');
  const heroBg       = document.querySelector('.hero-bg');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (heroHeadline) heroHeadline.style.transform = `translateY(${y * 0.25}px)`;
    if (heroBg)       heroBg.style.transform       = `translateY(${y * 0.15}px)`;
  }, { passive: true });

  /* ── Filter pills ── */
  document.querySelectorAll('.treatment-pill').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.treatment-pill').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

});

/* ── Modal ── */
function openModal() {
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('modal')) closeModal();
}


