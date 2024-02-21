// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"


export const getMaxCharacters = (str) => {
  // Object to store the count of each character
  const charCount = {};

  // Iterate over the string to fill the charCount object
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Variables to keep track of the max count and the character
  let maxCount = 0;
  let maxChar = '';

  // Iterate over the charCount object to find the character with the highest count
  for (let char in charCount) {
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      maxChar = char;
    }
  }

  return maxChar;
};
console.log(getMaxCharacters("abcccccccd")); // c
console.log(getMaxCharacters("apple 1231111")); // 1

