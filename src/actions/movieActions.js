import axios from 'axios';

export const addMovie = movieInfo => ({
  type: 'ADD_MOVIE',
  payload: movieInfo,
});

export const deleteMovie = movieId => ({
  type: 'DELETE_MOVIE',
  payload: movieId,
});

export const setMovies = movies => ({
  type: 'SET_MOVIES',
  payload: movies,
});


export const getMovies = () => (
  dispatch => (
    axios.get('/api/getMovies')
    .then(({data}) => {
      dispatch(setMovies(data))
    })
    .catch((e) => { console.error(e) })
  )
);