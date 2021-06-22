const elForm = document.getElementById('form');
const elTextLetter = document.getElementById('carta-texto');
const elGenerateLetter = document.getElementById('carta-gerada');
const elCreateLetter = document.getElementById('criar-carta');

const msg = "Por favor, digite o conteúdo da carta.";

elForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

function createLetters() {
  const { value } = elTextLetter;
  if (value.length === 0) {
    elGenerateLetter.innerText = msg;
  } else {
    elGenerateLetter.innerText = '';
    const letter = document.createElement('span');
    letter.textContent = value;
    elGenerateLetter.appendChild(letter);
  }
}

elCreateLetter.addEventListener('click', createLetters);
