/* exported difference */

function difference(first, second) {
  var differenceArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      differenceArray.push(first[i]);
    }
  }
  for (var x = 0; x < second.length; x++) {
    if (first.indexOf(second[x]) === -1) {
      differenceArray.push(second[x]);
    }
  }
  return differenceArray;
}
