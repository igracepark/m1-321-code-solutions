/* exported filterOutStrings */

function filterOutStrings(values) {
  var filterOutStringsResults = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      filterOutStringsResults.push(values[i]);
    }
  }
  return filterOutStringsResults;
}
