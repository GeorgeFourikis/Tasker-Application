const express 	= require('express');
const router 	= express.Router();
const mongoose 	= require("mongoose");
const passport = require('passport');
const LocalStrategy = require('passport-local');

const User = mongoose.model("User")

//========================================
// Main route
//========================================
router.get('/', (req, res, next) => {
		next()
	}, isLoggedIn, (req, res) => {
	console.log(req.user)
	res.render('main');
});

//TESTING ROUTES
router.get('/map', (req, res) => {
	res.render('maps');
});

router.get('/modal', (req, res) => {
	res.render('modal');
});



//========================================
// Login routes
//========================================
//show sign-up route
router.get('/register', (req, res) => {
	res.render('sign_up');
});

//handle register POST request
router.post('/register', (req, res) => {
	User.register(new User({ email: req.body.email, username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('sign_up');
        }
        console.log("Pre authenticate")
	    passport.authenticate("local")(req, res, function () {
	    	console.log("registered")
	    	res.redirect("/")
		});
    });
});


//render login form
router.get("/login", function(req, res){
   res.render("login");
});

//login logic
//middleware
router.post("/login", (req, res,next) => {
		console.log(req.body)
		next()
	}
	, passport.authenticate("local", {
	    successRedirect: "/",
	    failureRedirect: "/login"
	})
);


router.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
});


function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");
}



//========================================
// Task Routes
//========================================
router.get('/see', (req, res) => {
	res.render('see_tasks');
});


router.get('/api/index', (req, res) => {
	mongoose.model('Tasks').find({}, (error, foundTasks) => {
		console.log(foundTasks)
		res.json(foundTasks)
	})
})

router.get('/api/show/:id', (req, res) => {
	mongoose.model('Tasks').findOne({_id: req.params.id}, (error, foundTask) => {
		console.log(foundTask)
		res.json(foundTask)
	})
})


router.get('/new', (req, res) => {
	res.render('new_task');
});

router.post('/api/new', (req, res) => {
	var newTask = {
		title: req.body.title,
		isCompleted: false,
		date: req.body.date,
		location: req.body.location,
		starred: 0
	}
	mongoose.model('Tasks').create(newTask, (err, saved) => {
		if(err) console.log(err);
		else console.log(saved + " i saved something here");
		res.json(saved)
	})
	// return ['redirect' => route('/see')];
});

router.get('/update/:id', (req, res) => {
	res.render('update_task');
});

router.post('/api/update', (req, res) => {
	const updatedTask = {}
	for (let key in req.body) {
		if (req.body[key] !== undefined && key !== "_id") updatedTask[key] = req.body[key]
	}
	mongoose.model('Tasks').update({_id: req.body._id}, {$set: updatedTask}, (err, updated) => {
		if(err) res.status(400).json(err);
		res.json(updated)
	});
});

router.get('/delete', (req, res) => {
	res.render('delete_task');
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