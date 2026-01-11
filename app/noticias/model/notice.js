/**
 * Clase Notice - Modelo de datos para noticias
 * Representa una noticia con toda su información y contenido
 */
class Notice {
    constructor(data) {
        this.id = data.id;
        this.fecha = data.fecha;
        this.descripcion = data.descripcion;
        this.colorBarra = data.colorBarra;
        
        // Ajustar rutas de imágenes según la ubicación actual
        const currentPath = window.location.pathname;
        const isInRoot = currentPath.endsWith('index.html') || currentPath.endsWith('/') || !currentPath.includes('noticias-dinamicas');
        
        if (isInRoot) {
            // Estamos en index.html o en la raíz, usar rutas relativas simples
            this.imagenPrevia = data.imagenPrevia ? data.imagenPrevia.replace(/\.\.\/\.\.\/\.\.\/\.\.\//g, '') : '';
            this.imagen = data.imagen ? data.imagen.replace(/\.\.\/\.\.\/\.\.\/\.\.\//g, '') : '';
            this.imagenPhone = data.imagenPhone ? data.imagenPhone.replace(/\.\.\/\.\.\/\.\.\/\.\.\//g, '') : '';
            this.imagen2 = data.imagen2 ? data.imagen2.replace(/\.\.\/\.\.\/\.\.\/\.\.\//g, '') : '';
            this.imagen3 = data.imagen3 ? data.imagen3.replace(/\.\.\/\.\.\/\.\.\/\.\.\//g, '') : '';
        } else {
            // Estamos en noticia.html dentro de noticias-dinamicas, usar rutas con ../
            this.imagenPrevia = data.imagenPrevia || '';
            this.imagen = data.imagen || '';
            this.imagenPhone = data.imagenPhone || '';
            this.imagen2 = data.imagen2 || '';
            this.imagen3 = data.imagen3 || '';
        }
        
        this.titulo = data.titulo;
        this.autor = data.autor;
        this.parrafo = data.parrafo;
        this.parrafo2 = data.parrafo2 || '';
        this.parrafo3 = data.parrafo3 || '';
    }

    /**
     * Renderiza una tarjeta de noticia para la vista previa
     * @returns {HTMLElement} Elemento div con la tarjeta de noticia
     */
    render() {
        const noticiaElement = document.createElement('div');
        noticiaElement.classList.add('each-noticias');

        const imagenSrc = this.imagenPrevia || "img/default.jpg";

        noticiaElement.innerHTML = `
            <img src="${imagenSrc}" alt="Imagen de la noticia" class="imagen-previa">
            <p>${this.fecha}</p>
            <div class="barra-azul" style="background-color: ${this.colorBarra};"></div>
            <p>${this.descripcion}</p>
        `;

        noticiaElement.addEventListener("click", (e) => {
            if (window.justFinishedDragging) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            this.mostrarDetalle();
        });

        return noticiaElement;
    }

    /**
     * Redirige a la página de detalle de la noticia
     */
    mostrarDetalle() {
        // Detectar si estamos en index.html o en noticia.html
        const currentPath = window.location.pathname;
        const isInRoot = currentPath.endsWith('index.html') || currentPath.endsWith('/');
        
        if (isInRoot) {
            window.location.href = `app/noticias/components/noticias-dinamicas/noticia.html?id=${this.id}`;
        } else {
            window.location.href = `noticia.html?id=${this.id}`;
        }
    }

    /**
     * Obtiene los datos de la noticia como objeto plano
     * @returns {Object} Objeto con todos los datos de la noticia
     */
    toJSON() {
        return {
            id: this.id,
            fecha: this.fecha,
            descripcion: this.descripcion,
            colorBarra: this.colorBarra,
            imagenPrevia: this.imagenPrevia,
            titulo: this.titulo,
            autor: this.autor,
            imagen: this.imagen,
            imagenPhone: this.imagenPhone,
            imagen2: this.imagen2,
            imagen3: this.imagen3,
            parrafo: this.parrafo,
            parrafo2: this.parrafo2,
            parrafo3: this.parrafo3
        };
    }
}

// Exportar la clase para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Notice;
}
