const longest = (s1, s2) => {
  const mergedString = s1 + s2;
  const distinctLetters = [...new Set(mergedString)];
  const sortedString = distinctLetters.sort().join('');
  return sortedString;
};



const a = "xyaabbbccccdefww";
const b = "xxxxyyyyabklmopq";
console.log(longest(a, b)); // Output: "abcdefklmopqwxy"

const c = "abcdefghijklimnopqrstuvwxyz";
console.log(longest(c, c)); // Output: "abcdefghijklimnopqrstuvwxyz"