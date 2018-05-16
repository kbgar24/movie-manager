const mongoose = require('mongoose');

const URI = 'mongodb://kindHealth:kindHealth@ds259325.mlab.com:59325/movies'

mongoose.connect(URI)
  .then(() => { console.log('✅  Successfully connected to Mongodb'); })
  .catch((e) => { console.error('⚠️ Error connected to MongoDB: ', e); });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

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

const Movie = mongoose.model('movie', movieSchema);

module.exports = {
  db,
  Movie
};
