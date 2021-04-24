var $userName = document.querySelector('#user-name');
var $userEmail = document.querySelector('#user-email');
var $userMessage = document.querySelector('#user-message');

function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name:', event.target.name);
  console.log('event.target.value:', event.target.value);
}

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('input', handleInput);
$userName.addEventListener('blur', handleBlur);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('input', handleInput);
$userEmail.addEventListener('blur', handleBlur);

$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('input', handleInput);
$userMessage.addEventListener('blur', handleBlur);
