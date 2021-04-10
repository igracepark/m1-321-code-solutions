/* exported initial */

function initial(array) {
  var lastIndex = array.length - 1;
  var initialArray = [];
  for (var i = 0; i < lastIndex; i++) {
    initialArray.push(array[i]);
  }
  return initialArray;
}
