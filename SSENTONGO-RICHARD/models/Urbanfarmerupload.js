const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  surname: {
  type: String
},
givenname: {
  type: String
  
},
title: {
  type: String
},
residence: {
  type: String
},
dob: {
  type: Date
},
image: {
  type: String
},
country: {
  type: String
},
nationality: {
  type: String 
},
residence: {
  type: String 
}
})

module.exports = mongoose.model('UrbanFarmerUpload', userSchema);