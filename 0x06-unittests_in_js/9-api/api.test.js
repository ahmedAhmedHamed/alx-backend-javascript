const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const LOCAL_API = 'http://localhost:7865';

  it('get home', (done) => {
    request.get(`${LOCAL_API}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('existing car', (done) => {
    request.get(`${LOCAL_API}/cart/32`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 32');
      done();
    });
  });

  it('negative cart', (done) => {
    request.get(`${LOCAL_API}/cart/-232`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('nan cart', (done) => {
    request.get(`${LOCAL_API}/cart/asdfasdf`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});