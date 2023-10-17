// Challenge 1.1:
// Step 1: Create an object for storing your profile information. The object name can be "studentProfile". below are the keys which are to be added to the object, please add your values for the same:
// studentName,
// studentAge,
// cohortName,
// location,
//hobbies.

// Step 2: Add more then one hobby in the student object.
//Hint: Use Arrays

// Your code goes here
var studentProfile = {
  studentName: 'Pranava',
  studentAge: '18',
  cohortName: 'Lions',
  location: 'Mayiladuthurai',
  hobbies: ['Cricket', 'Watching Anime', 'Reading Newspaper.'],
};
console.log(studentProfile);
// Challenge 1.2: Access the studentName value of the object "studentProfile" using dot "." notation and print the same in console.
console.log(studentProfile.studentName);
//Challenge 1.3: Access the cohortName property of the object using Bracket notation ([]).
console.log(studentProfile['cohortName']);
//Challenge 2.1:Create an object using the constructor function for storing the book information. The object name can be "Book". Include the following values .
//title
//author
function Book(title, author) {
  this.title = 'The life of Yogi';
  this.author = 'Paramahansa Yogananda';
}
var yogi1 = new Book();
//Challenge 2.2: Access the title property of the object "Book" and print the same in console.
console.log(Book);
