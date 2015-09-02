var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
  extended: true
})); 
app.use('/', routes);

module.exports = app;
