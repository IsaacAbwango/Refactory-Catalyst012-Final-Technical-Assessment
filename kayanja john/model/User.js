const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        trim: true
    },
    lastName:{
        type: String,
        trim: true
    },
    title:{
        type: String,
        trim: true
    },
    image:{
        type: String,
        trim: true
    },
   date:{
        type: String,
        trim: true
    },
    country:{
        type: String,
        trim: true
    },
    restype:{
        type: String,
        trim: true
    },
    nationality:{
        type: String,
        trim: true
    }








});
userSchema.plugin(passportLocalMongoose,{
    usernameField: 'userName',
});

module.exports = mongoose.model('Registration', userSchema); 