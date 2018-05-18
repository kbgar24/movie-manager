const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const db = require('../db');
const queries = require('../db/queries/movieQueries');

const app = express();

const oldLogger = console.log;

const DIST_DIR = path.join(__dirname, "../dist");

const test = process.env.NODE_ENV === 'test'

const port = test ? 3001 : process.env.PORT ? process.env.PORT : 3000;

/*-------- Express Middleware --------- */
!test && app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(express.static(DIST_DIR));


/*-------- Root Route --------- */
app.get('/', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});


/*-------- API Routes --------- */
app.post('/api/addMovie', (req, res) => {
  const { movieInfo } = req.body;
  queries.addMovie(movieInfo)
  .then(({id}) => {
    res.send({id}).end();
  })
  .catch((e) => {
    console.error('Error saving movie to DB: ', e);
    res.sendStatus(500).end();
  })
});

app.post('/api/deleteMovie', (req, res) => {
  const { _id } = req.body;
  queries.deleteMovie(_id)
  .then((response) => {
    res.end();
  })
  .catch((e) => {
    console.error('Error deleting movie from DB: ', e);
    res.sendStatus(500).end();
  })
});

app.get('/api/getMovies', (req, res) => {
  queries.getAllMovies()
  .then((movies) => {
    res.send(movies)
  })
  .catch((e) => {
    console.error('Error getting all movies: ', e);
    res.sendStatus(500).end();
  })
})


/*-------- Fallback Route --------- */
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});


/*-------- Server Initialization --------- */
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;

