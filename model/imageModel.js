const mongoose= require('mongoose');

const imageSchema= new mongoose.Schema({
    category:{type:String},
    image:{type:String}
})

module.exports= mongoose.model("Image", imageSchema);