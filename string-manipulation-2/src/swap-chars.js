/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var split = string.split('');
  for (var i = 0; i < split.length; i++) {
    if (split[i] === string[firstIndex]) {
      split[i] = string.charAt(secondIndex);
    } else {
      if (split.lastIndexOf(string[secondIndex]) - [i] === 0 && split[i] === string[secondIndex]) {
        split[i] = string.charAt(firstIndex);
      }
    }
  }
  return split.join('');
}
