/* exported omit */

function omit(source, keys) {
  var omitObj = {};
  for (var i = 0; i < keys.length; i++) {
    for (var prop in source) {
      if (keys.indexOf(prop) === -1) {
        omitObj[prop] = source[prop];
      }
    }
  }
  return omitObj;
}
