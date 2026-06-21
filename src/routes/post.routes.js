const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const userModel = require('../models/user.model');
const authMiddleware = require('../middlewares/auth.middleware');

//protected api
router.post('/', authMiddleware);


module.exports = router;