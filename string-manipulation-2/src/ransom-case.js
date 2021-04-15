/* exported ransomCase */

function ransomCase(string) {
  var ransomCaseString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      ransomCaseString += string.charAt(i).toUpperCase();
    } else {
      ransomCaseString += string.charAt(i).toLowerCase();
    }
  }
  return ransomCaseString;
}
