const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it('returns 5 for [5, 6, 7]', () =>{
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it('returns Hello for ["Hello", "Lighthouse", "Labs]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it('returns Hello for ["Hello"]', () => {
    assert.strictEqual(head(["Hello"]), "Hello");
  });

  it('returns undefined for []', () =>{
    assert.isUndefined(head([]));
  });
});