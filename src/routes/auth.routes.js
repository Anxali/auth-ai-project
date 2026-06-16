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

    const existingUser = await userModel.findOne({username});
    if(existingUser){
        return res.status(409).json({
            success: false,
            message: "Username already exists"
        });
    }

    const user = await userModel.create({username, password}); 
    res.status(201).json({
        success: true,
        message: "User registered successfully",
        user
    });

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
    res.cookie('token', token)

});


module.exports = router;