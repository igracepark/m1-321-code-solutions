/* exported getDescriptionOfPerson */

function getDescriptionOfPerson(person) {
  var descriptionOfPersonResults = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return descriptionOfPersonResults;
}
