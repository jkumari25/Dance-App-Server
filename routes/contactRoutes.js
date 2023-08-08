const express= require('express');
const { contactForm, getContactForm, deleteContact } = require('../controllers/contactController');


const router= express.Router();

router.route("/contact").post(contactForm);
router.route("/getcontact").get(getContactForm);
router.route("/contact/:id").delete(deleteContact);

module.exports= router;