const assert = require('chai').assert;
const flatten = require('../flatten');
const eqArrays = require('../eqArrays');
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
describe("#head", () => {
  it('returns [1, 2, 3, 4, 5, 6] for  [1, 2, [3, 4], 5, [6]]', () =>{
    assert.isTrue(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));
  });
});