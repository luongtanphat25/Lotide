const { recursiveEqArrays } = require('../recursiveEqArrays.js');
const assert = require('chai').assert;

describe('#recursiveEqArrays Test', () => {
  it(`[[2, 3], [4]] equals [[2, 3], [4]]`, () => {
    assert.isTrue(recursiveEqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });

  it(`[[2, 3], [4]] not equals [[2, 3], [4, 5]]`, () => {
    assert.isFalse(
      recursiveEqArrays(
        [[2, 3], [4]],
        [
          [2, 3],
          [4, 5],
        ]
      )
    );
  });

  it(`[[2, 3], [4]] not equals [[2, 3], 4]`, () => {
    assert.isFalse(recursiveEqArrays([[2, 3], [4]], [[2, 3], 4]));
  });
});
