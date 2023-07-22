function nums (array)
{
 num1 = Math.sqrt(array);
if (Number.isInteger(num1))
{
  return Math.pow(num1 + 1, 2);
}
else

{
return '-1'
} 
}

console.log(nums(10000));