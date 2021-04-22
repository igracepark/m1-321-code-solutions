var $letters = document.querySelectorAll('span');
var $correct = document.querySelector('.correct-box');
var $incorrect = document.querySelector('.incorrect-box');
var $replayButton = document.querySelector('button');
var correct = 1;
var incorrect = 1;
var correctArray = [];

window.addEventListener('load', function (event) {
  $letters[0].className = 'activeLetter';
});

document.addEventListener('keydown', function (event) {
  if (event.key === $letters[correctArray.length].textContent) {
    correctArray.push(event.key);
    $correct.textContent = 'Correct: ' + correct++;
    $letters[correctArray.length - 1].className = 'correctLetter';
    $letters[correctArray.length].className = 'activeLetter';
  } else {
    $letters[correctArray.length].className = 'incorrectLetter';
    $incorrect.textContent = 'Incorrect: ' + incorrect++;
  }
});

$replayButton.addEventListener('click', function (event) {
  location.reload();
});
