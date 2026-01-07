/**
 * Servicio de Noticias - Maneja la carga y gestión de noticias desde JSON
 */

// Variables globales
let noticiasData = [];

/**
 * Parsea una fecha en formato "DD de Mes YYYY" a objeto Date
 * @param {string} fechaStr - Fecha en formato español
 * @returns {Date} Objeto Date
 */
function parseFechaEspanol(fechaStr) {
    const meses = {
        'enero': 0, 'febrero': 1, 'marzo': 2, 'abril': 3,
        'mayo': 4, 'junio': 5, 'julio': 6, 'agosto': 7,
        'septiembre': 8, 'octubre': 9, 'noviembre': 10, 'diciembre': 11
    };
    
    // Extraer día, mes y año (case-insensitive)
    const match = fechaStr.match(/(\d+)\s+de\s+(\w+)\s+de\s+(\d{4})|(\d+)\s+de\s+(\w+)\s+(\d{4})/i);
    if (!match) {
        console.warn('No se pudo parsear la fecha:', fechaStr);
        return new Date(0); // Fecha por defecto si no se puede parsear
    }
    
    // Puede tener o no tener "de" entre el mes y el año
    const dia = parseInt(match[1] || match[4]);
    const mesStr = (match[2] || match[5]).toLowerCase();
    const anio = parseInt(match[3] || match[6]);
    
    const mes = meses[mesStr];
    if (mes === undefined) {
        console.warn('Mes no reconocido:', mesStr, 'en fecha:', fechaStr);
        return new Date(0);
    }
    
    const fecha = new Date(anio, mes, dia);
    console.log(`Parseado: "${fechaStr}" → ${fecha.toISOString().split('T')[0]}`);
    return fecha;
}

/**
 * Carga las noticias desde el archivo JSON
 * @returns {Promise<Array>} Array de objetos Notice ordenados por fecha (más reciente primero)
 */
