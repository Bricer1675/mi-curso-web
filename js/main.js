// Espera a que el DOM cargue
document.addEventListener('DOMContentLoaded', () => {
  // Toggle del menú en móvil
  const navLinks = document.querySelector('.nav-links');
  const logo = document.querySelector('.logo');
  const toggleButton = document.createElement('button');
  toggleButton.classList.add('nav-toggle');
  toggleButton.setAttribute('aria-label', 'Abrir menú');
  toggleButton.innerHTML = '&#9776;';
  logo.parentNode.insertBefore(toggleButton, logo.nextSibling);

  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
  });

  // Smooth scroll para enlaces de navegación
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
      }
      // Cierra menú en móvil al hacer click
      if (navLinks.classList.contains('nav-open')) {
        navLinks.classList.remove('nav-open');
      }
    });
  });

  // Envío de formulario (placeholder)
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Aquí podrías integrar un servicio o validar más a fondo
    alert('¡Gracias por tu mensaje! Te responderemos pronto.');
    form.reset();
  });
});
