// NOTE: Power Of Two
function isPowerOfTwo(n) {
    return Number.isInteger(Math.log2(n));
}
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(6));
