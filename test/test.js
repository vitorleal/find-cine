var fs       = require('fs');
var should   = require('should');
var findCine = require('../lib/find-cine');

describe("Showld bring the near cinemas", function() {
    it("near cinemas", function(done) {
        findCine.near('calle del pinar 6');
        done();
    });

    it("theather by id", function(done) {
        findCine.theaterId('calle del pinar 6', 000);
        done();
    });

    it("movie by id", function(done) {
        findCine.movieId('calle del pinar 6', 000);
        done();
    });
});
