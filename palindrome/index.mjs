// Problem
// Given a string, determine if it is a palindrome,
// meaning it reads the same forwards and backwards,
// including spaces and punctuation.
// Return true if it is, false if it is not.

// Examples:
// palindrome("abba") === true
// palindrome("abcdefg") === false

export const palindrome = (str) => {
  // Convert the string to an array, then reverse , join it back into a string, and compare to the original string
  return str === str.split('').reverse().join('');
};

console.log(palindrome("abba")); // true
console.log(palindrome("abcdefg")); // false
