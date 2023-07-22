function year1(year) {
  let num4 = year / 100;
   num5 = Math.floor(num4);
  if (year % 100 === 0) {
   return num4;
  } else {
    return `${num5+1}`;
  }
}

console.log(year1(3759));
