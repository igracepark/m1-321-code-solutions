/* exported drop */

function drop(array, count) {
  var dropArray = [];
  for (var i = count; i < array.length; i++) {
    dropArray.push(array[i]);
  }
  return dropArray;
}
