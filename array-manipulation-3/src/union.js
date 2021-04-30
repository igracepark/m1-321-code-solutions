/* exported union */

function union(first, second) {
  var unionArray = [];
  for (var i = 0; i < first.length; i++) {
    unionArray.push(first[i]);
  }
  for (var x = 0; x < second.length; x++) {
    if (unionArray.indexOf(second[x]) === -1) {
      unionArray.push(second[x]);
    }
  }
  return unionArray;
}
