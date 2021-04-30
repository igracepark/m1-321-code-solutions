/* exported flatten */

function flatten(array) {
  var flattenArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      flattenArray.push(array[i]);
    }
    for (var x = 0; x < array[i].length; x++) {
      flattenArray.push(array[i][x]);
    }
  }
  return flattenArray;
}
