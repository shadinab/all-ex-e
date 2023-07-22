function findUniq (array)
{
if (array.length>3)
{
  console.log('stile trying')
  let num4;
for (i=0; i<array.length; i++)
{
  if (array[i]===array[i+1] )
  {
    console.log('stile trying')
  }
  else
  {
   return num4 = array[i+1];
  }
}
}

else 
{
return 'add more number'
}

}

console.log(findUniq([12,12,12,12,0.5]));