const countOnly = function(allItems, itemsToCount) {
  let results = {};

  for (const key in itemsToCount) {
    let count = 0;
    for (const item of allItems) {
      if (itemsToCount[key] && key === item) {
        count++;
      }
    }
    if (count > 0) {
      results[key] = count;
    }
  }

  return results;
};

module.exports = countOnly;