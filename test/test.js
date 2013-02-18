var fs       = require('fs');
var should   = require('should');
var findCine = require('../lib/find-cine');

describe("Should bring the objects", function() {
    it("near cinemas", function(done) {
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
