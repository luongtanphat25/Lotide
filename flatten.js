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

const flatten = function(arr) {
  let result = [];
  for (const n of arr) {
    if (Array.isArray(n)) {
      for (const i of n) {
        result.push(i);
      }
    } else {
      result.push(n);
    }
  }
  return result;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);