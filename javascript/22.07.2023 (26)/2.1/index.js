function sumOfTwoSmallest(arr) 
{
  const filteredArr = arr.filter(num => Number.isInteger(num) && num >= 0);

  if (filteredArr.length < 4) {
    return ("Not enough  numbers in the array.");
  }

  filteredArr.sort((a, b) => a - b);

  return filteredArr[0] + filteredArr[1];
}

const numbers = [5, -2, 10, 4, 3, 7];
const sum = sumOfTwoSmallest(numbers);
console.log("Sum of the two smallest numbers:", sum);
