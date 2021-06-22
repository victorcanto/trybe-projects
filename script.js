const elTextInput = document.getElementById('text-input');
const elMemeText = document.getElementById('meme-text');
const elImageInput = document.getElementById('meme-insert');
const elMemeImage = document.getElementById('meme-image');
const elImageContainer = document.getElementById('meme-image-container');
const elBtns = document.querySelectorAll('.border-styles button');
const elMemesReady = document.querySelectorAll('.memes-ready img');
const elForm = document.getElementById('form');

function handleChangeMemeText(e) {
  elMemeText.textContent = e.target.value;
}

elTextInput.addEventListener('input', handleChangeMemeText);

// source: https://www.horadecodar.com.br/2020/05/20/javascript-preview-de-imagem-carregada-em-input-file/
function readImage() {
  if (this.files && this.files[0]) {
    const file = new FileReader();
    file.onload = (e) => {
      elMemeImage.src = e.target.result;
    };
    file.readAsDataURL(this.files[0]);
  }
}

elImageInput.addEventListener('change', readImage, false);

function handleBtns({ target: { id } }) {
  elImageContainer.className = id;
}

elBtns.forEach((btn) => {
  btn.addEventListener('click', handleBtns);
});

function handleMemesReady(e) {
  elMemeImage.src = e.target.src;
}

elMemesReady.forEach((meme) => {
  meme.addEventListener('click', handleMemesReady);
});

function handleSubmit() {
  elForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}

window.onload = () => {
  handleSubmit();
};
