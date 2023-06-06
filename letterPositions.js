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