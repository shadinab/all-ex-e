function findLongestWords(str) {
  const words = str.split(' ');

  let maxLength = 0;
  let longestWords = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.length > maxLength) {
      maxLength = word.length;
      longestWords = [word];

    } else if (word.length === maxLength) {
      longestWords.push(word);
    }
  }

  return longestWords;
}

const input = " samh khalid shadii";
const longestWords = findLongestWords(input);
console.log(longestWords);


