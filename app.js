var home = require('./routes/home');

var express = require('express');
var expressVue = require("express-vue");
var path = require('path');
var app = express();

global.vueOptions = {
  template: {
    html : {
      start : "<!DOCTYPE html><html lang=\"en\">",
      end : "</html>"
    }
  },
  head : {
    title : "Gonendo's Website",
    styles : [{
        style : 'https://fonts.googleapis.com/css?family=Source+Code+Pro'
    }],
    metas : [
      {
        rel: 'icon', 
        href: 'https://static.none.dog/files/img/favicon.ico'
      }
    ]
  }
}

var vueOptions = {
  rootPath: path.join(__dirname, "views")
};
const expressVueMiddleware = expressVue.init(vueOptions);
app.use(expressVueMiddleware);

app.get('/', home.home);

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
