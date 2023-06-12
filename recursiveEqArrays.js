const recursiveEqArrays = (arr1, arr2) => {
  // Check if both arguments are arrays
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return arr1 === arr2; // Compare non-array values directly
  }

  // Check if the lengths of both arrays are the same
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    // Recursively compare elements of the arrays
    if (!recursiveEqArrays(arr1[i], arr2[i])) {
      return false;
    }
  }

  return true;
};

module.exports = { recursiveEqArrays };
