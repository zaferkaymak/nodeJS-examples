const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../models/Users');


router.get('/', (req, res, next) => {
	res.render('index', { title: 'Express' });
});

router.post('/register', (req, res, next) => {
	const {username, password} = req.body;
	bcrypt.hash(password, 10).then((hash) => {
		
		const user = new Users({
			username,
			password: hash
		});
		const userPromise = user.save();
		userPromise.then((data) => {
			console.log(data);
			res.json(data);
		}).catch((err) => {	
			console.log(err);
			res.json(err);
		});
		
	});	
});

router.post('/authenticate', (req, res, next) => {
	const {username, password} = req.body;
	Users.findOne({
		username
	},(err,user) => {
		if(err)
			throw err;
		if(!user){
			res.json({
				status: false,
				message: 'User not found'
			})
		}else {
			bcrypt.compare(password, user.password).then((result) => {
				if(!result){
					res.json({
						status: false,
						message: 'Warn password'
					});
				}else {
					const payload = {username};
					const token = jwt.sign(payload, req.app.get('api_secret_key'), {
						expiresIn: 720 // 12 hours
					});
					res.json({
						status:true,
						token
					});
				}
			});
			
		}
	});
	
});



module.exports = router;
