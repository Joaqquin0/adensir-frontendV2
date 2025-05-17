/*
document.addEventListener('DOMContentLoaded', function() {
    const imgNosotros = document.querySelector('.img-nosotros');

    if (imgNosotros) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Deja de observar una vez que la animación se ha ejecutado
                }
            });
        }, {
            threshold: 0.1 // Ejecuta la animación cuando al menos el 10% de la imagen es visible
        });

        observer.observe(imgNosotros);
    }
}, { passive: true });
*/