function getShortestWordLength(str) {
  const words = str.split(' ');
  let shortestLength = Infinity;


  for (let i = 0; i < words.length; i++) {
    const wordLength = words[i].length;
    if (wordLength < shortestLength) {
      shortestLength = wordLength;
    }
  }

  return shortestLength;
}

const sentence = "shadi fadiii ahmaddd";
const shortestLength = getShortestWordLength(sentence);
console.log(shortestLength); // Output: 3
