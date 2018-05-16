import { connect } from 'react-redux';
import MovieForm from '../components/movieForm';
import { addMovie } from '../actions/movieActions'

const mapDispatchToProps = dispatch => ({
  addMovie: movieInfo => dispatch(addMovie(movieInfo)),
});

export default connect(mapDispatchToProps)(MovieForm);