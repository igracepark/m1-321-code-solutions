console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'Grace',
    hand: []
  },
  {
    name: 'Susan',
    hand: []
  },
  {
    name: 'Connie',
    hand: []
  },
  {
    name: 'Jinah',
    hand: []
  }
];

var cardSuits = ['clubs', 'diamonds', 'hearts', 'spades'];
var cardValues = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
var cardDeck = [];
var winner = '';
var winningPoints = 0;
var currentPoints = 0;

for (var i = 0; i < cardSuits.length; i++) {
  for (var x = 0; x < cardValues.length; x++) {
    cardDeck.push({ value: cardValues[x], suit: cardSuits[i] });
  }
}
var shuffleDeck = _.shuffle(cardDeck);

_.forIn(players, function (value, key) {
  var twoCards = shuffleDeck.splice(0, 2);
  players[key].hand.push(twoCards);
  var playersHand = players[key].hand[0];

  for (var y = 0; y < playersHand.length; y++) {
    var cardValue = playersHand[y].value;

    if (cardValue === 'A') {
      currentPoints += 11;
    } else if (cardValue === 'J' || cardValue === 'Q' || cardValue === 'K') {
      currentPoints += 10;
    } else {
      currentPoints += cardValue;
    }
  }
  if (currentPoints > winningPoints) {
    winningPoints = currentPoints;
    currentPoints = 0;
    winner = players[key].name;
  } else if (currentPoints === winningPoints) {
    currentPoints = 0;
    winner = 'tie';
  } else {
    currentPoints = 0;
  }
});
console.log('Winning Points:', winningPoints);
console.log('winner:', winner);
