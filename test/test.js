var fs       = require('fs'),
    should   = require('should'),
    findCine = require('../lib/find-cine');

describe("NEAR function", function() {
  it("must have the total and theaters", function(done) {
    findCine.near('Calle del pinar 6', function(err, results) {
      results.should.have.property('total');
      results.should.have.property('theaters');
      done();
    });
  });

  it("total should be > 0", function(done) {
    findCine.near('Calle del pinar 6', function(err, results) {
      results.total.should.be.above(0);
      done();
    });
  });
});

describe("THEATER id function", function() {
  it("must have total and theaters", function(done) {
    findCine.theaterId('Calle del pinar 6', 'f1c1b938448630c8', function(err, results) {
      results.should.have.property('total');
      results.should.have.property('theaters');
      done();
    });
  });
});
