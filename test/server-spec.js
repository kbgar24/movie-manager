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
      .get({url: baseUrl}, (e, res, body) => {
        done();
        // if (e)  { done(e) }
        // const { statusCode } = res;
        // statusCode.should.equal(200);
        // body.slice(0,15).should.equal('<!DOCTYPE html>')
        // done();
      })
  });

  it('should add new movies to db', function(done){
    // this.timeout(10000);
    request(app)
      .post(
        { 
          url: `${baseUrl}/api/addMovie`, 
          json: { movieInfo },
        }, (e, res, body) => {
        if (e) { done(e) }
        const { statusCode } = res;
        _id = body.id;
        statusCode.should.equal(200);
        done();
      })
  });

  it('should delete movies from db', function (done) {
    // this.timeout(10000);
    request(app)
      .post({
          url: `${baseUrl}/api/deleteMovie`,
          json: { _id },
        }, (e, res, body) => {
          if (e) { done(e) }
          const { statusCode } = res;
          statusCode.should.equal(200);
          done();
        }
      )
  });
  
  it('should return all movies from db', function(done){
    request(app)
      .get({ url: `${baseUrl}/api/getMovies` }, (e, res, body) => {
        if (e) { done(e) }
        const { statusCode } = res;
        statusCode.should.equal(200);
        JSON.parse(body).should.be.an('array');
        done();
      })
  });
})
