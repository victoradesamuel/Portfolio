const Form = document.querySelector('.form');

Form.addEventListener('input', () => {
  const data = {
    name: document.querySelector('#name').value,
    email: document.querySelector('.email').value,
    message: document.querySelector('#message').value,
  };

  localStorage.setItem('FormData', JSON.stringify(data));
});

const formObject = JSON.parse(localStorage.getItem('FormData'));
document.querySelector('#name').value = formObject.name;
document.querySelector('.email').value = formObject.email;
document.querySelector('#message').value = formObject.message;