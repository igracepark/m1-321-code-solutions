/* exported reverseWord */

function reverseWord(word) {
  var reversed = '';
  var lastIndex = word.length - 1;
  for (var i = lastIndex; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}
