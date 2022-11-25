//Dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const config = require("./config/db");

// importing user model
const Registration = require("./model/user");

// importing route files
const regRoutes = require("./routes/regRoutes");

// instantiations
const app = express();
// data base setup
mongoose.connect(config.database, { UseNewUrlParser: true });
const database = mongoose.connection;

// check data base connection
database.once("open", function () {
	console.log("Connected to MongoDb");
});

// data base error
database.on("error", function (err) {
	console.error(err);
});

// configs
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));
app.use("/public/css", express.static(__dirname + "/public/css"));

// Middleware
app.use("/", regRoutes);

//Always the second last line in the Express
app.get("*", (req, res) => {
	res.send("404! This invalid URL");
});

//ALWAYS THE LAST LINE IN THE EXPRESS SERVER
app.listen(4200, () => console.log("listening on port 4200!"));
