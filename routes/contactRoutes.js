const express= require('express');
const { contactForm, getContactForm } = require('../controllers/contactController');


const router= express.Router();

router.route("/contact").post(contactForm);
router.route("/getcontact").get(getContactForm);

module.exports= router;