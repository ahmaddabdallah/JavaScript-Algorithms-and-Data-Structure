// NOTE: Factorial Problem

function Factorial(n: number): number {
    let result = 1
    for (let i = 1; i <= n; i++) {
        result *= i
    }
    return result
}

function FactorialAlternative(n: number) {
    return n > 1 ? Factorial(n) : 1
}

console.log(Factorial(0));
console.log(Factorial(5));
console.log(FactorialAlternative(5));
