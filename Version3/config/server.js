//Require Express
var express = require("express");
var app = express();
var bodyParser= require('body-parser');
const LocalStrategy = require('passport-local');
const mongoose = require("mongoose");

var cors = require('cors')


app.use(cors())

//Set bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// initialize passport
const expressSession = require('express-session');
const passport = require('passport');

app.use(require("express-session")({
    secret: "Greeks are Awesome!!!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

const User = mongoose.model("User")

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



// Set view engine folder
app.set('view engine', 'ejs');
app.set('view cache', false);

//Set public folder
app.use('/public', express.static('public'));

//require Tasks controller
var tasksController = require('../controllers/tasks');
app.use('/', tasksController);


app.listen(3000, function(){
	console.log("Server listening on 3000");
});