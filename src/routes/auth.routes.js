const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

/**
 * POST /register
 * POST /login
 * get /user [protected]
 */

router.post('/register', authController.register);


module.exports = router;