const express = require('express');
const router = express.Router();

router.get('/form', (req, res) => {
    res.render('user-reg');
})

router.post('/form', (req, res) => {
    console.log(req.body);
})

//Always the last line.
module.exports = router;