const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
fullname: {
    type: String,
    // required: true,
    trim: true
},
givenname: {
    type: String,
    // required: true,
    trim: true
},
dateofBirth: {
    type: Date,
    // required: true
},
gender: {
    type: String,
},

country: {
    type: String,
    // required: true,
},

nationality: {
    type: String,
},

PlaceofResidence: {
    type: String,
},

});

userSchema.plugin(passportLocalMongoose, {
  usernameField: "fullname"
});

module.exports = mongoose.model("Registration", userSchema);