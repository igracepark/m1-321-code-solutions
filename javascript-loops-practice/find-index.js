/* exported findIndex */

function findIndex(array, value) {
  var indexOfNum = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      indexOfNum = i;
      break;
    }
  }
  return indexOfNum;
}
