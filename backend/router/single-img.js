const singleImg = require('../controller/single-img');
const router = require("express").Router();

router.post("/single-image", singleImg.insertimg);
router.post("/multiple-image", singleImg.multipleinsertimg);
router.get('/getallsingleimg', singleImg.getallsingleimg);
router.get('/getsingleimg/:id', singleImg.getsingleimg);
router.get('/multipleimggetall', singleImg.multipleimgget);

module.exports = router;