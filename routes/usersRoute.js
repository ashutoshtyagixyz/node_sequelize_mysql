const path = require('path');
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/', usersController.index );
router.get('/:userId', usersController.getUser );

router.post('/register', usersController.registration );
router.post('/update', usersController.update );
router.delete('/:userId')

module.exports = router;