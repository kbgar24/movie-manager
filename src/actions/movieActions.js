import axios from 'axios';

export const addMovie = movieInfo => (
  dispatch => (
    axios.post('api/addMovie', { movieInfo })
    .then(() => {
      dispatch(getMovies())
    })
    .catch((e) => { console.error(e) })
  )
);


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
    .then((res) => {
      console.log('res: ', res);
      dispatch(setMovies(res.data))
    })
    .catch((e) => { console.error(e) })
  )
);