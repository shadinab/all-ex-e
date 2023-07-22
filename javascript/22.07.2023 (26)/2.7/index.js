function mine (operation, value1, value2)
{
if (operation==='-')
{
  let num1 = value1-value2;
  return num1;
}
if (operation==='+')
{
  let num3 = value1+ value2;
  return num3;
}

if (operation==='/')
{
  if (value1 >value2)
{
return value1/value2;
}

  if (value2>value1)
  {
    let num20 = value2/value1;
    return num20;
  }

  if (value1===value2)
  {
    return 1;
  }
}

if (operation==='*')
{
  return value1*value2;
}
}

console.log(mine('*',-5,5));