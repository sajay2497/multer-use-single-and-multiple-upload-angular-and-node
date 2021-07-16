const multer = require('multer');
const singleImg = require('../modals/single-img');
const multipleImg = require('../modals/multiple-img');

let storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        // return cb(null, Date.now() + "-" + file.originalname);
        const fileName = Date.now() + "-" + file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName)
    },
});

// let upload = multer({ storage: storage });
var uploadsingleimg = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg"
        ) {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
        }
    },
}).single('img');

let insertimg = async (req, res) => {
    // console.log(Math.floor(Math.random() * (10000 - 99999) + 99999));
    // return
    uploadsingleimg(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            res.status(502).json({
                status: 0,
                message: 'Img Not Uploaded!!'
            })
        } else if (err) {
            // An unknown error occurred when uploading.
            res.status(502).json({
                status: 0,
                message: 'Img Not Uploaded!!'
            })

        }

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
    });

}


var uploadsmultipleimg = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg"
        ) {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
        }
    },
}).array('img');

let multipleinsertimg = async (req, res) => {
    // console.log('call');
    // console.log(req.files);
    // return

    uploadsmultipleimg(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            res.status(502).json({
                status: 0,
                message: 'Img Not Uploaded!!'
            })
        } else if (err) {
            // An unknown error occurred when uploading.
            res.status(502).json({
                status: 0,
                message: 'Img Not Uploaded!!'
            })

        }

        try {
            let all = req.files
            let randid = Math.floor(Math.random() * (10000 - 99999) + 99999);
            for (let i = 0; i < all.length; i++) {
                const imgname = all[i].filename;
                // console.log(element);
                let newdata = new multipleImg({
                    proid: randid,
                    image: imgname
                });
                await newdata.save();

            }

            res.status(201).json({
                status: 1,
                message: 'Multiple Image successfully uploaded!!'
            })

        } catch (error) {
            res.status(500).json({
                status: 0,
                message: error
            })
        }

    })


}
module.exports = { insertimg, multipleinsertimg }