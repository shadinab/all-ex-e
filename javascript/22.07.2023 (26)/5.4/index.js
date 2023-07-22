function toWeirdCase(str) {
  const words = str.split(" ");
  const modifiedWords = [];

  for (let i = 0; i < words.length; i++) {
    const characters = words[i].split("");
    const modifiedCharacters = [];

    for (let j = 0; j < characters.length; j++) {
      if (j % 2 === 0) {
        modifiedCharacters.push(characters[j].toUpperCase());
      } else {
        modifiedCharacters.push(characters[j].toLowerCase());
      }
    }

    modifiedWords.push(modifiedCharacters.join(""));
  }

  return modifiedWords.join(" ");


}

console.log(toWeirdCase("Weird string case")); 
