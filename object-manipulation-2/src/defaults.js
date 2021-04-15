/* exported defaults */

function defaults(target, source) {
  for (var prop in source) {
    if (prop in target === false) {
      target[prop] = source[prop];
    }
  }
}
