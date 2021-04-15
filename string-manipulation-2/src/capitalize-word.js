/* exported capitalizeWord */

function capitalizeWord(word) {
  var capitalWordArray = '';
  if (word.toLowerCase() === 'javascript') {
    capitalWordArray = 'JavaScript';
  } else if (word) {
    capitalWordArray = word[0].toUpperCase() + word.substring(1, word.length).toLowerCase();
  }
  return capitalWordArray;
}
