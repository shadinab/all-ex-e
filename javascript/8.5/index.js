function swapPropertiesAndValues(obj) {
  const swappedObj = {};
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      swappedObj[obj[key]] = key;
    }
  }
  
  return swappedObj;
}



const swapped = swapPropertiesAndValues({ a: 1, b: 2, c: 3 });
console.log(swapped);
git add .