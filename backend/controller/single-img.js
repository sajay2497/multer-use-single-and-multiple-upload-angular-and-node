const multer = require('multer');
const singleImg = require('../modals/single-img');

let storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        // return cb(null, Date.now() + "-" + file.originalname);
        const fileName = Date.now() + "-" + file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName)
    },
});

let upload = multer({ storage: storage });

let insertimg = async (req, res) => {
    // console.log(Math.floor(Math.random() * (10000 - 99999) + 99999));
    // return
    try {
        let newdata = new singleImg({
            proid: Math.floor(Math.random() * (10000 - 99999) + 99999),
            image: req.file.filename
        });
        const resdata = await newdata.save();
        res.status(201).json({
            status: 1,
            data: resdata,
            message: 'successfully uploaded!!'
        })

    } catch (error) {
        res.status(500).json({
            status: 0,
            message: error.message
        })
    }
}
module.exports = {
    insertimg, storage, upload


}