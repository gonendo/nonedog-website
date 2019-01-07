var home = require('./routes/home');

var express = require('express');
var fs = require('fs')
var stylus = require('stylus');
var nib = require('nib');
var path = require('path');
var app = express();
global.css = '';

app.set('view engine', 'pug');

// Get the stylus files css content and save them in a global var
var dir = __dirname + '/stylesheets';
try {
  var list = fs.readdirSync(dir);
  list.forEach(function(file){
    if(path.extname(file)=='.styl'){
      var str = fs.readFileSync(__dirname + '/stylesheets/' + file, 'utf8');
      stylus(str)
        .use(nib())
        .render(function(err, css){
          global.css += '\n' + css;
      });
    }
  });
} catch (error) {
  console.error(error);
}

app.get('/', home.home);

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
