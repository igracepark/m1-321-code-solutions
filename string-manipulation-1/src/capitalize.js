/* exported capitalize */

function capitalize(word) {
  var capitalWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return capitalWord;
}
