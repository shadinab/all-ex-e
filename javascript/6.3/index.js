
// 1

function foo1 (array)
{

const stringNumber = [];
for (let num of array)
{
stringNumber.push(num.length);
}
return stringNumber;
}


console.log(foo1(["boo","doooo","hoo","ro"]));


// 2
let foo1 = ["boo","doooo","hoo","ro"] ;
const newArray = foo1.map((number)=>number.length);

console.log(newArray);