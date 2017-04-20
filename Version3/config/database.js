const mongoose = require('mongoose');
mongoose.connect(MongoLabUrl);

require("../models/tasks.js");
require('../models/users.js');
