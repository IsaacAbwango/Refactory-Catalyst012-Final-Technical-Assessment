// Dependencies
const express = require('express');
const passport = require('passport');
const config = require('./config/db')
const mongoose = require('mongoose');
const path = require('path');

//instantiations
const app = express();

// importing model
const Registration = require('./model/User');
//importing routes

const registerRoute = require('./routes/registerRoute')

// Setting up db connections
mongoose.connect(config.database,{ useNewUrlParser: true });
const db = mongoose.connection;

// Check connection
db.once('open', function(){

console.log('Connected to MongoDB');
});
// Check for db errors
db.on('error', function(err){
  console.error(err);
});


//Configurations
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//Passport configuration middleware
app.use(passport.initialize());
passport.use(Registration.createStrategy());
passport.serializeUser(Registration.serializeUser());
passport.deserializeUser(Registration.deserializeUser());



// Middlewares 
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
 app.use('/public/uploads', express.static(__dirname + '/public/uploads'));


//  use Routes
app.use('/', registerRoute)

// Routes
app.get('*', (req, res) =>{
    res.send('404! This is invalid URL.')
})
app.listen(3500, () => console.log('I only listen to 3500 port'));

