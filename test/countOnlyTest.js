const assert = require('chai').assert;
const countOnly = require('../countOnly');
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
describe('#countOnly', () => {
  it('returns 1 for Jason', () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it('returns undefined for Karima', () => {
    assert.isUndefined(result1["Karima"]);
  });

  it('returns 2 for Fang', () => {
    assert.strictEqual(result1["Fang"], 2);
  });

  it('returns undefined for Agouhanna', () => {
    assert.isUndefined(result1["Agouhanna"]);
  });
});