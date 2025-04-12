/* Fibonacci Sequence */

/* Solution 1 */

/*
    1- Initialize an array with the first two numbers of the Fibonacci sequence
    2- Loop through the numbers from 2 to n
    3- Add the previous two numbers in the sequence to get the next number
    4- Return the final result
*/

function Fibonacci(n) {
  const fib = [0, 1]; // O(1)
  for (let i = 2; i < n; i++) { // O(n)
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib // O(1)
}

/* Time Complexity */
// O(1) + O(n) + O(1) = O(n)

console.log(Fibonacci(2));
console.log(Fibonacci(3));
console.log(Fibonacci(10));
console.log(Fibonacci(20));
