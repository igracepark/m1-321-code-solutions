/* exported invert */

function invert(source) {
  var invertObj = {};
  for (var props in source) {
    invertObj[source[props]] = props;
  }
  return invertObj;
}
