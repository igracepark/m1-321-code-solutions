/* exported chunk */

function chunk(array, size) {
  var chunkArray = [];
  for (var i = 0; i < array.length; i++) {
    var last = chunkArray[chunkArray.length - 1];
    if (!last || last.length === size) {
      chunkArray.push([array[i]]);
    } else {
      last.push(array[i]);
    }
  }
  return chunkArray;
}
