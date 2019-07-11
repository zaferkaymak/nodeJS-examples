const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie');

router.get('/', (req,res) => {
	Movie.find({})
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.get('/top10-list', (req,res) => {
	Movie.find({}).limit(10).sort({ imdb_score: -1 })
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.get('/:movie_id', (req,res,next) => { // Get movie according to movie id
	const movieID =  req.params.movie_id; 
	Movie.findById(movieID)
		.then((data) => {
			if(!data)
				next({'message': 'Movie not found', 'errorCode': 1});
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.delete('/:movie_id', (req,res,next) => {
	const movieID =  req.params.movie_id; 
	Movie.findByIdAndRemove(movieID)
		.then((data) => {
			if(!data)
				next({'message': 'Movie not found', 'errorCode': 1});
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
});


router.put('/:movie_id', (req,res,next) => {
	const movieID =  req.params.movie_id; 
	Movie.findByIdAndUpdate(
			movieID,
			req.body,
			{
				new: true
			}
		)
		.then((data) => {
			if(!data)
				next({'message': 'Movie not found', 'errorCode': 1});
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
});


router.get('/between/:start/:end', (req,res) => { // Movies between two date.
	const {start,end} = req.params;
	Movie.find({
			year: {'$gte' : parseInt(start), '$lte' : parseInt(end)}
		}).sort({year: -1})
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.post('/', (req, res) => { // Movie create function.
	const {title, imdb_score, category, year, country} = req.body;
	const movie = new Movie({
		title: title,
		imdb_score: imdb_score,
		category: category,
		year: year,
		country: country
	});
	
	movie.save()
		.then((data) => {
			res.json({
				status: 200
			});
		})
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;
