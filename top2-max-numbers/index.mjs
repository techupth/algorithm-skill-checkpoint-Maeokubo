// Problem
// Write a function getTop2MaxNumbers that takes an array of numbers as input
// and returns an array containing the top two maximum numbers
// from the input array and if there are duplicated numbers, please remove them

// Examples:
// getTop2MaxNumbers([10, 40, 20, 2, 9, 19]) === [40, 20]
// getTop2MaxNumbers([-10, -40, -20, -2, -9, -19]) === [-2, -9]
// getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]) === [40, 20]

export const getTop2MaxNumbers = (numbers) => {
  // Remove duplicates by converting the array to a Set and back to an array
  const uniqueNumbers = [...new Set(numbers)];
  
  // Sort the unique numbers array in descending order
  uniqueNumbers.sort((a, b) => b - a);
  
  // Return the top two elements
  return uniqueNumbers.slice(0, 2);
};
console.log(getTop2MaxNumbers([10, 40, 20, 2, 9, 19])); //  [40, 20]
console.log(getTop2MaxNumbers([-10, -40, -20, -2, -9, -19])); //  [-2, -9]
console.log(getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19])); // [40, 20]
