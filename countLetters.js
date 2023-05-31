const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let noSpaceSentence = sentence.split(" ").join("");//thisisasentence
  let result = {};
  for (const c of noSpaceSentence) {
    if (c in result) {
      result[c]++;
    } else {
      result[c] = 1;
    }
  }

  console.log(result);
  return result;
};

const sentence = "this is a sentence";
const result = countLetters(sentence);
assertEqual(result["t"], 2);
assertEqual(result["h"], 1);
assertEqual(result["i"], 2);
assertEqual(result["s"], 3);
assertEqual(result["a"], 1);
assertEqual(result["e"], 3);
assertEqual(result["n"], 2);
assertEqual(result["c"], 1);