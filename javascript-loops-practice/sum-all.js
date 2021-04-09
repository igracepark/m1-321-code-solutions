/* exported sumAll */

function sumAll(numbers) {
  var currentTotal = 0;
  for (var i = 0; i < numbers.length; i++) {
    currentTotal += numbers[i];
  }
  return currentTotal;
}
