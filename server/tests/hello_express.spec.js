var expect  = require('chai').expect;
var request = require('request');

const helloMessage = { express: 'Hello From Express' };

describe('Express Server', function(){
  it('Should return a hello message', function(done){
    request('http://localhost:5000/api/hello', function(error, response, body){
      expect(JSON.parse(body)).to.deep.equal(helloMessage);
      done();
    });
  });
});
