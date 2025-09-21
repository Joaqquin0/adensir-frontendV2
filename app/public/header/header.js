class LandingComponent {

}

function scrollToSection() {
  // Verificar si estamos en index.html
  if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '/public_html/') {
    document.getElementById('nosotros').scrollIntoView({ behavior: 'smooth' });
  } else {
    // Si no estamos en index, navegar primero
    window.location.href = '/index.html#nosotros';
  }
}

function scrollToSections(value) {
  if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '/public_html/') {
    document.getElementById(value).scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.href = `/index.html#${value}`;
  }
}

function scrollToSectionMision() {
  if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '/public_html/') {
    document.getElementById('cointanier-valores').scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.href = '/index.html#cointanier-valores';
  }
}

function scrollToSectionDonacion() {
  if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '/public_html/') {
    document.getElementById('colaboracion').scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.href = '/index.html#colaboracion';
  }
}

function scrollToSectionPadrinos() {
  if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '/public_html/') {
    document.getElementById('conteiner-padrinos').scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.href = '/index.html#conteiner-padrinos';
  }
}

function navigateToSection(sectionId) {
  const url = new URL(window.location.href);
  url.pathname = 'index.html';
  url.hash = sectionId;
  window.location.href = url.toString();
  window.addEventListener('load', () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      history.replaceState(null, null, ' ');
    }
  });
}

const landingComponent = new LandingComponent();
document.addEventListener('DOMContentLoaded', () => {
  landingComponent.init();
});


function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

document.addEventListener('click', function(event) {
  const sidebar = document.getElementById('sidebar');
  const menuIcon = document.querySelector('.menu-icon');
  if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
    sidebar.classList.remove('active');
  }
});

// Agregar función para manejar el scroll después de cargar la página
window.addEventListener('load', () => {
  const hash = window.location.hash.substring(1);
  if (hash) {
    const section = document.getElementById(hash);
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      // Limpiar el hash de la URL
      history.replaceState(null, null, window.location.pathname);
    }
  }
});