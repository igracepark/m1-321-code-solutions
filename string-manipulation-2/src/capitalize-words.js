/* exported capitalizeWords */

function capitalizeWords(string) {
  var splitWords = string.toLowerCase().split(' ');
  for (var i = 0; i < splitWords.length; i++) {
    splitWords[i] = splitWords[i][0].toUpperCase() + splitWords[i].substring(1);
  }
  splitWords = splitWords.join(' ');
  return splitWords;
}
