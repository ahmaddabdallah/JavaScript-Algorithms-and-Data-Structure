// NOTE: Factorial Problem
function Factorial(n) {
    var result = 0;
    for (var i = 0; i < n; i++) {
        result *= i;
    }
    return result;
}
console.log(Factorial(5));
