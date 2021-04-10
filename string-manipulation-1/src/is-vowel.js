/* exported isVowel */

function isVowel(char) {
  var vowelList = 'aeiouAEIOU';
  var isVowelResults = (vowelList.indexOf(char) !== -1);
  return isVowelResults;
}
