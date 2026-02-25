// === NAVBAR SCROLL SHADOW ===
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// === HAMBURGER MENU ===
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
});
// Close on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

// === FAQ ACCORDION ===
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// === QUIZ ===
document.querySelectorAll('.quiz-q').forEach(q => {
  const opts = q.querySelectorAll('.opt');
  opts.forEach(opt => {
    opt.addEventListener('click', () => {
      if (q.dataset.answered) return;
      q.dataset.answered = true;
      opts.forEach(o => {
        o.classList.add('disabled');
        if (o.dataset.correct === 'true') o.classList.add('correct');
      });
      if (opt.dataset.correct !== 'true') opt.classList.add('wrong');
    });
  });
});

// === VOCABULARY SEARCH ===
const vocabSearch = document.getElementById('vocabSearch');
if (vocabSearch) {
  vocabSearch.addEventListener('input', () => {
    const term = vocabSearch.value.toLowerCase().trim();
    const rows = document.querySelectorAll('#vocabBody tr');
    rows.forEach(row => {
      const word = row.cells[1]?.textContent.toLowerCase() || '';
      const def  = row.cells[2]?.textContent.toLowerCase() || '';
      row.style.display = (word.includes(term) || def.includes(term)) ? '' : 'none';
    });
  });
}

// === COOKIE BANNER ===
const cookieBanner = document.getElementById('cookie-banner');
if (cookieBanner) {
  if (!localStorage.getItem('cookieChoice')) {
    cookieBanner.style.display = 'flex';
  } else {
    cookieBanner.classList.add('hidden');
  }
  document.getElementById('cookieAccept')?.addEventListener('click', () => {
    localStorage.setItem('cookieChoice', 'accepted');
    cookieBanner.classList.add('hidden');
  });
  document.getElementById('cookieDeny')?.addEventListener('click', () => {
    localStorage.setItem('cookieChoice', 'denied');
    cookieBanner.classList.add('hidden');
  });
}

// === SCROLL TO TOP ===
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// === CERTIFICATE FORM ===
const certForm = document.getElementById('certForm');
if (certForm) {
  certForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('certName').value.trim();
    if (!name) return;
    alert('Welcome ' + name + '! The English test is starting...\n\n(Test engine integration coming soon)');
  });
}

// === SMOOTH SCROLL for anchor links ===
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
