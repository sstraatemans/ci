
var Twitter = require('node-tweet-stream')
  , t = new Twitter({
    consumer_key: 'PQDgUxVGENVQ3rt509spkdK9U',
    consumer_secret: 'XXgK6Jsruiz7XKTHTDg4Ri0jGtCpdb1YrVo7DR91ABBPvH9K22',
    token: '495296060-7Wl725Xs9JkgQ9kgkpK5A0ONVVzOwgXmb2iPxEjn',
    token_secret: 'szCYi4EHHetAnLeifxMKLKc8nzkmIT0iXoxpDWi4GhPWJ'
  });



t.on('error', function (err) {
  console.log('Oh no');
});





var express = require('express');
var expressWs = require('express-ws');




var expressWs = expressWs(express());
var app = expressWs.app;

app.get('/', function(req, res, next){


});

app.ws('/', function(ws, req) {



  ws.on('message', function(msg) {
    console.log(msg);
    t.track(msg);
    t.on('tweet', function (tweet) {
      console.log('send');
      ws.send(JSON.stringify(tweet));
    });
  });

});


app.listen(3000);
