var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).json({
    	"status"  : true,
    	"message" : "request received."
    })  
});

module.exports = router;