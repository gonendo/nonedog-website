var home = require('./routes/home');

var express = require('express');
var stylus = require('stylus');
var nib = require('nib');
var app = express();

app.set('view engine', 'pug');

function compile(str, path) {
  return stylus(str)
      .set('filename', path)
      .use(nib())
}

app.use(stylus.middleware({
  src: __dirname + '/public',
  compile: compile
}));

app.use(express.static(__dirname + '/public'));

app.get('/', home.home);

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
