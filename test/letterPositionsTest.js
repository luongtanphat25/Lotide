const assert = require('chai').assert;
const letterPositions = require('../letterPositions');
const result = letterPositions("helloeo");
const eqArrays = require('../eqArrays');
describe("#head", () => {
  it('returns 0 for h in helloeo', () =>{
    assert.isTrue(eqArrays(result["h"], [0]));
  });

  it('returns [1, 5] for e in helloeo', () =>{
    assert.isTrue(eqArrays(result["e"], [1, 5]));
  });

  it('returns [2, 3] for l helloeo', () => {
    assert.isTrue(eqArrays(result["l"], [2, 3]));
  });

  it('returns [4, 6] for 0 helloeo', () => {
    assert.isTrue(eqArrays(result["o"], [4, 6]));
  });
});