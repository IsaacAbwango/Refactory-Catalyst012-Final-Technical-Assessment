// Dependencies
const express = require('express');
const path = require('path');
const config = require('./config/db');
const multer = require('multer');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

  
  // Importing the user model
  const Form = require('./models/Student');
  
      
  // Importing the route file
  const studentRoutes = require('./routes/studentroutes');
  
  // Instantiations
  const app = express();
  
  //Setting up the database connection
  mongoose.connect(config.database,{ useNewUrlParser: true });
  const db = mongoose.connection;
  
  
  // Checking the database connection
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
  app.use(express.static(path.join(__dirname, 'public')));
  
  //Middlewares
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/public/uploads', express.static(__dirname + '/public/uploads'));

  
  // To parse URL encoded data
  // app.use(express.urlencoded({ extended: false }));
  app.use(bodyParser.urlencoded({ extended: true }));//New line
  app.use(bodyParser.json());//New line
  
  //Routes(for using imported routes)
  app.use('/', studentRoutes);
  
  
  // Should be the last route before the bootstrapping server
  app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
  });
  
  app.listen(4000, () => console.log('listening on port 4000'));