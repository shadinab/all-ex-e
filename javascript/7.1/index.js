function removeDuplicates(array) {
  const result = [];
  
  for (let i = 0; i < array.length; i++) {
    if (result.indexOf(array[i]) === -1) {
      result.push(array[i]);
    }
  }
  
  return result;
}

const output = removeDuplicates([3, 4, 4, 3, 6, 3]);
console.log(output); 


