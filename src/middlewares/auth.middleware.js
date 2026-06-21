const jwt = require("jsonwebtoken");
const userModel = require('../models/user.model');

async function authMiddleware(req,res,next){
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            success: false,
            message: "Unauthorized, please login first"
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET); //gives user id

        const user = await userModel.findById({_id: decoded.userId});
        req.user = user;
        
    }catch(err){
        res.status(401).json({
            success: false,
            message: "Invalid token, please login first"
        })
    }
}   

module.exports = authMiddleware;