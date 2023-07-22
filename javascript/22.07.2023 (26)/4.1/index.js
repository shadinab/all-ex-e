function fibonacci(n) {
  if (n <= 0) {
    return "Invalid input positive integer.";
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  let fibPrev = 1;
  let fibCurr = 1;
console.log(fibPrev,fibCurr);
  for (let i = 3; i <= n; i++) {
    let fibNext = fibPrev + fibCurr;
    fibPrev=fibCurr;
    fibCurr= fibNext;
    console.log(fibCurr);
  }
  return (`===${fibCurr}`);
}

// console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(10)); // Output: 5

