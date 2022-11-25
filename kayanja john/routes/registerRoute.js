const express = require('express');
const router = express.Router();

const Registration = require('../model/User');


router.get('/reg', (req, res) =>{
    res.render('form')
});


router.post('/reg', async (req, res) =>{
    try {
        const user = new Registration(req.body);
        await Registration.register(user, req.body.password, (error) =>{
            if (error) {
                throw  error;
            }
            res.redirect('/reg')
        });
        
    } catch (error) {
        res.status(404).send('Unable to register')
    }
});




module.exports = router;