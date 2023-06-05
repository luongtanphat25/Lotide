const eqArrays = require('../eqArrays.js');
const tail = require('../tail.js');
const assert = require('chai').assert;

describe("#tail", () => {
  it('retunrs ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.isTrue(eqArrays(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]));
  });

  it('retunrs ["Labs"] for ["Lighthouse", "Labs"]', () => {
    assert.isTrue(eqArrays(tail(["Lighthouse", "Labs"]), ["Labs"]));
  });
});