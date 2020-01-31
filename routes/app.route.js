const path = require('path');
const express = require('express');
const router = express.Router();
const all_data_type = require('../models/allDatatypeModel');


const rootDir = require('../util/path');


router.get('/', function (req, res, next) {

    res.status(200).json({
    	"status"  : true,
    	"message" : "request received."
    })  
});

router.get('/home', function(req,res,next){
    res.sendFile(path.join(rootDir ,'views','home.html'))
});

router.get('/all-data-type', function(req,res,next){

});

module.exports = router;