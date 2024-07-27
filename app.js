document.addEventListener('DOMContentLoaded', function() {

  const articles = document.querySelectorAll('article');
  const formContainer = document.getElementById('formContainer');

  function handleArticleClick(event) {
      formContainer.classList.add('active');
  }

  function handleClickOutside(event) {
    if (formContainer.contains(event.target)) {
      formContainer.classList.remove('active');
    }
  }

  formContainer.addEventListener('click', handleClickOutside);

  articles.forEach(article => {
      article.addEventListener('click', handleArticleClick);  
  });

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
        return Math.floor(value);
    } else if (decimal > 0.75) {
        return Math.ceil(value);
    } else if (decimal > 0.25 && decimal < 0.5) {
        return Math.floor(value) + 0.5;
    } else if (decimal < 0.75 && decimal > 0.5) {
        return Math.ceil(value) - 0.5;
  }
}

  const upButtons = document.querySelectorAll('.up');
  const downButtons = document.querySelectorAll('.down');

  upButtons.forEach(function(button) {
      button.addEventListener('click', handleClickUp);
  });

  downButtons.forEach(function(button) {
      button.addEventListener('click', handleClickDown);
  });
});
