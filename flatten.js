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

module.exports = flatten;

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);