/*!
 * find-cine - lib/find-cine.js
 * Copyright(c) 2013 Vitor Leal <vitorleal1@gmail.com>
 * MIT Licensed
 */

//Module dependencies
var http    = require('http'),
    cheerio = require('cheerio');

//Format text passing location and the id
String.prototype.format = function () {
  'use strict';

  var content = this;
  for (var i = 0; i < arguments.length; i++) {
    var replacement = '{{' + i + '}}';
    content = content.replace(replacement, arguments[i]);
  }
  return content;
};

String.prototype.trim = function () {
  return this.replace(/^\s+|\s+$/g, "");
};

//Main function
var findCine = function () {
  'use strict';

  this.baseUrl = "http://www.google.com/movies";
  this.urls    = {
    near     : this.baseUrl + "?near={{0}}",
    theaterId: this.baseUrl + "?near={{0}}&tid={{1}}",
    movieId  : this.baseUrl + "?near={{0}}&mid={{1}}"
  };
  this.itens = [];

  return this;
};


//Make request
findCine.prototype.makeRequest = function (url, callback) {
  'use strict';

  var self    = this;
  //parse the result to get the info
  http.request(encodeURI(url), function (response) {
    var content = '';

    //on data add to content
    response.on('data', function (chunk) {
      content += chunk;
    });

    //on end parse content
    response.on('end', function () {
      var $ = cheerio.load(content);

      //get each .theater
      $('.theater').each(function (value) {
        var theater = {
              name   : $(this).find('.desc .name a').text(),
              address: $(this).find('.desc .info').text(),
              id     : $(this).find('.desc').attr('id').split('_')[1],
              movies : []
            };

        //get each movie for the theater
        $(this).find('.showtimes .movie').each(function (value) {
          var movie = {
            title   : $(this).find('.name a').text(),
            duration: $(this).find('.info').text().trim(),
            id      : $(this).find('.name a').attr('href').split('id=')[1],
            times   : []
          };

          //get the movie times
          $(this).find('.times > span').each(function (value) {
            movie.times.push($(this).text().replace('&nbsp', '').trim());
          });

          //push times to the array
          theater.movies.push(movie);
        });

        //push the new item to the array
        self.itens.push(theater);
      });

      //return the object
      callback(undefined, {
        total   : self.itens.length,
        theaters: self.itens
      });

    });
  }).end();
};


findCine.prototype.near = function (local, callback) {
  'use strict';

  var url = this.urls.near.format(local);
  this.makeRequest(url, callback);
};

findCine.prototype.theaterId = function (local, id, callback) {
  'use strict';

  var url = this.urls.theaterId.format(local, id);
  this.makeRequest(url, callback);
};

findCine.prototype.movieId = function (local, id, callback) {
  'use strict';

  var url = this.urls.movieId.format(local, id);
  this.makeRequest(url, callback);
};

module.exports = new findCine();
