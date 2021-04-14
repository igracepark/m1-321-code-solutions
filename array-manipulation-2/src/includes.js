/* exported includes */

function includes(array, value) {
  var isIncluded = false;
  for (var i = 0; i < array.length; i++) {
    if (array.indexOf(value) !== -1) {
      isIncluded = true;
    } else {
      isIncluded = false;
    }
  }
  return isIncluded;
}
