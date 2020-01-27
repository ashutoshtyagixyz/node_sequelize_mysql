const path = require('path');
const http = require('http');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

var appRoutes = require('./routes/app.route');
const userRoutes = require('./routes/usersRoute');

//db connection
require('./src/database/connection');

var app = express();

//app.use(logger('dev'));
app.use(bodyParser.urlencoded( { extended:false } ));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', appRoutes);
app.use('/users',userRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});


module.exports = app;