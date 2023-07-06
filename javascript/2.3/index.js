function ciycle(radius)
{
const calculate = 3.14159 * (radius*radius)
const fixed = (Math.PI * (radius * radius)).toFixed(2) 
return [calculate , fixed];
}

const value =  ciycle(2)
console.log(value)