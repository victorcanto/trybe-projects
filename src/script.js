const elTextInput = document.getElementById('text-input');
const elMemeText = document.getElementById('meme-text');

function handleChangeMemeText(e) {
   return elMemeText.textContent = e.target.value;
}

elTextInput.addEventListener('input', handleChangeMemeText);
