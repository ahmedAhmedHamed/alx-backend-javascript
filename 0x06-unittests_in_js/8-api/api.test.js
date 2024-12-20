const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('checks that get returns correct response', (done) => {
    request.get(`${API_URL}/`, (_error, response, body) => {
      expect(response.statusCode).to.be.equal(200);

      expect(body).to.be.equal('Welcome to the payment system');

      done();
    });
  });
});
