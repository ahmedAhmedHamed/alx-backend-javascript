const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {

  let mySpy;

  beforeEach(() => {
    if (!mySpy) {
      mySpy = sinon.spy(console);
    }
  });

  afterEach(() => {
    mySpy.log.resetHistory();
  });

  it('tests sendPaymentRequestToApi.', () => {
    sendPaymentRequestToApi(100, 20);

    expect(mySpy.log.calledWith('The total is: 120')).to.be.true;
    expect(mySpy.log.callCount).to.be.equal(1);
  });

  it('tests sendPaymentRequestToApi.', () => {
    sendPaymentRequestToApi(10, 10);

    expect(mySpy.log.calledWith('The total is: 20')).to.be.true;
    expect(mySpy.log.callCount).to.be.equal(1);
  });
});
