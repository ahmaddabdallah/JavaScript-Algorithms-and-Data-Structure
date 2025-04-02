/* JavaScript Algorithms - 4 - Big-O Notation */
// Big O Notation is a way to describe the performance of an algorithm
// It is a way to describe the time complexity of an algorithm
// It is a way to describe the space complexity of an algorithm

function sumNum(n){
    let total = 0; // O(1)
    for(let i = 0; i <= n; i++){ // O(n)
        total += i;
    }
    return total; // O(1)
}

// O(1) + O(n) = O(n)

function sumNumbers(n){
    return n * (n + 1)/ 2;
}

// O(1)

// O(1) is better than O(n)
