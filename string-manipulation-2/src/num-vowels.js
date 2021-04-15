/* exported numVowels */

function numVowels(string) {
  var vowels = 'aeiouAEIOU';
  var vowelCounter = 0;

  for (var i = 0; i < vowels.length; i++) {
    for (var x = 0; x < string.length; x++) {
      if (vowels[i] === string[x]) {
        vowelCounter++;
      }
    }
  }
  return vowelCounter;
}
