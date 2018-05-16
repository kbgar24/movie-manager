const { Movie } = require('../db');

const addMovie = movieInfo => new Movie(movieInfo).save();

module.exports = {
  addMovie
}



