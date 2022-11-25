const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/db');
const path = require('path')
const Regform = require('./models/user');
const passport = require('passport');

const expressSession = require('express-session')({
  secret:'shadow',
  resave:false,
  saveUninitialized:false,
});


app.get('/form', (req, res) => { // new
    res.render('reg-form');
  });
app.post('/form', (req, res) => { // new
    res.redirect('back');
  });
app.get('/', (req, res) => { // new
    res.send('Nothing to show.');
  });
  mongoose.connect(config.database,{useNewUrlParser: true});
  const db = mongoose.connection;
  // Check connection
  db.once('open', function(){
      console.log('Connected to MongoDB');
  });
  db.on('error', function(err){
    console.error(err);
  })

app.use(passport.initialize());
app.use(passport.session());
passport.use(Regform.createStrategy());
passport.serializeUser(Regform.serializeUser());
passport.deserializeUser(Regform.deserializeUser());

app.use(expressSession);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});

app.listen(4000, () => console.log('Listening on Port 4000'));