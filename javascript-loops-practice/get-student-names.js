/* exported getStudentNames */

function getStudentNames(students) {
  var nameArray = [];
  for (var value in students) {
    nameArray.push(students[value].name);
  }
  return nameArray;
}
