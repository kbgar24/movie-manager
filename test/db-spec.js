// const URI_TEST = 'mongodb://kindHealth:kindHealth@ds137207.mlab.com:37207/movies-test';
// // const request = require('request');
// const expect = require('chai').expect;
// // const chai = require('chai');
// // const sinon = require('sinon');
// // const Movie = require('../db/models/movie');
// // const queries = require('../db/queries');
// const mongoose = require('mongoose');

// mongoose.connect(URI_TEST)
//   .then(() => { console.log('✅  Successfully connected to Mongodb'); })
//   .catch((e) => { console.error('⚠️ Error connected to MongoDB: ', e); });

// const db = mongoose.connection;

// const movieInfo = {
//   actor: 'No Name',
//   title: 'Bad Title',
//   genre: 'horror',
// }

// describe("Movie Model Tests", function () {

//   before((done) => {
//     db.connect(URI_TEST, done)
//   });

//   // beforeEach(function (done) {
//   //   db.drop(function (err) {
//   //     if (err) return done(err)
//   //     db.fixtures(fixtures, done)
//   //   })
//   // })

//   it("should retrieve all movies from db", function (done) {
//     db.createCollection(movies, (err, collection) => {
//       if (err) return err;
//       collection.insert(movieInfo)
//     })
//     queries.addMovies(movieInfo);
//     Movie.find({}, (err, movies) => {
//       if (err) return err;
//       console.log('movies');
//     })
//   });

  
//   // });
// });

describe('Mongo DB', function () {
  it('should add movies to db');
  it('should delete movies from db');
  it('should return all movies from db');

})