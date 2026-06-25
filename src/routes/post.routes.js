const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const userModel = require('../models/user.model');
const authMiddleware = require('../middlewares/auth.middleware');
const postController = require('../controllers/post.controller');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() }); // Specify the destination folder for uploaded files

//protected api
router.post('/', authMiddleware, upload.single('image'), postController.createPostController);


module.exports = router;