const express = require('express')
const app = express()
const port = 3000
var multer = require('multer')
// var upload = multer({ dest: 'uploads/' })
const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/image_upload';
mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  //poolSize: 10
})

let connection = mongoose.connection
connection.on('err', () => {
  console.log('Error in Database Connection...')
})

connection.on('connected', () => {
  console.log('Database Connection Success...')
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json());
// app.use(express.urlencoded({extended: false}))
// let storage = multer.diskStorage({
//   destination: "upload",
//   filename: (req, file, cb) => {
//     // return cb(null, Date.now() + "-" + file.originalname);
//     const fileName = Date.now() + "-" + file.originalname.toLowerCase().split(' ').join('-');
//     cb(null, fileName)
//   },
// });
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname.toLowerCase().split(' ').join('-'));
  },
});
// let upload = multer({ storage: storage });
// var upload = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype == "image/png") {
//       cb(null, true);
//     } else {
//       cb(null, false);
//       return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//     }
//   }
// }).single('avatar');
var upload = multer({
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
}).single('avatar');
app.post('/profile', function (req, res, next) {
  // console.log(req.file);
  // console.log(req.body);
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      res.status(502).json({
        status: 0,
        message: 'not uplad'
      })
    } else if (err) {
      // An unknown error occurred when uploading.
      res.status(502).json({
        status: 0,
        message: 'not uplad'
      })

    }

    console.log(req.file)

    // Everything went fine.
  })
})


const SingleimgRouter = require('./router/single-img');

app.use('/api/image', SingleimgRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})