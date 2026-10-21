// ===== NAVIGATION =====
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

function activateSection(target) {
  navLinks.forEach(l => l.classList.remove('active'));
  const activeLink = document.querySelector(`.nav-link[data-section="${target}"]`);
  if (activeLink) activeLink.classList.add('active');

  sections.forEach(s => s.classList.remove('active'));
  const targetSection = document.getElementById(target);
  if (targetSection) {
    targetSection.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('data-section');
    activateSection(target);

    // Close sidebar on mobile
    if (window.innerWidth <= 768) {
      sidebar.classList.remove('open');
      hamburger.classList.remove('open');
      overlay.classList.remove('active');
    }
  });
});

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  hamburger.classList.remove('open');
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
});

// ===== PROJECT FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      if (filter === 'all') {
        card.classList.remove('hidden');
      } else {
        const category = card.getAttribute('data-category');
        if (category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      }
    });
  });
});

// ===== ANIMATE ON SCROLL =====
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.timeline-card, .project-card, .edu-card, .service-card, .stat-card, .achievement-card, .contact-card').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = `opacity 0.4s ease ${i * 0.05}s, transform 0.4s ease ${i * 0.05}s`;
  animObserver.observe(el);
});

// ===== TYPED EFFECT ON PROFILE TITLE =====
window.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.profile-title');
  if (title) {
    const text = title.textContent;
    title.textContent = '';
    title.style.borderRight = '2px solid var(--accent)';
    let i = 0;
    const type = () => {
      if (i < text.length) {
        title.textContent += text.charAt(i);
        i++;
        setTimeout(type, 60);
      } else {
        setTimeout(() => { title.style.borderRight = 'none'; }, 600);
      }
    };
    setTimeout(type, 400);
  }
});

console.log('%cAshreya Verma Portfolio', 'color: #6366f1; font-size: 1.2rem; font-weight: bold;');
console.log('%cData Engineer | SDE Trainee @ Sigmoid Analytics', 'color: #818cf8;');
