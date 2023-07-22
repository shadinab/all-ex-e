function nums (number)
{
  let num = null;
  let sum =[];
  if(number>0)
  {

for (i=1; i<number+1; i++)
{
 sum.push(i);
}

const all = sum.reduce((jj,ff) => jj+ff);
return `${all} = ${sum}`;
  }
  else
  {
    return 'this number less than 0'
  }
}


console.log(nums(10));