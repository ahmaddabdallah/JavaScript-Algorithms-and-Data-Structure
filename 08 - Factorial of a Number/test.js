function factorial(n) {
    if (n < 0) {
        throw new RangeError('Input must be between 0 and 12');
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));
console.log(factorial(-1));
