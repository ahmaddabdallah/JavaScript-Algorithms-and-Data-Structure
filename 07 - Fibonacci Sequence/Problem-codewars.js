// NOTE: Fibonacci-Sequence
// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. That is, the sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.
// TODO: Url --> https://www.codewars.com/kata/553e6558e848c5a3180000bc/train/javascript

const fib = (steps) => {
    let fibNum = [0, 1];
    for (let i = 2; i < steps + 1; i++) {
        fibNum[i] = fibNum[i - 1] + fibNum[i - 2];
    }
    return fibNum[steps] ? fibNum[steps] : 0;
}

console.log(fib(0));
console.log(fib(4));
console.log(fib(7));
console.log(fib(17));
