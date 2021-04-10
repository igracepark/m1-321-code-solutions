/* exported reverse */

function reverse(array) {
  var reverseArray = [];
  var lastIndex = array.length - 1;
  for (var i = lastIndex; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}
