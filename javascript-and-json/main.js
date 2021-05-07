var books = [
  {
    isbn: '978-1-59327-424-5',
    title: 'Think Like a Programmer',
    author: 'V. Anton Spraul'
  },
  {
    isbn: '0-13-235088-2',
    title: 'Clean Code',
    author: 'Robert C. Martin'
  },
  {
    isbn: '978-1-118-53164-8',
    title: 'JavaScript & jQuery',
    author: 'V. Anton Spraul'
  }
];

console.log('books array:', books);
console.log('typeof books array:', typeof books);
var booksStringify = JSON.stringify(books);
console.log('booksStringify:', booksStringify);
console.log('typeof booksStringify:', typeof booksStringify);

var student = '{"id":"12345","name":"Grace"}';
console.log('student:', student);
console.log('typeof student:', typeof student);

var studentParse = JSON.parse(student);
console.log('studentParse:', studentParse);
console.log('typeof studentParse:', typeof studentParse);
