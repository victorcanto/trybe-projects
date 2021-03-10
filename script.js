window.onload = function start() {
  const defaultColor = document.querySelector('.black');
  defaultColor.classList.add('selected');
};
const colorsPalette = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');
// const arrColors = ['black', 'red', 'yellow', 'green'];
// Resolvi o problema usando essa ref: https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
function selectColor() {
  colorsPalette.forEach((color) => {
    color.addEventListener('click', (_event) => {
      colorsPalette[0].classList.remove('selected');
      colorsPalette[1].classList.remove('selected');
      colorsPalette[2].classList.remove('selected');
      colorsPalette[3].classList.remove('selected');
      color.classList.add('selected');
    });
  });
}
selectColor();

// function changePixelColor() {
//   pixels.forEach((pixel) => {
//     pixel.addEventListener('click', (_event) => {
//       pixel.style.backgroundColor = 'black';
//     });
//   });
// }
// changePixelColor();

function clearBoard() {
  const clearBtn = document.getElementById('clear-board');
  clearBtn.addEventListener('click', (_event) => {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}
clearBoard();
