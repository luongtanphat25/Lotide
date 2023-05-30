const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(firstArr, secondArr) {
  let result = (firstArr.length === secondArr.length);
  for (let i = 0; i < firstArr.length; i++) {
    result = result && (firstArr[i] === secondArr[i]);
  }
  return result;
};

const without = function(a, b) {
  let result = [];

  for (let i = 0; i < a.length; i++) {
    let having = false;
    for (const n of b) {
      having = (n === a[i]) || having;
    }
    if (!having) {
      result.push(a[i]);
    }
  }

  return result;
};

//Test case
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);