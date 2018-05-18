const should = require('chai').should();
// const db = require('../db');
const Movie = require('../db/models/movie');
const queries = require('../db/queries');

const movieInfo = {
  actor: 'No Name',
  title: 'Bad Title',
  genre: 'horror',
}

beforeEach(function(done) {
  Movie.remove({}, (err) => {
    if (err) { done(err) }
    done();
  })
})

xdescribe('Mongo DB', function () {
  
  it('should add movies to db!', function(done){
    this.timeout(10000)
    queries.addMovie(movieInfo)
    .then(() => {
      Movie.find({}, (err, results) => {
        if (err) { done(err) }
        results.length.should.equal(1);
        done();
      })
    })
    .catch((e) => done(e))
  });


  it('should delete movies from db!', function(done){
    Movie.create(movieInfo, (err, res) => {
      if (err) { done(err) }
      const id = res._id;
      queries.deleteMovie(id)
      .then(() => {
        Movie.find({}, (err, results) => {
          if (err) { done(err) }
          results.length.should.equal(0);
          done();
        })
      })
      .catch((e) => { done(e) })
    })
  });
  
  it('should return all movies from db!', function(done){
    Movie.insertMany([movieInfo, movieInfo, movieInfo], (err, res) => {
      if (err) { done(err) }
      queries.getAllMovies()
      .then((results) => {
        results.length.should.equal(3);
        done();
      })
      .catch((e) => done(e))
    })
  });

})