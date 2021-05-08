// Define a function named getRangeReport with two parameters, start and end. The function should return an object containing several properties holding information about the numbers between start and end.
// You can assume the following things about your parameters:
// start and end are guaranteed to be integers
// start is guaranteed to be less than or equal to end

// The returned object should have the following properties:
// total - the sum of all integers from start to end.
// odds - an array containing all of the odd integers from start to end.
// evens - an array containing all of the even integers from start to end.
// range - an array containing all integers from start to end.
// average - the average of all integers from start to end.

function getRangeReport(start, end) {
  var getRangeObject = {};
  var total = 0;
  var odds = [];
  var evens = [];
  var range = [];
  var average = 0;

  for (var i = start; i <= end; i++) {
    total += i;
    getRangeObject.total = total;
    average = total / end;
    getRangeObject.average = average;
    if (i % 2 !== 0) {
      odds.push(i);
      getRangeObject.odds = odds;
    } else {
      evens.push(i);
      getRangeObject.evens = evens;
    }
    range.push(i);
    getRangeObject.range = range;
  }
  return getRangeObject;
}

getRangeReport(1, 10);
