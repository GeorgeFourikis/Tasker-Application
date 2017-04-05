const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PassportLocalMongoose = require("passport-local-mongoose");


// var validateEmail = function(email) {
//     var re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]+$/;
//     return re.test(email)
// };

var usersSchema = new Schema({
	username: String,
	email: String,
	password: String
});

usersSchema.plugin(PassportLocalMongoose);


mongoose.model("User", usersSchema);
