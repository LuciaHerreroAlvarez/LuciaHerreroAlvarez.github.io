  // Aquí va todo el código JavaScript

// ///////////////// Inicialización básica///////////////////////////////////////////////////
  document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const header = document.querySelector('header')
    
// ///////////////// Cabeceras para cada pestaña ///////////////////////////////////////////////////
    const backgrounds = {
      about: 'url(images/suculentasmarron.jpg)',   // Imagen para la pestaña "Sobre mí"
      projects: 'url(images/suculentasmarron.jpg)', // Imagen para la pestaña "Proyectos"
      skills: 'url(images/suculentasmarron.jpg)',  // Imagen para la pestaña "Habilidades"
      experience: 'url(images/suculentasmarron.jpg)' // Añadir imagen para la pestaña "Experiencia"
    };
    
// ///////////////// Botones ///////////////////////////////////////////////////
  tabButtons.forEach(button => {
    button.addEventListener('click', function(e) {  // Añadir 'e' aquí
      e.preventDefault(); // Prevenir comportamiento por defecto del enlace

      const targetId = this.getAttribute('data-target');

        // Quitar la clase 'active' de todos los botones
        tabButtons.forEach(btn => btn.classList.remove('active'));

        // Añadir la clase 'active' al botón actual
        this.classList.add('active');

        // Mostrar el contenido correspondiente
        tabContents.forEach(content => {
          if (content.id === targetId) {
            content.classList.add('active');
          } else {
            content.classList.remove('active');
          }
            });

// ///////////////// Aquí otra vez cabecera, no entiendo ///////////////////////////////////////////////////
        // Cambiar el fondo de la cabecera según la pestaña seleccionada
        header.style.backgroundImage = backgrounds[targetId];
        });
    });

    // Mostrar la primera pestaña por defecto y asignar la imagen de fondo
    if (tabContents.length > 0) {
      tabButtons[0].classList.add('active');
      tabContents[0].classList.add('active');
      header.style.backgroundImage = backgrounds['about']; // Imagen inicial
    }
    });


// ///////////////// Timeline vertical ///////////////////////////////////////////////////
 // Aquí añadimos la función para el timeline
  const timelineHeaders = document.querySelectorAll('.event-header');

  timelineHeaders.forEach(header => {
    header.addEventListener('click', function() {
      toggleDetails(this); // Llama a la función toggleDetails cuando se hace clic
    });
  });

  // Función para mostrar/ocultar los detalles del evento del timeline
  function toggleDetails(element) {
    const details = element.nextElementSibling; // Selecciona el siguiente elemento (detalles)

    if (details.style.display === "block") {
      details.style.display = "none"; // Oculta los detalles
    } else {
      details.style.display = "block"; // Muestra los detalles
    }
  }
    
  });
