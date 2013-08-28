var should   = require('should'),
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
