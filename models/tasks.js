var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tasksSchema = new Schema({
	title: String,
	isCompleted: Boolean
});

mongoose.model('Tasks', tasksSchema);