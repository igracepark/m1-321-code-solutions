/* exported isAnagram */

function isAnagram(firstString, secondString) {
  var adjustedFirstString = firstString.replace(/\s/g, '').split('').sort().join('');
  var adjustedSecString = secondString.replace(/\s/g, '').split('').sort().join('');

  if (adjustedFirstString === adjustedSecString) {
    for (var i = 0; i < adjustedFirstString.length; i++) {
      if (adjustedFirstString[i] === adjustedSecString[i]) {
        return true;
      }
    }
  }
  return false;
}
