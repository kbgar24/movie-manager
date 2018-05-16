const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/movie_database'

mongoose.connect(mongoDB)
  .then(() => { console.log('✅  Successfully connected to Mongodb'); })
  .catch((e) => { console.error('⚠️ Error connected to MongoDB: ', e); });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  rating: String,
  year: String,
  actors: [],
  lastUpdatedAt: Date,
});

const Movie = mongoose.model('movie', movieSchema);

module.exports = {
  db,
  Movie
};
