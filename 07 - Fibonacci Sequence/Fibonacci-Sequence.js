/* Fibonacci Sequence */

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
console.log(Fibonacci(500));
