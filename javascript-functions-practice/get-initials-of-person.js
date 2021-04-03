/* exported getInitialsOfPerson */

function getInitialsOfPerson(person) {
  var firstInitialOfPerson = person.firstName.charAt(0);
  var lastInitialOfPerson = person.lastName.charAt(0);
  var initialsOfPersonResult = firstInitialOfPerson + lastInitialOfPerson;
  return initialsOfPersonResult;
}
