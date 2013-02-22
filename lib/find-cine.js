/*!
 * find-cine - lib/find-cine.js
 * Copyright(c) 2013 Vitor Leal <vitorleal1@gmail.com>
 * MIT Licensed
 */

//Format text passing location and the id
String.prototype.format = function() {
  var content = this;
  for (var i = 0; i < arguments.length; i++) {
    var replacement = '{{' + i + '}}';
    content = content.replace(replacement, arguments[i]);
  }
  return content;
};

//Module dependencies
var jsdom   = require('jsdom'),
    request = require('request');


var findCine = function () {
  this.baseUrl = "http://www.google.com/movies";
  this.urls    = {
    near     : this.baseUrl + "?near={{0}}",
    theaterId: this.baseUrl + "?near={{0}}&tid={{1}}",
    movieId  : this.baseUrl + "?near={{0}}&mid={{1}}"
  };
  this.itens = [];
  this.item  = function () {
      this.theater = {
        name: "",
        address: "",
        id: ""
    },
    this.movies = []
  };
  this.movie = function () {
    this.title    = "",
    this.id       = "",
    this.duration = "",
    this.times    = []
  }

  return this;
}

findCine.prototype.makeRequest = function(url, callback) {
  var self = this;

  //request the URl
  request({
    method: 'POST',
    encoding: 'binary',
    uri: encodeURI(url)
  }, function(err, res, body) {
    self.processRequest(body, function (err, result) {
      callback(undefined, {
        total: result.length,
        theaters: result
      });
      //clean the array
      self.itens = [];
      return;
    });
  });
}

findCine.prototype.processRequest = function(body, callback) {
  var self = this;

  //parse the result to get the info
  jsdom.env(body, ['http://code.jquery.com/jquery-1.5.min.js'], function(err, window) {
    var theaters = window.$('.theater');

    theaters.each(function (key, value) {
      var $ = window.$,
          cinema = new self.item(),
          movies = $(this).find('.showtimes .movie');

      cinema.theater.name    = $(this).find('.desc .name a').text();
      cinema.theater.address = $(this).find('.desc .info').text();
      cinema.theater.id      = $(this).find('.desc').attr('id').split('_')[1];

      movies.each(function (key, value) {
        var peli      = new self.movie(),
            horarios  = $(this).find('.times > span');

        peli.title    = $(this).find('.name a').text();
        peli.duration = $(this).find('.info').text();
        peli.id       = $(this).find('.name a').attr('href').split('id=')[1];

        horarios.each(function (key, value) {
          peli.times.push($.trim($(this).text().replace('&nbsp', '')));
        });

        cinema.movies.push(peli);
      });
      //push the new item to the array
      self.itens.push(cinema);
    });

    //send the array in the callback
    callback(undefined, self.itens);
    return;
  });
}


findCine.prototype.near = function(local, callback) {
  var url = this.urls.near.format(local);
  this.makeRequest(url, callback);
};

findCine.prototype.theaterId = function(local, id, callback) {
  var url = this.urls.theaterId.format(local, id);
  this.makeRequest(url, callback);
};

findCine.prototype.movieId = function(local, id, callback) {
  var url = this.urls.movieId.format(local, id);
  this.makeRequest(url, callback);
};

module.exports = new findCine;
