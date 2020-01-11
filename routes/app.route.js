const path = require('path');
const express = require('express');
const router = express.Router();

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

module.exports = router;