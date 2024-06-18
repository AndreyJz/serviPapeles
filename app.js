const upButton = document.getElementById('up');
const downButton = document.getElementById('down');
const alturaInput = document.getElementById('altura');
const anchoInput = document.getElementById('ancho');
const cantidadInput = document.getElementById('cantidad');

document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones de clase 'up-button'
    const upButtons = document.querySelectorAll('.up');
  
    // Función para manejar clic en botones de flecha hacia arriba
    function handleClickUp(event) {
      // Obtener el contenedor padre del botón clickeado
      const container = event.target.closest('.user-box');
  
      // Identificar el campo de entrada dentro del contenedor
      let input;
      if (container) {
        input = container.querySelector('input');
      }
  
      if (input) {
        // Obtener el valor actual del input y convertirlo a número
        let currentValue = parseFloat(input.value);
  
        // Sumar 0.5 al valor actual
        currentValue += 0.5;
  
        // Actualizar el valor del input
        input.value = currentValue.toFixed(1); // Para mostrar solo un decimal
      }
    }
  
    // Agregar event listener a cada botón de flecha hacia arriba
    upButtons.forEach(function(button) {
      button.addEventListener('click', handleClickUp);
    });
  });