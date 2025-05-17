const noticiasData = [
    { fecha: "Diciembre 2025", descripcion: '"Llegamos a 1000 familias ayudadas en la región."', id: 1, imagen_previa:"img/pelota.png",colorBarra: "#007bff" },
    { fecha: "25 de Enero 2024", descripcion: "Inauguración del nuevo centro comunitario.", id: 2, imagen_previa:"img/pelota.png",colorBarra: "#E73246" },
    { fecha: "18 de Febrero 2025", descripcion: "Cumpleaños de dios", id:3, },
    { fecha: "25 de Marzo 2024", descripcion: "Inauguración del nuevo centro comunitario.", id: 4 },
    { fecha: "25 de Abril 2024", descripcion: "Inauguración del nuevo centro comunitario.", id: 4 },
    { fecha: "25 de Mayo 2024", descripcion: "Inauguración del nuevo centro comunitario.", id: 4 },
    { fecha: "25 de Junio 2024", descripcion: "Inauguración del nuevo centro comunitario.", id: 4 },
];

const contenidoNoticiaData= [
    { id_noticia: 1, autor:"Preparado por: Kenedy Matete", 
        parrafo: "El Programa Kibera Zona Norte está dedicado a apoyar actividades deportivas para niños en los asentamientos informales de Kibera, además de proporcionar asistencia financiera a niños vulnerables mediante becas y la adquisición de otros artículos educativos necesarios. El programa se alinea con los objetivos de la Liga Interbase, enfocándose en empoderar a los niños a través de la educación y el deporte. <br><br>Este informe destaca los logros del Programa Kibera Zona Norte durante marzo de 2025, incluyendo la entrega de becas, el apoyo a la educación superior y el exitoso lanzamiento de la Liga de Desarrollo Kibera Zona Norte." 
        
        + "<br><br><strong>Apoyo en Becas y Educación</strong><br><br>"+ 
        "En marzo el Programa Kibera Zona Norte proporcionó apoyo para el pago de matrículas escolares a ocho personas provenientes de entornos vulnerables." +
        "<br><br><strong>Becas para Educación Primaria:</strong><br><br>" +
        "Siete (7) niños de primaria recibieron becas completas que cubren sus matrículas escolares. Estos niños provienen de familias desfavorecidas en Kibera. Esto se realizó el 3 de marzo de 2025."+ 
        "<br><br><strong>Patrocinio para Educación Universitaria</strong><br><br>"+ 
        "Un (1) adulto recibió asistencia financiera para su educación universitaria. El beneficiario está actualmente cursando una carrera de electricidad, lo cual mejorará sus perspectivas de empleo. Esto también se realizó el 3 de marzo de 2025.<br><br> Como parte de nuestro compromiso con el bienestar de los beneficiarios, representantes del programa, Erick Juma y Pedro (representante de Zona Norte), realizaron visitas domiciliarias para evaluar las condiciones de vida de los niños. Esta evaluación ayudó a identificar otras áreas donde se requiere apoyo adicional."
        
        ,
        parrafo2:"<br><br><strong>Lanzamiento de la Liga de Desarrollo Kibera Zona Norte</strong><br><br>" + 
        "Un hito importante para el programa en marzo fue el lanzamiento de la Liga de Desarrollo Kibera Zona Norte, que tiene como objetivo ofrecer entrenamiento de fútbol estructurado y oportunidades competitivas para los jóvenes jugadores de Kibera. La liga se compone de cuatro categorías por edad, cada una con 20 equipos:<br><br>" +
        "- Menores de 9 años – 20 equipos<br><br>" +
        "- Menores de 11 años – 20 equipos<br><br>" +
        "- Menores de 13 años – 20 equipos<br><br>"+ 
        "- Menores de 15 años – 20 equipos<br><br>" +
        "El evento de lanzamiento contó con una impresionante participación de 768 niños de todos los grupos de edad. Esta iniciativa busca cultivar el talento joven, inculcar disciplina y ofrecer a los niños un espacio seguro para crecer y desarrollarse a través del deporte."
    
        + "<br><br><strong>Compromiso y Evaluación Comunitaria</strong><br><br>" +
        "Comprender la realidad en el terreno de nuestros beneficiarios es un aspecto clave del programa. Durante el mes de marzo, Erick Juma y Pedro visitaron los hogares de los becarios para evaluar sus condiciones de vida e identificar apoyos adicionales que pudieran necesitar. Esta iniciativa garantiza que nuestras intervenciones sean focalizadas y efectivas."
        
        +"<br><br><strong>Retos Enfrentados</strong><br><br>" +
        "A pesar del éxito del programa, se presentaron varios desafíos:<br>" +
        "- Aumento en la Demanda de Apoyo: La cantidad de niños vulnerables que necesitan becas continúa creciendo más allá de la capacidad actual del programa.<br>"+ 
        "- Recursos Limitados: El programa opera con un presupuesto ajustado, lo cual limita el nivel de apoyo que se puede brindar a los niños y la expansión de la liga.<br>" +
        "- Sostenibilidad de las Becas: Asegurar el apoyo financiero continuo para los beneficiarios sigue siendo un desafío."

        +"<br><br><strong>Planes Futuros y Recomendaciones</strong><br><br>" +
        "Para mantener y ampliar el impacto del Programa Kibera Zona Norte, proponemos lo siguiente:<br>"+ 
        "1. Ampliación del Fondo de Becas: Buscar nuevos donantes y socios que permitan apoyar a más niños necesitados.<br>"+ 
        "2. Apoyo en Equipamiento y Logística para la Liga: Conseguir fondos para material deportivo, instalaciones de entrenamiento y programas de formación de entrenadores que mejoren la efectividad de la liga.<br>" +
        "3. Iniciativas de Compromiso Comunitario: Fortalecer la colaboración con líderes locales y organizaciones para movilizar más recursos y apoyo para el programa.<br>" +
        "4. Monitoreo y Evaluación Periódicos: Establecer evaluaciones estructuradas para seguir el progreso de los beneficiarios de las becas y el desarrollo de la liga."
    
        +"<br><br><strong>Agradecimientos y Conclusión</strong><br><br>" +
        "El Programa Kibera Zona Norte extiende su más sincero agradecimiento a todos los donantes, socios y voluntarios que continúan apoyando nuestra misión.<br>"+ 
        "Sus contribuciones han hecho una diferencia significativa en la vida de los niños vulnerables de Kibra, brindándoles oportunidades para su educación y desarrollo personal." +
        "Seguimos comprometidos con la creación de un futuro más brillante para estos niños a través del deporte y la educación. Con su continuo apoyo, podemos ampliar nuestro alcance y transformar más vidas.",
        imagen: "img/foto-de-niño-mirando-al-escudo.jpg",
        imagen2: "img/entrenador-con-alumnos.jpg"
    },
    
    { id_noticia: 2, contenido: "CONTENIDO_2." },
    { id_noticia: 3, contenido: "CONTENIDO_3." },
    { id_noticia: 4, titulo: "Titulo 4.", subtitulo: "Subtitulo 4.", parrafo: 'el infaltable Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br> <br> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
]

class Noticia{
    constructor(fecha, descripcion, id,imagen_previa,colorBarra ) {
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
        <div class="barra-azul" style="background-color: ${this.colorBarra};"></div> <!-- Barra con color dinámico -->
            <p>${this.descripcion}</p>
        `;

        noticiaElement.addEventListener("click", () => this.mostrarDetalle());

        return noticiaElement;
    }

    mostrarDetalle() {
        // Redirigir a noticia.html con el ID como parámetro
        window.open(`noticia.html?id=${this.id}`, "_blank");
    }
}

// Variables para controlar la paginación
let currentPage = 0; // Página actual (índice basado en 0)
const noticiasPerPage = 3; // Cantidad de noticias por página

function renderNoticias() {
    const contenedorNoticias = document.querySelector(".all-noticias");
    contenedorNoticias.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevas noticias

    // Calcular las noticias a mostrar
    const startIndex = currentPage * noticiasPerPage;
    const endIndex = startIndex + noticiasPerPage;
    const noticiasToRender = noticiasData.slice(startIndex, endIndex);

    // Renderizar las noticias seleccionadas
    noticiasToRender.forEach(noticiaData => {
        const noticia = new Noticia(noticiaData.fecha, noticiaData.descripcion, noticiaData.id, noticiaData.imagen_previa,noticiaData.colorBarra );
        contenedorNoticias.appendChild(noticia.render());
    });

    // Renderizar los indicadores de paginación
    renderPaginationIndicators();
}

function renderPaginationIndicators() {
    const paginationContainer = document.querySelector(".pagination-indicators");
    paginationContainer.innerHTML = ""; // Limpiar los indicadores antes de renderizar nuevos

    const totalPages = Math.ceil(noticiasData.length / noticiasPerPage); // Total de páginas

    for (let i = 0; i < totalPages; i++) {
        const indicator = document.createElement("div");
        indicator.classList.add("pagination-indicator");
        if (i === currentPage) {
            indicator.classList.add("active"); // Resaltar el indicador de la página actual
        }

        // Agregar evento para cambiar de página al hacer clic en el indicador
        indicator.addEventListener("click", () => {
            currentPage = i;
            renderNoticias();
        });

        paginationContainer.appendChild(indicator);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderNoticias();
});


