var lightIsOn = 'on';
var $lightBulb = document.querySelector('.circle');
var $lightBulbContainer = document.querySelector('.container');

$lightBulb.addEventListener('click', function (event) {
  var lightBulbState;

  if (lightIsOn === 'on') {
    lightBulbState = 'dark';
    $lightBulbContainer.className = 'container ' + 'dark-container';
    lightIsOn = 'off';

  } else {
    lightBulbState = 'light';
    $lightBulbContainer.className = 'container';
    lightIsOn = 'on';
  }

  $lightBulb.className = 'circle ' + lightBulbState;
});
