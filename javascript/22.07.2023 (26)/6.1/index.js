function accum(str) {
  let result = '';
for (i=0; i<str.length; i++)
{
let capitalizedChar = str[i].toUpperCase()

let repeated =  capitalizedChar + str[i].repeat(i).toLowerCase();

result = result + repeated + ('-');

}
console.log(result);

// return result;
}

// console.log(accum("abcd")); // Output: "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // Output: "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt")); // Output: "C-Ww-Aaa-Tttt"