async function loadNoticias() {
    try {
        // Detectar la ruta correcta del JSON según la ubicación actual
        const currentPath = window.location.pathname;
        const isInRoot = currentPath.endsWith('index.html') || currentPath.endsWith('/') || !currentPath.includes('noticias-dinamicas');
        
        const jsonPath = isInRoot 
            ? 'app/noticias/components/service/noticias.json'
            : '../service/noticias.json';
        
        console.log('Cargando noticias desde:', jsonPath);
        
        const response = await fetch(jsonPath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        // Crear instancias de Notice y ordenar por fecha (más reciente primero)
        noticiasData = data.noticias
            .map(noticiaData => new Notice(noticiaData))
            .sort((a, b) => {
                const fechaA = parseFechaEspanol(a.fecha);
                const fechaB = parseFechaEspanol(b.fecha);
                console.log(`Comparando: ${a.fecha} (${fechaA.toISOString()}) vs ${b.fecha} (${fechaB.toISOString()})`);
                return fechaB - fechaA; // Orden descendente (más reciente primero)
            });
        
        console.log('Noticias cargadas y ordenadas:', noticiasData.length);
        console.log('Orden final:', noticiasData.map(n => `ID: ${n.id}, Fecha: ${n.fecha}`));
        
        return noticiasData;
    } catch (error) {
        console.error('Error cargando noticias:', error);
        return [];
    }
}

/**
 * Obtiene una noticia por su ID
 * @param {number} id - ID de la noticia
 * @returns {Notice|null} Objeto Notice o null si no se encuentra
 */
function getNoticiaById(id) {
    return noticiasData.find(noticia => noticia.id == id) || null;
}

// Variables para controlar la navegación
let currentPage = 0;
const noticiasPerPage = 3;

// Variables para el touch/swipe - MEJORADAS
let startX = 0;
let startY = 0;
let isDragging = false;
let currentTranslateX = 0;
let animationId;
let isScrolling = false;
let hasMoved = false;

// NUEVA VARIABLE: Para detectar si estamos en modo paginación o scroll libre
let isPaginationMode = true;

function checkPaginationMode() {
    isPaginationMode = window.innerWidth > 1384;
    return isPaginationMode;
}

function renderNoticias() {
    const contenedorNoticias = document.querySelector(".all-noticias");
    
    if (!contenedorNoticias) {
        console.error('Contenedor .all-noticias no encontrado');
        return;
    }
    
    contenedorNoticias.innerHTML = "";

    if (noticiasData.length === 0) {
        console.warn('No hay noticias para renderizar');
        return;
    }

    console.log('Renderizando noticias en este orden:', noticiasData.map(n => `ID: ${n.id}, Fecha: ${n.fecha}`));

    checkPaginationMode();

    if (isPaginationMode) {
        // Modo paginación: crear páginas separadas
        const totalPages = Math.ceil(noticiasData.length / noticiasPerPage);
        
        for (let page = 0; page < totalPages; page++) {
            const pageElement = document.createElement('div');
            pageElement.classList.add('noticias-page');
            
            const startIndex = page * noticiasPerPage;
            const endIndex = startIndex + noticiasPerPage;
            const noticiasToRender = noticiasData.slice(startIndex, endIndex);

            noticiasToRender.forEach(noticia => {
                pageElement.appendChild(noticia.render());
            });

            contenedorNoticias.appendChild(pageElement);
        }
    } else {
        // Modo scroll libre: todas las noticias en una sola página
        const pageElement = document.createElement('div');
        pageElement.classList.add('noticias-page');
        
        noticiasData.forEach(noticia => {
            pageElement.appendChild(noticia.render());
        });

        contenedorNoticias.appendChild(pageElement);
    }

    updateNoticiasDisplay();
    renderPaginationIndicators();
}

function updateNoticiasDisplay() {
    const contenedorNoticias = document.querySelector(".all-noticias");
    
    if (isPaginationMode) {
        const totalPages = Math.ceil(noticiasData.length / noticiasPerPage);
        const translateX = -currentPage * 100;
        contenedorNoticias.style.transform = `translateX(${translateX}%)`;
    } else {
        // En modo scroll libre, no aplicar transformaciones
        contenedorNoticias.style.transform = 'none';
    }
}

function renderPaginationIndicators() {
    const paginationContainer = document.querySelector(".pagination-indicators");
    
    if (!paginationContainer) return;
    
    paginationContainer.innerHTML = "";

    if (!isPaginationMode) {
        // Ocultar indicadores en modo scroll libre
        paginationContainer.style.display = 'none';
        return;
    }

    paginationContainer.style.display = 'flex';
    const totalPages = Math.ceil(noticiasData.length / noticiasPerPage);

    for (let i = 0; i < totalPages; i++) {
        const indicator = document.createElement("div");
        indicator.classList.add("pagination-indicator");
        if (i === currentPage) {
            indicator.classList.add("active");
        }

        indicator.addEventListener("click", () => {
            currentPage = i;
            updateNoticiasDisplay();
            renderPaginationIndicators();
        });

        paginationContainer.appendChild(indicator);
    }
}

function goToPage(pageIndex) {
    if (!isPaginationMode) return;
    
    const totalPages = Math.ceil(noticiasData.length / noticiasPerPage);
    
    if (pageIndex >= 0 && pageIndex < totalPages) {
        currentPage = pageIndex;
        updateNoticiasDisplay();
        renderPaginationIndicators();
    }
}

function nextPage() {
    if (!isPaginationMode) return;
    
    const totalPages = Math.ceil(noticiasData.length / noticiasPerPage);
    if (currentPage < totalPages - 1) {
        currentPage++;
        updateNoticiasDisplay();
        renderPaginationIndicators();
    }
}

function prevPage() {
    if (!isPaginationMode) return;
    
    if (currentPage > 0) {
        currentPage--;
        updateNoticiasDisplay();
        renderPaginationIndicators();
    }
}

// FUNCIONES DE TOUCH CORREGIDAS - Solo para modo paginación
function handleTouchStart(e) {
    // Solo procesar si estamos en modo paginación
    if (!isPaginationMode) return;
    
    // Solo procesar si hay un solo toque
    if (e.touches.length !== 1) return;
    
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    isDragging = false;
    isScrolling = false;
    hasMoved = false;
    
    const contenedorNoticias = document.querySelector(".all-noticias");
    contenedorNoticias.style.transition = 'none';
    
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
}

function handleTouchMove(e) {
    // Solo procesar si estamos en modo paginación
    if (!isPaginationMode) return;
    
    // Solo procesar si hay un solo toque
    if (e.touches.length !== 1) return;
    
    const touch = e.touches[0];
    const currentX = touch.clientX;
    const currentY = touch.clientY;
    
    const diffX = currentX - startX;
    const diffY = currentY - startY;
    
    if (isScrolling) {
        return;
    }
    
    if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
        
        hasMoved = true;
        currentTranslateX = diffX;
        
        const contenedorNoticias = document.querySelector(".all-noticias");
        const baseTranslateX = -currentPage * 100;
        const dragPercentage = (diffX / window.innerWidth) * 100;
        
        contenedorNoticias.style.transform = `translateX(${baseTranslateX + dragPercentage}%)`;
        return;
    }
    
    const absX = Math.abs(diffX);
    const absY = Math.abs(diffY);
    
    if (absX > 8 || absY > 8) {
        if (absX > absY) {
            isDragging = true;
            hasMoved = true;
            e.preventDefault();
            e.stopPropagation();
            
            currentTranslateX = diffX;
            
            const contenedorNoticias = document.querySelector(".all-noticias");
            const baseTranslateX = -currentPage * 100;
            const dragPercentage = (diffX / window.innerWidth) * 100;
            
            contenedorNoticias.style.transform = `translateX(${baseTranslateX + dragPercentage}%)`;
        } else {
            isScrolling = true;
        }
    }
}

