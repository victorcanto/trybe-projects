const buttonLogin = document.getElementById('button-login');
const emailAndPhone = document.getElementById('user-email-phone');


function alertValueLogin() {
  const emailAndPhoneValue = emailAndPhone.value;
  alert(emailAndPhoneValue);
}
buttonLogin.addEventListener('click', alertValueLogin);

function validateForm () {
    const input = document.querySelectorAll('.right-content input');
    for (let index = 0; index < input.length; index += 1) {
        let inputsForm = input[index].value;
        if (inputsForm === '') {
           let validate = document.querySelector('.new-account-form');
            let message = document.createElement('div');
            message.innerHTML = input[index].name + 'Campos inválidos';
            validate.appendChild(message);
        }   
    }
}
document.querySelector('#facebook-register').addEventListener('click', validateForm);

function gender() {
    const genderOther = document.querySelector('.other'); 
    genderOther.addEventListener('click', function () {
        let newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.name = 'gender-custom';
        newInput.placeholder = 'Gênero';
        document.querySelector('.gender').appendChild(newInput);
    })
}   
gender();
