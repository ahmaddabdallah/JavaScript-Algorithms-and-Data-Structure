/* Factorial of a Number */

/* Solution 1 */

/*
    1- Initialize a variable with value 1
    2- Loop through the numbers from 2 to n
    3- Multiply the variable by the current number in each iteration
    4- Return the final result
*/

function Factorial(n) {
  let intiValue = 1;
  for (let i = 2; i <= n; i++) {
    intiValue *= i;
  }
  return intiValue;
}

console.log(Factorial(5));