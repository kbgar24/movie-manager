import { connect } from 'react-redux';
import MovieForm from '../components/movieForm';
import { addMovie, clearSaveError } from '../actions/movieActions'

const mapDispatchToProps = dispatch => ({
  addMovie: movieInfo => dispatch(addMovie(movieInfo)),
  clearSaveError: () => dispatch(clearSaveError()),
});

export default connect(null, mapDispatchToProps)(MovieForm);