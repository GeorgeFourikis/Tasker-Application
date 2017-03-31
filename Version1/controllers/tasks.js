const express 	= require('express');
const router 	= express.Router();
const mongoose 	= require("mongoose");


//========================================
// Task Routes
//========================================
router.get('/', (req, res) => {
	res.render('main');
});

router.get('/see', (req, res) => {
	res.render('see_tasks');
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