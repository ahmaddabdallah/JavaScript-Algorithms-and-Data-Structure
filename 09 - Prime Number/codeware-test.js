// Long Way to solve the problem
function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// My way to solve the problem

function isPrime(n) {
  if (n < 2) return false; // Big O(1)
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) return false; // Big O(n)
  }
  return true; // Big O(1)
}
