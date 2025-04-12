/* Factorial of a Number */

/* Solution 1 */

/*
    1- Initialize a variable with value 1
    2- Loop through the numbers from 2 to n
    3- Multiply the variable by the current number in each iteration
    4- Return the final result
*/

function Factorial(n) {
  let intiValue = 1; // Big O: O(1)
  for (let i = 2; i <= n; i++) {
    // Big O: O(n)
    intiValue *= i; // Big O: O(1)
  }
  return intiValue; // Big O: O(1)
}

console.log(Factorial(5)); // Big O: O(n)

/* Solution 2 */

/*
    1- Check if the number is less than or equal to 1
    2- If it is, return 1
    3- Otherwise, return the number multiplied by the factorial of the number minus 1
*/

function FactorialTwo(n) {
  return n <= 1 ? 1 : n * FactorialTwo(n - 1); // Big O: O(n)
}

console.log(FactorialTwo(0));
