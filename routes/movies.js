var express = require('express');
var router = express.Router();
// Models
const Movie = require('../models/movie')

// Add Movie
router.post('/', (req, res, next) => {
  const movie = new Movie(req.body);
  const promise = movie.save();

  promise.then((data) => {
    res.json({status: 1});
  }).catch((err) => {
    res.json(err);
  });
});

// Get All Movies
router.get('/', (req, res, next) => {
  const promise = Movie.find({ });

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })
});

// Get Top 10 Movies
router.get('/top10', (req, res, next) => {
  const promise = Movie.find({ }).limit(10).sort({imdb: -1});

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })
});

// Get Single Movie
router.get('/:id', (req, res, next) => {
  const promise = Movie.findById(req.params.id);

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })
});

// Update Movie
router.put('/:id', (req, res, next) => {
  const promise = Movie.findByIdAndUpdate(req.params.id, req.body, {new: true});

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })
});

// Delete Movie
router.delete('/:id', (req, res, next) => {
  const promise = Movie.findByIdAndDelete(req.params.id);

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })
});

// Movies Between 2 Years
router.get('/between/:start_year/:end_year', (req, res, next) => {
  const {start_year, end_year} = req.params;
  const promise = Movie.find(
      {
        year: {'$gte': parseInt(start_year), '$lte': parseInt(end_year)}
      }
  );

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
})
module.exports = router;
