/* Recursive Fibonacci Sequence */

/* Solution */

/*
    1- Check if number is less than 2 => return n
    2- Otherwise, return the sum of the previous two numbers in the sequence
    3- Call the function recursively with n-1 and n-2
    4- Each recursive call creates a new execution context
    5- Memory usage increases with each recursive call
    6- Can lead to stack overflow for large values of n
    7- Time complexity is O(2^n) - exponential
*/

function Recursive_Fibonacci(n) {
  if (n < 2) {
    return n; // O(1)
  }
  return Recursive_Fibonacci(n - 1) + Recursive_Fibonacci(n - 2); // O(2^n)
}

console.log(Recursive_Fibonacci(6)); // Big O: O(2^n)
console.log(Recursive_Fibonacci(0)); // 0
console.log(Recursive_Fibonacci(1)); // 1 
console.log(Recursive_Fibonacci(7)); // 13
console.log(Recursive_Fibonacci(8)); // 21

