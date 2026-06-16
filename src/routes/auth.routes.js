const express = require('express');
const userModel = require('../models/user.model');

const router = express.Router();

/**
 * POST /register
 * POST /login
 * get /user [protected]
 */

router.post('/register', async(req,res)=>{
    const {username, password} = req.body;

    const user = await userModel.create({username, password}); 
    res.status(201).json({
        success: true,
        message: "User registered successfully",
        user
    });
});


module.exports = router;