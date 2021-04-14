/* exported take */

function take(array, count) {
  var takeArray = [];

  for (var i = 0; i < count; i++) {
    takeArray.push(array[i]);
  }
  if (array.length === 0) {
    takeArray = [];
  }

  return takeArray;
}
