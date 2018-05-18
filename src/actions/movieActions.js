import axios from 'axios';

const movieInfoUrl = title => {
  const formattedTitle = encodeURI(title);
  return `https://api.themoviedb.org/3/search/movie?api_key=c9778e67cdb7cdefca5d255f2c83edee&language=en-US&query=${formattedTitle}&page=1&include_adult=false`
}

export const savingMovie = () => ({ type: 'SAVING_MOVIE' })

export const savedMovie = (hasError) => ({
  type: 'SAVED_MOVIE',
  payload: hasError,
})

export const clearSaveError = () => ({ type: 'CLEAR_SAVE_ERROR' });

export const addMovie = movieInfo => (
  dispatch => (
    axios.get(movieInfoUrl(movieInfo.title))
    .then(({data: {results} = []}) => {
      const url = results.length ? results[0].poster_path : false;
      const imageUrl = url ? `https://image.tmdb.org/t/p/w500/${url}` : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCsFWzEwvvX8O-cj-5nog56SWamUvzepM_FIoV5fqO90E8i8eejQ'
      const finalMovieInfo = {
        ...movieInfo,
        imageUrl,
      }
      dispatch(savingMovie())
      axios.post('/api/addMovie', { movieInfo: finalMovieInfo })
      .then(() => {
        dispatch(savedMovie())
        dispatch(getMovies())
      })
      .catch((e) => { 
        console.error(e) 
        dispatch(savedMovie(true))
      })
    })
    .catch((e) => {
      console.error(e)
    })
  )
);


export const deleteMovie = _id => (
  dispatch => (
    axios.post('/api/deleteMovie', { _id })
    .then(() => {
      dispatch(getMovies())
    })
    .catch((e) => { console.error(e) })
  )
);

export const setMovies = movies => ({
  type: 'SET_MOVIES',
  payload: movies,
});

export const sortBy = (criteria, order) => ({
  type: `SORT_BY_${criteria}`,
  payload: order,
})

export const getMovies = () => (
  dispatch => (
    axios.get('/api/getMovies')
    .then((res) => {
      dispatch(setMovies(res.data))
    })
    .catch((e) => { console.error(e) })
  )
);