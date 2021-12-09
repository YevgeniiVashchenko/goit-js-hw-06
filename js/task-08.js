const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSbmit);
function onFormSbmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    mail,
    password,
  };

  if (mail === '' || password === '') {
    alert('All fields must be complited!');
  } else {
    formRef.reset();
    console.log(formData);
  }
}
