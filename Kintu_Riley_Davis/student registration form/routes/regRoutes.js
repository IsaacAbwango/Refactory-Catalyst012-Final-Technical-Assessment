const express = require("express");
const router = express.Router();
const multer = require("multer");

// Importing Model
const Registration = require("../model/user");

// image upload
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/uploads");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

// instantiate variable upload to store multer functionality to upload image
var upload = multer({ storage: storage });

router.get("/srg", (req, res) => {
	res.render("regForm");
});

router.post("/srg", async (req, res) => {
	const register = new Registration(req.body);
	console.log(req.body);
	await register.save((err) => {
		if (err) {
			res.status(400).render("regForm");
			console.log(err);
		} else {
			res.redirect("/srg");
		}
	});
});

module.exports = router;