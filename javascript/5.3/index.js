function passwordString2(password1)
{
return password1.length>7 ? 'strong' : 'weak';
}

console.log(passwordString2('shadi'));





function passwordString2(password2)
{
if (password2.length>7)
{
  return ('strong');
}
else return ('weak');
}

console.log (passwordString2('shadinab'));





function passwordString3(password3)
{
return password3.length>7 && 'strong'|| 'weak;'

}
console.log (passwordString3('shadiiii'));




function passwordValidation(password4) {
  return password4.length > 7 && /[A-Z]/.test(password4) ? "very Strong" : password4.length===7 ? 'strong' : 'weak';
}

console.log(passwordValidation("password4"));      
console.log(passwordValidation("secure12"));      
console.log(passwordValidation("Secret123"));     
console.log(passwordValidation("SuperSecure1"));
console.log(passwordValidation("upereef"));

