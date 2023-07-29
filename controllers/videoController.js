const catchAsyncErrors= require("../middlewares/catchAsyncError");
const Video= require("../model/videoModel");

// Post Video :-
exports.postVideo= catchAsyncErrors(async(req,res,next) => {

    const {category,video}= req.body;

    const videos= new Video({category,video});

    await videos.save();

    res.status(201).json({
        success: true,
        videos
    })

})

// GET Video:-
exports.getVideo= catchAsyncErrors(async(req,res,next) => {
    const videos= await Video.find();
  
    res.status(200).json({
       success:true,
       videos,
    })
  })