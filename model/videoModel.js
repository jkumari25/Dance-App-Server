const mongoose= require('mongoose');

const videoSchema= new mongoose.Schema({
    category:{type:String},
    video:{type:String}
})

module.exports= mongoose.model("Video", videoSchema);