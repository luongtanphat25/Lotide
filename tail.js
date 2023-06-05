const tail = function(arr) {
  if (arr.length <= 1) {
    return [];
  } else {
    let tails = [];
    for (let i = 1; i < arr.length; i++) {
      tails.push(arr[i]);
    }
    return tails;
  }
};

module.exports = tail;