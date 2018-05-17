const Movie = require('../models/movie');

const addMovie = movieInfo => new Movie(movieInfo).save();

const deleteMovie = _id => Movie.remove({ _id });

const getAllMovies = () => Movie.find();

module.exports = {
  addMovie,
  deleteMovie,
  getAllMovies,
}



