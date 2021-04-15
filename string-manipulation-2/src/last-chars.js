/* exported lastChars */

function lastChars(length, string) {
  var startIndex = string.length - length;
  var lastCharString = string.substring(startIndex, string.length);
  return lastCharString;
}
