/* ============================
   HIGHCODEX TECHNOLOGIES
   main.js
   ============================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll ── */
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  /* ── Mobile menu ── */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('open');
    }));
  }

  /* ── Scroll fade-up ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  /* ── Counter animation ── */
  const counters = document.querySelectorAll('[data-count]');
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el     = e.target;
      const target = +el.dataset.count;
      const suffix = el.dataset.suffix || '';
      const dur    = 1800;
      const step   = Math.ceil(dur / target);
      let current  = 0;
      const timer  = setInterval(() => {
        current += 1;
        el.textContent = current + suffix;
        if (current >= target) { el.textContent = target + suffix; clearInterval(timer); }
      }, step);
      counterObs.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => counterObs.observe(el));

  /* ── Skill bars ── */
  const skillFills = document.querySelectorAll('.skill-fill');
  const skillObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.width || '80%';
        skillObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  skillFills.forEach(el => { el.style.width = '0'; skillObs.observe(el); });

  /* ── Particle system (hero only) ── */
  const particleContainer = document.querySelector('.hero-particles');
  if (particleContainer) {
    const colors = ['#2563EB', '#7C3AED', '#06B6D4'];
    for (let i = 0; i < 18; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left     = Math.random() * 100 + '%';
      p.style.width    = (Math.random() * 4 + 2) + 'px';
      p.style.height   = p.style.width;
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.animationDuration  = (Math.random() * 10 + 8) + 's';
      p.style.animationDelay     = (Math.random() * 8) + 's';
      p.style.opacity = (Math.random() * 0.3 + 0.1).toString();
      particleContainer.appendChild(p);
    }
  }

  /* ── Active nav link ── */
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === currentPage) a.classList.add('active');
    else a.classList.remove('active');
  });

  /* ── Typed text effect (hero title) ── */
  const typedEl = document.querySelector('.typed-text');
  if (typedEl) {
    const words = typedEl.dataset.words ? typedEl.dataset.words.split(',') : [];
    if (words.length > 0) {
      let wi = 0, ci = 0, deleting = false;
      function typeLoop() {
        const word = words[wi];
        typedEl.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);
        if (!deleting && ci > word.length) { deleting = true; setTimeout(typeLoop, 1800); return; }
        if (deleting && ci < 0)   { deleting = false; wi = (wi + 1) % words.length; setTimeout(typeLoop, 400); return; }
        setTimeout(typeLoop, deleting ? 60 : 110);
      }
      typeLoop();
    }
  }

});
