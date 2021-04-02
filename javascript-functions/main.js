function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertedMinToSec = convertMinutesToSeconds(5);
console.log('convertedMinToSec:', convertedMinToSec);

function greet(name) {
  var greeting = 'Hey, ' + name + '.';
  return greeting;
}

var greetLine = greet('Beavis');
console.log('greetLine:', greetLine);

function getArea(width, height) {
  var totalArea = width * height;
  return totalArea;
}

var getTotalArea = getArea(17, 42);
console.log('getTotalArea:', getTotalArea);

function getFirstName(person) {
  return person.firstName;
}

var firstName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamprouge' });
console.log('firstName:', firstName);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  return array[lastIndex];
}

var lastElementInArrray = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('lastElementInArray:', lastElementInArrray);
