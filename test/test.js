var fs       = require('fs');
var should   = require('should');
var findCine = require('../lib/find-cine');

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
    findCine.theaterId('Calle del pinar 6', '14d0d63a370c4944', function(err, results) {
      results.should.have.property('total');
      results.should.have.property('theaters');
      done();
    });
  });

  it("total should be = 1", function(done) {
    findCine.theaterId('Calle del pinar 6', '14d0d63a370c4944', function(err, results) {
      results.total.should.be.equal(1);
      done();
    });
  });
});
