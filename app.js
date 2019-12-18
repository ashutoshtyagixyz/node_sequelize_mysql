const http = require('http');
var express = require('express');

//db connection
require('./src/database/connection');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;