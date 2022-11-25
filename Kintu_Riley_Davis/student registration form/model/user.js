const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	surName: {
		type: String,
		trim: true,
		require: true,
	},

	givenName: {
		type: String,
		trim: true,
		require: true,
	},

	image: {
		type: String,
		require: true,
	},

    title: {
		type: String,
		require: true,
	},

    gender1: {
		type: String,
		require: true,
	},

    gender2: {
		type: String,
		require: true,
	},

    dob: {
		type: String,
		require: true,
	},

    country: {
		type: String,
		require: true,
	},

    residence: {
		type: String,
		require: true,
	},

    nationality: {
		type: String,
		require: true,
	}
});

module.exports = mongoose.model("Registration", userSchema);
