const postModel = require('../models/post.model');
const generateCaption = require('../service/ai.service').generateCaption;

async function createPostController(req,res){
    const file = req.file;
    //console.log("file received in controller: ", file);   

    const base64ImageFile = Buffer.from(file.buffer).toString('base64');

    //console.log("base64ImageFile: ", base64ImageFile);

    const caption = await generateCaption(base64ImageFile);
    console.log("Generated caption: ", caption);
    res.json({
        caption
    });
}

module.exports = {
    createPostController
}