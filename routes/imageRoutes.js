const express= require('express');
const { postImage, getImage } = require('../controllers/imageController');


const router= express.Router();

router.route("/image").post(postImage);
router.route("/getimage").get(getImage);

module.exports= router;