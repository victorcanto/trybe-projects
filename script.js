window.onload = function start() {
  const defaultColor = document.querySelector('.black');
  defaultColor.classList.add('selected');
};
const colorsPalette = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');

// Resolvi o problema usando essa ref: https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
function selectColor() {
  colorsPalette.forEach((color) => {
    color.addEventListener('click', (_event) => {
      for (let index = 0; index < colorsPalette.length; index += 1) {
        colorsPalette[index].classList.remove('selected');
      }
      color.classList.add('selected');
    });
  });
}
selectColor();
function changePixelColor() {
  pixels.forEach((pixel) => {
    pixel.addEventListener('click', (event) => {
      for (let index = 0; index < colorsPalette.length; index += 1) {
        if (colorsPalette[1].classList.contains('selected')) {
          event.target.style.backgroundColor = 'red';
        } else if (colorsPalette[2].classList.contains('selected')) {
          event.target.style.backgroundColor = 'yellow';
        } else if (colorsPalette[3].classList.contains('selected')) {
          event.target.style.backgroundColor = 'green';
        } else {
          event.target.style.backgroundColor = 'black';
        }
      }
    });
  });
}
changePixelColor();
function clearBoard() {
  const clearBtn = document.getElementById('clear-board');
  clearBtn.addEventListener('click', (_event) => {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
      colorsPalette.forEach((color) => {
        if (color.classList.contains('selected')) {
          color.classList.remove('selected');
        }
      });
    }
    colorsPalette[0].classList.add('selected');
  });
}
clearBoard();
