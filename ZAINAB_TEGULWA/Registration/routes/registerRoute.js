const express = require('express')

router = express.Router()

const registerStudent = require('../Model/registration')

// Regidtration Form get Route
router.get('/register', (req, res) => {
    res.render('registration')
})

// Registration Post Route
router.post('/register', async (req, res) => {
    
    let student = new registerStudent(req.body)
        await registerStudent.register(student, req.body, (error) => {
            if (error){
                throw error
            }
            res.redirect('/register');
        })
    } catch (error) => {
      res.status(400).send('Unable to Register Student')
      console.log(error)  
    }
)


module.exports = router