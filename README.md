Find Cine [![Build Status](https://travis-ci.org/vitorleal/find-cine.png?branch=master)](https://travis-ci.org/vitorleal/find-cine) [![Dependency Status](https://gemnasium.com/vitorleal/find-cine.png)](https://gemnasium.com/vitorleal/find-cine) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
=======
[![NPM](https://nodei.co/npm/find-cine.png?downloads=true)](https://nodei.co/npm/find-cine/)


## Description

A NPM module to find movie theaters close to an address (to use with geo-location).
I create this module to use in a hack project for FirefoxOS at the FirefoxAppDays in Madrid.


## Install

```bash
$ npm install find-cine
```


## Usage
In the `findCine.near` function you need to pass the address
```js
var findCine = require('find-cine');

findCine.near('Calle del Pinar 6 Madrid', function (err, results) {
  console.log(results);
});
```

In the `findCine.theaterId` function you pass the address and the id of the theater
```js
var findCine = require('find-cine');

findCine.theaterId('Calle del Pinar 6 Madrid', 'f5620c58eb9a048e', function (err, results) {
  console.log(results);
});
```


## Author
| [![twitter/vitorleal](http://gravatar.com/avatar/e133221d7fbc0dee159dca127d2f6f00?s=80)](http://twitter.com/vitorleal "Follow @vitorleal on Twitter") |
|---|
| [Vitor Leal](http://vitorleal.com) |


## License
See [LICENSE.txt](https://github.com/vitorleal/find-cine/blob/master/LICENSE.txt)
