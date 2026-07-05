/* Recursive Binary Search */

/*
Recursive Binary Search Algorithm:

    1. Binary search is an efficient algorithm for finding a target value within a sorted array.
    2. In the recursive implementation, we divide the problem into smaller sub-problems.

    How it works:
    1. Define a recursive function that takes the array, target, left index, and right index.
    2. Base case: If left index > right index, return -1 (target not found).
    3. Calculate the middle index.
    4. If the middle element is the target, return its position.
    5. If the target is less than the middle element, recursively search the left half.
    6. If the target is greater than the middle element, recursively search the right half.

    Time Complexity: O(log n) - where n is the number of elements in the array
    Space Complexity: O(log n) - due to the recursive call stack
*/

function recursiveBinarySearch(array, target) {
  return search(array, target, 0, array.length - 1);
}

function search(array, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) return -1;

  let middleIndex = Math.floor((rightIndex + leftIndex) / 2);
  if (array[middleIndex] === target) return middleIndex;

  if (target < middleIndex) {
    search(array, target, leftIndex, middleIndex - 1);
  } else {
    search(array, target, middleIndex + 1, rightIndex);
  }
  return -1;
}

// Test cases for recursive binary search
console.log('Test Cases for Recursive Binary Search:');

// Test case 1: Target exists in the middle of the array
const arr1 = [1, 2, 3, 4, 5];
const target1 = 3;
console.log(
  `Test 1: Finding ${target1} in [${arr1}] - Expected: 2, Result: ${recursiveBinarySearch(
    arr1,
    target1
  )}`
);

// Test case 2: Target exists at the beginning of the array
const arr2 = [10, 20, 30, 40, 50];
const target2 = 10;
console.log(
  `Test 2: Finding ${target2} in [${arr2}] - Expected: 0, Result: ${recursiveBinarySearch(
    arr2,
    target2
  )}`
);

// Test case 3: Target exists at the end of the array
const arr3 = [11, 22, 33, 44, 55];
const target3 = 55;
console.log(
  `Test 3: Finding ${target3} in [${arr3}] - Expected: 4, Result: ${recursiveBinarySearch(
    arr3,
    target3
  )}`
);

// Test case 4: Target does not exist in the array
const arr4 = [5, 10, 15, 20, 25];
const target4 = 12;
console.log(
  `Test 4: Finding ${target4} in [${arr4}] - Expected: -1, Result: ${recursiveBinarySearch(
    arr4,
    target4
  )}`
);

// Test case 5: Empty array
const arr5 = [];
const target5 = 5;
console.log(
  `Test 5: Finding ${target5} in [${arr5}] - Expected: -1, Result: ${recursiveBinarySearch(
    arr5,
    target5
  )}`
);

// Test case 6: Array with a single element (target exists)
const arr6 = [7];
const target6 = 7;
console.log(
  `Test 6: Finding ${target6} in [${arr6}] - Expected: 0, Result: ${recursiveBinarySearch(
    arr6,
    target6
  )}`
);

// Test case 7: Array with a single element (target doesn't exist)
const arr7 = [9];
const target7 = 10;
console.log(
  `Test 7: Finding ${target7} in [${arr7}] - Expected: -1, Result: ${recursiveBinarySearch(
    arr7,
    target7
  )}`
);

// Test case 8: Larger array
const arr8 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target8 = 14;
console.log(
  `Test 8: Finding ${target8} in [${arr8}] - Expected: 6, Result: ${recursiveBinarySearch(
    arr8,
    target8
  )}`
);

// Test case 9: Duplicate elements
const arr9 = [1, 2, 2, 3, 3, 3, 4, 5];
const target9 = 3;
console.log(
  `Test 9: Finding ${target9} in [${arr9}] - Expected: 3 or 4 or 5, Result: ${recursiveBinarySearch(
    arr9,
    target9
  )}`
);

// Test case 10: Negative numbers
const arr10 = [-10, -5, 0, 5, 10];
const target10 = -5;
console.log(
  `Test 10: Finding ${target10} in [${arr10}] - Expected: 1, Result: ${recursiveBinarySearch(
    arr10,
    target10
  )}`
);
