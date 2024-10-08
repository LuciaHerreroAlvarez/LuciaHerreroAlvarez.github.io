  // Aquí va todo el código JavaScript

// ///////////////// Inicialización básica///////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {

  // Seleccionar botones de las pestañas y el contenido de las pestañas
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const header = document.querySelector('header');
    
    
// ///////////////// Configuracion de pestañas ///////////////////////////////////////////////////
  // Función para manejar el clic en los botones de las pestañas
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
    });
});

    // Mostrar la primera pestaña por defecto
    if (tabContents.length > 0) {
      tabButtons[0].classList.add('active');
      tabContents[0].classList.add('active');
      header.style.backgroundImage = 'url(images/suculentasmarron.jpg)'; // Imagen inicial
    }


// ///////////////// Timeline vertical ///////////////////////////////////////////////////
 // Seleccionar cabeceras del timeline
  const timelineHeaders = document.querySelectorAll('.event-header');

// Añadir funcionalidad de clic en las cabeceras del timeline
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
