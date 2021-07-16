const singleImg = require('../controller/single-img');
const router = require("express").Router();

router.post("/single-image", singleImg.upload.single('img'), singleImg.insertimg);

module.exports = router;