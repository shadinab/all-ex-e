function nb_year(p0,percent,aug,p)
  {

let first = p0 ;
let year=0;
while (first<=p)
{
  year++;
  first += first*percent/100+aug;
}

return ` ${year} year  ( NUMBER OF PEOPLE)  ${first}`;

  }


console.log(nb_year(1500000,2.5,10000,2000000));








