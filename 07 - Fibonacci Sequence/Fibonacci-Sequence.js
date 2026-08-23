// NOTE: Fibonacci-Sequence
function fibonacci(n) {
    var items = [0, 1];
    var result = 0;
    for (let i = 2; i < n; i++) {
        result = items[i - 1] + items[i - 2];
        items.push(result);
    }
    return items;
}
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8];
