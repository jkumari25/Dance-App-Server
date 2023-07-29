const express= require('express');
const { postVideo, getVideo } = require('../controllers/videoController');


const router= express.Router();

router.route("/video").post(postVideo);
router.route("/getvideo").get(getVideo);

module.exports= router;