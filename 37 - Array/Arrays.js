// Arrays

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Array Operations

// console.log(arr[0]); // First Element in Array
// console.log(arr[arr.length - 1]); // End Element in Array

// for (let item of arr){
//     console.log(item)
// }

// 1. Adding elements
console.log('\n--- Adding Elements ---');

// Push - adds element to the end of array - Big O(1)
arr.push(11);
console.log('After push:', arr);

// Unshift - adds element to the beginning of array - Big O (n)
arr.unshift(0);
console.log('After unshift:', arr);

// Splice - can add elements at specific position
arr.splice(6, 0, 5.5); // Insert 5.5 at index 6
console.log('After splice (insert):', arr);

// 2. Removing elements
console.log('\n--- Removing Elements ---');

// Pop - removes the last element
let lastElement = arr.pop();
console.log('Popped element:', lastElement);
console.log('After pop:', arr);

// Shift - removes the first element
let firstElement = arr.shift();
console.log('Shifted element:', firstElement);
console.log('After shift:', arr);

// Splice - can remove elements
let removedElements = arr.splice(5, 2); // Remove 2 elements starting at index 5
console.log('Removed elements:', removedElements);
console.log('After splice (remove):', arr);

// 3. Finding elements
console.log('\n--- Finding Elements ---');

// indexOf - finds the first occurrence of an element
let indexOfFour = arr.indexOf(4);
console.log('Index of 4:', indexOfFour);

// lastIndexOf - finds the last occurrence of an element
let lastIndexOfFive = arr.lastIndexOf(5);
console.log('Last index of 5:', lastIndexOfFive);

// includes - checks if an element exists in the array
let includesSeven = arr.includes(7);
console.log('Includes 7:', includesSeven);

// find - returns the first element that satisfies a condition
let foundElement = arr.find((element) => element > 8);
console.log('First element > 8:', foundElement);

// 4. Transforming arrays
console.log('\n--- Transforming Arrays ---');

// Map - creates a new array by applying a function to each element
let doubled = arr.map((element) => element * 2);
console.log('Doubled array:', doubled);

// Filter - creates a new array with elements that pass a test
let evenNumbers = arr.filter((element) => element % 2 === 0);
console.log('Even numbers:', evenNumbers);

// Reduce - reduces array to a single value
let sum = arr.reduce((total, current) => total + current, 0);
console.log('Sum of all elements:', sum);

// 5. Reordering arrays
console.log('\n--- Reordering Arrays ---');

// Sort - sorts the array (modifies original array)
let sortedArray = [...arr].sort((a, b) => a - b);
console.log('Sorted array:', sortedArray);

// Reverse - reverses the array (modifies original array)
let reversedArray = [...arr].reverse();
console.log('Reversed array:', reversedArray);

// 6. Other useful methods
console.log('\n--- Other Useful Methods ---');

// Join - converts array to string with specified separator
let joinedArray = arr.join(', ');
console.log('Joined array:', joinedArray);

// Slice - returns a portion of the array
let slicedArray = arr.slice(2, 5); // Elements from index 2 to 4
console.log('Sliced array (index 2-4):', slicedArray);

// Concat - combines arrays
let anotherArray = [100, 200];
let combinedArray = arr.concat(anotherArray);
console.log('Combined array:', combinedArray);

// Spread operator - another way to combine arrays
let spreadArray = [...arr, ...anotherArray];
console.log('Spread combined array:', spreadArray);
