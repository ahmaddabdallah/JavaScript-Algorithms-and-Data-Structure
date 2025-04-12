/* Recursive Factorial of a Number */

/* Solution */

/*
    Problem: Write a recursive function that calculates the factorial of a given number n.

    The factorial of a number n (written as n!) is the product of all positive 
    integers less than or equal to n.

    For example:
        5! = 5 * 4 * 3 * 2 * 1 = 120
    
    Rules:
        - If n is 0 or 1, factorial is 1

    Sample Input/Output:
    factorial(0) => 1
    factorial(1) => 1  
    factorial(5) => 120
    factorial(7) => 5040
*/

// Old way to solve the problem

function oldFactorial(n) {
  let initValue = 1; // Big O(1)
  for (let i = 2; i <= n; i++) {
    // Big O(n)
    initValue *= i;
  }
  return initValue;
}

console.log(oldFactorial(5)); // Big O(n)

// -----------------------------------------------------------

// New way to solve the problem Recursive Factorial of a Number
function recursiveFactorial(n) {
  // O(n)
  return n <= 1 ? 1 : n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(4));
console.log(recursiveFactorial(-10));
console.log(recursiveFactorial(10));