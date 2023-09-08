const express = require('express');
const app = express();
const multer  = require('multer')
const upload = multer({ dest: 'public/uploads/' })
app.use(express.json())
app.use(express.static("./public"))
app.set("view engine", "ejs");
app.set("views", "./views");

const port = 3000;

app.get('/', (req, res) => {
    res.render('upload');
});

app.post('/profile', upload.single('uploaded_file'), function (req, res, next) {
    console.log(req.file)
    res.redirect('/')
  })
  
  app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  })
  
  const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
  app.post('/cool-profile', cpUpload, function (req, res, next) {
  })


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  


app.post('/upload', upload.single('file'), function(req, res) {
    if (!req.file) {
        res.status(400).send('No file uploaded.');
        return;
    }
        res.send('File uploaded successfully!');
  });
  



app.listen(port, () => {
    console.log(`App listening on: http://localhost:${port}`)
})




