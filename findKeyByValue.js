const findKeyByValue = function(object, value) {
  let key = "";
  for (const item in object) {
    key = (object[item] === value) && item;
  }
  return key || undefined;
};
module.exports = findKeyByValue;