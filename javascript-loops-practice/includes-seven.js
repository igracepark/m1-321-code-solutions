/* exported includesSeven */

function includesSeven(array) {
  var yesSeven = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      yesSeven++;
    }
  }
  if (yesSeven > 0) {
    return true;
  } else {
    return false;
  }
}
