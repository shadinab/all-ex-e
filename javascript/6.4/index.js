

function populationPercentages (array)
{
let percentages = [];

percentages = array.map (num =>(num / 7900)*100);
return (percentages);

}

console.log(populationPercentages([79000,790000,7900000,79000000]));

