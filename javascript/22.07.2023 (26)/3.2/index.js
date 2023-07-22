function bus (array)
{
let end =0;

for (i=0; i<array.length; i++)
{

end +=array[i][0]-array[i][1];

}
return end;

}


console.log(bus([[10 ,15] ,[18 ,20] , [35, 25]]));//3