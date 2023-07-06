// // tofix

// function teLLFortune (jobTitle,location,partnerName,numberOfChildren)
// {

// return `you will be a ${jobTitle} in ${location} married to ${partnerName} with ${numberOfChildren} children`;

// }


// const value1 = teLLFortune('programmer','newYork','sohad','5'); 
// console.log(value1);

function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
  return `You will be a ${jobTitle} in ${location} married to ${partnerName} with ${numberOfChildren} children.`;
}

const fortune1 = tellFortune('programmer', 'New York', 'Rana', 2);
const fortune2 = tellFortune('doctor', 'Los Angeles', 'John', 3);
const fortune3 = tellFortune('teacher', 'London', 'Emily', 1);

console.log(fortune1);
console.log(fortune2);
console.log(fortune3);

