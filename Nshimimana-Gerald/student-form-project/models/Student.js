const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const studentSchema = new mongoose.Schema({

    surname: {
        type: String,
        trim: true
    },

    givenname: {
        type: String,
        trim: true
    },

    title: {
        type: String,
        trim: true
    },

    image: {
        type: String
    },

    gender: {
        type: String,
        trim: true
    },

    dateofbirth: {
        type: String,
        trim: true
    },

    country: {
        type: String,
        trim: true
    },

    residence: {
        type: String,
        trim: true
    },

    nationality: {
        type: String,
        trim: true
    }
});

studentSchema.plugin(passportLocalMongoose, {
 usernameField: 'surname'
});
module.exports = mongoose.model('Form', studentSchema);