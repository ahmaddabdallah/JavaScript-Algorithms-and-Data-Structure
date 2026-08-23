"use strict";
// Arrays and Objects with TypeScript - O(1) and O(n) Operations
// O(1): Property access, insertion, deletion
// No loops - computer goes directly to the property
// 1. Access - O(1)
const user = {
    firstName: 'Ahmad',
    lastName: 'Abdallah',
    age: 30
};
console.log(user.firstName); // O(1)
// 2. Insertion - O(1)
user.hobbies = ['Coding', 'Reading']; // O(1)
console.log('After insert:', user);
// 3. Deletion - O(1)
delete user.age; // O(1)
console.log('After delete:', user);
// O(n): Search by value, Object.keys(), Object.values(), Object.entries()
// These must loop through all properties
// 4. Search for a value - O(n)
function findValue(obj, target) {
    return Object.values(obj).includes(target);
}
console.log('Find Ahmad:', findValue(user, 'Ahmad')); // O(n)
// 5. Object.keys() - O(n)
const keys = Object.keys(user);
console.log('Keys:', keys); // O(n)
// 6. Object.values() - O(n)
const values = Object.values(user);
console.log('Values:', values); // O(n)
// 7. Object.entries() - O(n)
const entries = Object.entries(user);
console.log('Entries:', entries); // O(n)
console.log('------------------- Arrays -------------------');
// ===== ARRAYS =====
let numbers = [10, 20, 30, 40, 50];
// O(1): Access by index, push, pop
// 8. Access by index - O(1)
console.log('numbers[0]:', numbers[0]); // O(1)
// 9. Push (add to end) - O(1)
numbers.push(60); // O(1)
// 10. Pop (remove from end) - O(1)
const last = numbers.pop(); // O(1)
// O(n): unshift, shift, search, slice, splice, map, filter, reduce
// These shift indices or loop through elements
// 11. Unshift (add to beginning) - O(n)
numbers.unshift(5); // O(n) - all elements shift right
// 12. Shift (remove from beginning) - O(n)
numbers.shift(); // O(n) - all elements shift left
// 13. indexOf - O(n)
const idx = numbers.indexOf(30);
console.log('indexOf 30:', idx); // O(n)
// 14. includes - O(n)
const has = numbers.includes(30);
console.log('includes 30:', has); // O(n)
// 15. slice - O(n)
const part = numbers.slice(1, 4); // O(n)
// 16. splice - O(n)
numbers.splice(0, 2, 1, 2); // O(n)
// 17. map, filter, reduce - O(n)
const doubled = numbers.map(n => n * 2); // O(n)
const bigNums = numbers.filter(n => n > 10); // O(n)
const sum = numbers.reduce((s, n) => s + n, 0); // O(n)
console.log('Final array:', numbers);
// Summary
// O(1): property access, insert, delete | index access, push, pop
// O(n): value search, Object.keys/values/entries | unshift, shift,
//       indexOf, includes, slice, splice, map, filter, reduce
