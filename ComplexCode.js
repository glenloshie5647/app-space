/* 
   Filename: ComplexCode.js
   Description: A sophisticated and complex code showcasing various advanced JavaScript concepts and techniques.
*/

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Class representing a Student, extending Person
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  study() {
    console.log(`${this.name} is studying ${this.major}.`);
  }

  static compareAges(student1, student2) {
    return student1.age - student2.age;
  }
}

// Utility function to generate random integer within a range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate an array of random students
const students = [];
const majors = ['Computer Science', 'Engineering', 'Mathematics', 'Business'];

for (let i = 0; i < 10; i++) {
  const name = `Student ${i+1}`;
  const age = getRandomInt(18, 25);
  const major = majors[getRandomInt(0, majors.length - 1)];

  students.push(new Student(name, age, major));
}

// Sort students by age using the static method
students.sort(Student.compareAges);

// Printing student information
for (const student of students) {
  student.greet();
  student.study();
}

// Asynchronous function to fetch data from an API
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
  
    console.log(data);
  } catch (error) {
    console.error('An error occurred while fetching data:', error);
  }
}

// Execute the fetchData function
fetchData();
