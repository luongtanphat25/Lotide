
// ACTUAL FUNCTION
const middle = function(array) {
  let result = [];

  if (array.length <= 2) {
    return result;
  }
  const middleIndex = Math.floor(array.length / 2);
  const isEven = (array.length % 2 === 0);
  
  if (isEven) {
    result.push(array[middleIndex - 1]);
    result.push(array[middleIndex]);
  } else {
    result.push(array[middleIndex]);
  }

  return result;
};

module.exports = middle;