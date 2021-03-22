const buttonLogin = document.getElementById('button-login');
const emailAndPhone = document.getElementById('user-email-phone');

function alertValueLogin() {
  const emailAndPhoneValue = emailAndPhone.value;
  alert(emailAndPhoneValue);
}
buttonLogin.addEventListener('click', alertValueLogin);

function validateForm() {
  const input = document.querySelectorAll('.right-content input');
  for (let index = 0; index < input.length; index += 1) {
    const inputsForm = input[index].value;
    if (inputsForm === '') {
      const validate = document.querySelector('.new-account-form');
      const message = document.createElement('div');
      message.innerHTML = `${input[index].name}Campos inválidos`;
      validate.appendChild(message);
    }
  }
}

const registerFacebook = document.querySelector('#facebook-register');
registerFacebook.addEventListener('click', validateForm);

function gender() {
  const genderOther = document.getElementById('other');
  const genderDiv = document.querySelector('.gender');
  genderOther.addEventListener('click', () => {
    const newInputSelected = document.querySelectorAll('.gender-other');
    for (let index = 0; index < newInputSelected.length; index += 1) {
      if (newInputSelected[index].classList.contains('gender-other')) {
        newInputSelected[index].remove();
      }
    }
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'gender-other';
    newInput.name = 'gender-custom';
    newInput.placeholder = 'Gênero';
    genderDiv.appendChild(newInput);
  });
}
gender();
