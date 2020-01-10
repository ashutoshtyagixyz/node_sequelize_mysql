const http = require('http');
var express = require('express');
var logger = require('morgan');
var appRoutes = require('./routes/app.route');

//db connection
require('./src/database/connection');

var app = express();

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', appRoutes);

//app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;