const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/task_app');

require("../models/tasks.js")
require('../models/users.js');
