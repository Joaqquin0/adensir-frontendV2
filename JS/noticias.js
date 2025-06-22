const noticiasData = [
    { fecha: "28 de Febrero 2025", descripcion: '"Llegamos a 1000 familias ayudadas en la región."', id: 1, imagen_previa:"img/foto-mini-noticia1.webp",colorBarra: "#09A6DF" },
    { fecha: "30 de abril de 2025", descripcion: '"Inauguración del nuevo centro comunitario."', id: 2, imagen_previa:"img/foto-mini-noticia2.jpg",colorBarra: "#E73246" }
    //{ fecha: "18 de Febrero 2025", descripcion: "Cumpleaños de dios", id:3, colorBarra: "#ffc107" },
    //{ fecha: "25 de Marzo 2024", descripcion: "Inauguración del nuevo centro comunitario.", id: 4 }
];

const contenidoNoticiaData= [
    { id_noticia: 1,
        
        titulo: "ADENSIR, LA ONG <br>CREADA POR<br> C.U. ZONA NORTE,<br> ARRANCA CON ILUSIÓN",
        autor:"Preparado por: Kenedy Matete",
        parrafo: "<span class ='texto-bold'>CREACIÓN OFICIAL DE ADENSIR</span> <br><br>"+
        "Después de haber estado donando equipaciones, balones y todo tipo de material a academias necesitadas" +
        "pero de manera aleatoria en la ciudad de Nairobi, C.U. Zona Norte se lanza desde finales de 2024 a <strong>crear de</strong> "+
        "<strong>manera oficial la ONG ADENSIR</strong> (Asociación del DEporte para Niños y niñas SIn Recursos, enfocada en el "+
        "proyecto educativo-deportivo Inter Base League del gueto llamado Kibera (dentro de la capital de Kenia, "+
        "Nairobi)."+
        
        "<br><br>El objetivo de este proyecto es asegurarnos de que todos los <strong>menores residentes en Kibera</strong>, que puedan "+
        "estar en riesgo de exclusión social y de caer en malos hábitos de un gueto como este (drogas, delincuencia, "+
        "embarazos prematuros, etc) <strong>puedan crecer en un entorno seguro</strong> aprendiendo a no solo sobrevivir, sino "+
        "hacerlo de una manera <strong>con sentido y con una motivación de aportar valor en la comunidad</strong>. ¿Cómo "+
        "conseguimos esto?  Brindándoles una <strong>educación complementaria a través del deporte</strong>, en este caso fútbol. "+
        "Conseguimos atraerles a través del fútbol para ayudarles a crecer como mejores personas."+

        "<br><br>A través de un programa deportivo de fútbol donde los niños entrenan entre semana y juegan en sábado y " +
        "domingo, conseguimos que para ellos sea más fácil estar unidos al grupo, donde los buenos valores como la "+
        "<strong>disciplina, el respeto y el compañerismo</strong> se hacen más fuertes en su dia a dia."
        
        ,
        parrafo2:"Cinco niños recién integrados en el programa deportivo ADENSIR, después de recibir un tentempié de bienvenida mostrando su estado de ánimo y agradecimiento por ello." +
        "<br><br><span class ='texto-bold'>POTENCIACIÓN DEL PROGRAMA DEPORTIVO </span><br><br>" +
        
        "ADENSIR apuesta de inicio por <strong>crear una estructura eficiente</strong> para que este proyecto deportivo-educativo "+
        "acoja al mayor número de participantes menores de edad, centrándonos en los siguientes objetivos: <br><br>" +

        "-Reestructuramos y <strong>organizamos al equipo de voluntarios</strong> trabajando a pie de campo, formado por más de 10 personas. <br><br>" +
        "-Comenzamos a <strong>financiar todos los gastos</strong> que venían teniendo para convertir el proyecto en algo sostenible. <br><br>" +
        "-<strong>Potenciamos la promoción del nuevo proyecto</strong> entre la comunidad keniana del gueto de Kibera donde "+
        "viven aproximadamente 100.000 menores de edad en situaciones de pobreza extrema, muchos de ellos sin "+
        "ni siquiera acceso a educación reglada.<br><br>"+

        "Gracias al trabajo realizado en los primeros meses focalizados en este proyecto tenemos un número masivo "+
        "de alumnos que solicitan entrar en nuestro programa deportivo, el cual pasa de estar acogiendo 350 "+
        "participantes a acoger hasta <strong>1.500 niños y niñas</strong>, todo un reto para nosotros.",

        parrafo3: "Foto del gueto donde podemos ver las condiciones de las distintas casas, construídas con maderas, chapa y barro. <br><br>" +

        "Para dar cabida a todos ellos <strong>buscamos otras 2 instalaciones</strong> bien ubicadas estratégicamente y las "+
        "alquilamos por un año completo. También <strong>donamos buena cantidad de material necesario</strong> para el " +
        "desarrollo de las diferentes actividades deportivas (más de 20 balones de fútbol, redes para las porterias de " +
        "f7, unas 60 equipaciones para equipos que no tenían ropa, y unos 40 pares de botas para aquellos que " +
        "jugaban descalzos o con chanclas). Todas estas donaciones son transportadas en maletas personales y " +
        "varios viajes, con las dificultades que ello supone. <br><br>"+

        "ADENSIR es quien financia todo desde el principio con C.U.Zona Norte como sponsor único y oficial, aunque " +
        "<strong>nuestro principal reto en Madrid, será desde ya encontrar familias y empresas que colaboren con el " +
        "proyecto para poder mantener el ritmo de financiación y repercusión</strong> para seguir aportando valor a " +
        "tantos y tantos niños y niñas en situaciones de alto riesgo de exclusión social.<br><br>" +

        "ENTRE NOSOTROS NO EXISTEN FRONTERAS NI RAZAS, SÓLO VEMOS CHICOS Y CHICAS QUE QUIEREN " + 
        "DISFRUTAR HACIENDO DEPORTE Y QUE NO TIENEN CONOCIMIENTO SOBRE CÓMO SALIR ADELANTE…¿POR " +
        "QUÉ NO DEBERÍAMOS AYUDARLES UNA VEZ QUE SOMOS CONSCIENTES DE QUE ESTA SITUACIÓN ES REAL Y " +
        "DE QUE PERFECTAMENTE PODRÍAMOS HABER SIDO NOSOTROS MISMOS LOS QUE OCUPARAN ESE LUGAR?", 
        

        imagen: "img/foto-portada-noticia1.jpg",
        imagen2: "img/entrenador-con-alumnos.jpg",
        imagen3: "img/BGS_3291-1832.jpg",
    },
    
    { id_noticia: 2,
        titulo: " ADAPTACIÓN DEL <br>PROGRAMA DEPORTIVO <br> Y FINANCIACIÓN <br> DE BECAS ESCOLARES",
        autor:"Preparado por: Kenedy Matete",
        parrafo: "<span class ='texto-bold'> FINANCIACIÓN DE BECAS ESCOLARES </span> <br><br>"+
        " Desde el mes de Febrero de 2025, ADENSIR decide financiar con becas escolares anuales a más de 20 niños en "+
        "situaciones muy extremas (algunos huérfanos, o sin acceso a una alimentación adecuada ni a educación "+
        "reglada), financiando los gastos que derivan de ello en el colegio donde el programa deportivo se desarrolla.<br><br>"+
        "Para ello, representantes del programa, Erick Juma y Pedro (Peke) de Zona Norte, realizaron visitas "+
        "domiciliarias para evaluar las condiciones de vida de los niños y asegurarse de la situación de necesidad.<br><br>"+
        "El coste de cada beca anual es de 80€ y con ello conseguimos que estos niños cambien su vida por completo "+
        "por lo que consideramos que era una acción muy apropiada de iniciar ya que buscamos cambiar vidas a "+
        "través del deporte y sobre todo a través de la educación.<br><br>",

        imagen: "img/foto-de-niño-mirando-al-escudo.jpg",
        
    },
    { id_noticia: 3, contenido: "CONTENIDO_3." },
    { id_noticia: 4, titulo: "Titulo 4.", subtitulo: "Subtitulo 4.", parrafo: 'el infaltable Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br> <br> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
]

class Noticia{
    constructor(fecha, descripcion, id, imagen_previa, colorBarra) {
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.id = id;
        this.imagen_previa = imagen_previa;
        this.colorBarra = colorBarra;
    }
    
    render(){
        const noticiaElement = document.createElement('div');
        noticiaElement.classList.add('each-noticias');

        const imagenSrc = this.imagen_previa ? this.imagen_previa : "img/.jpg";

        noticiaElement.innerHTML = `
            <img src="${imagenSrc}" alt="Imagen de la noticia" class="imagen-previa">
            <p>${this.fecha}<p>
            <div class="barra-azul" style="background-color: ${this.colorBarra};"></div>
            <p>${this.descripcion}</p>
        `;

        // CAMBIO: Modificar el event listener para prevenir clicks después de arrastrar
        noticiaElement.addEventListener("click", (e) => {
            // Prevenir el click si acabamos de terminar un drag
            if (window.justFinishedDragging) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            this.mostrarDetalle();
        });

        return noticiaElement;
    }

    mostrarDetalle() {
        window.location.href = `noticia.html?id=${this.id}`;
    }
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
    contenedorNoticias.innerHTML = "";

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

            noticiasToRender.forEach(noticiaData => {
                const noticia = new Noticia(
                    noticiaData.fecha, 
                    noticiaData.descripcion, 
                    noticiaData.id, 
                    noticiaData.imagen_previa,
                    noticiaData.colorBarra
                );
                pageElement.appendChild(noticia.render());
            });

            contenedorNoticias.appendChild(pageElement);
        }
    } else {
        // Modo scroll libre: todas las noticias en una sola página
        const pageElement = document.createElement('div');
        pageElement.classList.add('noticias-page');
        
        noticiasData.forEach(noticiaData => {
            const noticia = new Noticia(
                noticiaData.fecha, 
                noticiaData.descripcion, 
                noticiaData.id, 
                noticiaData.imagen_previa,
                noticiaData.colorBarra
            );
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

document.addEventListener("DOMContentLoaded", () => {
    renderNoticias();
    
    setTimeout(() => {
        initializeSwipeEvents();
    }, 200);
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', () => {
        setTimeout(handleResize, 300);
    });
});