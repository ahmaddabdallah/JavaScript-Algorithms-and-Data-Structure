function fibonacci(n) {
  let prev2 = 0;
  let prev1 = 1;

  console.log(prev2);
  console.log(prev1);
  for (let i = 0; i < n; i++) {
    let newFibo = prev1 + prev2;
    console.log(newFibo);
    prev2 = prev1;
    prev1 = newFibo;
  }
}

fibonacci(10)