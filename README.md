find-cine [![Build Status](https://travis-ci.org/vitorleal/find-cine.png?branch=master)](https://travis-ci.org/vitorleal/find-cine) [![endorse](http://api.coderwall.com/vitorleal/endorsecount.png)](http://coderwall.com/vitorleal)
=======

## Description

A NPM module to find movie theaters close to an address (to use with geoLocation).
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

## License
See [LICENSE.txt](https://github.com/vitorleal/find-cine/blob/master/LICENSE.txt)
