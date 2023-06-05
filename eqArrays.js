const eqArrays = function(firstArr, secondArr) {
  let result = (firstArr.length === secondArr.length);
  for (let i = 0; i < firstArr.length; i++) {
    result = result && (firstArr[i] === secondArr[i]);
  }
  return result;
};

module.exports = eqArrays;