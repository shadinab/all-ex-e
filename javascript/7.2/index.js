const string = "The more you know, the more you know that you don't know";
const word = "you";
let lastIndex = -1;

for (let i = string.length - word.length; i >= 0; i--) {
  if (string.substring(i, i + word.length) === word) {
    lastIndex = i;
    break;
  }
}

console.log(lastIndex);
