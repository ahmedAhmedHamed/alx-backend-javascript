const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('0-calcul', function () {
  describe('#calculateNumber()', function () {
    it('should return addition of both after rounding', function () {
      assert.equal(calculateNumber(1, 3), 4);
      assert.equal(calculateNumber(1, 3.7), 5);
      assert.equal(calculateNumber(1.2, 3.7), 5);
      assert.equal(calculateNumber(1.5, 3.7), 6);
    });
  });
});
