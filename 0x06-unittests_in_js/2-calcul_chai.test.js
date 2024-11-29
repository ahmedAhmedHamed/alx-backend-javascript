const { expect } = require('chai');
const calculateNumber = require("./2-calcul_chai.js");

describe('calculateNumber', function () {
  it('numbers', function () {
    expect(calculateNumber('SUM', 1, 3)).to.equal( 4);
  });
  it('flaoting numbers', function () {
    expect(calculateNumber('SUM', 1.0, 3.0)).to.equal( 4);
  });
  it('round down', function () {
    expect(calculateNumber('SUM', 1.2, 3.2)).to.equal( 4);
  });
  it('round up', function () {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal( 5);
  });
  it('round down trailing 9s', function () {
    expect(calculateNumber('SUM', 1.499999, 3.499999)).to.equal( 4);
  });
  it('round up both', function () {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal( 6);
  });

  it('subtract', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal( -4);
  });

  it('divide', function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal( 0.2);
  });

  it('divide error', function () {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal( 'Error');
  });

});
