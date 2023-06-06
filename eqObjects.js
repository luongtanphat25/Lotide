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

module.exports = eqObjects;