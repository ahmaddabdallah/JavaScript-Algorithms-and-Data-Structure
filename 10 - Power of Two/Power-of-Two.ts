// NOTE: Power Of Two

function isPowerOfTwo(n: number) {
    return Number.isInteger(Math.log2(n));
}

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(6));

function isPower(n: number) {
    return n > 0 && (n & (n - 1)) === 0;
}

console.log(isPower(2));
console.log(isPower(6));
