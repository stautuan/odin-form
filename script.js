'use strict';

const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-pw');
const form = document.querySelector('form');

function validatePassword() {
  if (password.value === confirmPassword.value) {
    confirmPassword.setCustomValidity('');
  } else {
    confirmPassword.setCustomValidity("Passwords don't match");
  }
}

// This listener triggers the validatePassword function on user input
function inputPassword(element) {
  element.addEventListener('input', validatePassword);
}
inputPassword(password);
inputPassword(confirmPassword);

form.addEventListener('submit', (e) => {
  validatePassword();
  if (!form.checkValidity()) {
    e.preventDefault();
  }
});
