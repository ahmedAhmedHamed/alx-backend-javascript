const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber', function () {
  it('should return addition of both after rounding', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should return addition of both after rounding', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('should return addition of both after rounding', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('should return addition of both after rounding', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
