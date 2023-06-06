const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqObjects Test', () => {
  it(`[1, 2, 3] equals [1, 2, 3]`, () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it(`[1, 2, 3] not equals [3, 2, 1]`, () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });

  it(`["1", "2", "3"] equals ["1", "2", "3"]`, () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });

  it(`["1", "2", "3"] not equals ["1", "2", "3"]`, () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 1]));
  });
});


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);