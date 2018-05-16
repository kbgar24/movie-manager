const { Movie } = require('../db');

const addMovie = ({ title, genre, rating, year, actors }) => {
  new Movie({title, genre, rating, year, actors}).save();
};

module.exports = {
  addMovie
}



