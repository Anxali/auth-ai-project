const express = require('express');
const router = express.Router();
const {register, login} = require('../controllers/auth.controller');

/**
 * POST /register
 * POST /login
 * get /user [protected]
 */

router.post('/register', register);

router.post('/login', login);

module.exports = router;