

function countryToLiveIn (Language, isLand, population, country)
{
if (Language==='english' && population<50 && isLand===false)
{
return console.log(`consider living in ${country}`);
}
else
{
return console.log(`${country} country does not meet your criteria `)
}
}
countryToLiveIn('english',false ,51,'vietnam');

