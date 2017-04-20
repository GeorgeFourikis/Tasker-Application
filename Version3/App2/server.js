//Require Express
var express = require("express");
var path = require("path")

var app = express();

//Set public folder
app.use('/', express.static('public'));

app.use("*",(req, res) => {
	res.sendFile(path.join(__dirname, "/public/index.html"))
})

app.listen(process.env.PORT || '3001', function(){
	console.log("Server listening on 3001");
});