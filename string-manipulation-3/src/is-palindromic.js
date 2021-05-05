/* exported isPalindromic */

function isPalindromic(string) {
  var adjustedString = string.replace(/\s/g, '');
  var reversedWord = adjustedString.split('').reverse().join('');
  if (adjustedString === reversedWord) {
    return true;
  }
  return false;
}
