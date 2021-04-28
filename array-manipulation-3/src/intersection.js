/* exported intersection */

function intersection(first, second) {
  var intersectArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) >= 0) {
      intersectArray.push(first[i]);
    }
  }
  return intersectArray;
}
