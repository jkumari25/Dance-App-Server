const catchAsyncErrors= require("../middlewares/catchAsyncError");
const Contact= require("../model/contactModel");

// Post Contact Detail:-
exports.contactForm= catchAsyncErrors(async(req,res,next) => {

    const {name,email,phone,message}= req.body;

    const contact= new Contact({name,email,phone,message});

    await contact.save();

    res.status(201).json({
        success: true,
        contact
    })

})

// GET Contact Details:-
exports.getContactForm= catchAsyncErrors(async(req,res,next) => {
    const contact= await Contact.find();
  
    res.status(200).json({
       success:true,
       contact,
    })
  })