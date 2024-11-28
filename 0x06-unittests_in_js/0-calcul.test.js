const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber', function () {
  it('numbers', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('flaoting numbers', function () {
    assert.strictEqual(calculateNumber(1.0, 3.0), 4);
  });
  it('round down', function () {
    assert.strictEqual(calculateNumber(1.2, 3.2), 4);
  });
  it('round up', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('round down trailing 9s', function () {
    assert.strictEqual(calculateNumber(1.499999, 3.499999), 4);
  });
  it('round up both', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

});
