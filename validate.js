const Form = document.querySelector('.form');
const emailInput = document.querySelector('.email');
const validation = document.querySelector('.message-validation');

Form.addEventListener('submit', (event) => {
  const stringMessage = emailInput.value;
  if (/[A-Z]/.test(stringMessage)) {
    validation.innerHTML = 'Error! Your submission was unsuccessful, please input email in lowercase.';
    event.preventDefault();
  }
});