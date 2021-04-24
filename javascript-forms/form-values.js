var $form = document.querySelector('#contact-form');

$form.addEventListener('submit', function (event) {
  event.preventDefault();

  var formElements = document.getElementById('contact-form').elements;

  var formValues = {
    name: formElements.name.value,
    email: formElements.email.value,
    message: formElements.message.value
  };

  console.log('formValues:', formValues);

});
