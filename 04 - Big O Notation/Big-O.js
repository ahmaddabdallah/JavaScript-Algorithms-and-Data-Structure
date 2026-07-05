/* JavaScript Algorithms - 4 - Big-O Notation */
// Big O Notation is a way to describe the performance of an algorithm
// Time Complicity : It is a way to describe the time complexity of an algorithm
// Space Complicity : It is a way to describe the space complexity of an algorithm

function sumNum(n) {
  let total = 0; // O(1)
  for (let i = 0; i <= n; i++) {
    // O(n)
    total += i;
  }
  return total; // O(1)
}

// O(1) + O(n) = O(n)

console.log(sumNum(5));

function sumNumbers(n) {
  return (n * (n + 1)) / 2; // Big O: O(1)
}

console.log(sumNumbers(5));

// O(1)

// O(1) is better than O(n)

// O(n) is better than O(n^2)
