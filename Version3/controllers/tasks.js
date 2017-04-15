const express 	= require('express');
const router 	= express.Router();
const mongoose 	= require("mongoose");
const passport = require('passport');
const LocalStrategy = require('passport-local');
const jwt = require ('jsonwebtoken')


const User = mongoose.model("User")

const createToken = function (req, res, next) {
	return function(err, user, info) {
		if(err) console.log(err)
		if(user) {
			var token = jwt.sign({ _id: user._id, email: user.email, username: user.username }, 'CLIENT_SECRET');
			res.json({token})
		} else {
			res.json({})
		}

	}
}

//handle register POST request
router.post('/register', (req, res) => {
	User.register(new User({ email: req.body.email, username: req.body.username}), req.body.password, function(err, user){
		console.log("/register", user)
        createToken(req, res)(err, user)
        if(err) console.log(err);
        else console.log(user);
    });
});


//login logic
//middleware
router.post("/login", (req, res,next) => {
	console.log(req.originalUrl, req.body)
	passport.authenticate("local", createToken(req, res))(req, res, next)
  }		
);


router.get("/logout", function(req, res){
  res.json({})
});




//========================================
// Task Routes
//========================================

router.get("/api/*", (req, res, next) => {
	console.log("/api/*", req.query)
	const token = req.query.token
	if (token) {
		try {
		  var decoded = jwt.verify(token, 'CLIENT_SECRET');
		  req.user = decoded
		  return next()
		} catch(err) {
			console.log(err)
			return res.json({})
		}
	} else {
		res.json({})
	}
})

router.post("/api/*", (req, res, next) => {
	console.log("/api/*", req.query)
	const token = req.body.token
	if (token) {
		try {
		  var decoded = jwt.verify(token, 'CLIENT_SECRET');
		  req.user = decoded
		  return next()
		} catch(err) {
			console.log(err)
			return res.json({})
		}
	} else {
		res.json({})
	}
})


router.get('/api/index', (req, res) => {
	mongoose.model('Tasks').find({userId: req.user._id}, (error, foundTasks) => {
		console.log(foundTasks)
		res.json(foundTasks)
	})
})


router.post('/api/new', (req, res) => {
	var newTask = {
		title: req.body.title,
		isCompleted: false,
		date: req.body.date,
		location: req.body.location,
		starred: 0,
		userId: req.user._id
	}
	mongoose.model('Tasks').create(newTask, (err, saved) => {
		if(err) console.log(err);
		else console.log(saved + " i saved something here");
		res.json(saved)
	})
});

router.get('/api/show/:_id', (req, res) => {
	mongoose.model('Tasks').find({_id: req.params._id}, (err, mess) => {
		if(err) res.status(400).json(err);
		res.json(mess)
	});
});


router.post('/api/update', (req, res) => {
	const updatedTask = {}
	for (let key in req.body) {
		if (req.body[key] !== undefined && key !== "_id") updatedTask[key] = req.body[key]
	}
	console.log(updatedTask, req.user, req.body)
	mongoose.model('Tasks').findOneAndUpdate({_id: req.body._id}, {$set: updatedTask}, {new: true}, (err, updated) => {
		if(err) res.status(400).json(err);
		console.log(updated)
		res.json(updated)
	});
});

router.post('/api/delete', (req, res) => {
	console.log(req.body._id);
	mongoose.model('Tasks').remove({_id: req.body._id}, (err, mess) => {
		if(err) res.status(400).json(err);
		res.json(mess)
	});
});


//========================================
// User Routes
//========================================
router.get('/user/dashboard', (req, res) => {
	res.render('user_dashboard');
});

module.exports = router;