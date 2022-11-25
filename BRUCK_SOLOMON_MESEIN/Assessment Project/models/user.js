const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')
const userSchema = new mongoose.Schema({
    
    surname:{
        type: String,
        trim: true
    },
    givenname:{
        type: String,
        trim: true
    },
    title:{
        type: String,
        },
    gender:{
        type: String,
        trim: true
    },
    dob:{
        type: Date,
    },
    country:{
        type: String,
    },
    residence:{
        type: String,
        trim: true
    },
    nationality:{
        type: String,
        
    }
   
})
userSchema.plugin(passportLocalMongoose,{
    usernameField: 'uniqueno'
})
module.exports = mongoose.model('Regform',userSchema)