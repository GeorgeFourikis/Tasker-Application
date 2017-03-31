//Require Express
var express = require("express");
var app = express();
var bodyParser= require('body-parser');


//Set bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


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