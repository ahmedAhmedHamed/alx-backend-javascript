const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe('calculateNumber', function () {
  it('numbers', function () {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });
  it('flaoting numbers', function () {
    assert.strictEqual(calculateNumber('SUM', 1.0, 3.0), 4);
  });
  it('round down', function () {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.2), 4);
  });
  it('round up', function () {
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
  });
  it('round down trailing 9s', function () {
    assert.strictEqual(calculateNumber('SUM', 1.499999, 3.499999), 4);
  });
  it('round up both', function () {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  });

  it('subtract', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('divide', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('divide error', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

});
