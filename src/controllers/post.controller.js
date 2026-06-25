const postModel = require('../models/post.model');

async function createPostController(req,res){
    const file = req.file;
    console.log("file received in controller: ", file);   
}

module.exports = {
    createPostController
}