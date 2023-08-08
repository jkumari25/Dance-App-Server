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

// DELETE Contact form
exports.deleteContact = catchAsyncErrors(async(req,res,next) =>{

    const contact = await Contact.findById(req.params.id)
    if(!contact){
        return next(new ErrorHandler("Contact not found",404)); 
     }
    
    await Contact.findByIdAndDelete(req.params.id,req.body);

    res.status(200).json({
    success: true,
    message:"Contact Deleted Successfully"
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