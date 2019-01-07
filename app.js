var home = require('./routes/home');

var express = require('express');
var fs = require('fs')
var stylus = require('stylus');
var nib = require('nib');
var path = require('path');
var app = express();

app.set('view engine', 'pug');

// Compile the stylus files into css
var dir = __dirname + '/public/css';
try {
  var list = fs.readdirSync(dir);
  /*list.forEach(function(file){
    if(path.extname(file)=='.styl'){
      var str = fs.readFileSync(__dirname + '/public/css/' + file, 'utf8');
      console.log('compile ' + file + ' into css');
      stylus(str)
        .use(nib())
        .render(function(err, css){
          fs.writeFileSync(__dirname + '/public/css/' + path.basename(file, '.styl') + '.css', css, 'utf8');
      });
    }
  });*/
} catch (error) {
  console.error(error);
}

app.get('/', home.home);

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
