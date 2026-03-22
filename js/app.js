// Seleccionar elementos del DOM
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const sections = document.querySelectorAll('section');
const btnUp = document.querySelector('#btn-up');

// Agregar evento de scroll para animar el header
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

// Agregar evento de click para el botón de subir
btnUp.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Agregar evento de scroll para mostrar el botón de subir
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    btnUp.classList.add('active');
  } else {
    btnUp.classList.remove('active');
  }
});

// Agregar evento de scroll para animar las secciones
window.addEventListener('scroll', () => {
  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const scrollPosition = window.scrollY;
    if (scrollPosition >= top - height / 2 && scrollPosition < top + height / 2) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});

// Agregar evento de click para los enlaces del menú
nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({ behavior: 'smooth' });
  }
});