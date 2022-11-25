const express= require('express');
const router = express.Router(); 
const multer = require('multer');

// Importing the User Model or Schema
const UrbanFarmerUpload = require('../models/Urbanfarmerupload');

const { get } = require('mongoose');
// see comments.txt



// image upload
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
  cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
  cb(null, file.originalname);
  }
  });
  
  // instantiate variable upload to store multer functionality to upload image
  var upload = multer({ storage: storage }) 



router.get("/ufarmerupload", (req, res) => {
  try {
    res.render("form");
  } catch (error) {
    res.status(400).send('We are un able to get the user');
  }
});
  
router.post("/ufarmerupload", upload.single('image'), async (req, res) => {
  console.log(req.body);
  try {
    const user = new UrbanFarmerUpload(req.body);
    user.image = req.file.path;
    await user.save();
      res.redirect('/ufarmerupload');
    }
    catch (error) {
      res.status(400).send("Sorry we were unable to save.");
      console.log(error);
  }
});


module.exports = router; 
