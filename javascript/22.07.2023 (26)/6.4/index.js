

const isIsogram = (str)=> {
  const lowercaseStr = str.toLowerCase();
  const letterSet = new Set ();
  return lowercaseStr.split('').every((char)=>{
  if (letterSet.has(char))
  {
    return false;
  }
  letterSet.add(char);
  return true
});
};



console.log(isIsogram("Dermatoglyphics")); // Output: true
// console.log(isIsogram("aba")); // Output: false
// console.log(isIsogram("moOse")); // Output: false
