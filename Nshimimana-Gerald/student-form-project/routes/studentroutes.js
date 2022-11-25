const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Importing the user model
const Form = require('../models/Student');

// image upload
// diskStorage is a method that accesses your computer.
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
});

// instantiate variable upload to store multer functionality to upload image
var upload = multer({ storage })


// Writing a get route 
router.get('/reg', (req, res) => {
    res.render('regform');
    });

// Writing a Post route
// router.post('/reg', async (req, res) => {
//     const register = new Form(req.body);
//     console.log(req.body);
//     await Form.register(register, req.body.password, (err) => {
//         if (err) {
//             res.status(400).render("regform");
//             console.log(err);
//         } else {
//             res.redirect("/reg")
//         }
//     })
// });

router.post('/reg', upload.single('image'), async (req, res, next) => {
    console.log(req.file);
    try {
        const students = new Form(req.body);
        students.image = req.file.path;
        console.log('This is my produce', produce);
            await students.save();
               res.redirect('/reg')
        }      
        catch (error){
         res.status(400).send('Product not saved');
         console.log(error)
    }
});




// Always MUST always be the last line in every routes file.
module.exports = router;
