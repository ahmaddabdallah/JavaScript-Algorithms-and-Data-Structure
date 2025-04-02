/* Prime Number */

// My old Way ==> is not a true and is big (not recommended)

/*
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % 2 === 0) {
      return false;
    }
    else if (n === 2 || n % 2 !== 0) {
        return true
    }
  }
}
*/

/* Solution */

/*
    1- Check if number is less than or equal 2 => return false
    2- loop through the numbers
    3- Check if the number is even or odd
    4- If Event(not prime) return false
    5- return true
*/

function isPrime(n) {
  if (n < 2) return false; // Big O(1)  
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false; // Big O(n)
  }
  return true; // Big O(1)
}

// Test Cases
console.log(isPrime(1)); // False
console.log(isPrime(5)); // True
console.log(isPrime(4)); // False
console.log(isPrime(2)); // True
console.log(isPrime(-1)); // False

// Big O(n)