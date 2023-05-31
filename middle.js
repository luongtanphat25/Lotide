// TEST ASSERTION FUNCTIONS
const eqArrays = function(firstArr, secondArr) {
  let result = (firstArr.length === secondArr.length);
  for (let i = 0; i < firstArr.length; i++) {
    result = result && (firstArr[i] === secondArr[i]);
  }
  return result;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION
const middle = function(array) {
  let result = [];

  if (array.length <= 2) {
    return result;
  }
  const middleIndex = Math.floor(array.length / 2);
  const isEven = (array.length % 2 === 0);
  
  if (isEven) {
    result.push(array[middleIndex - 1]);
    result.push(array[middleIndex]);
  } else {
    result.push(array[middleIndex]);
  }

  return result;
};

//TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);//1.5 -> 1
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);//2
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);