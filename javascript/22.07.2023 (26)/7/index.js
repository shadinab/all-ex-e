//filter

const customFilter = (array, filterFunc) => {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (filterFunc(array[i], i, array)) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
};

const numbers = [1, 2, 3, 4, 5, 6];

const filterFunc = (element, index, array) => {
  return element % 2 === 0;
};

const filteredNumbers = customFilter(numbers, filterFunc);
console.log(filteredNumbers); // Output: [2, 4, 6]




// forEach


const customForEach = (array, forEachFunc)=> {
for (let i=0; i<array.length; i++)
{
  forEachFunc(array[i],[i],array);
}
}



const fruits = ["apple", "banana", "orange"];

customForEach(fruits,(fruit ,index)=>
{
console.log(`Fruit at index ${index}: ${fruit} `);
})


// map
const customMap = (array, mapFunc) => {
  const mappedArray = [];
  for (let i = 0; i < array.length; i++) {
    mappedArray.push(mapFunc(array[i], i, array));
  }
  return mappedArray;
};

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = customMap(numbers, (num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
