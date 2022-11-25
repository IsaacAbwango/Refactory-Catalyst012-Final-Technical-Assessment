const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const config = require("./config/db");
const passport = require("passport");


const Registration = require("./models/user");


mongoose.connect(config.database, { useNewUrlParser: true });
const db = mongoose.connection;

db.once("open", function () {
    console.log("Connected to MongoDB");
});

const registerRoutes = require("./Routes/registerRoutes");

app.get("/", (req, res) => {
    res.render("Registration");
});

app.use("/", registerRoutes)

app.listen(5000, () => console.log("Listening to port 5000"));
