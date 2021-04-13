/* exported toObject */

function toObject(keyValuePair) {
  var toObjectArray = {};
  toObjectArray[keyValuePair[0]] = keyValuePair[1];
  return toObjectArray;
}
