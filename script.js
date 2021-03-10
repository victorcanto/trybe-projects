window.onload = function start() {
  const defaultColor = document.querySelector('.black');
  defaultColor.classList.add('selected');
};
const colorsPalette = document.querySelectorAll('.color');
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
