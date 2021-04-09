/* exported oddOrEven */

function oddOrEven(array) {
  var oddOrEvenResults = [];
  for (var i = 0; i < array.length; i++) {
    var isOddOrEven = (array[i] % 2 === 0) ? 'even' : 'odd';
    oddOrEvenResults.push(isOddOrEven);
  }
  return oddOrEvenResults;
}
