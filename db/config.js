const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  rating: String,
  year: String,
  mpaa: String,
  actors: [],
  imageUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const MovieModel = mongoose.model('Movie', MovieSchema);

module.exports = MovieModel;