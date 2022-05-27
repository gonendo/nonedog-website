var home = require('./routes/home');

var express = require('express');
var expressVue = require("express-vue");
var path = require('path');
var app = express();

const vueOptions = {
  rootPath: path.join(__dirname, "views"),
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

const expressVueMiddleware = expressVue.init(vueOptions);
app.use(expressVueMiddleware);

app.get('/', home.home);

const port = process.env.port;
app.listen(port, () => console.log('server listening on port '+port));