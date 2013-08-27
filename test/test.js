var fs       = require('fs'),
    should   = require('should'),
    findCine = require('../lib/find-cine');

//Format String
describe('String format', function() {
  it('should format the urls with 1 argument', function() {
    var url = 'http://find-cine.com/{{0}}',
        formated = url.format('test-1-arg');

    formated.should.eql('http://find-cine.com/test-1-arg');
  });

  it('should format the urls with 2 arguments', function() {
    var url = 'http://find-cine.com/{{0}}/{{1}}',
        formated = url.format('first-arg', 'second-arg');

    formated.should.eql('http://find-cine.com/first-arg/second-arg');
  });

  it('should format the urls with 3 or more arguments', function() {
    var url = 'http://find-cine.com/{{0}}/{{1}}/{{2}}',
        formated = url.format('first-arg', 'second-arg', 'third-arg');

    formated.should.eql('http://find-cine.com/first-arg/second-arg/third-arg');
  });
});

//Make request
describe('Make request', function () {
  it('When ok shoul retunr an object', function (done) {
    findCine.makeRequest('Rua Inhambu 902', function (err, res) {
      res.should.be.a('object');

      done();
    });
  });

  it('Should have total', function (done) {
    findCine.makeRequest('Rua Inhambu 902', function (err, res) {
      res.should.have.ownProperty('total');

      done();
    });
  });

  it('Total should be an number', function (done) {
    findCine.makeRequest('Rua Inhambu 902', function (err, res) {
      res.total.should.be.a('number');

      done();
    });
  });

  it('should have theaters', function (done) {
    findCine.makeRequest('Rua Inhambu 902', function (err, res) {
      res.should.have.ownProperty('theaters');

      done();
    });
  });

  it('Theaters should be an array', function (done) {
    findCine.makeRequest('Rua Inhambu 902', function (err, res) {
      res.theaters.should.be.an.instanceOf(Array);

      done();
    });
  });

  it('Should not trow an error', function (done) {
    findCine.makeRequest('Rua Inhambu 902', function (err, res) {
      should.strictEqual(undefined, err);

      done();
    });
  });

});
