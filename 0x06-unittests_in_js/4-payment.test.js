const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('tests sendPaymentRequestToApi.', () => {
    const mySpy = sinon.spy(console);
    const myStub = sinon.stub(Utils, 'calculateNumber');

    myStub.returns(10);

    sendPaymentRequestToApi(100, 20);

    expect(myStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(myStub.callCount).to.be.equal(1);

    expect(mySpy.log.calledWith('The total is: 10')).to.be.true;
    expect(mySpy.log.callCount).to.be.equal(1);

    myStub.restore();
    mySpy.log.restore();
  });
});
