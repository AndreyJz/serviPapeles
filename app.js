document.addEventListener('DOMContentLoaded', function() {

  const articles = document.querySelectorAll('article');
  const formContainer = document.getElementById('formContainer');

  // Función para manejar clic en un article
  function handleArticleClick(event) {
      // Mostrar el formulario completo
      formContainer.style.display = 'block';
  }

  // Agregar event listener a cada article
  articles.forEach(article => {
      article.addEventListener('click', handleArticleClick);
  });

  // Función para manejar clic en botones de flecha hacia arriba
  function handleClickUp(event) {
      event.preventDefault();
      const container = event.target.closest('.user-box');
      let input;
      if (container) {
          input = container.querySelector('input');
      }
      if (input.value === "") {
        input.value = 0.5;
      }
      if (input) {
          let currentValue = parseFloat(input.value);

          // currentValue += 0.5;

          const decimalPart = currentValue - Math.floor(currentValue);
          if (decimalPart !== 0 && decimalPart !== 0.5) {
            currentValue = roundToNearest(currentValue, decimalPart);
          } else {
            currentValue += 0.5;
          }
          input.value = currentValue.toFixed(1);
          

      }
  }

  // Función para manejar clic en botones de flecha hacia abajo
  function handleClickDown(event) {
      event.preventDefault();
      const container = event.target.closest('.user-box');
      let input;
      if (container) {
          input = container.querySelector('input');
      }
      if (input) {
        if (input.value === "") {
          input.value = 0.0;
        }
          let currentValue = parseFloat(input.value);
          
          const decimalPart = currentValue - Math.floor(currentValue);
          if (decimalPart !== 0 && decimalPart !== 0.5) {
            currentValue = roundToNearest(currentValue, decimalPart);
          } else {
            currentValue -= 0.5;
          }

          if (currentValue <= 0) {
              currentValue = 0;
          }
          
          input.value = currentValue.toFixed(1);
      }
  }

  function roundToNearest(value, decimal) {
    const rounded = Math.round(value);

    if (decimal < 0.25) {
        return Math.floor(value); // Redondea hacia abajo si la parte decimal es menor que 0.25
    } else if (decimal > 0.75) {
        return Math.ceil(value); // Redondea hacia arriba si la parte decimal es mayor que 0.75
    } else if (decimal > 0.25 && decimal < 0.5) {
        return Math.floor(value) + 0.5; // Redondea al entero más cercano si está entre 0.25 y 0.75
    } else if (decimal < 0.75 && decimal > 0.5) {
        return Math.ceil(value) - 0.5; // Redondea al entero más cercano si está entre 0.25 y 0.75
  }
}

  // Obtener todos los botones de clase 'up' y 'down'
  const upButtons = document.querySelectorAll('.up');
  const downButtons = document.querySelectorAll('.down');

  // Agregar event listener a cada botón de flecha hacia arriba
  upButtons.forEach(function(button) {
      button.addEventListener('click', handleClickUp);
  });

  // Agregar event listener a cada botón de flecha hacia abajo
  downButtons.forEach(function(button) {
      button.addEventListener('click', handleClickDown);
  });
});
