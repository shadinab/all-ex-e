function countLetters(array) {
  const letterCount = {};

  for (let i = 0; i < array.length; i++) {
    const word = array[i].toLowerCase();

    for (let j = 0; j < word.length; j++) {
      const letter = word[j];

      if (letterCount[letter]) {
        letterCount[letter]++;
      } else {
        letterCount[letter] = 1;
      }
    }
  }

  return letterCount;
}

const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
const result = countLetters(array);
console.log(result);
