var student = {
  firstName: 'Grace',
  lastName: 'Park',
  age: 39
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Project Manager';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Tesla',
  model: 'Y',
  year: 2021
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Micah',
  type: 'Pommeranian'
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
