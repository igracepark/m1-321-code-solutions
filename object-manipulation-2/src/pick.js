/* exported pick */

function pick(source, key) {
  var pickObj = {};
  for (var i = 0; i < key.length; i++) {
    for (var prop in source) {
      if (key[i] && source[key[i]] !== undefined && key[i] === prop) {
        pickObj[key[i]] = source[key[i]];
      }
    }
  }
  return pickObj;
}
