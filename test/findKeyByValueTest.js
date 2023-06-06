const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');
const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  "comedy": "Brooklyn Nine-Nine",
  "drama":  "The Wire"
};
describe('#findKeyByValue', () => {
  it('return "drama" for "The Wore"', () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('return undefined for "That \'70s Show"', () => {
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
  });
});


// assertEqual();
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);