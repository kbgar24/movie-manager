const express = require('express');
const path = require('path');
const morgan = require('morgan');
const queries = require('../db/queries');
const bodyParser = require('body-parser');
const db = require('../db');

const app = express();

const DIST_DIR = path.join(__dirname, "../dist");
const CLIENT_DIR = path.join(__dirname, "../src/");
const port = process.env.PORT || 3001;

app.use(bodyParser.json())
app.use(express.static(DIST_DIR));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});


app.post('/api/addMovie', (req, res) => {
  const { movieInfo } = req.body;
  console.log('movieInfo: ', movieInfo);
  queries.addMovie(movieInfo)
  .then(({id}) => {
    console.log('Successfully saved new movie to DB');
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
    console.log('Successfully deleted movie from DB!');
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

app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
