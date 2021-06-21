const elTextInput = document.getElementById('text-input');
const elMemeText = document.getElementById('meme-text');
const elImageInput = document.getElementById('meme-insert');
const elMemeImage = document.getElementById('meme-image');

function handleChangeMemeText(e) {
  elMemeText.textContent = e.target.value;
}

elTextInput.addEventListener('input', handleChangeMemeText);

// source: https://www.horadecodar.com.br/2020/05/20/javascript-preview-de-imagem-carregada-em-input-file/
function readImage() {
  if (this.files && this.files[0]) {
      var file = new FileReader();
      file.onload = function(e) {
        elMemeImage.src = e.target.result;
      };
      file.readAsDataURL(this.files[0]);
  }
}

elImageInput.addEventListener('change', readImage, false);
