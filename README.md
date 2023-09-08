# Markdown Project
File uploading website

## Description
A simple method of using multer to upload and save files through a webpage.

## Getting Started
Dependencies: Express, Ejs, Nodemon, Multer.
Windows 10+
Any modifications needed to be made to files/folders: Just make sure to have the proper file paths as I have in the code.
Executing program: Just run node app.js in the terminal
If there's an issue make sure you have all the dependencies downloaded through the terminal

### Step 1: Install dependencies

```
npm i express ejs nodemon multer 
```

### Step 2: Import dependencies

```javascript
const express = require('express');
const app = express();
const multer  = require('multer')
```

### Step 3: Configure multer

```javascript
const upload = multer({ dest: 'public/uploads/' })
```

### Step 4: Define routes

```javascript
app.get('/', (req, res) => {
    res.render('upload');
});

app.post('/profile', upload.single('uploaded_file'), function (req, res, next) {
    console.log(req.file)
    res.redirect('/profile')
  })
  
  app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  })
  
  const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
  app.post('/cool-profile', cpUpload, function (req, res, next) {
  })

    app.post('/upload', upload.single('file'), function(req, res) {
     if (!req.file) {
        res.status(400).send('No file uploaded.');
        return;
      }
        res.send('File uploaded successfully!');
     });
  

```

### Step 5: Define view

```javascript
app.set("view engine", "ejs");
app.set("views", "./views");
```

### Step 6: Create upload.ejs view

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload Files</title>
</head>
<body>
    <form action="/profile" enctype="multipart/form-data" method="post">
        <div class="form-group">
          <input type="file" class="form-control-file" name="uploaded_file">
          <input type="submit" value="Upload File" class="btn btn-default">            
        </div>
    </form>
</body>
</html>
```

### Step 7: Start server

```javascript
app.listen(port, () => {
    console.log(`App listening on: http://localhost:${port}`)
})
```
