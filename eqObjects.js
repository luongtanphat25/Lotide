const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countKeys = function(object) {
  let count = 0;
  // eslint-disable-next-line no-unused-vars
  for (const _ in object) {
    count++;
  }
  return count;
};

const eqObjects = function(object1, object2) {
  let result = (countKeys(object1) === countKeys(object2));
  for (const item in object1) {
    result = (object1[item] === object2[item]) && result;
  }
  return result;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
