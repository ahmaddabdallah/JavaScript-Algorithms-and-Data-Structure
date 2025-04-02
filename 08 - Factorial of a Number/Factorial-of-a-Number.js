/* Factorial of a Number */

function Factorial(n) {
  let intiValue = 1;
  for (let i = 2; i <= n; i++) {
    intiValue *= i;
  }
  return intiValue;
}

console.log(Factorial(5));