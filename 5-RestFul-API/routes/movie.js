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

router.get('/:movie_id', (req,res) => {
	const movieID =  req.params.movie_id; 
	Movie.findById(movieID)
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.post('/', (req, res) => {
	const {title, imdb_score, category, year, country} = req.body;
	const movie = new Movie({
		title: title,
		imdb_score: imdb_score,
		category: category,
		year: year,
		country: country
	});
	// movie.save((err,data) => {
	// 	if(err)
	// 		res.json(err);
	// 	res.json({
	// 		status: 200
	// 	});
	// });

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
