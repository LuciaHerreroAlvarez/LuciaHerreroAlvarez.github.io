   // JavaScript
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const header = document.querySelector('header');

    // Definir las imágenes de fondo para cada pestaña
    const backgrounds = {
      about: 'url(images/atardecer.jpg)',   // Imagen para la pestaña "Sobre mí"
      projects: 'url(images/suculentas.jpg)', // Imagen para la pestaña "Proyectos"
      skills: 'url(images/universo.jpg)'  // Imagen para la pestaña "Habilidades"
    };

    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
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
</script>
