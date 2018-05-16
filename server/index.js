const express = require('express');
const path = require('path');
const morgan = require('morgan');
const db = require('../db');
const queries = require('../db/queries');
const bodyParser = require('body-parser');

const app = express();

const DIST_DIR = path.join(__dirname, "../dist");
const CLIENT_DIR = path.join(__dirname, "../src/");
const port = process.env.PORT || 3001;

app.use(bodyParser.json())
app.use(express.static(DIST_DIR));
app.use(morgan('dev'));


app.post('/api/addMovie', (req, res) => {
  const { movieInfo } = req.body;
  console.log('movieInfo: ', movieInfo);
  queries.addMovie(movieInfo)
  .then((response) => {
    console.log('Successfully saved new movie to DB');
    res.end();
  })
  .catch((e) => {
    console.error('Error saving movie to DB: ', e);
    res.sendStatus(500).end();
  })
});

app.get('/api/getAllMovies', (req, res) => {
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
