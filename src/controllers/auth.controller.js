const express = require('express');
const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

async function register(req, res) {
    const {username, password} = req.body;
    
        const existingUser = await userModel.findOne({username});
        if(existingUser){
            return res.status(409).json({
                success: false,
                message: "Username already exists"
            });
        }
    
        const user = await userModel.create({username, password}); 

        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
        res.cookie('token', token);

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user
        });
      
}

async function login(req, res) {
    const {username, password} = req.body;

    const user = await userModel.findOne({username});

    if(!user){
        return res.status(400).json({
            success: false,
            message: "User not found"
        });
    }

    const isPasswordValid = user.password === password;
    if(!isPasswordValid){
        return res.status(400).json({
            success: false,
            message: "Invalid password"
        });
    }

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
    res.cookie('token', token);

    res.status(200).json({
        success: true,
        message: "User logged in successfully",
        user
    });
}

module.exports = {
    register,
    login
};