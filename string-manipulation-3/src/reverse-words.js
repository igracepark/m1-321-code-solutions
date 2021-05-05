/* exported reverseWords */

function reverseWords(string) {
  var reversedArray = [];
  var splitWords = string.split(' ');
  for (var i = 0; i < splitWords.length; i++) {
    var reversedWords = splitWords[i].split('').reverse().join('');
    reversedArray.push(reversedWords);
    var reversedString = reversedArray.join(' ');
  }
  return reversedString;
}
