let lang = 'es';
const langBtn = document.getElementById('langBtn');

function applyLang(l) {
  lang = l;
  document.documentElement.lang = l;
  langBtn.textContent = l === 'es' ? ' English' : ' Español';

  document.querySelectorAll('[data-es][data-en]').forEach(el => {
    const val = el.getAttribute('data-' + l);
    if (!val) return;
    if (el.tagName === 'H1' || el.tagName === 'H2') {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  
  const t = document.querySelector('title');
  if (t) t.textContent = t.getAttribute('data-' + l) || t.textContent;

  
  document.querySelectorAll('.nav-links a[data-es][data-en]').forEach(a => {
    a.textContent = a.getAttribute('data-' + l);
  });

  // Table definition cells only (col 3)
  document.querySelectorAll('table tbody tr').forEach(row => {
    const cell = row.cells[2];
    if (cell) {
      const v = cell.getAttribute('data-' + l);
      if (v) cell.textContent = v;
    }
  });
}

langBtn.addEventListener('click', () => applyLang(lang === 'es' ? 'en' : 'es'));


const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);


const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('show', window.scrollY > 300);
});
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));




for (let i = 0; i < 6; i++) grid.appendChild(createSlot());

document.getElementById('addSlot').addEventListener('click', () => {
  grid.appendChild(createSlot());

  if (lang === 'en') {
    grid.lastChild.querySelector('.slot-label').textContent = 'Upload image';
  }
});

document.getElementById('clearGallery').addEventListener('click', () => {
  grid.innerHTML = '';
  for (let i = 0; i < 6; i++) grid.appendChild(createSlot());
  if (lang === 'en') {
    grid.querySelectorAll('.slot-label').forEach(el => el.textContent = 'Upload image');
  }
});
