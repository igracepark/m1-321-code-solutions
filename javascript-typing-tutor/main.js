var $letters = document.querySelectorAll('span');
var $correct = document.querySelector('.correct-box');
var $incorrect = document.querySelector('.incorrect-box');
var $replayButton = document.querySelector('button');
var correct = 1;
var incorrect = 1;
var correctArray = [];

function firstLetter(event) {
  $letters[0].className = 'activeLetter';
}

function checkLetter(event) {
  if (event.key === $letters[correctArray.length].textContent) {
    correctArray.push(event.key);
    $correct.textContent = 'Correct: ' + correct++;
    $letters[correctArray.length - 1].className = 'correctLetter';
    $letters[correctArray.length].className = 'activeLetter';
  } else {
    $letters[correctArray.length].className = 'incorrectLetter';
    $incorrect.textContent = 'Incorrect: ' + incorrect++;
  }
}

$replayButton.addEventListener('mousedown', function (event) {
  for (var i = 0; i < $letters.length; i++) {
    $letters[i].className = 'defaultLetter';
  }
  correct = 1;
  incorrect = 1;
  correctArray = [];
  $correct.textContent = 'Correct: 0';
  $incorrect.textContent = 'Incorrect: 0';
  firstLetter();
});

window.addEventListener('load', firstLetter);
document.addEventListener('keydown', checkLetter);
