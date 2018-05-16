const { Movie } = require('../db');

const addMovie = movieInfo => new Movie(movieInfo).save();

const getAllMovies = () => Movie.find();

module.exports = {
  addMovie,
  getAllMovies,
}



