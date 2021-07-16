const singleImg = require('../controller/single-img');
const router = require("express").Router();

router.post("/single-image", singleImg.insertimg);
router.post("/multiple-image", singleImg.multipleinsertimg);

module.exports = router;