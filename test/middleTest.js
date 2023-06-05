const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const middle = require('../middle.js');

describe('#middle', () => {
  it('returns [] for [1]', ()=> {
    assert.isTrue(eqArrays(middle([1]), []));
  });
  it('returns [] for [1, 2]', ()=> {
    assert.isTrue(eqArrays(middle([1, 2]), []));
  });
  it('returns [2] for [1, 2, 3]', ()=> {
    assert.isTrue(eqArrays(middle([1, 2, 3]), [2]));
  });
  it('returns [2, 3] for [1, 2, 3, 4]', ()=> {
    assert.isTrue(eqArrays(middle([1, 2, 3, 4]), [2, 3]));
  });
});
