const postModel = require('../models/post.model');

async function createPostController(req,res){
    const file = req.file;
    //console.log("file received in controller: ", file);   

    const base64ImageFile = Buffer.from(file.buffer).toString('base64');

    console.log("base64ImageFile: ", base64ImageFile);
}

module.exports = {
    createPostController
}