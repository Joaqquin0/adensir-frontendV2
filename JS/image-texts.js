class LandingComponent {
  constructor() {
    this.currentIndex = 0;
    this.currentIndexs = 0;
    this.imageElement = null;
    this.imageContainer = null;
    this.textElement = null;
    this.misionElement = null;
    this.cambiodeposicion = null;

    this.titleElement = null;
    this.misionInfo = null;
    this.misionTittle = null;

    this.imagePaths = [
      "img/niños-jugando-futbol-de-zn.svg",
      "img/botas.svg",
      "img/miños.svg"
    ];
    this.texts = [
      '<span class="font1">"Mejoremos el mundo</span><br> <span class="font2">a través del deporte"</span>',
      '<span class="font1">"Hagamos que el fútbol sea</span><br> <span class="font2">un derecho y no un privilegio"</span>',
      '<span class="font1">"Mejoremos el futuro</span><br> <span class="font2">desde el presente"</span>',
    ];
    this.misionPaths = [
      "img/logo_eeede_ILKRecurso_112x.png",
      "img/Grupo304.png",
      "img/logo_de_ILKRecurso_112x.png",

    ];
    this.misionTittles = [
      "<span class='carta-mision-titulo'>MISIÓN</span>",
      "<span class='carta-mision-titulo'>VALORES</span>",
      "<span class='carta-mision-titulo'>VISIÓN</span>",

    ];
    this.misionTexts = [
      '<span class="subtitulo-mision">"El FUTBOL COMO DERECHO, NO COMO PRIVILEGIO"</span><br> <span class="parrafo-mision">Que la pobreza no sea una barrera para que los niños jueguen al fútbol.</span>',
      '<span class="subtitulo-mision">"VALORES DEL DEPORTE QUE CONSTRUYEN SOCIEDAD"</span><br> <span class="parrafo-mision">Compañerismo, respeto, disciplina, superación y humildad sobre la competencia.</span>',
      '<span class="subtitulo-mision">"EDUCACIÓN: LA CLAVE PARA TRANSFORMAR VIDAS"</span><br> <span class="parrafo-mision"> Asistencia escolar y buenos hábitos para prevenir la droga y la delincuencia.</span>',

    ];
  }

  init() {
    this.imageContainer = document.querySelector('.images');
    this.imageElement = this.imageContainer.querySelector('.img');
    this.textElement = document.querySelector('.texto-foto h1');
    this.misionElement = document.getElementById('carta');
    this.misionInfo = document.querySelector('.carta-mision-texto p');
    this.misionTittle = document.getElementById('carta-titulo');
    this.cambiodeposicion = document.getElementById('texto-foto');

    if (this.imageElement) {
      this.imageElement.src = this.imagePaths[0];
      this.imageElement.parentElement.style.width = '100%';
      this.imageElement.style.objectPosition = 'right';
    }
    if (this.misionElement) {
      this.misionElement.src = this.misionPaths[0];
      this.misionInfo.innerHTML = this.misionTexts[0];
      this.misionTittle.innerHTML = this.misionTittles[0];
    }
    if (this.imageElement) {
      this.updateText();
      this.preloadImages(this.imagePaths, () => {
        this.startImageRotation();
      });
    }

    this.preloadImages(this.misionPaths, () => {
      document.querySelector('.mision-button').addEventListener('click', () => this.prevMision());
      document.querySelector('.mision-button2').addEventListener('click', () => this.nextMision());
    });
  }

  preloadImages(paths, callback) {
    let loadedImages = 0;
    const totalImages = paths.length;
    paths.forEach(path => {
      const img = new Image();
      img.src = path;
      img.onload = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          callback();
        }
      };
    });
  }

  startImageRotation() {
    const initialDelay = 5000; // Retraso inicial de 5 segundos antes de comenzar la rotación
    setTimeout(() => {
      const rotateImages = () => {
        this.nextImage();
        this.imageRotationId = requestAnimationFrame(() => setTimeout(rotateImages, 5000));
      };
      rotateImages();
    }, initialDelay);
  }

  nextImage() {
    this.imageContainer.classList.add('fade-out');
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.imagePaths.length;
      
      // Actualiza el objectPosition y la src al mismo tiempo
      this.imageElement.style.objectPosition = this.getObjectPosition(this.currentIndex);
      this.imageElement.src = this.imagePaths[this.currentIndex];
      
      this.updateText();
      this.imageContainer.classList.remove('fade-out');
      this.imageContainer.classList.add('fade-in');
    }, 500);

    // Asegúrate de eliminar la clase 'fade-in' después de la animación
    setTimeout(() => {
      this.imageContainer.classList.remove('fade-in');
    }, 1000); // Ajusta el tiempo según la duración de la animación
  }

  getObjectPosition(index) {
    switch (index) {
      case 1: return 'left';
      case 2: return 'center';
      default: return 'right';
    }
  }

  updateText() {
    if (!this.textElement) return;
    this.textElement.innerHTML = this.texts[this.currentIndex];
    this.textElement.parentElement.style.justifyContent = window.innerWidth < 1335 ? 'none' : (this.currentIndex === 1 ? 'flex-end' : 'none');

  }

  updateMision() {
    this.misionElement.classList.add('fade-out');
    setTimeout(() => {
      this.misionElement.src = this.misionPaths[this.currentIndexs];
      this.misionInfo.innerHTML = this.misionTexts[this.currentIndexs];
      this.misionTittle.innerHTML = this.misionTittles[this.currentIndexs];
      this.misionElement.classList.remove('fade-out');
      this.misionElement.classList.add('fade-in');
    }, 500);

    // Asegúrate de eliminar la clase 'fade-in' después de la animación
    setTimeout(() => {
      this.misionElement.classList.remove('fade-in');
    }, 1000); // Ajusta el tiempo según la duración de la animación
  }

  nextMision() {
    this.currentIndexs = (this.currentIndexs + 1) % this.misionPaths.length;
    this.updateMision();
  }

  prevMision() {
    this.currentIndexs = (this.currentIndexs - 1 + this.misionPaths.length) % this.misionPaths.length;
    this.updateMision();
  }
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

async function loadComponent(selector, url) {
  const response = await fetch(url);
  const html = await response.text();
  document.querySelector(selector).innerHTML = html;
}

const landingComponent = new LandingComponent();
document.addEventListener('DOMContentLoaded', () => {
  landingComponent.init();
  loadComponent("#header", "/app/public/header/header.html");
  loadComponent("#footer", "/app/public/footer/footer.html");
});

function prevMision() {
  landingComponent.prevMision();
}

function nextMision() {
  landingComponent.nextMision();
}

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