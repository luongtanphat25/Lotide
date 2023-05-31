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

const letterPositions = function(sentence) {
  let result = {};
  
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] in result) {
      result[sentence[i]].push(i);
    } else {
      result[sentence[i]] = [i];
    }
  }

  console.log(result);
  return result;
};

let result = letterPositions("helloeo");
assertArraysEqual(result["h"], [0]);
assertArraysEqual(result["e"], [1, 5]);
assertArraysEqual(result["l"], [2, 3]);
assertArraysEqual(result["o"], [4, 6]);