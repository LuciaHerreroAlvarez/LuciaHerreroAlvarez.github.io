// Aquí va todo el código JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const header = document.querySelector('header');
    const timelineImage = document.getElementById('timeline-image'); // Obtiene la imagen del timeline

    // Definir las imágenes de fondo para cada pestaña
    const backgrounds = {
        about: 'url(images/suculentasmarron.jpg)',   
        projects: 'url(images/suculentasmarron.jpg)', 
        skills: 'url(images/suculentasmarron.jpg)',  
        experience: 'url(images/suculentasmarron.jpg)' 
    };

    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {  
            e.preventDefault(); 

            const targetId = this.getAttribute('data-target');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            tabContents.forEach(content => {
                if (content.id === targetId) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });

            header.style.backgroundImage = backgrounds[targetId];
        });
    });

    if (tabContents.length > 0) {
        tabButtons[0].classList.add('active');
        tabContents[0].classList.add('active');
        header.style.backgroundImage = backgrounds['about']; 
    }

    // Ajustar las coordenadas del mapa de imagen para que sean responsivas
    function updateMapCoords() {
        const imgWidth = timelineImage.offsetWidth;
        const imgHeight = timelineImage.offsetHeight;

        // Redefinir las coordenadas para cada área
        const areas = document.querySelectorAll('area');
        areas.forEach(area => {
            const originalCoords = area.dataset.coords.split(',').map(Number);
            const newCoords = originalCoords.map((coord, index) => {
                return index % 2 === 0 ? coord * (imgWidth / originalCoords[2]) : coord * (imgHeight / originalCoords[3]);
            });
            area.coords = newCoords.join(',');
        });
    }

    // Llama a la función al cargar la página
    updateMapCoords();

    // Llama a la función al redimensionar la ventana
    window.addEventListener('resize', updateMapCoords);

    // Aquí añadimos la función para mostrar los eventos del timeline
    function mostrarEvento(cajitaId) {
        const cajitas = document.querySelectorAll('.timeline-event-box');
        cajitas.forEach(cajita => cajita.style.display = 'none');

        const cajita = document.getElementById(cajitaId);
        if (cajita) {
            cajita.style.display = 'block';
        }
    }

    // Funcionalidad para el toggle
    const timelineHeaders = document.querySelectorAll('.event-header');
    timelineHeaders.forEach(header => {
        header.addEventListener('click', function() {
            toggleDetails(this);
        });
    });

    function toggleDetails(element) {
        const details = element.nextElementSibling;
        if (details.style.display === "block") {
            details.style.display = "none";
        } else {
            details.style.display = "block";
        }
    }
});
