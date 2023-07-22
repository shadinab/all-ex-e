function  kata(name,last)
{
 let names = name.split('');
let  lasts = last.split('');
let array1 = [];
let array2 = [];

for (let num of names)
{
  if (num===num.toUpperCase())
    array1.push(num);
}
for (let num of lasts)
{
  if (num===num.toUpperCase())
  {
    array2.push(num);
  }
}

return(`${array1.join('')}.${array2.join('')}`);
}

console.log(kata('Shadi' ,'Nabwani'));


