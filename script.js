const buttonLogin = document.getElementById('button-login');
const emailAndPhone = document.getElementById('user-email-phone');

function alertValueLogin() {
  const emailAndPhoneValue = emailAndPhone.value;
  alert(emailAndPhoneValue);
}
buttonLogin.addEventListener('click', alertValueLogin);
