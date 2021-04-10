/* exported compact */

function compact(array) {
  var compactArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!array[i] === !true) {
      compactArray.push(array[i]);
    }
  }
  return compactArray;
}
