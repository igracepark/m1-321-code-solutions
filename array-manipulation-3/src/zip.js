/* exported zip */

function zip(first, second) {
  var zipArray = [];
  var shorterArray = '';

  if (first.length > second.length) {
    shorterArray = second.length;
  } else {
    shorterArray = first.length;
  }
  for (var i = 0; i < shorterArray; i++) {
    zipArray.push([first[i], second[i]]);
  }
  return zipArray;
}
