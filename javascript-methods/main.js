var numValueOne = 20;
var numValueTwo = 30;
var numValueThree = 50;

var maximumValue = Math.max(numValueOne, numValueTwo, numValueThree);
console.log('maximumValue:', maximumValue);

var heroes = ['Wonder woman', 'Superman', 'Captain America', 'Supergirl'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'JAVASCRIPT & JQUERY',
    author: 'Jon Duckett'
  },
  {
    title: 'HTML & CSS',
    author: 'Jon Duckett'
  },
  {
    title: 'Clean Code',
    author: 'Robert Cecil Martin'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Grace Park';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
