/*
    ----------------------------------
    --------- Objects In JS  ---------
    ----------------------------------
*/

let object = {
  name: 'John Doe',
  age: 20,
  studentId: 'ST12345',
  major: 'Computer Science',
  year: 2,
  gpa: 3.8,
  courses: ['Programming', 'Data Structures', 'Algorithms'],
  contact: {
    email: 'john.doe@university.edu',
    phone: { Num1: 101, Num2: 202 },
  },
  isEnrolled: true,
  'key-three': 'key-Three',
  SayMyName: function () {
    console.log(`Hello ${this.name}`);
  },
};


object.SayMyName() // Function that call 

// Notes Here

// console.log(object.name);
// console.log(object.age);
// console.log(object.Error_Name)
// console.log(object.key - three); // Error because not a recommended name

console.log(object['key-three']);

// Method 1: Using for...in loop
for (let key in object) {
  console.log(`${key}: ${object[key]}`);
}

console.log(object.contact.email);
console.log(`Your Num1 is : ${object.contact.phone.Num1}`);
console.log(`Your Num2 is : ${object.contact.phone.Num2}`);

// ------------------------------------------------------------

// 1. Insertion - O(1)
object.graduationYear = 2023;
console.log('After insertion:', object.graduationYear);

// 2. Removal - O(1)
delete object.graduationYear;
console.log(
  'After deletion, graduationYear exists:',
  'graduationYear' in object
);

// 3. Access - O(1)
const studentName = object.name;
console.log('Access:', studentName);

// 4. Searching (key existence) - O(1)
const hasAge = 'age' in object;
console.log('Age exists in the object:', hasAge);

// 5. Get all keys - O(n)
const allKeys = Object.keys(object);
console.log('All keys:', allKeys);

// 6. Get all values - O(n)
const allValues = Object.values(object);
console.log('All values:', allValues);

// 7. Get all key-value pairs - O(n)
const allEntries = Object.entries(object);
console.log('All entries:', allEntries);