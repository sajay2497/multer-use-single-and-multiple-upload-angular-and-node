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
// let upload = multer({ storage: storage });
// var upload = multer({
//   storage: storage,
//   // fileFilter: (req, file, cb) => {
//   //   if (file.mimetype == "image/png") {
//   //     cb(null, true);
//   //   } else {
//   //     cb(null, false);
//   //     return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//   //   }
//   // }
// });
// app.post('/profile', upload.single('avatar'), function (req, res, next) {
//     console.log(req.file);
//     console.log(req.body);
//     // try {
//     //   console.log('call');
//     //   console.log(req.file);
//     // } catch (error) {
//     //   console.log('error', error);
//     // }
//     // req.file is the `avatar` file
//     // req.body will hold the text fields, if there were any
// })


const SingleimgRouter = require('./router/single-img');

app.use('/api/image', SingleimgRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})