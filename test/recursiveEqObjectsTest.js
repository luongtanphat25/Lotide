const assert = require('chai').assert;
const { recursiveEqObjects } = require('../recursiveEqObjects.js');

const shirtObject = { color: 'red', size: 'medium' };
const anotherShirtObject = { size: 'medium', color: 'red' };
const longSleeveShirtObject = { size: 'medium', color: 'red', sleeveLength: 'long' };

describe('#recursiveEqObjects Test', () => {
  it(`{ a: { z: 1 }, b: 2 } equals { a: { z: 1 }, b: 2 }`, () => {
    assert.isTrue(recursiveEqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });

  it(`{ a: { y: 0, z: 1 }, b: 2 } not equals { a: { z: 1 }, b: 2 }`, () => {
    assert.isFalse(recursiveEqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });

  it(`{ a: { y: 0, z: 1 }, b: 2 } not equals { a: 1, b: 2 }`, () => {
    assert.isFalse(recursiveEqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  });
});
