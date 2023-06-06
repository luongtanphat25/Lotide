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

module.exports = letterPositions;

// let result = letterPositions("helloeo");
// assertArraysEqual(result["h"], [0]);
// assertArraysEqual(result["e"], [1, 5]);
// assertArraysEqual(result["l"], [2, 3]);
// assertArraysEqual(result["o"], [4, 6]);