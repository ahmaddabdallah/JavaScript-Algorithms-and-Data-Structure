/* Recursion */

/*
    1- A function that calls itself
    2- A base case to stop the recursion
    3- A recursive case to continue the recursion
    4- The call stack is used to keep track of function calls
    5- Each recursive call creates a new execution context
    6- Memory usage increases with each recursive call
    7- Can lead to stack overflow if base case is not properly defined
    8- Often provides elegant solutions but may not be the most efficient
    9- Common in tree/graph traversal and divide-and-conquer algorithms
*/

function Recursion(n) {
  if (n <= 1) return 1;
  return n * Recursion(n - 1);
}

console.log(Recursion(5));
