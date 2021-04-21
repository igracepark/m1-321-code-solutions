var $modalOpen = document.querySelector('.button-open-modal');
var $modalContainer = document.querySelector('.modal-container');
var $modalBackground = document.querySelector('.modal-light-bg');
var $modalClose = document.querySelector('.button-close-modal');

$modalOpen.addEventListener('click', function (event) {
  $modalContainer.className = 'modal-container ' + 'modal-show';
  $modalBackground.className = 'modal-dark-bg';
});

$modalClose.addEventListener('click', function (event) {
  $modalContainer.className = 'modal-container ' + 'modal-hide';
  $modalBackground.className = 'modal-light-bg';
});
