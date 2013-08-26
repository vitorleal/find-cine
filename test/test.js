var fs       = require('fs'),
    should   = require('should'),
    findCine = require('../lib/find-cine');

describe('String format', function() {
  it('should format the urls with 1 argument', function() {
    var url      = 'http://find-cine.com/{{0}}',
        formated = url.format('test-1-arg');

    formated.should.eql('http://find-cine.com/test-1-arg');
  });

  it('should format the urls with 2 or more arguments', function() {
    var url      = 'http://find-cine.com/{{0}}/{{1}}',
        formated = url.format('first-arg', 'second-arg');

    formated.should.eql('http://find-cine.com/first-arg/second-arg');
  });

  it('should format the urls with 2 or more arguments', function() {
    var url      = 'http://find-cine.com/{{0}}/{{1}}/{{2}}',
        formated = url.format('first-arg', 'second-arg', 'third-arg');

    formated.should.eql('http://find-cine.com/first-arg/second-arg/third-arg');
  });
});

describe('Integration test', function () {
  it('should retunr object', function (done) {
    done();
  });
});
