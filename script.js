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
validateForm();

function validateRadios() {
  const radios = document.getElementsByName('gender');
  for (let index = 0; index < radios.length; index += 1) {
    if (!radios[index].checked) {
      return false;
    }
  }
  return true;
}
validateRadios();

// source: https://rozolin.blogspot.com/2013/07/como-pegar-o-valor-do-radio-selecionado.html?m=1
function getRadioValue() {
  const radios = document.getElementsByName('gender');
  for (let index = 0; index < radios.length; index += 1) {
    if (radios[index].checked) {
      return radios[index].value;
    }
  }
  return null;
}
getRadioValue();

function checkForm() {
  const invalidFieldMessage = document.querySelectorAll('.invalid-message');
  for (let index = 0; index < invalidFieldMessage.length; index += 1) {
    if (invalidFieldMessage[index].classList.contains('invalid-message')) {
      invalidFieldMessage[index].remove();
    }
  }
  const newAccount = document.getElementById('form2');
  if (!validateForm() && !validateRadios()) {
    const emptyInputMessage = document.createElement('div');
    emptyInputMessage.innerHTML = 'Campos inválidos';
    emptyInputMessage.className = 'invalid-message';
    newAccount.appendChild(emptyInputMessage);
    return false;
  }
  return true;
}

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

function removeRightContent(e) {
  e.preventDefault();
  if (checkForm() === true) {
    const rContent = document.querySelector('.right-content');
    const form2 = document.getElementById('form2');
    const genderValue = getRadioValue();
    rContent.innerHTML = `Olá, ${form2.firstname.value} ${form2.lastname.value}
    <br>
     ${form2.phone_email.value}
     <br>
     ${form2.birthdate.value}
     <br>
     ${genderValue}`;
    return true;
  }
  return false;
}
registerBtn.addEventListener('click', removeRightContent);

window.onload = function enableFunctions() {
  addNewGender();
  removeNewGender();
};
