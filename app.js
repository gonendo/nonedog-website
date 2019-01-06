var express = require('express');
var app = express();

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  console.log(app.get('views'));
  res.render('index', { title: "Gonendo's website", message: "WIP"});
});

app.post('/', function(req, res) {
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
