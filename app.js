document.addEventListener('DOMContentLoaded', function() {

  const articleADH = document.getElementById('ADH');
  const articleVol = document.getElementById('Vol');
  const articleTarjeta = document.getElementById('Tarjeta');
  const formContainerADH = document.getElementById('formContainerADH');
  const formContainerVol = document.getElementById('formContainerVol');
  const formContainerTarjeta = document.getElementById('formContainerTarjeta');
  const loginboxADH = document.getElementById('login-boxADH');
  const loginboxVol = document.getElementById('login-boxVol');
  const loginboxTarjeta = document.getElementById('login-boxTarjeta');

  function handleArticleADHClick(event) {
    formContainerADH.classList.add('active');
  }

  function handleArticleVolClick(event) {
    formContainerVol.classList.add('active');
  }

  function handleArticleTarjetaClick(event) {
    formContainerTarjeta.classList.add('active');
}

  function handleClickOutsideADH(event) {
    if (!loginboxADH.contains(event.target) && formContainerADH.contains(event.target)) {
      formContainerADH.classList.remove('active');
    }
  }

  function handleClickOutsideVol(event) {
    if (!loginboxVol.contains(event.target) && formContainerVol.contains(event.target)) {
      formContainerVol.classList.remove('active');
    }
  }

  function handleClickOutsideTarjeta(event) {
    if (!loginboxTarjeta.contains(event.target) && formContainerTarjeta.contains(event.target)) {
      formContainerTarjeta.classList.remove('active');
    }
  }

  formContainerADH.addEventListener('click', handleClickOutsideADH);
  formContainerVol.addEventListener('click', handleClickOutsideVol);
  formContainerTarjeta.addEventListener('click', handleClickOutsideTarjeta);

  articleADH.addEventListener('click', handleArticleADHClick);
  articleVol.addEventListener('click', handleArticleVolClick);
  articleTarjeta.addEventListener('click', handleArticleTarjetaClick);

  const tarjetaImg = document.getElementById('ImgTarjeta');

  articleTarjeta.addEventListener('mouseover', function() {
    tarjetaImg.src = 'src/tarjeta2CaraEdit.jpeg'; // Cambia a la imagen deseada
  });

  articleTarjeta.addEventListener('mouseout', function() {
    tarjetaImg.src = 'src/tarjetaEdit.jpeg'; // Vuelve a la imagen original
  });

  function handleClickUp(event) {
      event.preventDefault();
      const container = event.target.closest('.user-box');
      let input;
      if (container) {
          input = container.querySelector('input');
      }

      let imanes = false;

      if (input.id !== "cantidadADH" && input.id !== "cantidadVOL" && input.id !== "cantidadTAR") {
          if (input.value === "") {
            input.value = 1.0;
          }
          let currentValue = parseFloat(input.value);

          // currentValue += 0.5;

          const decimalPart = currentValue - Math.floor(currentValue);
          if (decimalPart !== 0 && decimalPart !== 0.5) {
            currentValue = roundToNearest(currentValue, decimalPart);
          } else {
            currentValue += 0.5;
          }
          input.value = currentValue.toFixed(1);
      } else if (input.id === "cantidadADH" && imanes) {
          if (input.value === "") {
            input.value = 0;
          }
          let currentValue = parseFloat(input.value);

          // currentValue += 0.5;

          const decimalPart = currentValue - Math.floor(currentValue);
          if (decimalPart !== 0 && decimalPart !== 0.5) {
            currentValue = roundToNearest(currentValue, decimalPart);
          } else if (!decimalPart && currentValue !== 250 && currentValue !== 500 && currentValue !== 0) {
            currentValue += 1000;
          } else if (currentValue === 250) {
            currentValue = 500;
          } else if (currentValue === 500) {
            currentValue = 1000;
          }

          if (currentValue === 0) {
            currentValue = 250;
          }

          input.value = currentValue.toFixed(1);
      } else {
          if (input.value === "") {
              input.value = 0;
          }
          let currentValue = parseFloat(input.value);

          // currentValue += 0.5;

          const decimalPart = currentValue - Math.floor(currentValue);
          if (decimalPart !== 0 && decimalPart !== 0.5) {
              currentValue = roundToNearest(currentValue, decimalPart);
          } else if (!decimalPart) {
              currentValue += 1000;
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

      let imanes = false;

      if (input.id !== "cantidadADH" && input.id !== "cantidadVOL" && input.id !== "cantidadTAR") {
        if (input.value === "") {
          input.value = 1.0;
        }
          let currentValue = parseFloat(input.value);
          
          const decimalPart = currentValue - Math.floor(currentValue);
          if (decimalPart !== 0 && decimalPart !== 0.5) {
            currentValue = roundToNearest(currentValue, decimalPart);
          } else {
            currentValue -= 0.5;
          }

          if (currentValue <= 0 || currentValue === 0.5) {
              currentValue = 1.0;
          }
          
          input.value = currentValue.toFixed(1);
      } else if (input.id === "cantidadADH" && imanes) {
        if (input.value === "") {
          input.value = 0;
        }
        let currentValue = parseFloat(input.value);

        const decimalPart = currentValue - Math.floor(currentValue);
        if (decimalPart !== 0 && decimalPart !== 0.5) {
          currentValue = roundToNearest(currentValue, decimalPart);
        } else if (!decimalPart && currentValue !== 250 && currentValue !== 500 && currentValue !== 1000) {
          currentValue -= 1000;
        } else if (currentValue === 1000) {
          currentValue = 500;
        } else if (currentValue === 500) {
          currentValue = 250;
        }

        if (currentValue <= 0) {
          currentValue = 250;
        }

        input.value = currentValue.toFixed(1);
      } else {
          if (input.value === "") {
              input.value = 0;
          }
          let currentValue = parseFloat(input.value);

          const decimalPart = currentValue - Math.floor(currentValue);
          if (decimalPart !== 0 && decimalPart !== 0.5) {
              currentValue = roundToNearest(currentValue, decimalPart);
          } else if (!decimalPart) {
              currentValue -= 1000;
          }

          if (currentValue <= 0) {
              currentValue = 1000;
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

  const CotizarADH = document.getElementById('cotizarADH');
  const CotizarVOL = document.getElementById('cotizarVol');
  const CotizarTarjeta = document.getElementById('cotizarADH');

  CotizarADH.addEventListener('click', handleCotizarADH);
  function handleCotizarADH(event){
    const ancho = parseFloat(document.getElementById('anchoADH').value);
    const alto = parseFloat(document.getElementById('alturaADH').value);
    let cantidad = parseInt(document.getElementById('cantidadADH').value);

    console.log(typeof(ancho));
    console.log(alto);

    cantidad = cantidad/1000;

    console.log(cantidad);

    if (isNaN(ancho) || isNaN(alto) || isNaN(cantidad)) {
      alert('Por favor, ingrese valores válidos para ancho, alto y cantidad.');
      return;
    }

    const areaTotal = ancho * alto * cantidad;

    console.log(areaTotal);
    let precioTabla;
    let precioTotal;

    if (areaTotal < 25) {
      precioTabla = 0;
    } else if (areaTotal >= 25 && areaTotal <= 30) {
      precioTabla = 1120;
    } else if (areaTotal >= 31 && areaTotal <= 50) {
      precioTabla = 1080;
    } else if (areaTotal >= 51 && areaTotal <= 80) {
      precioTabla = 1050;
    } else if (areaTotal >= 81 && areaTotal <= 100) {
      precioTabla = 1020;
    } else if (areaTotal >= 101 && areaTotal <= 130) {
      precioTabla = 1000;
    } else if (areaTotal >= 131 && areaTotal <= 160) {
      precioTabla = 970;
    } else if (areaTotal >= 161 && areaTotal <= 200) {
      precioTabla = 940;
    } else if (areaTotal >= 201 && areaTotal <= 230) {
      precioTabla = 930;
    } else if (areaTotal >= 231 && areaTotal <= 260) {
      precioTabla = 920;
    } else if (areaTotal >= 261 && areaTotal <= 300) {
      precioTabla = 910;
    } else if (areaTotal >= 301 && areaTotal <= 330) {
      precioTabla = 900;
    } else if (areaTotal >= 331 && areaTotal <= 360) {
      precioTabla = 890;
    } else if (areaTotal >= 361 && areaTotal <= 400) {
      precioTabla = 880;
    } else if (areaTotal >= 401 && areaTotal <= 430) {
      precioTabla = 875;
    } else if (areaTotal >= 431 && areaTotal <= 460) {
      precioTabla = 870;
    } else if (areaTotal >= 461 && areaTotal <= 500) {
      precioTabla = 865;
    } else if (areaTotal >= 501 && areaTotal <= 600) {
      precioTabla = 860;
    } else if (areaTotal >= 601 && areaTotal <= 800) {
      precioTabla = 855;
    } else if (areaTotal >= 801) {
      precioTabla = 850;
    }

    console.log(precioTabla);

    if (precioTabla === 0) {
      precioTotal = 28000;
    } else {
      precioTotal = areaTotal * precioTabla;
    }

    formContainerADH.classList.remove('active');

    const totalContainer = document.getElementById('total-container');
    const totalBlank = document.getElementById('totalBlank');

    totalContainer.classList.add('active');

    totalBlank.textContent = '$' + precioTotal;

    console.log(precioTotal); 

  }

CotizarTarjeta.addEventListener('click', handleCotizarADH);
function handleCotizarADH(event) {
    const ancho = parseFloat(document.getElementById('anchoTAR').value);
    const alto = parseFloat(document.getElementById('alturaTAR').value);
    let cantidad = parseInt(document.getElementById('cantidadTAR').value);

    console.log(typeof (ancho));
    console.log(alto);

    cantidad = cantidad / 1000;

    console.log(cantidad);

    if (isNaN(ancho) || isNaN(alto) || isNaN(cantidad)) {
        alert('Por favor, ingrese valores para la cantidad.');
        return;
    }

    const areaTotal = ancho * alto * cantidad;

    console.log(areaTotal);
    let precioTabla = 38000;
    let precioTotal;

    precioTotal = precioTabla * areaTotal;

    formContainerADH.classList.remove('active');

    const totalContainer = document.getElementById('total-container');
    const totalBlank = document.getElementById('totalBlank');

    totalContainer.classList.add('active');

    totalBlank.textContent = '$' + precioTotal;

    console.log(precioTotal);
}

    });
