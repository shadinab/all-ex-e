function countDuplicates(inputString) {
  // Convert the input string to lowercase to make it case-insensitive
  inputString = inputString.toLowerCase();

  // Create an object to store the count of each character
  var charCount = {};

  // Iterate over each character in the input string
  for (var i = 0; i < inputString.length; i++) {
    var char = inputString[i];

    // Ignore non-alphabetic and non-numeric characters
    if (!char.match(/[a-z0-9]/i)) {
      continue;
    }

    // Increment the count of the character in the charCount object
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Count the number of characters that occur more than once
  var duplicatesCount = 0;
  for (var char in charCount) {
    if (charCount.hasOwnProperty(char) && charCount[char] > 1) {
      duplicatesCount++;
    }
  }

  return duplicatesCount;
}

// Test the function with the given examples
console.log(countDuplicates("abcde"));  // Output: 0
console.log(countDuplicates("aabbcde"));  // Output: 2
console.log(countDuplicates("aabBcde"));  // Output: 2
console.log(countDuplicates("indivisibility"));  // Output: 1
console.log(countDuplicates("Indivisibilities"));  // Output: 2
console.log(countDuplicates("aA11"));  // Output: 2
console.log(countDuplicates("ABBA"));  // Output: 2
