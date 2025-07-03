const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const _ = require('lodash');
const path = require('path');

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// Upload multiple images
router.post('/upload-multiple', upload.array('images', 10), (req, res) => {
  res.send({ message: 'Files uploaded successfully', files: req.files });
});

// Get random images
router.get('/random-images', (req, res) => {
  fs.readdir('uploads', (err, files) => {
    if (err) return res.status(500).send('Error reading files.');
    const randomFiles = _.sampleSize(files, 3);
    const fileUrls = randomFiles.map(file => `http://localhost:3000/uploads/${file}`);
    res.send(fileUrls);
  });
});

// Upload dog image
router.post('/upload-dog', upload.single('dogImage'), (req, res) => {
  res.send({ message: 'Dog image uploaded successfully', file: req.file });
});

module.exports = router;

