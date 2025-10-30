// app.js - Script para animaciones al hacer scroll

document.addEventListener('DOMContentLoaded', () => {

    // 1. Seleccionar todos los elementos que queremos animar
    //    Usamos la misma clase ".slide-up" que ya teníamos.
    const elementsToAnimate = document.querySelectorAll('.slide-up');

    // 2. Configurar el "Observer"
    const observerOptions = {
        root: null, // Observa en relación al viewport
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    };

    // 3. Crear la función "callback" que se ejecuta al observar
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            
            // Si el elemento está "intersectando" (visible en pantalla)
            if (entry.isIntersecting) {
                
                // Añadimos la clase ".is-visible" para activar la transición CSS
                entry.target.classList.add('is-visible');
                
                // Dejamos de observar este elemento (la animación solo ocurre una vez)
                observer.unobserve(entry.target);
            }
        });
    };

    // 4. Crear el observador
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 5. "Observar" cada uno de los elementos
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

});