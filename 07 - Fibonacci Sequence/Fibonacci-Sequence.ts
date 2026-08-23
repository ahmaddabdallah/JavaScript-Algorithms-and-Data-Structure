// NOTE: Fibonacci-Sequence

function fibonacci(n: number) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    let items: number[] = [0, 1]
    let result: number = 0

    for (let i = 2; i < n; i++) {
        result = items[i - 1] + items[i - 2]
        items.push(result)
    }

    return items
}

// NOTE: Another Answer

function fibonacciAlternative(n: number): number[] {
    const items: number[] = [0, 1];

    for (let i = 2; i < n; i++) {
        items[i] = items[i - 1] + items[i - 2];
    }

    return items;
}

console.log(fibonacci(3))
console.log(fibonacci(7))

console.log(fibonacciAlternative(3))
console.log(fibonacciAlternative(7))
