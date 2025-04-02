/* Power of Two */

/* Solution */

/*
    1- Check if number is less than 1 => return false
    2- Loop through the number while n > 1
    3- Check if number is odd => return false
    4- Divide number by 2
    5- return true
*/

/* Time Complexity: O(log n) */

function powerOfTwo(n) {
  if (n < 1) return false; // Big-O(1)
  while (n > 1) {
    // Big-O(log2 n)
    if (n % 2 !== 0) {
      return false; // Big-O(1)
    }
    n = n / 2; // Big-O(1)
  }
  return true;
}

console.log(powerOfTwo(15)); // false
console.log(powerOfTwo(1025)); // false
console.log(powerOfTwo(2024)); // true
console.log(powerOfTwo(4096)); // true
console.log(powerOfTwo(333)); // false

// ------------------------------

/* Solution 2 */

function PowerOfTwoBitWise(n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0; // Very Important QA
}

// Test Cases
console.log(PowerOfTwoBitWise(1)); // true
console.log(PowerOfTwoBitWise(2)); // true
console.log(PowerOfTwoBitWise(5)); // false
console.log(PowerOfTwoBitWise(16)); // true

// how to do this website responsive