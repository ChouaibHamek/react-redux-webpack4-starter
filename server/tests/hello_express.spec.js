const { expect } = require('chai');
const request = require('request');

const helloMessage = { message: 'Hello From Express' };

describe('Express Server', () => {
  it('Should return a hello message', (done) => {
    request('http://localhost:5000/api/hello', (error, response, body) => {
      expect(JSON.parse(body)).to.deep.equal(helloMessage);
      done();
    });
  });
});
