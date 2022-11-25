// DEPENDENCIES
//always the first line on top
const express = require("express");
const path = require('path')
const mongoose = require ('mongoose');
const config = require('./config/db');

//import user model
const Registration = require('./models/Urbanfarmerupload')

//Importing route files
const registrationRoutes = require('./routes/uf-routes');


// INSTATIATIONS
const app = express();
//setup database connections
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
// CONFIGURATIONS
// app.engine('pug',require('pug').__express);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// app.set('views', './views');

// MIDDLEWARE
// To parse URL encoded data we use a body parser
app.use(express.urlencoded({ extended: false }));
//caters for stattic files inside the public folder
app.use(express.static(path.join(__dirname, 'public')));
//caters for the uploaded images
app.use('/public/uploads', express.static(__dirname + '/public/uploads'))

//ROUTES
app.use('/',registrationRoutes);

// For invalid routes. always the last route in the server file(index.js).
app.get("*", (req, res) => {
	res.send("404! This is an invalid URL.");
});
// Bootstrapping Server always the last line of code in the server file(index.js).
app.listen(3000, () => console.log("We are listening on port 3000"));