// To fill an array with 100 instances of the same object using the fill() method in JavaScript:
const obj = { name: "example" };
const array = Array(100).fill(obj);


// To create an array with numbers ranging from 1 to 100 using the Array.from() method:
const array = Array.from({ length: 100 }, (_, index) => index + 1);

// To convert only values of an object into one array:
const obj = { a: 1, b: 2, c: 3 };
const valuesArray = Object.values(obj);

// To convert an array into one object, assuming the array has alternating key-value pairs:
const array = ["key1", "value1", "key2", "value2", "key3", "value3"];
const obj = {};

for (let i = 0; i < array.length; i += 2) {
  const key = array[i];
  const value = array[i + 1];
  obj[key] = value;
}

// To find out if a variable is an array:
const isArray = Array.isArray(variable);


// To create a shallow copy of an array that won't affect the original array if modified:
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];


// To create a deep copy of an array that will affect the original array if modified:
const originalArray = [1, 2, 3];
const copyArray = JSON.parse(JSON.stringify(originalArray));
