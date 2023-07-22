function tribonacci(signature, n) {
 if(n==0)
 {
  return [];
 }
 else if (n<=signature.length)
 {
  return signature.slice(0,n)
 }
 else
 {
  let sequence = signature.slice()

while (sequence.length<n)
{
  let nextNumber = sequence.slice(-3).reduce((a,b)=> a+b);
  sequence.push(nextNumber);
}
return sequence;
 }
}

console.log(tribonacci([1, 1, 1], 10));
// Output: [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]

// console.log(tribonacci([0, 0, 1], 10));
// // Output: [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]
