/* exported takeRight */

function takeRight(array, count) {
  var startIndex = array.length - count;
  var takeRightArray = [];
  for (var i = startIndex; i < array.length; i++) {
    takeRightArray.push(array[i]);
    if (array.length === 0) {
      takeRightArray = [];
    }
  }
  return takeRightArray;
}
