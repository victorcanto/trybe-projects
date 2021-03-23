const loginBtn = document.getElementById('button-login');
const emailAndPhone = document.getElementById('user-email-phone');
const registerBtn = document.getElementById('facebook-register');

function alertValueLogin() {
  const emailAndPhoneValue = emailAndPhone.value;
  alert(emailAndPhoneValue);
}
loginBtn.addEventListener('click', alertValueLogin);

function validateForm() {
  const entries = document.querySelectorAll('.right-content input');
  for (let index = 0; index < entries.length; index += 1) {
    const formEntries = entries[index].value;
    if (formEntries.length === 0) {
      return false;
    }
  }
  return true;
}

function validateRadios() {
  const radios = document.getElementsByName('gender');
  for (let index = 0; index < radios.length; index += 1) {
    if (!radios[index].checked) {
      return false;
    }
  }
  return true;
}

function checkForm(e) {
  e.preventDefault();
  const invalidFieldMessage = document.querySelectorAll('.invalid-message');
  for (let index = 0; index < invalidFieldMessage.length; index += 1) {
    if (invalidFieldMessage[index].classList.contains('invalid-message')) {
      invalidFieldMessage[index].remove();
    }
  }
  const newAccount = document.querySelector('.new-account-form');
  if (!validateForm() && !validateRadios()) {
    const emptyInputMessage = document.createElement('div');
    emptyInputMessage.innerHTML = 'Campos inválidos';
    emptyInputMessage.className = 'invalid-message';
    newAccount.appendChild(emptyInputMessage);
  }
}
registerBtn.addEventListener('click', checkForm);

function addNewGender() {
  const genderDiv = document.querySelector('.gender');
  const newGenderSelected = document.querySelectorAll('.gender-other');
  for (let index = 0; index < newGenderSelected.length; index += 1) {
    newGenderSelected[index].remove();
  }
  const newGender = document.createElement('input');
  newGender.type = 'text';
  newGender.className = 'gender-other';
  newGender.name = 'gender-custom';
  newGender.placeholder = 'Gênero';
  genderDiv.appendChild(newGender);
}

function removeNewGender() {
  const inputOther = document.querySelectorAll('.gender-other');
  for (let index = 0; index < inputOther.length; index += 1) {
    if (inputOther[index].classList.contains('gender-other')) {
      inputOther[index].remove();
    }
  }
}

window.onload = function enableFunctions() {
  addNewGender();
  removeNewGender();
};
