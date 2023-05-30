const eqArrays = function(firstArr, secondArr) {
  let result = (firstArr.length === secondArr.length);
  for (let i = 0; i < firstArr.length; i++) {
    result = result && (firstArr[i] === secondArr[i]);
  }
  return result;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};