const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

describe('#eqObjects Test', () => {
  it(`${shirtObject} equals ${anotherShirtObject}`, () => {
    assert.isTrue(eqObjects(shirtObject , anotherShirtObject));
  });

  it(`${shirtObject} not equals ${longSleeveShirtObject}`, () => {
    assert.isFalse(eqObjects(shirtObject , longSleeveShirtObject));
  });
});



// assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);