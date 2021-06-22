const elForm = document.getElementById('form');
const elTextLetter = document.getElementById('carta-texto');
const elGenerateLetter = document.getElementById('carta-gerada');
const elCreateLetter = document.getElementById('criar-carta');

const arrayStyles = ['newspaper', 'magazine1', 'magazine2'];
const arraySizes = ['big', 'reallybig'];
const arrayRotation = ['rotateleft', 'rotateright'];
const arraySkew = ['skewleft', 'skewright'];

elForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

function randomClasses() {
  const elLetter = document.querySelector('#carta-gerada span');

  const randomStyle = arrayStyles[Math.floor(Math.random() * arrayStyles.length)];
  const randomSize = arraySizes[Math.floor(Math.random() * arraySizes.length)];
  const randomRotation = arrayRotation[Math.floor(Math.random() * arrayRotation.length)];
  const randomSkew = arraySkew[Math.floor(Math.random() * arraySkew.length)];

  elLetter.classList.add(randomStyle, randomSize, randomRotation, randomSkew);
}

function createLetters() {
  const { value } = elTextLetter;
  if (value.length === 0) {
    elGenerateLetter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    elGenerateLetter.innerText = '';
    const letter = document.createElement('span');
    letter.textContent = value;
    letter.id = 'letter';
    elGenerateLetter.appendChild(letter);
    randomClasses();
  }
}

elCreateLetter.addEventListener('click', createLetters);
