const chai = require('chai')
const should = require('chai').should();
const app = require('../server');
const request = require('supertest');

const baseUrl = 'http://127.0.0.1:3001'

const movieInfo = {
  title: 'FAKE_MOVIE_TITLE',
};

// const server = app.listen('3001');

// request(app);

// console.log('server: ', server);

describe('Node/Express Server', function(){

  let _id;

  it('should return index.html from root route', function(done){
    // this.timeout(30000)
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        res.text.slice(0,15).should.equal('<!DOCTYPE html>')
        done();
      })
  });

  it('should add new movies to db', function(done){
    request(app)
      .post('/api/addMovie') 
      .send({ movieInfo })
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, {body}) => {
        if (err) return done(err);
        _id = body.id;
        done();
      });
  });

  it('should delete movies from db', function (done) {
    request(app)
      .post('/api/deleteMovie')
      .send({ _id })
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, { body }) => {
        if (err) return done(err);
        done();
      })
  });
  
  it('should return all movies from db', function(done){
    request(app)
      .get('/api/getMovies')
      .expect(200)
      .end((err, {body}) => {
        if (err) return done(err);
        body.should.be.an('array');
        done();
      })
  });
})