function handleTouchEnd(e) {
    // Solo procesar si estamos en modo paginación
    if (!isPaginationMode) return;
    
    isScrolling = false;
    
    const contenedorNoticias = document.querySelector(".all-noticias");
    contenedorNoticias.style.transition = 'transform 0.3s ease';
    
    if (!isDragging) {
        return;
    }
    
    isDragging = false;
    
    if (hasMoved) {
        window.justFinishedDragging = true;
        setTimeout(() => {
            window.justFinishedDragging = false;
        }, 50);
    }
    
    const threshold = 30;
    const totalPages = Math.ceil(noticiasData.length / noticiasPerPage);
    
    if (Math.abs(currentTranslateX) > threshold) {
        if (currentTranslateX > 0 && currentPage > 0) {
            prevPage();
        } else if (currentTranslateX < 0 && currentPage < totalPages - 1) {
            nextPage();
        } else {
            updateNoticiasDisplay();
        }
    } else {
        updateNoticiasDisplay();
    }
    
    currentTranslateX = 0;
    hasMoved = false;
}

// Funciones para manejo de mouse (desktop) - Solo para modo paginación
function handleMouseDown(e) {
    // Solo activar en desktop y modo paginación
    if ('ontouchstart' in window || !isPaginationMode) return;
    
    startX = e.clientX;
    startY = e.clientY;
    isDragging = true;
    hasMoved = false;
    
    const contenedorNoticias = document.querySelector(".all-noticias");
    contenedorNoticias.style.transition = 'none';
    contenedorNoticias.style.cursor = 'grabbing';
    
    e.preventDefault();
}

function handleMouseMove(e) {
    if (!isDragging || 'ontouchstart' in window || !isPaginationMode) return;
    
    const currentX = e.clientX;
    const diffX = currentX - startX;
    
    if (Math.abs(diffX) > 5) {
        hasMoved = true;
    }
    
    currentTranslateX = diffX;
    
    const contenedorNoticias = document.querySelector(".all-noticias");
    const baseTranslateX = -currentPage * 100;
    const dragPercentage = (diffX / window.innerWidth) * 100;
    
    contenedorNoticias.style.transform = `translateX(${baseTranslateX + dragPercentage}%)`;
}

function handleMouseUp(e) {
    if (!isDragging || 'ontouchstart' in window || !isPaginationMode) return;
    
    isDragging = false;
    
    const contenedorNoticias = document.querySelector(".all-noticias");
    contenedorNoticias.style.transition = 'transform 0.3s ease';
    contenedorNoticias.style.cursor = 'grab';
    
    if (hasMoved) {
        window.justFinishedDragging = true;
        setTimeout(() => {
            window.justFinishedDragging = false;
        }, 100);
    }
    
    const threshold = 50;
    const totalPages = Math.ceil(noticiasData.length / noticiasPerPage);
    
    if (Math.abs(currentTranslateX) > threshold) {
        if (currentTranslateX > 0 && currentPage > 0) {
            prevPage();
        } else if (currentTranslateX < 0 && currentPage < totalPages - 1) {
            nextPage();
        } else {
            updateNoticiasDisplay();
        }
    } else {
        updateNoticiasDisplay();
    }
    
    currentTranslateX = 0;
    hasMoved = false;
}

