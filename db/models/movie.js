const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
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

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;