/* exported dropRight */

function dropRight(array, count) {
  var dropRightArray = [];
  var dropIndex = array.length - count;
  for (var i = 0; i < dropIndex; i++) {
    dropRightArray.push(array[i]);
  }
  return dropRightArray;
}