function initializeSwipeEvents() {
    const contenedorNoticias = document.querySelector(".all-noticias");
    
    if (contenedorNoticias) {
        // Remover event listeners existentes
        contenedorNoticias.removeEventListener('touchstart', handleTouchStart);
        contenedorNoticias.removeEventListener('touchmove', handleTouchMove);
        contenedorNoticias.removeEventListener('touchend', handleTouchEnd);
        contenedorNoticias.removeEventListener('mousedown', handleMouseDown);
        contenedorNoticias.removeEventListener('mousemove', handleMouseMove);
        contenedorNoticias.removeEventListener('mouseup', handleMouseUp);
        contenedorNoticias.removeEventListener('mouseleave', handleMouseUp);
        
        checkPaginationMode();
        
        if (isPaginationMode) {
            // Solo agregar eventos si estamos en modo paginación
            contenedorNoticias.addEventListener('touchstart', handleTouchStart, { 
                passive: true 
            });
            contenedorNoticias.addEventListener('touchmove', handleTouchMove, { 
                passive: false 
            });
            contenedorNoticias.addEventListener('touchend', handleTouchEnd, { 
                passive: true 
            });
            
            // Mouse events para desktop
            if (!('ontouchstart' in window)) {
                contenedorNoticias.addEventListener('mousedown', handleMouseDown);
                contenedorNoticias.addEventListener('mousemove', handleMouseMove);
                contenedorNoticias.addEventListener('mouseup', handleMouseUp);
                contenedorNoticias.addEventListener('mouseleave', handleMouseUp);
                
                contenedorNoticias.style.cursor = 'grab';
            }
            
            // Configuración para evitar selección
            contenedorNoticias.style.webkitUserSelect = 'none';
            contenedorNoticias.style.userSelect = 'none';
            contenedorNoticias.style.webkitTouchCallout = 'none';
            contenedorNoticias.style.webkitTapHighlightColor = 'transparent';
        } else {
            // En modo scroll libre, permitir comportamiento nativo
            contenedorNoticias.style.cursor = 'default';
            contenedorNoticias.style.webkitUserSelect = 'auto';
            contenedorNoticias.style.userSelect = 'auto';
            contenedorNoticias.style.webkitTouchCallout = 'default';
            contenedorNoticias.style.webkitTapHighlightColor = 'initial';
        }
    }
}

function handleResize() {
    const wasInPaginationMode = isPaginationMode;
    checkPaginationMode();
    
    // Si cambió el modo, re-renderizar
    if (wasInPaginationMode !== isPaginationMode) {
        currentPage = 0; // Resetear página al cambiar modo
        renderNoticias();
        initializeSwipeEvents();
    } else {
        setTimeout(() => {
            updateNoticiasDisplay();
        }, 100);
    }
}

async function loadComponent(selector, url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const html = await response.text();
    document.querySelector(selector).innerHTML = html;
  } catch (error) {
    console.error(`Error loading component ${selector} from ${url}:`, error);
    // Fallback: try without leading slash for relative paths
    if (url.startsWith('/')) {
      const fallbackUrl = url.substring(1);
      try {
        const fallbackResponse = await fetch(fallbackUrl);
        if (fallbackResponse.ok) {
          const html = await fallbackResponse.text();
          document.querySelector(selector).innerHTML = html;
        }
      } catch (fallbackError) {
        console.error(`Fallback also failed for ${selector}:`, fallbackError);
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", async () => {
    // Cargar noticias desde JSON
    await loadNoticias();
    
    renderNoticias();
    
    // Load components with debugging
    loadComponent("#header", "/app/public/header/header.html");
    loadComponent("#footer", "/app/public/footer/footer.html");
    
    // Verify components loaded after a delay
    setTimeout(() => {
        const headerLoaded = document.querySelector("#header") && document.querySelector("#header").innerHTML.trim() !== '';
        const footerLoaded = document.querySelector("#footer") && document.querySelector("#footer").innerHTML.trim() !== '';
        
        console.log('Header loaded:', headerLoaded);
        console.log('Footer loaded:', footerLoaded);
        
        if (!footerLoaded) {
            console.warn('Footer not loaded, attempting fallback...');
            loadComponent("#footer", "app/public/footer/footer.html");
        }
        
        initializeSwipeEvents();
    }, 200);
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', () => {
        setTimeout(handleResize, 300);
    });
});