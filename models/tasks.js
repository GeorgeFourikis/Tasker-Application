var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tasksSchema = new Schema({
	title: String,
	isCompleted: Boolean,
	location: String,
	date: Date,
	starred: Number
});

mongoose.model('Tasks', tasksSchema);