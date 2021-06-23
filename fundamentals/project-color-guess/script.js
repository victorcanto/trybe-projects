const elRgbColor = document.getElementById('rgb-color');
const balls = document.querySelectorAll('.ball');
const elAnswer = document.getElementById('answer');
const elResetGame = document.getElementById('reset-game');
const elScore = document.getElementById('score');
const elballsContainer = document.querySelector('.balls-container');

function reloadPage() {
  window.location.reload();
}
elResetGame.addEventListener('click', reloadPage);

const colors = [];

function setRgbColor(rgb) {
  elRgbColor.textContent = rgb;
}

function randomColors(rgb) {
  colors.push(rgb);
  const result = colors[Math.floor(Math.random() * colors.length)];
  setRgbColor(result);
}

function createRandomRgb() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  randomColors(`(${r}, ${g}, ${b})`);
  return `rgb(${r}, ${g}, ${b})`;
}

function startColorGuess() {
  balls.forEach((ball) => {
    const b = ball;
    b.style.backgroundColor = createRandomRgb();
  });
}

function loadScore() {
  if (localStorage.getItem('score')) {
    elScore.textContent = `Placar: ${localStorage.getItem('score')}`;
  } else {
    elScore.textContent = 'Placar: 0';
  }
}

function addScore() {
  let score = Number(localStorage.getItem('score'));
  if (!score) {
    score = 0;
  }
  score += 3;
  console.log(score);
  localStorage.setItem('score', score);
  loadScore();
}

function checkAnswer({ target }) {
  const rgbColor = `rgb${elRgbColor.textContent}`;
  if (target.style.backgroundColor === rgbColor) {
    elAnswer.textContent = 'Acertou!';
    addScore();
  } else {
    elAnswer.textContent = 'Errou! Tente novamente!';
  }
  elballsContainer.style.display = 'none';
}

balls.forEach((ball) => {
  ball.addEventListener('click', checkAnswer);
});

window.onload = () => {
  startColorGuess();
  loadScore();
};
