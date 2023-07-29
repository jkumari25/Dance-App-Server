const catchAsyncErrors= require("../middlewares/catchAsyncError");
const Image= require("../model/imageModel");

// Post Image :-
exports.postImage= catchAsyncErrors(async(req,res,next) => {

    const {category,image}= req.body;

    const images= new Image({category,image});

    await images.save();

    res.status(201).json({
        success: true,
        images
    })

})

// GET Image:-
exports.getImage= catchAsyncErrors(async(req,res,next) => {
    const images= await Image.find();
  
    res.status(200).json({
       success:true,
       images,
    })
  })