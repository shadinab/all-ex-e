function binaryArrayToNumber(arr) {
  let result = 0;
  
  for (let i = 0; i < arr.length; i++) {
    result = result * 2 + arr[i];
  }
  
  return result;
}

console.log(binaryArrayToNumber([0, 0, 0, 1])); // Output: 1
console.log(binaryArrayToNumber([0, 0, 1, 0])); // Output: 2



