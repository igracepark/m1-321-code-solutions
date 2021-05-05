/* exported titleCase */

function titleCase(title) {
  var joinWordsArray = [];
  var nonCapitalWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var splitWords = title.split(' ');

  for (var i = 0; i < splitWords.length; i++) {
    var capitalizeFirst = splitWords[i].charAt(0).toUpperCase() + splitWords[i].slice(1).toLowerCase();
    var dashIndex = capitalizeFirst.indexOf('-');

    if (nonCapitalWords.indexOf(capitalizeFirst.toLowerCase()) !== -1 && joinWordsArray[joinWordsArray.length - 1].indexOf(':') === -1) {
      var lowerCase = capitalizeFirst.toLowerCase();
      joinWordsArray.push(lowerCase);
    } else if (capitalizeFirst.toLowerCase() === 'api') {
      capitalizeFirst = 'API';
      joinWordsArray.push(capitalizeFirst);
    } else if (capitalizeFirst.slice(0, 10).toLowerCase() === 'javascript') {
      capitalizeFirst = 'JavaScript' + capitalizeFirst.slice(10);
      joinWordsArray.push(capitalizeFirst);
    } else if (dashIndex !== -1) {
      var dashWord = capitalizeFirst.charAt(0).toUpperCase() + capitalizeFirst.slice(1, dashIndex + 1) + capitalizeFirst.charAt([dashIndex + 1]).toUpperCase() + capitalizeFirst.slice(dashIndex + 2);
      joinWordsArray.push(dashWord);
    } else {
      joinWordsArray.push(capitalizeFirst);
    }
  }
  var joinWordsString = joinWordsArray.join(' ');
  return joinWordsString;
}
