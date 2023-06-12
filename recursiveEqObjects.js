const recursiveEqObjects = (obj1, obj2) => {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
    return obj1 === obj2;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if the number of keys in both objects is the same
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    // Check if the current key exists in both objects
    if (!(key in obj2)) {
      return false;
    }

    // Recursively compare nested objects/values
    if (!recursiveEqObjects(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
};

module.exports = { recursiveEqObjects };