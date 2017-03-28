const express 	= require('express');
const router 	= express.Router();
const mongoose 	= require("mongoose");


//========================================
// Task Routes
//========================================
router.get('/', (req, res) => {
	res.render('main');
});

router.post('/', (req, res) => {
	mongoose.model('Tasks').create({ 
		title: 'i am awesome',  
		isCompleted: false
	}, (err, saved) => {
		  if (err) return err;
		  else console.log("i saved that mate " + saved);
	});
});

router.get('/index', (req, res) => {
	mongoose.model('Tasks').find({}, (error, foundTasks) => {
		res.json(foundTasks)
	})
})

router.get('/new', (req, res) => {
	res.render('new_task');
});

router.post('/new', (req, res) => {
	var newTask = {
		title: req.params.title,
		isCompleted: false
	} 
	mongoose.model('Tasks').create(newTask, (err, saved) => {
		if(err) console.log(err);
		else console.log(saved + " i saved something here");
	})
});

router.get('/update', (req, res) => {
	res.render('update_task');
});

router.post('/update', (req, res) => {
	//my code here
});

router.get('/delete', (req, res) => {
	res.render('delete_task');
});

router.post('/delete', (req, res) => {
	//code again here
});


//========================================
// User Routes
//========================================
router.get('/user/dashboard', (req, res) => {
	res.render('user_dashboard');
});

module.exports = router;