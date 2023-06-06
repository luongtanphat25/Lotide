const findKeyByValue = function(object, value) {
  let key = "";
  for (const item in object) {
    key = (object[item] === value) && item;
  }
  return key || undefined;
};
module.exports = findKeyByValue;


// const bestTVShowsByGenre = {
//   "sci_fi": "The Expanse",
//   "comedy": "Brooklyn Nine-Nine",
//   "drama":  "The Wire"
// };



// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
