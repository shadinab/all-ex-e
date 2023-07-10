

function oneArgument (stringColor)
{
switch (stringColor)
{
    case 'yellow' :
    case 'orange' :
    case 'pink' :
   return ('light color');
    
    break;
    case 'purple' :
    case 'blue' :
    case 'brown' :
    return('dark color');
    
    default:

    return('Unknown color');
}
}

console.log(oneArgument('yellow'));
console.log(oneArgument('orange'));
console.log(oneArgument('pink'));
console.log(oneArgument('purple'));
console.log(oneArgument('blue'));
console.log(oneArgument('yellow'));
console.log(oneArgument('#f0ebeb'));



