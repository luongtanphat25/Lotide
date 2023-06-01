const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const result = [];
  for (const item of array) {
    result.push(callback(item));
  }
  return result;
};

const results1 = map(words, word => word[0]);
console.log(results1);